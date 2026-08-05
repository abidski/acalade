import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
export default function TabsLayout() {
  return (
    <Tabs defaultValue="overview">
      <TabsList variant="line">
        <TabsTrigger value="all">All</TabsTrigger>
        <TabsTrigger value="videos">Videos</TabsTrigger>
        <TabsTrigger value="Sites">Sites</TabsTrigger>
        <TabsTrigger value="files">Files</TabsTrigger>
      </TabsList>
    </Tabs>
  );
}
