import NotesTable from "@/app/classes/[classId]/components/table";
import { AddResourceButton } from "@/app/classes/[classId]/components/add-resource";
import { createClient } from "@/lib/supabase/server";

export default async function Dashboard({
  params,
}: {
  params: Promise<{ classId: string }>;
}) {
  const { classId } = await params;
  const supabase = await createClient();
  const { data: resources } = await supabase
    .from("resources")
    .select("*")
    .eq("class_id", classId)
    .order("created_at", { ascending: false });
  console.log(resources);

  return (
    <div>
      <AddResourceButton classId={classId} />
      <NotesTable resources={resources} />{" "}
    </div>
  );
}
