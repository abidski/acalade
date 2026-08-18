import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { createClient } from "@/lib/supabase/server";
import { AppSidebar } from "./components/app-sidebar";

export default async function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  /*
  const supabase = await createClient();
  const { data } = await supabase.from("classes").select("*");
  */
  return (
    <SidebarProvider>
      {/*<AppSidebar classes={data} />*/}
      <SidebarTrigger />
      <main className="flex-1 overflow-hidden p-8">{children}</main>
    </SidebarProvider>
  );
}
