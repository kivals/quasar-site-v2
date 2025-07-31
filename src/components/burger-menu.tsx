"use client";

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
import { Nav } from "@/components/nav";
import { useState } from "react";

export default function BurgerMenu({ classNames }: ClassNames) {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        className={classNames}
        onClick={() => setOpen(true)}
        asChild
      >
        <Menu className="size-6" />
      </SheetTrigger>
      <SheetContent style={{ overflowY: "scroll", gap: "10px", width: "100%" }}>
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
          <SheetDescription className="text-[24px]">
            Системный подход к разработке программного обеспечения
          </SheetDescription>
        </SheetHeader>
        <Nav
          containerClassNames="px-4 flex flex-col gap-y-4 text-[30px]"
          itemClassNames="font-medium"
          onLinkClick={handleClose}
        />
        <SheetFooter className="text-[16px]">
          <Button className="h-[50px] rounded-[20px] font-semibold text-white">
            Обратная связь
          </Button>
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
