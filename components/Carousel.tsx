"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const images = [
  "https://www.fffuel.co/images/dddepth-preview/dddepth-248.jpg",
  "https://www.fffuel.co/images/dddepth-preview/dddepth-051.jpg",
  "https://www.fffuel.co/images/dddepth-preview/dddepth-029.jpg",
  "https://www.fffuel.co/images/dddepth-preview/dddepth-038.jpg",
  "https://www.fffuel.co/images/dddepth-preview/dddepth-012.jpg",
];

export default function SlideOpacity() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(1);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    const updateCurrent = () => {
      setCurrent(api.selectedScrollSnap() + 1);
    };

    api.on("select", updateCurrent);

    return () => {
      api.off("select", updateCurrent);
    };
  }, [api]);

  return (
    <Carousel
      className="mx-2 w-full max-w-md"
      opts={{ loop: true }}
      setApi={setApi}
    >
      <div className="mask-x-from-90%">
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem
              className={cn("basis-3/5 transition-opacity", {
                "opacity-30": index !== current - 1,
              })}
              key={image}
            >
              <img
                alt="Imagen del carousel"
                className="size-full rounded-2xl object-cover"
                src={image}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </div>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
