"use client";
import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import { Apple, Smartphone, Laptop, Monitor, Server } from "lucide-react";

export function FloatingDockDemo() {
  const links = [
    {
      title: "iOS",
      icon: (
        <Apple className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Android",
      icon: (
        <Smartphone className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "macOS",
      icon: (
        <Laptop className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Windows",
      icon: (
        <Monitor className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Linux",
      icon: (
        <Server className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
  ];

  return (
    <div className="flex items-center justify-center w-full">
      <FloatingDock
        mobileClassName="translate-y-20" // только для демо, убери в продакшене
        items={links}
      />
    </div>
  );
}
