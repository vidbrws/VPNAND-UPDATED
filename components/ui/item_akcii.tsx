"use client";

import {
  ImageIcon,
  DownloadIcon,
  VideoIcon,
  CheckCircleIcon,
} from "lucide-react";
import { ReactNode } from "react";

import {
  Item,
  ItemDescription,
  ItemIcon,
  ItemTitle,
} from "@/components/ui/item";
import { Section } from "@/components/ui/section";

interface ItemProps {
  title: string;
  description: string;
  icon: ReactNode;
}

interface ItemsProps {
  title?: string;
  items?: ItemProps[] | false;
  className?: string;
}

export default function ItemsAkcii({
  title = "Что делать",
  items = [
    {
      title: "Добавьте видео и две картинки",
      description:
        "Добавьте видео и две картинки в сторис Telegram, WhatsApp и Instagram (если какого-то сервиса нет — не страшно).",
      icon: <ImageIcon className="size-5 stroke-1" />,
    },
    {
      title: "Скачайте картинки",
      description:
        "Скачать картинку о партнёрстве тут (добавьте описание: https://vpnand.com/partners/), и картинку о данной акции тут (добавьте описание: https://vpnand.com/akcii/).",
      icon: <DownloadIcon className="size-5 stroke-1" />,
    },
    {
      title: "Скачайте видео",
      description:
        "Скачайте видео тут. Добавьте описание: https://vpnand.com и любой текст с рекомендацией.",
      icon: <VideoIcon className="size-5 stroke-1" />,
    },
    {
      title: "Отправьте скриншоты",
      description:
        "Сделайте скриншоты историй и отправьте в поддержку. Сотрудник выдаст вам ключ.",
      icon: <CheckCircleIcon className="size-5 stroke-1" />,
    },
  ],
  className,
}: ItemsProps) {
  return (
    <Section className={className}>
      <div className="max-w-container mx-auto flex flex-col  items-center gap-2 sm:gap-10">
        <h2 className="max-w-[660px] text-center text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
          {title}
        </h2>
        {items !== false && items.length > 0 && (
          <div className="grid auto-rows-fr grid-cols-2 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
            {items.map((item, index) => (
              <Item key={index}>
                <ItemTitle className="flex items-center gap-2">
                  <ItemIcon>{item.icon}</ItemIcon>
                  {item.title}
                </ItemTitle>
                <ItemDescription>{item.description}</ItemDescription>
              </Item>
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}
