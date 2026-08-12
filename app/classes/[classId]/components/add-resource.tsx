"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import DropZone from "@/app/classes/[classId]/components/drop-zone";
import { detectResourceType } from "@/lib/detect-resource-type";

export function AddResourceButton({ classId }: { classId: string }) {
  const [file, setFile] = useState<File | null>(null);
  const [link, setLink] = useState("");
  const [open, setOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function getTitle(url: string): Promise<string | null> {
    const detectedType = detectResourceType(url);
    try {
      if (detectedType === "youtube") {
        const res = await fetch(
          `https://www.youtube.com/oembed?url=${encodeURIComponent(url)}&format=json`,
        );
        if (res.ok) {
          const data = await res.json();
          return data.title;
        }
      } else {
        const res = await fetch("/api/fetch-title", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ url }),
        });
        const data = await res.json();
        return data.title;
      }
    } catch {
      return null;
    }
    return null;
  }

  async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    setError(null);
    setLoading(true);

    if (!file && link.length === 0) {
      setError("Please either chose a PDF or Link.");
      setLoading(false);
      setFile(null);
      setLink("");
      return;
    }

    if (file && link.length > 0) {
      setError("Please either chose a PDF or Link you cannot upload both.");
      setLoading(false);
      setFile(null);
      setLink("");
      return;
    }

    const supabase = createClient();

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      setError("You must be logged in");
      setLoading(false);
      setFile(null);
      setLink("");
      return;
    }

    if (file) {
      const filePath = `${user.id}/${classId}/${Date.now()}-${file.name}`;
      const { error: uploadError } = await supabase.storage
        .from("resources")
        .upload(filePath, file);

      if (uploadError) {
        console.log("upload eroor");
        setError(uploadError.message);
        setLoading(false);
        setFile(null);
        setLink("");
        return;
      }

      const { error: insertError } = await supabase.from("resources").insert({
        class_id: classId,
        title: file.name.replace(/\.pdf$/i, ""),
        url: filePath, // raw path, not a signed URL
        type: "pdf",
      });
      setLoading(false);

      if (insertError) {
        console.log("inset Error");
        setError(insertError.message);
        setFile(null);
        setLink("");
        return;
      }
    } else {
      const type = detectResourceType(link);
      const title = await getTitle(link);
      const { error: insertError } = await supabase.from("resources").insert({
        class_id: classId,
        title: title ?? link,
        url: link, // raw path, not a signed URL
        type,
      });

      setLoading(false);

      if (insertError) {
        setError(insertError.message);
        return;
      }
    }
    setFile(null);
    setLink("");
    setLoading(false);
    setOpen(false);
    router.refresh();
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger render={<Button variant="outline">+ Add Class</Button>} />
      <DialogContent className="sm:max-w-sm">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Add Resource</DialogTitle>
            <DialogDescription>
              Add a resource. Click save when you&apos;re done.
            </DialogDescription>
          </DialogHeader>
          <FieldGroup>
            <Field>
              <DropZone
                link={link}
                setLink={setLink}
                file={file}
                setFile={setFile}
              />
            </Field>
          </FieldGroup>
          {error && (
            <p className="text-sm text-destructive mb-8 text-center">{error}</p>
          )}
          <DialogFooter>
            <DialogClose render={<Button variant="outline">Cancel</Button>} />
            <Button type="submit" disabled={loading}>
              {loading ? "Saving..." : "Save changes"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
