"use client";

import React from "react";
import { TracingBeam } from "@/components/ui/tracing-team";
import Image from "next/image";
import im1 from "@/public/1_i.png";
import im2 from "@/public/2_i.png";
import im3 from "@/public/3_i.png";
import im4 from "@/public/4_i.png";
import im5 from "@/public/5_i.png";
import im6 from "@/public/6_i.png";
import im7 from "@/public/7_i.png";
import im8 from "@/public/8_i.png";


const TracingBeamDemo = () => {
  return (
    <TracingBeam className="px-6  mt-20 mb-40">
      <div className="mx-auto antialiased pt-4 relative pl-10"> {/* Added left padding on large screens */}
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <h2 className="bg-[#090930] text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
              {item.badge}
            </h2>
            <p className="text-xl mb-4">{item.title}</p>
            <div className="text-sm prose dark:prose-invert">
              {item.image && (
                <div className="w-[300px] mx-auto">
                  <Image
                    src={item.image}
                    alt="blog thumbnail"
                    height={300}
                    width={300}
                    className="rounded-lg object-cover"
                  />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
};

export default TracingBeamDemo;

const dummyContent = [
  {
    title: "Откройте приложение и нажмите на кнопку «У меня есть данные для подключения».",
    badge: "Шаг 1",
    image: im1,
  },
  {
    title: "Выберите вариант «Открыть файл конфигурации, ключ или QR-код».",
    badge: "Шаг 2",
    image: im2,
  },
  {
    title: "Тут вы выбираете вариант подключения. Чаще всего необходимо будет выбрать вариант «Ключ в виде текста».",
    badge: "Шаг 3",
    image: im3,
  },
  {
    title: "Оплатите тариф, получите ключ, скопируйте его и нажмите «Вставить».",
    badge: "Шаг 4",
    image: im4,
  },
  {
    title: "Если система запросила разрешение, нажмите «Разрешить вставку».",
    badge: "Шаг 4",
    image: im4,
  },
  {
    title: "Нажмите «Продолжить».",
    badge: "Шаг 4",
    image: im5,
  },
  {
    title: "Нажмите «Подключиться».",
    badge: "Шаг 4",
    image: im6,
  },
  {
    title: "В некоторых случаях система может запросить пароль устройства. Введите его и нажмите «Разрешить», а затем нажмите «Подключиться».",
    badge: "Шаг 4",
    image: im7,
  },
  {
    title: "Вы подключены к сервису VPNand.",
    badge: "Шаг 4",
    image: im8,
  },
];

