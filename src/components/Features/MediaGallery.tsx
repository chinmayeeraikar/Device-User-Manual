import React from 'react';
import { EmblaOptionsType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';

export type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

const MediaGallery: React.FC = () => {
  const slides = [1, 2, 3, 4]; // use images or slide data here
  const options: EmblaOptionsType = { loop: true };
  const [emblaRef] = useEmblaCarousel(options);

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div className="embla__slide" key={index}>
              <img
                src={`/images/slide-${index}.jpg`} // Put your actual images here
                alt={`Slide ${index}`}
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MediaGallery;
