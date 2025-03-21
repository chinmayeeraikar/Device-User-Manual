import MyThreeScene from "@/threescene.tsx";
import { AppSidebar } from "../Sidebar/AppSidebar";
import { SidebarProvider, SidebarTrigger } from "../ui/sidebar";
import YourComponent from "../ButtonInfoPopUp.tsx";

export const Home = () => {
  return (
    <div>
      <div>
        <SidebarProvider className="absolute">
          <AppSidebar />
          <SidebarTrigger className="-ml-1 z-25" />
        </SidebarProvider>
      </div>
      <MyThreeScene />
      <YourComponent />
    </div>
  );
};
