"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { cn } from "@/lib/utils";

function TrustedItem() {
  return (
    <div className="relative overflow-clip rounded-[20px] bg-white lg:size-[230px] xl:size-[250px]">
      <Image
        src="/images/minstroy.png"
        alt="MinStroy logo"
        fill
        className="object-contain opacity-50 grayscale"
      />
    </div>
  );
}

function TrustedCarousel({ className }: { className?: string }) {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}
      className={cn("w-full", className)}
    >
      <CarouselContent className="-ml-1">
        {Array.from({ length: 50 }).map((_, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/6">
            <TrustedItem />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
    /*<div className="grid xl:flex grid-rows-2 grid-cols-2 max-xl:w-[calc(100vw-2rem)] max-xl:aspect-square gap-2.5 xl:gap-10">
      <TrustedItem />
      <TrustedItem />
      <TrustedItem />
      <TrustedItem />
      <TrustedItem />
      <TrustedItem />
      <TrustedItem />
      <TrustedItem />
      <TrustedItem />
      <TrustedItem />
      <TrustedItem />
    </div>*/
  );
}

export default TrustedCarousel;
