import { PropsWithChildren } from "react";
import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import SectionTitle from "@/components/section-title";

function ServiceItem({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-col justify-center rounded-[30px] bg-white/80 px-3 py-4 backdrop-blur-3xl max-xl:items-center max-xl:text-center lg:justify-end xl:px-8 xl:py-10 2xl:px-11 2xl:py-15">
      <p className="ce text-center text-[24px] xl:text-[32px] 2xl:text-[40px]">
        {children}
      </p>
      <Button className="text-primary mt-5 cursor-pointer bg-transparent text-[24px] font-semibold shadow-none hover:bg-transparent xl:text-[32px]">
        Подробнее
      </Button>
    </div>
  );
}

export function Services() {
  return (
    <section
      id="services"
      className="fit pt-5 lg:pt-8.5 bg-[url('/images/bg/services-bg.png')] bg-cover bg-center xl:mt-30"
    >
      <Container>
        <SectionTitle>Услуги</SectionTitle>

        <div className="mt-5 grid grid-rows-2 gap-2.5 max-xl:mx-5 xl:grid-rows-[auto_auto] xl:gap-7.5 xl:drop-shadow-[0_0_50px_#00000020]">
          <div className="grid grid-rows-2 gap-2.5 xl:grid-cols-2 xl:grid-rows-1 xl:gap-5 xl:pr-26 2xl:gap-7.5">
            <ServiceItem>
              Разработка ИТ-систем: проектирование, разработка и внедрение
              программного обеспечения под задачи бизнеса
            </ServiceItem>
            <ServiceItem>Сопровождение информационных систем</ServiceItem>
          </div>

          <div className="grid grid-rows-2 gap-2.5 xl:grid-cols-2 xl:grid-rows-1 xl:gap-7.5 xl:pl-26">
            <ServiceItem>Разработка встраиваемых систем</ServiceItem>
            <ServiceItem>Разработка сайтов</ServiceItem>
          </div>
        </div>
      </Container>
    </section>
  );
}
