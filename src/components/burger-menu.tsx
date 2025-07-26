import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Image from "next/image";

import { Menu } from "lucide-react";
import { ClassNames } from "@/shared/types/class-names";

const menuItems = [
  "Компания",
  "Продукты",
  "Услуги",
  "Партнеры",
  "Новости",
  "Контакты",
  "Карьера",
];

export default function BurgerMenu({ classNames }: ClassNames) {
  return (
    <Sheet>
      <SheetTrigger className={classNames} asChild>
        <Menu className="size-6" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            <div className="flex items-center gap-1">
              <Image
                src="/images/logo.png"
                alt="Quasar logo"
                height={50}
                width={50}
                className="size-[30px] invert"
              />

              <h1 className="text-[27px] xl:text-[42px] 2xl:text-[52px]">
                Quasar
              </h1>
            </div>
          </SheetTitle>
          <SheetDescription className="text-[20px]">
            Системный подход к разработке программного обеспечения
          </SheetDescription>
        </SheetHeader>
        <div className="grid flex-1 auto-rows-min gap-6 px-4">
          <ul className="flex flex-col gap-y-2 text-[30px]">
            {menuItems.map((menuItem) => (
              <li key={menuItem}>
                <a
                  className="hover:text-accent transition duration-300"
                  href="#"
                >
                  {menuItem}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <SheetFooter>
          <p>
            Москва, Муниципальный округ Таганский, вн. тер. г., Москворецкая
            наб., д. 9, стр. 2, помещ. IV, ком. 1, Москва, 109240
          </p>
          <span className="font-semibold">Контактный телефон:</span>
          <a href="tel:89852294724">+7 (985) 229-47-24</a>
          <a href="mailto:hr@quasarpro.ru">hr@quasarpro.ru</a>
          <SheetClose asChild>
            <Button variant="outline">Закрыть</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
