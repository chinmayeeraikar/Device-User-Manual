import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { componentsMap } from "../ComponentsMap"; // update with your actual path

interface SheetPopUpProps {
  trigger: React.ReactNode;
  selectedItem: {
    title: string;
    desc: string;
    source: string;
  } | null;
  onClose?: () => void;
}

export const SheetPopUp = ({
  trigger,
  selectedItem,
  onClose,
}: SheetPopUpProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (!open) onClose?.();
  };

  const ComponentName = selectedItem?.source;
  const ComponentToRender = ComponentName ? componentsMap[ComponentName] : null;

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
          {ComponentToRender ? (
            <ComponentToRender />
          ) : (
            <div className="text-muted-foreground text-sm">
              Could not load the demo.
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default SheetPopUp;
