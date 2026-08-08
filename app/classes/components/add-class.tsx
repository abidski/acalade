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

export function AddClassButton() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [term, setTerm] = useState("");
  const [year, setYear] = useState("");
  async function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <Dialog>
      <form onSubmit={handleSubmit}>
        <DialogTrigger
          render={<Button variant="outline">+ Add Class</Button>}
        />
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>Add Class</DialogTitle>
            <DialogDescription>
              Add a class. Click save when you&apos;re done.
            </DialogDescription>
          </DialogHeader>
          <FieldGroup>
            <Field>
              <Label htmlFor="name">Class Name</Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                defaultValue="COMP 352"
                required
              />
            </Field>
            <Field>
              <Label htmlFor="term">Term</Label>
              <Input
                id="term"
                value={term}
                onChange={(e) => setTerm(e.target.value)}
                defaultValue="Fall"
                required
              />
            </Field>
            <Field>
              <Label htmlFor="year">Year</Label>
              <Input
                id="year"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                type="number"
                defaultValue="2026"
                required
              />
            </Field>
          </FieldGroup>
          <DialogFooter>
            <DialogClose render={<Button variant="outline">Cancel</Button>} />
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
