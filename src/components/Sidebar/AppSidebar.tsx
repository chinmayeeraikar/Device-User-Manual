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

// interface SidebarItem {
//   title: string;
//   url: string;
//   desc: string;
//   source: string;
// }

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
            // "../../../assets/V1.mp4.mov",
            "../../../assets/blackrect.jpg"
        },
        {
          title: "Media",
          url: "#",
          desc: "To view media, press button on bottom left (▶️). To navigate through the gallery, press the side keys.",
          source:
            // "../../../assets/V1.mp4.mov",
            "../../../assets/blackrect.jpg"
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
  const [isSheetOpen, setIsSheetOpen] = useState(false);

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
    setIsSheetOpen(false);
    setSelectedItem(null);
  };

  return (
    <Sidebar {...props}>
      {isSheetOpen && (
        <div
          className="absolute inset-0 z-50 bg-transparent"
          onClick={(e) => e.preventDefault()}
        />
      )}
      <SidebarHeader className="font-bold text-[30px] bg-[#1f5156] !p-3 text-white">
        Camera User Manual
      </SidebarHeader>
      <SidebarContent className="gap-0 !p-3 bg-[#1f5156]">
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
                  <SidebarMenu className="text-white-100 !p-3">
                    {item.items.map((subItem) => (
                      <SidebarMenuItem key={subItem.title}>
                        <SheetPopUp
                          trigger={
                            <SidebarMenuButton
                              asChild
                              onClick={() => {
                                setSelectedItem(subItem);
                                setIsSheetOpen(true)
                                const feature = new CustomEvent(
                                  "featureSelected",
                                  {
                                    detail: subItem,
                                  }
                                );
                                window.dispatchEvent(feature);
                              }}
                              className="font-normal"
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
                          onClose={handleSheetClose}
                          setIsOpen={setIsSheetOpen}
                        />
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </CollapsibleContent>
            </SidebarGroup>
          </Collapsible>
        ))}

        <div className="absolute bottom-1/6 text-stone-50">
          <p>Drag mouse to view model, press camera buttons to view their functions</p>
        </div>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
