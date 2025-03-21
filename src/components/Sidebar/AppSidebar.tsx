// import * as React from "react"
// import { ChevronRight } from "lucide-react"
// // import { useSidebar } from "@/components/ui/sidebar"
// // import { SearchForm } from "./SearchForm"
// // import { VersionSwitcher } from "./VersionSwitcher"
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
// //import { SheetTrigger } from "../ui/sheet"

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
//         },
//         {
//           title: "Brightness",
//           url: "#",
//         },
//       ],
//     },
//     // {
//     //   title: "Building Your Application",
//     //   url: "#",
//     //   items: [
//     //     {
//     //       title: "Routing",
//     //       url: "#",
//     //     },
//     //     {
//     //       title: "Data Fetching",
//     //       url: "#",
//     //     //   isActive: true,
//     //     },
//     //   ],
//     // },
//   ],
// }



// export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
//   return (
//     <Sidebar {...props}>
//       <SidebarHeader className="font-bold text-[30px]"> MODEL NAME
//         {/* <VersionSwitcher
//           versions={data.versions}
//           defaultVersion={data.versions[0]}
//         /> */}
//         {/* <SearchForm /> */}
//       </SidebarHeader>
//       <SidebarContent className="gap-0">
//         {/* We create a collapsible SidebarGroup for each parent. */}
//         {data.navMain.map((item) => (
//           <Collapsible
//             key={item.title}
//             title={item.title}
//             defaultOpen
//             className="group/collapsible"
//           >
//             <SidebarGroup>
//               <SidebarGroupLabel
//                 asChild
//                 className="group/label text-sm text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
//               >
//                 <CollapsibleTrigger>
//                   {item.title}{" "}
//                   <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
//                 </CollapsibleTrigger>
//               </SidebarGroupLabel>
//               <CollapsibleContent>
//                 <SidebarGroupContent>
//                   <SidebarMenu>
//                     {item.items.map((item) => (
//                       <SidebarMenuItem key={item.title}>
//                         <SidebarMenuButton asChild 
//                         // isActive={item.isActive}
//                         >
//                           <a href={item.url}>{item.title}</a>
//                         </SidebarMenuButton>  
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
          title: "Media",
          url: "#",
          desc: "To view mdia, press button on bottom left",
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
                              onClick={() => {
                                setSelectedItem(subItem)
                                const feature = new CustomEvent("featureSelected",{
                                  detail:subItem
                                })
                                window.dispatchEvent(feature)
                              }}
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