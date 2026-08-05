"use client";
import NotesTable from "@/app/classes/[classId]/components/table";
import { useState } from "react";

import DropZone from "@/app/classes/[classId]/components/upload";
export default function Dashboard() {
  const [file, setFile] = useState<File | null>(null);
  const [errorCode, setErrorCode] = useState<number | null>(null);
  const [resumeText, setResumeText] = useState("");
  return (
    <div>
      <DropZone
        setResume={setFile}
        setResumeText={setResumeText}
        resumeText={resumeText}
      />
      <NotesTable />{" "}
    </div>
  );
}
