"use client";

import Link from "next/link";
import * as React from "react";
import { ReactNode } from "react";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { ModeToggle } from "@/components/ui/mode-toggle";


import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./navigation-menu";

interface ComponentItem {
  title: string;
  href: string;
  description: string;
}

interface MenuItem {
  title: string;
  href?: string;
  isLink?: boolean;
  content?: ReactNode;
}

interface NavigationProps {
  menuItems?: MenuItem[];
  components?: ComponentItem[];
  logo?: ReactNode;
  logoTitle?: string;
  logoDescription?: string;
  logoHref?: string;
  introItems?: {
    title: string;
    href: string;
  
  }[];
}

export default function Navigation({
  menuItems = [
    
    {
      title: "Написать нам",
      content: "components",
    },
    {
      title: "Скачать",
      isLink: true,
            href: "htps://vpnand.com/download",
    },
    
    {
      title: "Тарифы",
      isLink: true,
           href: "htps://vpnand.com/order-vpn",
    },{
      title: "Акции",
      isLink: true,
            href: "htps://akcii",
    },{
      title: "Партнерам",
      isLink: true,
            href: "htps://vpnand.com/partners",}
  ],
  components = [
    {
      title: "Telegram",
      href: "https://t.me/vpnand_service",
      description:
        "",
    },
    {
      title: "WhatsApp",
      href: "https://wa.me/79166290800",
      description:
        "",
    },
    {
      title: "Gmail",
      href: "mailto:vpnandhelp@gmail.com",
      description:
        "",
    },
    
  ],

  logoTitle = "VPNand",
  logoDescription = "Landing page template built with React, Shadcn/ui and Tailwind that you can copy/paste into your project.",
  logoHref = siteConfig.url,
  
}: NavigationProps) {
  return (
   <NavigationMenu className="hidden md:flex items-center gap-2">
  <NavigationMenuList>
    {menuItems.map((item, index) => (
      <NavigationMenuItem key={index}>
        {item.isLink ? (
          <NavigationMenuLink
            className={navigationMenuTriggerStyle()}
            asChild
          >
            <Link href={item.href || ""}>{item.title}</Link>
          </NavigationMenuLink>
        ) : (
          <>
            <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
            <NavigationMenuContent>
              {item.content === "default" ? (
                <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="from-muted/30 to-muted/10 flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-6 no-underline outline-hidden select-none focus:shadow-md"
                        href={logoHref}
                      >
                        <div className="mt-4 mb-2 text-lg font-medium">
                          {logoTitle}
                        </div>
                        <p className="text-muted-foreground text-sm leading-tight">
                          {logoDescription}
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  
                </ul>
              ) : item.content === "components" ? (
                <ul className="flex flex-col w-[200px] gap-2 p-4">
                  {components.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              ) : (
                item.content
              )}
            </NavigationMenuContent>
          </>
        )}
      </NavigationMenuItem>
    ))}

    {/* 👇 Добавляем переключатель темы прямо в навбар */}
    
  </NavigationMenuList>
</NavigationMenu>

  );
}

function ListItem({
  className,
  title,
  children,
  ...props
}: React.ComponentProps<"a"> & { title: string }) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          data-slot="list-item"
          className={cn(
            "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block space-y-1 rounded-md p-3 leading-none no-underline outline-hidden transition-colors select-none",
            className,
          )}
          {...props}
        >
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
}
