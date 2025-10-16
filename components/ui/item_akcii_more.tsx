"use client";

import {
  LinkIcon,
  FileTextIcon,
  UserPlusIcon,
  Share2Icon,
  WalletIcon,
} from "lucide-react";

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

export default function ItemsAkciiMore({
   title = "Как получить больше",
  items = [
    {
      title: "Перейдите на страницу партнёров",
      description: "Пройдите на страницу партнёры. Изучите условия для партнёров.",
      icon: <LinkIcon className="size-5 stroke-1" />,
    },
    
    {
      title: "Зарегистрируйтесь",
      description: "Зарегистрируйтесь и получите реферальную ссылку.",
      icon: <UserPlusIcon className="size-5 stroke-1" />,
    },
    {
      title: "Используйте свою ссылку",
      description:
        "В описание видеоролика вместо ссылки на сайт вставьте свою реферальную ссылку.",
      icon: <Share2Icon className="size-5 stroke-1" />,
    },
    {
      title: "Получайте доход",
      description: "Вы получите от 10% до 25% от оплат клиентов.",
      icon: <WalletIcon className="size-5 stroke-1" />,
    },
  ],
  className,
}: ItemsProps) {
  return (
    <Section className={className}>
      <div className="max-w-container mx-auto flex flex-col  items-center gap-4 sm:gap-10">
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
