import { AppSidebar } from "./AppSidebar"
// import {
//   Breadcrumb,
//   BreadcrumbItem,
//   BreadcrumbLink,
//   BreadcrumbList,
//   BreadcrumbPage,
//   BreadcrumbSeparator,
// } from "../ui/breadcrumb"
// import { Separator } from "@/components/ui/separator"
import {
  // SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { SheetPage } from "./SheetPage"

export default function SidebarPage() {
  return (
    <>
    <SidebarProvider className="bg-red">
      <AppSidebar />
      <SidebarTrigger className="-ml-1" />
    </SidebarProvider>
    <SheetPage />
    </>
  )
}
