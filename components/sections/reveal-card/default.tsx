"use client";
import React, { useEffect, useState } from "react";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "@/components/ui/TextRevealCard";
import gradient from "@/public/gradient_black.webp";
import { FaArrowRight } from "react-icons/fa"; 

export function RevealCard() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div id="akcii"
      className="flex mt-10 max-w-[90%] sm:max-w-[600px] md:max-w-[800px] mx-auto flex-col items-center justify-center min-h-[15rem] sm:min-h-[18rem] md:min-h-[20rem] lg:min-h-[24rem] xl:min-h-[26rem] w-full p-2 rounded-3xl overflow-hidden"
      style={{
        backgroundImage: `url(${gradient.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        
      }}
    >
      <div className="w-full h-full text-sm p-6 rounded-lg flex flex-col items-center justify-center bg-opacity-80">
        <TextRevealCard 
          text="Как получить бесплатно?"
          revealText="Расскажи о нас друзьям!"
          className="py-2 px-5"
        >
          <TextRevealCardTitle className="text-lg sm:text-[1.5rem] text-white">
            Хотите VPNand бесплатно?
          </TextRevealCardTitle>
          <TextRevealCardDescription className="text-gray-400">
            Наведите курсор на карточку, чтобы раскрыть скрытый текст.
          </TextRevealCardDescription>
        </TextRevealCard>

        <div className="mt-1 flex justify-center w-full">
          <a
            href="https://vpnand.com/akcii"
            className="btn btn-text text-white flex items-center space-x-2"
          >
            <span>Узнать больше</span>
            <FaArrowRight className="text-white" /> 
          </a>
        </div>
      </div>
    </div>
  );
}
