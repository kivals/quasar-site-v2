import Container from "@/components/container";
import Image from "next/image";
import BurgerMenu from "@/components/burger-menu";
import { Nav } from "@/components/nav";
import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="bg-background fixed top-0 z-10 w-full px-8 py-4 lg:px-0">
      <Container>
        <div className="flex items-center justify-between gap-x-2">
          <div className="flex w-full items-center justify-between lg:w-auto lg:justify-start lg:gap-2">
            <Image
              src="/images/logo.png"
              width="25"
              height="25"
              alt="Логотип в виде галактики"
              className="size-[25px] invert 2xl:size-[50px]"
            />
            <span className="text-[27px] 2xl:text-[52px]">Quasar</span>

            <div className="flex-shrink-0">
              <BurgerMenu classNames="lg:hidden" />
            </div>
          </div>

          <Nav
            containerStyles="hidden flex-wrap lg:flex items-center lg:gap-x-[20px] xl:gap-x-[24px] 2xl:gap-x-[27px]"
            linkStyles="relative 2xl:text-[24px] xl:text-[20px] lg:text-[18px]"
            underlineStyles="absolute left-0 top-full h-[2px] bg-blue-800 w-full"
          />

          <Button className="hidden rounded-[20px] font-semibold text-white lg:flex lg:h-[50px] xl:h-[60px] 2xl:h-[70px] 2xl:text-[24px]">
            Обратная связь
          </Button>
        </div>
      </Container>
    </header>
  );
};
