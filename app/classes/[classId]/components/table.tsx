"use client";
import { CardsSection } from "@/app/classes/components/card-section";

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
import { useState } from "react";
import { createClient } from "@/lib/supabase/client";

export default function NotesTable({ resources }: { resources: [] | null }) {
  const [openingId, setOpeningId] = useState<string | null>(null);

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
          </TableRow>
        ))}
      </TableBody>
      <TableFooter></TableFooter>
    </Table>
  );
}
