import NotesTable from "@/app/classes/[classId]/components/table";
import { AddResourceButton } from "@/app/classes/[classId]/components/add-resource";
import { createClient } from "@/lib/supabase/server";

export default async function Dashboard({
  params,
}: {
  params: Promise<{ classId: string }>;
}) {
  const { classId } = await params;

  return (
    <div>
      <AddResourceButton classId={classId} />
      <NotesTable />{" "}
    </div>
  );
}
