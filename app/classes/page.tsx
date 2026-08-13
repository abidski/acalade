import { CardsSection } from "@/app/classes/components/card-section";
import { AddClassButton } from "./components/add-class";
import { createClient } from "@/lib/supabase/server";

export default function Dashboard() {
  return (
    <>
      <div className="my-8">
        <AddClassButton />
      </div>
      <CardsSection />
    </>
  );
}
