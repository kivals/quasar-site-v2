import {cn} from "@/shared/lib/utils";

const menuItems = [
  "Компания",
  "Продукты",
  "Услуги",
  "Партнеры",
  "Новости",
  "Контакты",
  "Карьера",
];

interface MenuProps {
  containerClassNames: string;
  itemClassNames: string;
}

export const Menu = ({ containerClassNames, itemClassNames }: MenuProps) => {
  return (
    <div className={containerClassNames}>
      {menuItems.map((item) => (
        <span className={cn("hover:text-primary transition delay-200",itemClassNames)} key={item}>
          {item}
        </span>
      ))}
    </div>
  );
};
