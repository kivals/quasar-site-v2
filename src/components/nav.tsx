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

export const Nav = ({ containerClassNames, itemClassNames }: MenuProps) => {
  return (
    <nav className={containerClassNames}>
      {menuItems.map((item) => (
        <span className={cn("hover:text-primary transition duration-200",itemClassNames)} key={item}>
          {item}
        </span>
      ))}
    </nav>
  );
};
