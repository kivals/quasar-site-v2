"use client";

import { cn } from "@/shared/lib/utils";
import Link from "next/link";
import { motion } from "framer-motion";
import { useHash } from "@/shared/hooks/useHash";
import { usePathname } from "next/navigation";

const menuItems = [
  { name: "Компания", url: "/#company" },
  { name: "Продукты", url: "/#products" },
  { name: "Услуги", url: "/#services" },
  { name: "Партнеры", url: "/#partners" },
  { name: "Новости", url: "/#news" },
  { name: "Контакты", url: "/#contacts" },
  { name: "Карьера", url: "/career" },
];

interface MenuProps {
  containerStyles: string;
  linkStyles: string;
  underlineStyles?: string;
  onLinkClick?: () => void;
}

export const Nav = ({
  containerStyles,
  linkStyles,
  underlineStyles,
  onLinkClick,
}: MenuProps) => {
  const hash = useHash();
  const pathname = usePathname();

  return (
    <nav className={containerStyles}>
      {menuItems.map(({ name, url }) => (
        <Link
          className={cn(
            "focus:text-primary hover:text-primary cursor-pointer transition duration-200",
            linkStyles,
          )}
          key={name}
          href={url}
          onClick={onLinkClick}
        >
          {(url === pathname || url === `/${hash}`) && (
            <motion.span
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              transition={{ type: "tween" }}
              layoutId="underline"
              className={underlineStyles}
            />
          )}
          {name}
        </Link>
      ))}
    </nav>
  );
};
