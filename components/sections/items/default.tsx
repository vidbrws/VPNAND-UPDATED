import {
  BlocksIcon,
  EclipseIcon,
  FastForwardIcon,
  LanguagesIcon,
  MonitorSmartphoneIcon,
  RocketIcon,
  ScanFaceIcon,
  SquarePenIcon,
  GlobeIcon,
  ShieldIcon,
  KeyRoundIcon,
} from "lucide-react";
import { ReactNode } from "react";

import { Item, ItemDescription, ItemIcon, ItemTitle } from "../../ui/item";
import { Section } from "../../ui/section";

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

export default function Items({
  title = "Почему выбирают VPNand",
  items = [
    {
      title: "Высокая скорость",
      description:
        "Без падений скорости. Смотрите YouTube, листайте ленту без долгой загрузки.",
      icon: <FastForwardIcon className="size-5 stroke-1" />,
    },
    {
      title: "Анонимность",
      description:
        "Пара кликов — и ваши данные в безопасности. Мы защищаем ваш трафик, шифруя его от посторонних.",
      icon: <ScanFaceIcon className="size-5 stroke-1" />,
    },
    {
      title: "Для всех устройств",
      description:
        "Работает на Windows, macOS, Android, iOS и Linux. Просто скачайте приложение, вставьте ключ и подключитесь.",
      icon: <MonitorSmartphoneIcon className="size-5 stroke-1" />,
    },
    {
      title: "Мы готовы поддержать",
      description:
        "Техподдержка ответит на возникшие вопросы. Напишите нам в WhatsApp, Telegram или на почту.",
      icon: <SquarePenIcon className="size-5 stroke-1" />,
    },
    {
      title: "Никакой нагрузки",
      description:
        "VPNand работает, не нагружая устройство. Забудьте о нагревающемся телефоне.",
      icon: <BlocksIcon className="size-5 stroke-1" />,
    },
    {
      title: "Глобальные подключения",
      description:
        "Выберите любую страну соединения. Наши серверы располагаются в разных частях мира.",
      icon: <GlobeIcon className="size-5 stroke-1" />,
    },
    {
      title: "Не сохраняем логи",
      description:
        "Мы не храним историю ваших подключений и не передаем данные третьим лицам.",
      icon: <ShieldIcon className="size-5 stroke-1" />,
    },
    {
      title: "Обходим блокировки",
      description:
        "VPNand — доступ к сайтам и приложениям, заблокированным в вашем регионе. ",
      icon: <KeyRoundIcon className="size-5 stroke-1" />,
    },
  ],
  className,
}: ItemsProps) {
  return (
    <Section className={className}>
      <div className="max-w-container mx-auto flex flex-col md:mb-15 bg:mb-15 items-center gap-2 sm:gap-10">
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
