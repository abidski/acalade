import TabsLayout from "@/app/classes/[classId]/components/tabs";
export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <TabsLayout />
      <div className="m-8">{children}</div>
    </div>
  );
}
