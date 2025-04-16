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
      console.log(event)
      switch (event.type) {
        case "ZOOMDemo":
          setTriggerElement("ZOOMDemo");
          break;

        case 'ShowMedia':
          setShowMedia(!showMedia);
          console.log(showMedia);
          setTriggerElement("ChangeMedia"); 
          if(!showMedia){
            setMediaDirection(null);
          }
          else{
            setMediaDirection("Right");
          }
          break;

        case 'ChangeMedia':
          if (customEvent.detail === "Left" || customEvent.detail === "Right") {
            setMediaDirection(customEvent.detail); // Pass direction to gallery
            setTriggerElement("ChangeMedia");
            setMediaChangeCounter(prev => prev + 1);
            console.log(mediaDirection)
          }
          break;

          default:
            break;
        }
      };

      window.addEventListener('ZOOMDemo', handleCustomEvent);
      window.addEventListener('ShowMedia', handleCustomEvent);
      window.addEventListener('ChangeMedia', handleCustomEvent);

      return () => {
        window.removeEventListener('ZOOMDemo', handleCustomEvent);
        window.removeEventListener('ShowMedia', handleCustomEvent);
        window.removeEventListener('ChangeMedia', handleCustomEvent);
      };
    }, [mediaChangeCounter]);

  const handleOpenChange = (open: boolean) => {
    setIsOpenLocal(open);
    setIsOpen(open);
    if (!open) {
      setTriggerElement("View");
      setShowMedia(false);
      setMediaDirection(null);
      onClose?.();
    }
  };

    const renderContentBasedOnTrigger = () => {
      switch (triggerElement) {
        case "ZOOMDemo":
          return <ZoomLiveAction />;
        case "ChangeMedia":
          console.log("ChangeMedia:", mediaDirection)
          return (
            <MediaGallery
              showMedia={showMedia}
              mediaDirection={mediaDirection}
              changeCounter={mediaChangeCounter}
            />
          );

        case "View":
          console.log(triggerElement)
          console.log("vIew")
          break; 
          
        default:
          return <p>No dynamic content to show.</p>;
      }
    };

  return (
    <Sheet open={isOpenLocal} onOpenChange={handleOpenChange}>
      <SheetTrigger asChild>{trigger}</SheetTrigger>
      <SheetContent side="right" className="w-[400px] sm:w-[540px]"style={{
    top: '80px', // This accounts for the navbar height
    height: 'calc(100vh - 80px)' // This makes the sheet fill remaining viewport height
  }}>
        <SheetHeader>
          <SheetTitle className="text-2xl font-bold">
            {selectedItem?.title}
          </SheetTitle>
          <SheetDescription className="pt-4 text-black-400 text-[20px]">
            {selectedItem?.desc}
          </SheetDescription>
        </SheetHeader>

        {/* {sliderComponent && <div className="my-4">{sliderComponent}</div>} */}

        <div>{renderContentBasedOnTrigger()}</div>
      </SheetContent>
    </Sheet>
  );
};

export default SheetPopUp;