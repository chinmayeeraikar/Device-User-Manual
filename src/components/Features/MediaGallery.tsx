import React, { useEffect, useRef, useState } from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";

// const MediaGallery: React.FC = () => {
//   // 🖼️ Add your own images here

// import React, { useEffect, useState } from "react";
// import useEmblaCarousel, { EmblaCarouselType } from "embla-carousel-react";

const MediaGallery: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);


  const imageUrls = [
    "../../../assets/gallery/img1.jpeg",
    "../../../assets/gallery/img2.jpeg",
    "../../../assets/gallery/img3.jpeg",
    "../../../assets/gallery/img4.jpeg",
    "../../../assets/gallery/img5.jpeg",
    "../../../assets/gallery/img6.jpeg", 
  ];

  const options: EmblaOptionsType = { loop: true };
  //const [emblaRef] = useEmblaCarousel(options);

    const [zoomAmount, setZoomAmount] = useState(0);
    //const videoRef = useRef(null);
    //const containerRef = useRef(null);

    useEffect(() => {
      const handleMedia = (event) => {
        setZoomAmount(event.detail );
      };

  window.addEventListener("ChangeMedia", handleMedia);
    return () => window.removeEventListener("ChangeMedia", handleMedia);
  }, []);

  return (
    <div>
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
    </div>
  );
};

export default MediaGallery;
    // Set selected index on scroll
    const onSelect = (embla: EmblaCarouselType) => {
      setSelectedIndex(embla.selectedScrollSnap());
    };
  
    useEffect(() => {
      if (!emblaApi) return;
  
      setScrollSnaps(emblaApi.scrollSnapList());
      emblaApi.on("select", () => onSelect(emblaApi));
      onSelect(emblaApi);
  
      const handleMediaChange = (event: CustomEvent) => {
        const direction = event.detail;
        if (direction === "right") emblaApi.scrollNext();
        if (direction === "left") emblaApi.scrollPrev();
      };
  
      window.addEventListener("ChangeMedia", handleMediaChange as EventListener);
  
      return () => {
        window.removeEventListener("ChangeMedia", handleMediaChange as EventListener);
      };
    }, [emblaApi]);
  
    return (
      <div className="relative w-full max-w-5xl mx-auto py-12">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {imageUrls.map((url, index) => {
              const isActive = index === selectedIndex;
              const isPrev = index === selectedIndex - 1 || (selectedIndex === 0 && index === imageUrls.length - 1);
              const isNext = index === selectedIndex + 1 || (selectedIndex === imageUrls.length - 1 && index === 0);
  
              return (
                <div
                  key={index}
                  className={classNames(
                    "transition-all duration-500 ease-in-out px-2 flex justify-center items-center",
                    "flex-[0_0_100%] sm:flex-[0_0_60%] md:flex-[0_0_40%]",
                    {
                      "z-30 scale-110 translate-y-0": isActive,
                      "z-20 scale-75 -translate-y-6 opacity-70": isPrev || isNext,
                      "z-10 opacity-0 pointer-events-none": !isActive && !isPrev && !isNext,
                    }
                  )}
                >
                  <img
                    src={url}
                    alt={`Slide ${index}`}
                    className={classNames(
                      "rounded-xl shadow-lg transition-transform duration-500 object-cover",
                      {
                        "w-full max-h-[400px]": isActive,
                        "w-3/4 max-h-[250px]": isPrev || isNext,
                      }
                    )}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };
  
  export default MediaGallery;
