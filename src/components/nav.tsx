import { cn } from "@/shared/lib/utils";

const menuItems = [
  { name: "Компания", url: "#company" },
  { name: "Продукты", url: "#products" },
  { name: "Услуги", url: "#services" },
  { name: "Партнеры", url: "#partners" },
  { name: "Новости", url: "#news" },
  { name: "Контакты", url: "#contacts" },
  { name: "Карьера", url: "#" },
];

interface MenuProps {
  containerClassNames: string;
  itemClassNames: string;
}

export const Nav = ({ containerClassNames, itemClassNames }: MenuProps) => {
  return (
    <nav className={containerClassNames}>
      {menuItems.map(({ name, url }) => (
        <a
          className={cn(
            "focus:text-primary hover:text-primary cursor-pointer transition duration-200",
            itemClassNames,
          )}
          key={name}
          href={url}
        >
          {name}
        </a>
      ))}
    </nav>
  );
};
