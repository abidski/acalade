import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { Separator } from "@/components/ui/separator";

export async function CardsSection() {
  const supabase = await createClient();
  const { data } = await supabase.from("classes").select("*");

  const sorted = Object.groupBy(data, (cls) => cls.semester);

  return (
    <div className="flex flex-col gap-6">
      {Object.entries(sorted).map(([semester, classes]) => (
        <div key={semester} className="">
          <div className="mb-8">
            <div className="font-bold mb-2"> {semester}</div>
            <Separator />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {classes.map((element) => (
              <Link key={element.id} href={`/classes/${element.id}`}>
                <Card className="bg-muted p-8 flex flex-col text-center m-4">
                  <CardHeader>
                    <CardTitle className="">{element.name}</CardTitle>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
