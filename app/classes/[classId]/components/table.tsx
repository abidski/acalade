"use client";
import { CardsSection } from "@/app/classes/components/card-section";

import { Trash2 } from "lucide-react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";

export default function NotesTable({ resources }: { resources: [] | null }) {
  const [openingId, setOpeningId] = useState<string | null>(null);
  const router = useRouter();

  async function handleDelete(element) {
    const supabase = createClient();

    if (element.type === "pdf") {
      await supabase.storage.from("resources").remove([element.url]);
    }

    const { error } = await supabase
      .from("resources")
      .delete()
      .eq("id", element.id);

    if (error) {
      alert("Couldn't delete this resource.");
      return;
    }

    router.refresh();
  }
  async function handleClick(resource) {
    if (resource.type !== "pdf") {
      window.open(resource.url, "_blank");
      return;
    }
    setOpeningId(resource.id);
    const supabase = createClient();
    const { data, error } = await supabase.storage
      .from("resources")
      .createSignedUrl(resource.url, 60 * 60);

    setOpeningId(null);

    if (error || !data?.signedUrl) {
      alert("Couldn't open this file. Please try again.");
      return;
    }

    window.open(data.signedUrl, "_blank");
  }
  if (!resources || resources.length === 0) {
    return (
      <p className="text-muted-foreground">
        No resources yet. Add your first one to get started.
      </p>
    );
  }
  return (
    <Table>
      <TableCaption>A list of your resources.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="">Title</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Updated At</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {resources.map((element) => (
          <TableRow onClick={() => handleClick(element)} key={element.id}>
            <TableCell className="font-medium">{element.title}</TableCell>
            <TableCell>{element.type}</TableCell>
            <TableCell>{element.updated_at}</TableCell>
            <TableCell onClick={(e) => e.stopPropagation()}>
              <AlertDialog>
                <AlertDialogTrigger
                  render={
                    <Button
                      variant="outline"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Trash2 />
                    </Button>
                  }
                />
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      Are you absolutely sure?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      This action cannot be undone. This will permanently delete
                      the resource from our servers.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={() => handleDelete(element)}>
                      Delete
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter></TableFooter>
    </Table>
  );
}
