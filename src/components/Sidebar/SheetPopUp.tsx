// import { Button } from "@/components/ui/button"
// //import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { data } from "./AppSidebar"
// import {
//   Sheet,
//   //SheetClose,
//   SheetContent,
//   SheetDescription,
//   //SheetFooter,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
// } from "@/components/ui/sheet"

// const sheetdata = {
//   navMain: [
//     {
//       title: "Zoom",
//       url: "#",
//       desc: "this is the zoom feature"
//     },
//     {
//       title: "Zoom",
//       url: "#",
//       desc: "this is the zoom feature"
//     },
//     {
//       title: "Zoom",
//       url: "#",
//       desc: "this is the zoom feature"
//     },
//     {
//       title: "Zoom",
//       url: "#",
//       desc: "this is the zoom feature"
//     }
//   ],
// }

// const SheetPopUp = () => {


//   return (
//     <Sheet>
//       {/* {data.navMain.map((item) => ()} */}

//       {data.navMain.map((item) => (
//         <SheetTrigger asChild>
//           <Button variant="outline">
//             {item.items.map((item) => (
//               <Label>
//                 {item.title}
//               </Label>))}
//           </Button>
//         </SheetTrigger>
//       ))}
//       <SheetContent>
//         {sheetdata.navMain.map((it) => (<SheetHeader>
//           <SheetTitle>{it.title}</SheetTitle>
//           <SheetDescription>{it.desc}
//           </SheetDescription>
//         </SheetHeader>))}
//       </SheetContent>
//     </Sheet>
//   )
// }

// export default SheetPopUp

import * as React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface SheetPopUpProps {
  trigger: React.ReactNode;
  selectedItem: {
    title: string;
    desc: string;
  } | null;
}

export const SheetPopUp = ({ trigger, selectedItem }: SheetPopUpProps) => {
  return (
    <Sheet>
      <SheetTrigger asChild>{trigger}</SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="text-2xl font-bold">{selectedItem?.title}</SheetTitle>
          <SheetDescription className="pt-4">{selectedItem?.desc}</SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};  

export default SheetPopUp;