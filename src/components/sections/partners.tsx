import SectionTitle from "@/components/section-title";
import Container from "@/components/container";
import Image from "next/image";
import { cn } from "@/shared/lib/utils";

const partnerLogos = [
  "/images/partners/aeroflot.png",
  "/images/partners/art.png",
  "/images/partners/fond.jpg",
  "/images/partners/gonec.jpg",
  "/images/partners/hospital.png",
  "/images/partners/logrocon.jpg",
  "/images/partners/mai.jpg",
  "/images/partners/mgtu.png",
  "/images/partners/quarta.png",
  "/images/partners/yniver.png",
];

export default function Partners() {
  return (
    <section className="mb-28">
      <Container>
        <SectionTitle>Партнеры</SectionTitle>
        <p className="mx-auto mb-5 max-w-[1110px] text-center text-[24px] xl:text-[32px] 2xl:text-[40px]">
          Нашими партнерами являются крупнейшие компании, ВУЗы и государственные
          структуры по всей России
        </p>

        <div className="grid place-items-center grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-5">
          {partnerLogos.map((logo, index) => (
            <PartnerItem
              key={index}
              className={cn(index >= 5 && "xl:translate-x-2/3")}
              src={logo}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

function PartnerItem({ src, className }: { className?: string; src: string }) {
  return (
    <div
      className={cn(
        "flex size-[150px] items-center justify-center overflow-clip rounded-[20px] bg-white p-8 transition duration-300 hover:shadow-lg xl:size-[200px] 2xl:size-[250px]",
        className,
      )}
    >
      <Image
        src={src}
        alt=""
        width={250}
        height={250}
        className="object-contain opacity-50 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
      />
    </div>
  );
}
