import { ReactNode } from "react";


import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../ui/accordion";
import { Section } from "../../ui/section";

interface FAQItemProps {
  question: string;
  answer: ReactNode;
  value?: string;
}

interface FAQProps {
  title?: string;
  items?: FAQItemProps[] | false;
  className?: string;
}

export default function FAQ({
  title = "Частые вопросы",
  items = [
    {
      question:
        "Как узнать, что трафик зашифрован, не передается третьим лицам и логи уничтожаются?",
      answer: (
        <p className="text-muted-foreground mb-4 max-w-[640px] text-balance">
          Трафик шифруется на уровне используемого нами протокола. У нас нет возможности сохранять логи и что-либо передавать третьим лицам.
        </p>
      ),
    },
    {
      question: "VPNand работает в России? Обходит блокировки?",
      answer: (
        <p className="text-muted-foreground mb-4 max-w-[640px] text-balance">
          Да. С VPNand вы не переживаете за доступ к актуальным платформам: Instagram, Telegram, Discord и другие.
        </p>
      ),
    },
    {
      question: "Какие устройства поддерживает VPNand?",
      answer: (
        <p className="text-muted-foreground mb-4 max-w-[640px] text-balance">
          Все клиенты и приложения поддерживают VPNand, включая приложения для Windows, macOS, Linux, Android, iOS и маршрутизаторы.
        </p>
      ),
    },
    {
      question: "Почему VPNand обеспечивает высокую скорость?",
      answer: (
        <p className="text-muted-foreground mb-4 max-w-[640px] text-balance">
          VPNand использует оптимизированные серверы и эффективные протоколы шифрования, что позволяет обеспечивать высокую скорость и минимальную задержку.
        </p>
      ),
    },
    {
      question: "Насколько безопасен VPNand?",
      answer: (
        <p className="text-muted-foreground mb-4 max-w-[640px] text-balance">
          VPNand использует новейшие стандарты шифрования и надёжные протоколы для обеспечения максимальной безопасности ваших данных. Наша эффективная база кода минимизирует риски утечек и ошибок.
        </p>
      ),
    },
    {
      question: "VPNand использует открытый исходный код?",
      answer: (
        <p className="text-muted-foreground mb-4 max-w-[640px] text-balance">
          Да. Приложения, которые использует сервис VPNand, имеют открытый исходный код. Это означает, что исходный код программного обеспечения является общедоступным, и любой человек может изучить и проанализировать его. Это повышает общую безопасность программного обеспечения, поскольку оно открыто для всеобщего обозрения.
        </p>
      ),
    },
  ],
  className,
}: FAQProps) {
  return (
    <Section className={className}>
      <div className="max-w-container mx-auto flex flex-col items-center gap-8">
        <h2 className="text-center text-3xl font-semibold sm:text-5xl">
          {title}
        </h2>
        {items !== false && items.length > 0 && (
          <Accordion type="single" collapsible className="w-full max-w-[800px]">
            {items.map((item, index) => (
              <AccordionItem
                key={index}
                value={item.value || `item-${index + 1}`}
              >
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        )}
      </div>
    </Section>
  );
}
