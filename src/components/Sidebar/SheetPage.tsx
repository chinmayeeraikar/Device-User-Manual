import React, { useEffect, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import ZoomLiveAction from "../Features/ZoomLiveAction";
import MediaGallery from "../Features/MediaGallery";

interface SheetPopUpProps {
  trigger: React.ReactNode;
  selectedItem: {
    title: string;
    desc: string;
    source: string;
  } | null;
  sliderComponent?: React.ReactNode;
  onClose?: () => void;
  setIsOpen: (open: boolean) => void;
}

export const SheetPopUp = ({
  trigger,
  selectedItem,
  onClose,
  sliderComponent,
  setIsOpen,
}: SheetPopUpProps) => {
  const [isOpenLocal, setIsOpenLocal] = useState(false);
  const [triggerElement, setTriggerElement] = useState<string | null>(null);
  const [showMedia, setShowMedia] = useState(false);
  const [mediaDirection, setMediaDirection] = useState<"Left" | "Right" | null>(null);
  const [mediaChangeCounter, setMediaChangeCounter] = useState(0);

  useEffect(() => {
    const handleCustomEvent = (event: Event) => {
      const customEvent = event as CustomEvent;
      switch (event.type) {
        case "ZOOMDemo":
          setTriggerElement("ZOOMDemo");
          break;
        case "ShowMedia":
          setShowMedia(!showMedia);
          setTriggerElement("ChangeMedia");
          setMediaDirection(showMedia ? null : "Right");
          break;
        case "ChangeMedia":
          if (customEvent.detail === "Left" || customEvent.detail === "Right") {
            setMediaDirection(customEvent.detail);
            setTriggerElement("ChangeMedia");
            setMediaChangeCounter((prev) => prev + 1);
          }
          break;
        default:
          break;
      }
    };

    window.addEventListener("ZOOMDemo", handleCustomEvent);
    window.addEventListener("ShowMedia", handleCustomEvent);
    window.addEventListener("ChangeMedia", handleCustomEvent);

    return () => {
      window.removeEventListener("ZOOMDemo", handleCustomEvent);
      window.removeEventListener("ShowMedia", handleCustomEvent);
      window.removeEventListener("ChangeMedia", handleCustomEvent);
    };
  }, [mediaChangeCounter, showMedia]);

  const handleOpenChange = (open: boolean) => {
    setIsOpenLocal(open);
    setIsOpen(open); // Sync with AppSidebar
    if (!open) {
      onClose?.();
      setTriggerElement(null);
      setShowMedia(false);
      setMediaDirection(null);
    }
  };

  const renderContentBasedOnTrigger = () => {
    switch (triggerElement) {
      case "ZOOMDemo":
        return <ZoomLiveAction />;
      case "ChangeMedia":
        return (
          <MediaGallery
            showMedia={showMedia}
            mediaDirection={mediaDirection}
            changeCounter={mediaChangeCounter}
          />
        );
      default:
        return <p>No dynamic content to show.</p>;
    }
  };

  return (
    <Sheet open={isOpenLocal} onOpenChange={handleOpenChange}>
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

        {sliderComponent && <div className="my-4">{sliderComponent}</div>}

        <div>{renderContentBasedOnTrigger()}</div>
      </SheetContent>
    </Sheet>
  );
};

export default SheetPopUp;