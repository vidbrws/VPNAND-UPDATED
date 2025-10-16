import { ReactNode } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./accordion";
import { Section } from "./section";

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
      question: "Какие комиссионные я получаю?",
      answer: (
        <p className="text-muted-foreground  max-w-[640px] text-balance">
          Мы выплачиваем от <strong>10% до 25%</strong> с каждой оплаты, сделанной клиентом, привлечённым по вашей ссылке. Чем больше активных рефералов — тем выше ваш процент.
        </p>
      ),
    },
    {
      question: "Когда происходят выплаты?",
      answer: (
        <p className="text-muted-foreground mb-4 max-w-[640px] text-balance">
          Выплаты производятся <strong>в первых числах каждого месяца</strong> на удобный вам способ (карта, криптовалюта или другие каналы по договорённости).
        </p>
      ),
    },
    {
      question: "Кто может стать партнёром VPN?",
      answer: (
        <p className="text-muted-foreground mb-4 max-w-[640px] text-balance">
          Присоединиться может любой желающий. Это может быть блогер, владелец сайта, стример или просто человек, который хочет делиться нашим VPN и зарабатывать на этом.
        </p>
      ),
    },
    {
      question: "Как начать участие в партнёрской программе?",
      answer: (
        <p className="text-muted-foreground mb-4 max-w-[640px] text-balance">
          Зарегистрируйтесь на нашем сайте, получите <strong>уникальную реферальную ссылку</strong> и поделитесь ею со своей аудиторией. После регистрации напишите нам в Telegram, чтобы мы подтвердили ваш аккаунт.
        </p>
      ),
    },
    {
      question: "Где можно отслеживать статистику?",
      answer: (
        <p className="text-muted-foreground mb-4 max-w-[640px] text-balance">
          После активации партнёрского кабинета вы сможете видеть количество переходов, оплат и начисленные вознаграждения в своём личном кабинете.
        </p>
      ),
    },
    {
      question: "Что, если у меня возникнут вопросы или сложности?",
      answer: (
        <p className="text-muted-foreground mb-4 max-w-[640px] text-balance">
          Наша команда поддержки всегда на связи. Просто напишите нам в{" "}
          <a
            href="https://t.me/yourvpn"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline"
          >
            Telegram
          </a>{" "}
          или на email — и мы быстро поможем решить любой вопрос.
        </p>
      ),
    },
  ],
  className,
}: FAQProps) {
  return (
    <Section className={className}>
      <div className="max-w-container mx-auto flex -mt-30 flex-col items-center gap-8">
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
