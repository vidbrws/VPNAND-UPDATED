"use client";
import React from "react";
import firstshape from "@/public/1.png";
import Image from "next/image";
import { Apple, Smartphone, Laptop, Monitor, Server } from "lucide-react";

export const Install = () => {
  const downloadIcons = [
    { name: "iOS", icon: Apple },
    { name: "Android", icon: Smartphone },
    { name: "macOS", icon: Laptop },
    { name: "Windows", icon: Monitor },
    { name: "Linux", icon: Server },
  ];

  return (
    <div
      id="download"
      className="flex flex-col md:flex-row justify-between mb-5 items-center p-4 max-w-[1100px] mx-auto"
      style={{
        height: "100%",
        minHeight: "580px",
        position: "relative",
        backgroundColor: "via-foreground/60",
        borderRadius: "41px",
        boxShadow: "0 0 30px 1px #e0e8e6",
        overflow: "hidden",
      }}
    >
      {/* === Левая часть: мокап телефона с видео === */}
      <div className="w-full md:w-1/2 flex justify-center items-center md:mb-10 mb-10 md:mt-10 mt-10">
  <Image
    src={firstshape}
    alt="Shape"
    className="absolute w-[590px] h-[650px] md:w-[550px] md:h-[550px] animate-sway translate-x-2 md:translate-x-0"
    priority
  />
        <div className="relative flex justify-center items-center">
          <div className="relative border-[5px] border-gray-800 bg-[#252732] rounded-[2.6rem] shadow-2xl w-[288px] h-[593px]">
            <div className="absolute top-[1px] left-1/2 -translate-x-1/2 w-[120px] h-[10px] bg-gray-900 rounded-full"></div>
            <div className="absolute left-[-8px] top-[120px] w-[3px] h-[45px] bg-gray-700 rounded-s-md"></div>
            <div className="absolute left-[-8px] top-[180px] w-[3px] h-[45px] bg-gray-700 rounded-s-md"></div>
            <div className="absolute left-[-8px] top-[240px] w-[3px] h-[45px] bg-gray-700 rounded-s-md"></div>
            <div className="absolute right-[-8px] top-[180px] w-[3px] h-[64px] bg-gray-700 rounded-e-md"></div>

            <div className="overflow-hidden rounded-[2.5rem] w-full h-full flex items-center justify-center">
              <video
                src="/instruction.webm"
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                className="w-[275px] h-[580px] object-cover rounded-[2rem]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* === Правая часть: шаги и кнопки === */}
      <div className="w-full md:w-1/2 p-4">
        <h2 className="text-3xl leading-tight font-semibold mb-10 sm:text-5xl sm:leading-tight">
          Подключение к VPNand
        </h2>

        <ul className="space-y-8">
          <li className="flex items-center">
            <span className="text-[40px] font-light mr-4">1</span>
            <div>
              <h3 className="text-lg font-semibold">Выберите тариф и оплатите его</h3>
              <p>Оплатите выбранный тарифный план, чтобы начать пользоваться сервисом.</p>
            </div>
          </li>

          <li className="flex items-center">
            <span className="text-[40px] font-light mr-4">2</span>
            <div>
              <h3 className="text-lg font-semibold">Получите ваш уникальный ключ</h3>
              <p>После оплаты вам будет предоставлен уникальный ключ доступа.</p>
            </div>
          </li>

          <li className="flex items-center">
            <span className="text-[40px] font-light mr-4">3</span>
            <div>
              <h3 className="text-lg font-semibold">Вставьте ключ в приложение</h3>
              <p>Установите приложение, введите ключ и наслаждайтесь скоростью.</p>
            </div>
          </li>
        </ul>

        {/* === Иконки для скачивания === */}
        <div className="mt-10 flex flex-wrap justify-center gap-1">
  {downloadIcons.map(({ name, icon: Icon }) => (
    <a
      key={name}
      href="#"
      className={`
        flex items-center gap-1 rounded-xl bg-gradient-to-b sm:text-small px-4 py-2 
        transition-transform hover:scale-105
        ${name === "Linux" ? "order-3 w-full justify-center sm:w-auto" : ""}
      `}
    >
      <Icon className="h-5 w-5 " />
      <span>{name}</span>
    </a>
  ))}
</div>

      </div>
    </div>
  );
};

export default Install;
