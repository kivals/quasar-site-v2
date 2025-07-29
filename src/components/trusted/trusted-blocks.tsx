"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { cn } from "@/shared/lib/utils";

const logos = [
  "/images/trusted/minstroy.png",
  "/images/trusted/gbu.png",
  "/images/trusted/iskra.jpg",
  "/images/trusted/laonit.png",
  "/images/trusted/mei.png",
  "/images/trusted/trance-mash.jpg",
];

function TrustedBlocks() {
  return (
    <div className="flex justify-center">
      <TrustedCarousel className="block" />
      {/*<TrustedGrid className="lg:hidden" />*/}
    </div>
  );
}

function TrustedGrid({ className }: { className?: string }) {
  return (
    <div className={cn("grid grid-cols-2 gap-4 px-4", className)}>
      {logos.map((src, i) => (
        <TrustedItem src={src} key={i} />
      ))}
    </div>
  );
}

function TrustedItem({ src }: { src: string }) {
  return (
    <div className="flex items-center justify-center overflow-clip rounded-[20px] bg-white p-8 transition duration-300 hover:shadow-lg lg:size-[250px] 2xl:size-[250px]">
      <Image
        src={src}
        alt="MinStroy logo"
        width={250}
        height={250}
        className="object-contain opacity-50 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
      />
    </div>
  );
}

function TrustedCarousel({ className }: { className?: string }) {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}
      className={cn("w-full", className)}
    >
      {/* Desktop version */}
      <div className="hidden lg:block">
        <CarouselContent className="-ml-1 gap-x-3">
          {logos.map((src, index) => (
            <CarouselItem
              key={index}
              className="pl-1 lg:basis-1/4 xl:basis-1/4 2xl:basis-1/6"
            >
              <div className="py-5">
                <TrustedItem src={src}/>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </div>
      {/* Mobile version */}
      <div className="block lg:hidden">
        <CarouselContent className="-ml-1 gap-x-3">
          {Array.from({ length: Math.ceil(logos.length / 4) }).map((_, groupIndex) => {
            const group = logos.slice(groupIndex * 4, groupIndex * 4 + 4);
            return (
              <CarouselItem key={groupIndex} className="">
                <div className="grid grid-cols-2 gap-2 py-5">
                  {group.map((src, i) => (
                    <TrustedItem key={i} src={src} />
                  ))}
                </div>
              </CarouselItem>
            )
          })}
        </CarouselContent>
      </div>
    </Carousel>
  );
}

export default TrustedBlocks;
