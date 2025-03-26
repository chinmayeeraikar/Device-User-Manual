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
    source: string;
  } | null;
}

export const SheetPopUp = ({ trigger, selectedItem }: SheetPopUpProps) => {
  return (
    <Sheet>
      <SheetTrigger asChild>{trigger}</SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="text-2xl font-bold">
            {selectedItem?.title}
          </SheetTitle>
          <SheetDescription className="pt-4">
            {selectedItem?.desc}
          </SheetDescription>
        </SheetHeader>

        <video width="auto" height="500" controls>
          <source src={selectedItem?.source} type="video/mp4" />
        </video>
      </SheetContent>
    </Sheet>
  );

};

export default SheetPopUp;
