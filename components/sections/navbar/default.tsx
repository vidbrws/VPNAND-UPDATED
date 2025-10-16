"use client";

import { Menu } from "lucide-react";
import { ReactNode } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

import VPNand_logo_white from "@/public/logo_white.png";
import VPNand_logo_dark from "@/public/logo_dark.png";
import { Button, type ButtonProps } from "../../ui/button";
import { Navbar as NavbarComponent, NavbarLeft, NavbarRight } from "../../ui/navbar";
import Navigation from "../../ui/navigation";
import { Sheet, SheetContent, SheetTrigger } from "../../ui/sheet";
import { ModeToggle } from "@/components/ui/mode-toggle";

interface NavbarLink {
  text: string;
  href: string;
}

interface NavbarActionProps {
  text: string;
  href: string;
  variant?: ButtonProps["variant"];
  icon?: ReactNode;
  iconRight?: ReactNode;
  isButton?: boolean;
}

interface NavbarProps {
  homeUrl?: string;
  mobileLinks?: NavbarLink[];
  actions?: NavbarActionProps[];
  showNavigation?: boolean;
  customNavigation?: ReactNode;
  className?: string;
}

export default function Navbar({
  homeUrl = "https://vpnand.com",
  mobileLinks = [
    { text: "Как подключить", href: "https://vpnand.com/instruktionvpn" },
    { text: "Тарифы", href: "https://vpnand.com/order-vpn" },
    { text: "Скачать", href: "https://vpnand.com/download/" },
    { text: "Акции", href: "https://vpnand.com/akcii" },
    { text: "Партнёрам", href: "https://vpnand.com/partners/" },
    { text: "Telegram", href: "https://t.me/vpnand_service" },
    { text: "WhatsApp", href: "https://wa.me/79166290800" },
    { text: "Gmail", href: "mailto:vpnandhelp@gmail.com" },
  ],
  actions = [
    {
      text: "Личный кабинет",
      href: "https://lk.vpnand.com",
      isButton: true,
    },
  ],
  showNavigation = true,
  customNavigation,
  className,
}: NavbarProps) {
  const { theme, systemTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const isDark = currentTheme === "dark";

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 px-4 bg-background/60 backdrop-blur-md border-b border-border/20",
        className
      )}
    >
      <div className="max-w-container relative mx-auto">
        <NavbarComponent>
          <NavbarLeft>
            <a href={homeUrl} className="flex items-center gap-2 text-xl font-bold">
              <Image
                src={isDark ? VPNand_logo_white : VPNand_logo_dark}
                alt="VPNand Logo"
                width={75}
                height={75}
                priority
                className="transition-opacity duration-300"
              />
            </a>
            {showNavigation && (customNavigation || <Navigation />)}
          </NavbarLeft>

          <NavbarRight className="flex items-center gap-2">
            {/* Переключатель темы — только рядом с кнопкой ЛК */}
            <div className=" md:block">
              <ModeToggle />
            </div>

            {/* Кнопки действий */}
            {actions.map((action, index) =>
              action.isButton ? (
                <Button key={index} variant={action.variant || "default"} asChild>
                  <a href={action.href}>
                    {action.icon}
                    {action.text}
                    {action.iconRight}
                  </a>
                </Button>
              ) : (
                <a key={index} href={action.href} className="hidden text-sm md:block">
                  {action.text}
                </a>
              )
            )}

            {/* Мобильное меню */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="shrink-0 md:hidden">
                  <Menu className="size-5" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>

              {/* убрали ModeToggle отсюда */}
              <SheetContent side="right" className="flex flex-col justify-between pb-2">
                <nav className="grid gap-4 text-lg font-medium">
                  {mobileLinks.map((link, index) => (
                    <a key={index} href={link.href} className="text-muted-foreground hover:text-foreground">
                      {link.text}
                    </a>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </NavbarRight>
        </NavbarComponent>
      </div>
    </header>
  );
}
