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
          title: "View Media",
          url: "#",
          desc: "To view media, press the media button, which is at the bottom right.",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const [selectedItem, setSelectedItem] = React.useState<SidebarItem | null>(null);

  return (
    <Sidebar {...props}>
      <SidebarHeader className="font-bold text-[30px]">MODEL NAME</SidebarHeader>
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
                <CollapsibleTrigger>
                  {item.title}{" "}
                  <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
                </CollapsibleTrigger>
              </SidebarGroupLabel>
              <CollapsibleContent>
                <SidebarGroupContent>
                  <SidebarMenu>
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


// import * as React from "react"
// import { ChevronRight } from "lucide-react"
// import {
//   Collapsible,
//   CollapsibleContent,
//   CollapsibleTrigger,
// } from "../ui/collapsible"
// import {
//   Sidebar,
//   SidebarContent,
//   SidebarGroup,
//   SidebarGroupContent,
//   SidebarGroupLabel,
//   SidebarHeader,
//   SidebarMenu,
//   SidebarMenuButton,
//   SidebarMenuItem,
//   SidebarRail,
// } from "@/components/ui/sidebar"
// import {
//   Sheet,
//   SheetContent,
//   SheetDescription,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
// } from "@/components/ui/sheet"

// // This is sample data.
// export const data = {
//   navMain: [
//     {
//       title: "Features",
//       url: "#",
//       items: [
//         {
//           title: "Zoom",
//           url: "#",
//           description: "Adjust the zoom level of your viewport"
//         },
//         {
//           title: "Brightness",
//           url: "#",
//           description: "Control the brightness settings of your display"
//         },
//       ],
//     },
//   ],
// }

// export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
//   return (
//     <Sidebar {...props}>
//       <SidebarHeader className="font-bold text-[30px]"> MODEL NAME</SidebarHeader>
//       <SidebarContent className="gap-0">
//         {/* We create a collapsible SidebarGroup for each parent. */}
//         {data.navMain.map((group) => (
//           <Collapsible
//             key={group.title}
//             title={group.title}
//             defaultOpen
//             className="group/collapsible"
//           >
//             <SidebarGroup>
//               <SidebarGroupLabel
//                 asChild
//                 className="group/label text-sm text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
//               >
//                 <CollapsibleTrigger>
//                   {group.title}{" "}
//                   <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
//                 </CollapsibleTrigger>
//               </SidebarGroupLabel>
//               <CollapsibleContent>
//                 <SidebarGroupContent>
//                   <SidebarMenu>
//                     {group.items.map((item) => (
//                       <SidebarMenuItem key={item.title}>
//                         {/* Each menu item has its own Sheet component */}
//                         <Sheet>
//                           <SheetTrigger asChild>
//                             <SidebarMenuButton>
//                               {item.title}
//                             </SidebarMenuButton>
//                           </SheetTrigger>
//                           <SheetContent side="right">
//                             <SheetHeader>
//                               <SheetTitle>{item.title}</SheetTitle>
//                               <SheetDescription>
//                                 {item.description || "Configure settings for this feature"}
//                               </SheetDescription>
//                             </SheetHeader>
//                             {/* Add your sheet content here */}
//                             <div className="py-4">
//                               Content for {item.title} goes here.
//                             </div>
//                           </SheetContent>
//                         </Sheet>
//                       </SidebarMenuItem>
//                     ))}
//                   </SidebarMenu>
//                 </SidebarGroupContent>
//               </CollapsibleContent>
//             </SidebarGroup>
//           </Collapsible>
//         ))}
//       </SidebarContent>
//       <SidebarRail />
//     </Sidebar>
//   )
// }