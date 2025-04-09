import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";

const MediaGallery: React.FC = () => {
  // 🖼️ Add your own images here
  const imageUrls = [
    "../../../assets/gallery/img1.jpeg",
    "../../../assets/gallery/img2.jpeg",
    "../../../assets/gallery/img3.jpeg",
    "../../../assets/gallery/img4.jpeg",
    "../../../assets/gallery/img5.jpeg",
    "../../../assets/gallery/img6.jpeg", 
  ];

  const options: EmblaOptionsType = { loop: true };
  const [emblaRef] = useEmblaCarousel(options);

  return (
    <section className="overflow-hidden">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="flex transition-transform duration-300 ease-in-out">
          {imageUrls.map((url, index) => (
            <div className="flex-[0_0_100%] px-2" key={index}>
              <img
                src={url}
                alt={`Slide ${index + 1}`}
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MediaGallery;