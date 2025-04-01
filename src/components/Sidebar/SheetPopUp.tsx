  import React, { useState } from "react";
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
    onClose?: () => void; // Optional callback for when sheet closes
  }

  export const SheetPopUp = ({
    trigger,
    selectedItem,
    onClose,
  }: SheetPopUpProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenChange = (open: boolean) => {
      setIsOpen(open);

      if (!open) {
        console.log("Sheet was closed, now we can do something else!");
        // Call the optional onClose callback
        onClose?.();
      }
    };

    return (
      <Sheet open={isOpen} onOpenChange={handleOpenChange}>
        <SheetTrigger asChild>{trigger}</SheetTrigger>
        <SheetContent side="right" className="w-[400px] sm:w-[540px]">
          <SheetHeader>
            <SheetTitle className="text-2xl font-bold">
              {selectedItem?.title}
            </SheetTitle>
            <SheetDescription className="pt-4">
              {selectedItem?.desc}
            </SheetDescription>
          </SheetHeader>

          <div className="mt-6">
            <video width="100%" height="auto" controls className="rounded-lg">
              <source src={selectedItem?.source} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </SheetContent>
      </Sheet>
    );
  };

  export default SheetPopUp;
