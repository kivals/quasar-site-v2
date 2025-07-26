import Container from "@/components/container";
import Image from "next/image";
import BurgerMenu from "@/components/burger-menu";
import { Menu } from "@/components/menu";
import {Button} from "@/components/ui/button";

export const Header = () => {
  return (
    <Container>
      <header className="2xl:px-0 py-4">
        <div className="flex items-center justify-between gap-x-2">
          <div className="w-full lg:w-auto flex items-center justify-between lg:justify-start lg:gap-2">
            <Image
              src="/images/logo.png"
              width="25"
              height="25"
              alt="Логотип в виде галактики"
              className="size-[25px] 2xl:size-[50px] invert"
            />
            <span className="text-[27px] 2xl:text-[52px]">Quasar</span>

            <div className="flex-shrink-0">
              <BurgerMenu classNames="lg:hidden" />
            </div>
          </div>

          <Menu
            containerClassNames="hidden flex-wrap lg:flex items-center lg:gap-x-[20px] xl:gap-x-[24px] 2xl:gap-x-[27px]"
            itemClassNames="2xl:text-[24px] xl:text-[20px] lg:text-[18px]"
          />

          <Button className="hidden 2xl:h-[70px] xl:h-[60px] lg:h-[50px] lg:flex text-white rounded-[20px] 2xl:text-[24px] font-semibold">Обратная связь</Button>
        </div>
      </header>
    </Container>
  );
};
