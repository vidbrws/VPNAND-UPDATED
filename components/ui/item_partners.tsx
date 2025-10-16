"use client";

import {
  UserPlusIcon,
  MegaphoneIcon,
  MessageSquareIcon,
  WalletIcon,
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

export default function ItemsPartners({
  title = "Как стать партнёром",
  items = [
    {
      title: "Регистрация в системе",
      description:
        "Создайте учётную запись, это займёт всего пару минут и откроет доступ к личному кабинету.",
      icon: <UserPlusIcon className="size-5 stroke-1" />,
    },
    {
      title: "Расскажите о нас",
      description:
        "Размещайте информацию о нашем сервисе на своём сайте, блоге или в социальных сетях.",
      icon: <MegaphoneIcon className="size-5 stroke-1" />,
    },
    {
      title: "Свяжитесь с нами",
      description:
        "После первых привлечённых клиентов напишите нам — мы подтвердим результат.",
      icon: <MessageSquareIcon className="size-5 stroke-1" />,
    },
    {
      title: "Получайте выплаты",
      description:
        "Мы переводим за каждую оплату, совершённую по вашей рекомендации.",
      icon: <WalletIcon className="size-5 stroke-1" />,
    },
  ],
  className,
}: ItemsProps) {
  return (
    <Section className={className}>
      <div className="max-w-container mx-auto flex flex-col mb-15 md:mb-15 bg:mb-15 items-center gap-2 sm:gap-10">
        <h2 className="max-w-[660px] text-center text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
          {title}
        </h2>
        {items !== false && items.length > 0 && (
          <div className="grid auto-rows-fr grid-cols-2  sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
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
