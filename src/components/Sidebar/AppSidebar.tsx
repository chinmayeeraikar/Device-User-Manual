import React, { useState } from "react";
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
import { Slider } from "@/components/ui/slider";

interface SidebarItem {
  title: string;
  url: string;
  desc: string;
  source: string;
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
          desc: "To zoom in and out of view, rotate the rotary control to zoom. You can view demo by Dragging mouse on screen.",
          source:
            "../../../assets/V1.mp4.mov",
        },
        {
          title: "Media",
          url: "#",
          desc: "To view media, press button on bottom left",
          source:
            "../../../assets/V1.mp4.mov",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const [selectedItem, setSelectedItem] = useState<{
    title: string;
    desc: string;
    source: string;
  } | null>(null);

  const handleItemSelect = () => {
    setSelectedItem({
      title: "Sample Video",
      desc: "This is a description of the video",
      source: "/path/to/your/video.mp4",
    });
  };

  const handleSheetClose = () => {
    console.log("Sheet was closed, performing cleanup...");
    const feature = new CustomEvent(
      "popupclose",
      {
        detail: 'View',
      }
    );
    window.dispatchEvent(feature);

    setSelectedItem(null);
  };

  return (
    <Sidebar {...props}>
      <SidebarHeader className="font-bold text-[30px]  text-white">
        Camera User Manual
      </SidebarHeader>
      <SidebarContent className="gap-0">
        {data.navMain.map((item) => (
          <Collapsible
            key={item.title}
            title={item.title}
            defaultOpen={false}
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
                  <SidebarMenu className="text-white-100">
                    {item.items.map((subItem) => (
                      <SidebarMenuItem key={subItem.title}>
                        <SheetPopUp
                          trigger={
                            <SidebarMenuButton
                              asChild
                              onClick={() => {
                                setSelectedItem(subItem);
                                const feature = new CustomEvent(
                                  "featureSelected",
                                  {
                                    detail: subItem,
                                  }
                                );
                                window.dispatchEvent(feature);
                              }}
                            >
                              <Button
                                variant="ghost"
                                className="w-full justify-start"
                              >
                                {subItem.title}
                              </Button>
                            </SidebarMenuButton>
                          }
                          selectedItem={selectedItem}
                          sliderComponent={subItem.title === 'Zoom' ? <Slider /> : null}
                          onClose={handleSheetClose}
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
