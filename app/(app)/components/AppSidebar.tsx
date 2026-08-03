import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
    SidebarRail
} from "@/components/ui/sidebar"

export function AppSidebar() {

    // This is sample data.
    const data = {
        navMain: [
            {
                title: "Getting Started",
                url: "#",
                items: [
                    {
                        title: "Installation",
                        url: "#",
                    },
                    {
                        title: "Project Structure",
                        url: "#",
                    },
                ],
            },
            {
                title: "Build Your Application",
                url: "#",
                items: [
                    {
                        title: "Routing",
                        url: "#",
                    },
                    {
                        title: "Data Fetching",
                        url: "#",
                        isActive: true,
                    },
                    {
                        title: "Rendering",
                        url: "#",
                    },
                    {
                        title: "Caching",
                        url: "#",
                    },
                    {
                        title: "Styling",
                        url: "#",
                    },
                    {
                        title: "Optimizing",
                        url: "#",
                    },
                    {
                        title: "Configuring",
                        url: "#",
                    },
                    {
                        title: "Testing",
                        url: "#",
                    },
                    {
                        title: "Authentication",
                        url: "#",
                    },
                    {
                        title: "Deploying",
                        url: "#",
                    },
                    {
                        title: "Upgrading",
                        url: "#",
                    },
                    {
                        title: "Examples",
                        url: "#",
                    },
                ],
            },
            {
                title: "API Reference",
                url: "#",
                items: [
                    {
                        title: "Components",
                        url: "#",
                    },
                    {
                        title: "File Conventions",
                        url: "#",
                    },
                    {
                        title: "Functions",
                        url: "#",
                    },
                    {
                        title: "next.config.js Options",
                        url: "#",
                    },
                    {
                        title: "CLI",
                        url: "#",
                    },
                    {
                        title: "Edge Runtime",
                        url: "#",
                    },
                ],
            },
            {
                title: "Architecture",
                url: "#",
                items: [
                    {
                        title: "Accessibility",
                        url: "#",
                    },
                    {
                        title: "Fast Refresh",
                        url: "#",
                    },
                    {
                        title: "Next.js Compiler",
                        url: "#",
                    },
                    {
                        title: "Supported Browsers",
                        url: "#",
                    },
                    {
                        title: "Turbopack",
                        url: "#",
                    },
                ],
            },
            {
                title: "Community",
                url: "#",
                items: [
                    {
                        title: "Contribution Guide",
                        url: "#",
                    },
                ],
            },
        ],
    }
    return (
        <Sidebar>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarMenu>
                        {data.navMain.map((item) => (
                            <SidebarMenuItem key={item.title}>
                                <SidebarMenuButton className="font-medium" render={<a href={item.url}>{item.title}</a>}>
                                </SidebarMenuButton>
                                {item.items?.length ? (
                                    <SidebarMenuSub>
                                        {item.items.map((item) => (
                                            <SidebarMenuSubItem key={item.title}>
                                                <SidebarMenuSubButton className="font-normal"
                                                                      render={<a href={item.url}>{item.title}</a>}
                                                                      isActive={item.isActive}>
                                                </SidebarMenuSubButton>
                                            </SidebarMenuSubItem>
                                        ))}
                                    </SidebarMenuSub>
                                ) : null}
                            </SidebarMenuItem>
                        ))}
                    </SidebarMenu>
                </SidebarGroup>
            </SidebarContent>
            <SidebarRail/>
        </Sidebar>
    )
}