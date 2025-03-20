import * as React from "react";
import { ChevronRight } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import SheetPopUp from "./SheetPopUp"; // Import the SheetPopUp component

interface SidebarItem {
  title: string;
  url: string;
  desc: string;
}

// Sample data
export const data = {
  navMain: [
    {
      title: "Features",
      url: "#",
      items: [
        {
          title: "Zoom",
          url: "#",
          desc: "This is the zoom feature",
        },
        {
          title: "Brightness",
          url: "#",
          desc: "This is the brightness feature",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const [selectedItem, setSelectedItem] = React.useState<SidebarItem | null>(null);

  return (
    <Sidebar {...props}>
      <SidebarHeader className="font-bold text-[30px] text-green-100">MODEL NAME</SidebarHeader>
      <SidebarContent className="gap-0">
        {data.navMain.map((item) => (
          <Collapsible
            key={item.title}
            title={item.title}
            defaultOpen
            className="group/collapsible"
          >
            <SidebarGroup>
              <SidebarGroupLabel
                asChild
                className="group/label text-sm text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
              >
                <CollapsibleTrigger className="text-white">
                  {item.title}{" "}
                  <ChevronRight className="ml-auto text-green-100 transition-transform group-data-[state=open]/collapsible:rotate-90" />
                </CollapsibleTrigger>
              </SidebarGroupLabel>
              <CollapsibleContent>
                <SidebarGroupContent>
                  <SidebarMenu className="text-green-100">
                    {item.items.map((subItem) => (
                      <SidebarMenuItem key={subItem.title}>
                        <SheetPopUp
                          trigger={
                            <SidebarMenuButton
                              asChild
                              onClick={() => setSelectedItem(subItem)}
                            >
                              <Button variant="ghost" className="w-full justify-start">
                                {subItem.title}
                              </Button>
                            </SidebarMenuButton>
                          }
                          selectedItem={selectedItem}
                        />
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </CollapsibleContent>
            </SidebarGroup>
          </Collapsible>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}