import ZoomLiveAction,{ZoomLiveActionProps} from "./Features/ZoomLiveAction";
import MediaGallery, { type PropType as MediaGalleryProps } from "./Features/MediaGallery";
import React from "react";

type ComponentTypeMap = {
    ZoomLiveAction: React.FC<ZoomLiveActionProps>;
    MediaGallery: React.FC<MediaGalleryProps>;
  };
  
  export const componentsMap: ComponentTypeMap = {
    ZoomLiveAction,
    MediaGallery,
  };
  
  