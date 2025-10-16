"use client";

import Image from "next/image";
import { ReactNode } from "react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

import VPNand_logo_white from "@/public/logo_white.png";
import VPNand_logo_dark from "@/public/logo_dark.png";

import {
  Footer,
  FooterBottom,
  FooterColumn,
  FooterContent,
} from "../../ui/footer";
import { ModeToggle } from "../../ui/mode-toggle";

interface FooterLink {
  text: string;
  href: string;
}

interface FooterColumnProps {
  title: string;
  links: FooterLink[];
}

interface FooterProps {
  logo?: ReactNode;
  columns?: FooterColumnProps[];
  copyright?: string;
  policies?: FooterLink[];
  showModeToggle?: boolean;
  className?: string;
}

export default function FooterSection({
  columns = [
    {
      title: "Меню",
      links: [
        { text: "Как подключить", href: "/instraktionvpn" },
        { text: "Тарифы", href: "https://vpnand.com/#order-vpn" },
        { text: "Скачать", href: "https://vpnand.com/download/" },
        { text: "Акции", href: "https://vpnand.com/akcii/" },
      ],
    },
    {
      title: "Для клиентов",
      links: [
        { text: "Партнерам", href: "https://vpnand.com/partners/" },
        { text: "Telegram", href: "https://t.me/vpnand_service" },
        { text: "Email", href: "mailto:vpnandhelp@gmail.com" },
      ],
    },
    {
      title: "Документация",
      links: [
        
        { text: "Публичная оферта", href: "https://vpnand.com/oferta/" },
        { text: "Правила пользования", href: "https://vpnand.com/rules/" },
        { text: "Обработка персональных данных", href: "https://vpnand.com/personald/" },
      ],
    },
  ],
  copyright = "© 2025 VPNand. Все права защищены.",
  showModeToggle = true,
  className,
}: FooterProps) {
  const { theme, systemTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const isDark = currentTheme === "dark";

  return (
    <footer
      className={cn(
        "bg-background w-full px-4 py-8 border-t border-border/20 backdrop-blur-sm",
        className
      )}
    >
      <div className="max-w-container mx-auto">
        <Footer>
          <FooterContent className="items-start">
            <FooterColumn className="col-span-2 sm:col-span-3 md:col-span-2">
              <div className="flex flex-col items-start gap-3">
                <div className="flex items-center gap-2">
                  <Image
                    src={isDark ? VPNand_logo_white : VPNand_logo_dark}
                    alt="VPNand Logo"
                    width={75}
                    height={75}
                    priority
                    className="transition-opacity duration-300"
                  />
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed max-w-[340px]">
                  VPNand — надёжный VPN, которому доверяют сотни пользователей.
                  Обеспечиваем высокую скорость, безопасность и конфиденциальность на каждом шагу.
                </p>
              </div>
            </FooterColumn>

            {columns.map((column, index) => (
              <FooterColumn key={index} className="min-w-[160px]">
                <h3 className="text-md pt-1 font-semibold">{column.title}</h3>
                {column.links.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    href={link.href}
                    className="text-muted-foreground text-sm hover:text-foreground transition-colors"
                  >
                    {link.text}
                  </a>
                ))}
              </FooterColumn>
            ))}
          </FooterContent>

          <FooterBottom className="mt-4 border-t border-border/20 pt-4">
            <div className="text-muted-foreground text-sm">{copyright}</div>
            <div className="flex items-center gap-4">
              {showModeToggle && <ModeToggle />}
            </div>
          </FooterBottom>
        </Footer>
      </div>
    </footer>
  );
}
