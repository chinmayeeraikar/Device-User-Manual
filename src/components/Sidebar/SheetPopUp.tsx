  import React, { useState } from "react";
  import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet";
import { Slider } from "@radix-ui/react-slider";

  interface SheetPopUpProps {
    trigger: React.ReactNode;
    selectedItem: {
      title: string;
      desc: string;
      source: string;
    } | null;
    sliderComponent? :React.ReactNode;
    onClose?: () => void; // Optional callback for when sheet closes
  }

  export const SheetPopUp = ({
    trigger,
    selectedItem,
    onClose,
    sliderComponent,
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
  
          {/* Add the slider component here if it exists */}
          {sliderComponent && (
            <div className="mt-4 mb-4">
              {sliderComponent}
            </div>
          )}
  
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