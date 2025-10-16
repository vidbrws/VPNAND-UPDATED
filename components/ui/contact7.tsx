"use client";

import {
  Smartphone,
  Apple,
  Monitor,
  Laptop,
  Server,
  ShieldCheck,
  Wrench,
  HelpCircle,
} from "lucide-react";
import { ReactNode } from "react";

import { Item, ItemDescription, ItemIcon, ItemTitle } from "@/components/ui/item";
import { Section } from "@/components/ui/section";

interface ItemProps {
  title: string;
  description: string;
  icon: ReactNode;
  link?: string;
}

interface ItemsProps {
  title?: string;
  items?: ItemProps[] | false;
  className?: string;
}

export default function Items({
  title = "Скачать VPNand для вашего устройства",
  items = [
    {
      title: "Android",
      description:
        "Скачайте приложение из Google Play и подключитесь в пару кликов. Простая настройка и мгновенное подключение.",
      icon: <Smartphone className="size-5 stroke-1" />,
      link: "https://play.google.com/store/apps/details?id=com.v2raytun.android",
    },
    {
      title: "iOS",
      description:
        "Доступно в App Store. Интерфейс в стиле iPhone — удобно, быстро, безопасно.",
      icon: <Apple className="size-5 stroke-1" />,
      link: "https://apps.apple.com/en/app/v2raytun/id6476628951",
    },
    {
      title: "Windows",
      description:
        "Установите VPNand на ПК. Работает стабильно, не влияет на производительность системы.",
      icon: <Monitor className="size-5 stroke-1" />,
      link: "https://storage.v2raytun.com/v2RayTun_Setup.exe",
    },
    {
      title: "macOS",
      description:
        "Оптимизировано под macOS. Простая установка.",
      icon: <Laptop className="size-5 stroke-1" />,
      link: "https://apps.apple.com/en/app/v2raytun/id6476628951",
    },
    {
      title: "Linux",
      description:
        "Версия для Linux доступна по прямой ссылке. Минимальные зависимости и быстрая установка.",
      icon: <Server className="size-5 stroke-1" />,
      link: "https://drive.usercontent.google.com/u/0/uc?id=1bPbpudVOSKLm5OLMQzP3YkBqycLkV_iy&export=download",
    },
    
  ],
  className,
}: ItemsProps) {
  return (
    <Section className={className}>
      <div className="max-w-container mx-auto flex flex-col mt-20 align-center items-center gap-2 sm:gap-10">
        <h2 className="max-w-[660px] text-center text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
          {title}
        </h2>

        {items !== false && items.length > 0 && (
          <div className="grid auto-rows-fr grid-cols-1 sm:grid-cols-1 lg:grid-cols-4 gap-2">
            {items.map((item, index) => {
              // Определим стили позиционирования последних двух карточек
              const isSecondLast = index === items.length - 2;
              const isLast = index === items.length - 1;

              const columnClass =
                isSecondLast || isLast
                  ? "sm:col-start-1 sm:col-span-2 lg:col-start-center lg:col-span-1"
                  : "";

              return (
                <div key={index} className={columnClass}>
                  <Item>
                    <ItemTitle className="flex items-center gap-2">
                      <ItemIcon>
                        {item.link ? (
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2"
                          >
                            {item.icon}
                          </a>
                        ) : (
                          item.icon
                        )}
                      </ItemIcon>
                      {item.link ? (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline"
                        >
                          {item.title}
                        </a>
                      ) : (
                        item.title
                      )}
                    </ItemTitle>
                    <ItemDescription>{item.description}</ItemDescription>
                  </Item>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </Section>
  );
}
