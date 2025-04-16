import React, { useEffect, useRef, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

interface MediaGalleryProps {
  showMedia: boolean;
  mediaDirection: "Left" | "Right" | null;
  changeCounter?:number;
}

const MediaGallery = ({ showMedia, mediaDirection, changeCounter = 0 }: MediaGalleryProps) => {
  const imageUrls = [
    "../../../assets/Gallery/img1.jpeg",
    "../../../assets/Gallery/img2.jpeg",
    "../../../assets/Gallery/img3.jpeg",
    "../../../assets/Gallery/img4.jpeg",
    "../../../assets/Gallery/img5.jpeg",
    "../../../assets/Gallery/img6.jpeg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const totalImages = imageUrls.length;
  changeCounter +=1

  useEffect(() => {
    console.log(mediaDirection)
    if (!mediaDirection) return;
    console.log("NextImage:", mediaDirection)
    setCurrentIndex((currentIndex) => {
      console.log("NextImage:", mediaDirection)
      if (mediaDirection === "Left") {
        return (currentIndex - 1 + totalImages) % totalImages;
      } else {
        return (currentIndex + 1) % totalImages;
      }
    });
  }, [mediaDirection, totalImages, changeCounter]);

  if (!showMedia) {
    console.log("not showMedia")
    return <div className="w-full h-60 bg-black rounded-xl" />;
  }

  return (
    <Carousel>
      <CarouselContent>
        <CarouselItem>
          <Card>
            <CardContent className="flex items-center justify-center p-6">
              <img
                src={imageUrls[currentIndex]}
                alt={`Image ${currentIndex + 1}`}
                className="w-full h-auto rounded-lg"
              />
            </CardContent>
          </Card>
        </CarouselItem>
      </CarouselContent>
      {/* <CarouselPrevious /> */}
      {/* <CarouselNext /> */}
    </Carousel>
  );
};

export default MediaGallery;
