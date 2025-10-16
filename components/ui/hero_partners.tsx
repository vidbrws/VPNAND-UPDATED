"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import firstshape_light from "@/public/light_bank.png";
import firstshape_dark from "@/public/dark_bank.png";

interface Hero47Props {
  heading?: string;
  subheading?: string;
  description?: string;
  buttons?: {
    primary?: {
      text: string;
      url: string;
    };
    secondary?: {
      text: string;
      url: string;
    };
  };
}

const Hero47 = ({
  heading = "Партнёрская программа",
  subheading = "",
  description = `Станьте нашими партнёрами и зарабатывайте на рекомендациях!

• Вы получите 25% от оплаты реферала
• Надёжный и быстрый сервис
• Мы зарабатываем вместе с вами`,
  buttons = {
    primary: {
      text: "Стать партнёром",
      url: "/signup",
    },
    secondary: {
      text: "Войти",
      url: "/signin",
    },
  },
}: Hero47Props) => {
  return (
    <section className="max-w-container bg-background mx-auto flex flex-col items-center  px-7 md:px-0">

      <div className="flex flex-col items-center gap-10 lg:flex-row">
        {/* Текстовая часть */}
        <div className="flex flex-col gap-7 lg:w-2/3">
          <h2 className="text-foreground text-5xl font-semibold md:text-6xl md:mb-5 lg:text-8xl leading-tight">
            <span>{heading}</span>
            {subheading && <span className="text-muted-foreground">{subheading}</span>}
          </h2>
          <p className="text-muted-foreground text-base md:text-lg lg:text-xl whitespace-pre-line">
            {description}
          </p>

          <div className="flex flex-wrap items-start gap-5 lg:gap-7">
            <Button asChild>
              <a href={buttons.primary?.url}>
                <div className="flex items-center gap-2">
                  <ArrowUpRight className="size-4" />
                </div>
                <span className="whitespace-nowrap pl-4 pr-6 text-sm lg:pl-6 lg:pr-8 lg:text-base">
                  {buttons.primary?.text}
                </span>
              </a>
            </Button>
            <Button asChild variant="link" className="underline">
              <a href={buttons.secondary?.url}>{buttons.secondary?.text}</a>
            </Button>
          </div>
        </div>

        {/* Телефон с картинкой */}
        <div className="w-full md:w-1/2 flex justify-center items-center md:mb-10 mb-10 md:mt-10 mt-10">
          <div className="relative flex justify-center items-center">
            <div className="relative border-[5px] border-gray-800 bg-[#252732] rounded-[2.6rem] shadow-2xl w-[288px] h-[593px]">
              {/* Верхняя полоска */}
              <div className="absolute top-[1px] left-1/2 -translate-x-1/2 w-[120px] h-[10px] bg-gray-900 rounded-full"></div>
              {/* Боковые кнопки */}
              <div className="absolute left-[-8px] top-[120px] w-[3px] h-[45px] bg-gray-700 rounded-s-md"></div>
              <div className="absolute left-[-8px] top-[180px] w-[3px] h-[45px] bg-gray-700 rounded-s-md"></div>
              <div className="absolute left-[-8px] top-[240px] w-[3px] h-[45px] bg-gray-700 rounded-s-md"></div>
              <div className="absolute right-[-8px] top-[180px] w-[3px] h-[64px] bg-gray-700 rounded-e-md"></div>

              {/* Экран телефона */}
              <div className="overflow-hidden rounded-[2.5rem] w-full h-full flex items-center justify-center">
                {/* Светлая тема */}
                <Image
                  src={firstshape_light}
                  alt="Сбербанк светлая"
                  className="w-[275px] h-[580px] object-cover rounded-[2rem] block dark:hidden"
                  priority
                />
                {/* Тёмная тема */}
                <Image
                  src={firstshape_dark}
                  alt="Сбербанк тёмная"
                  className="w-[275px] h-[580px] object-cover rounded-[2rem] hidden dark:block"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero47 };
