'use client'
import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";

const reviews = [
  { text: "Отличный блокиратор.", name: "Хамзат" },
  { text: "Отличный впн.", name: "Гаджимурад" },
  { text: "Всех родственников, друзей, близких подсадила на ваш ВПН. Спасибо, ребята, вы лучшие 👍🏻", name: "Сия" },
  { text: "Отличный впн подключил близким тоже👍", name: "Абдуллах" },
  { text: "Работает вообще без нареканий.", name: "Гаджимурад" },
  { text: "Вы быстро отвечаете и всегда стараетесь помочь 👍", name: "Магомед" },
  { text: "Очень классный впн, купил про версию и радуюсь безграничному интернету!!", name: "Хайбула" },
  { text: "Шикарная программа просто одни плюсы, всем советую.", name: "Мухтар" },
  { text: "Приятно пользоваться. Быстрый впн.", name: "Виктория" },
  { text: "Все клево, пользуюсь, проблем не возникает.", name: "Марат" },
  { text: "Ваш ВПН просто восторг, рекомендую всем, кто ищет хороший ВПН.", name: "Сия" },
  { text: "Пробовал несколько платных VPN, решил остановить свой выбор на этом.", name: "Мухаммадханафи" },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  name,
  text,
}: {
  name: string;
  text: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        "border-gray-500/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{text}</blockquote>
    </figure>
  );
};

export function MarqueeDemo() {
    return (
<div id="testimonials" className="mb-20">
<h2 className="text-center text-3xl mt-20 mb-10 font-semibold sm:text-5xl">
          Что говорят о VPNand пользователи?
        </h2>
      <div className=" flex items-center mt-5 justify-center ">
       
        <div className="relative flex h-full max-w-[1050px] flex-col items-center justify-center overflow-hidden">
      
          <Marquee pauseOnHover className="[--duration:100s]">
            {firstRow.map((review, index) => (
              <ReviewCard key={index} {...review} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:100s]">
            {secondRow.map((review, index) => (
              <ReviewCard key={index} {...review} />
            ))}
          </Marquee>
          
         <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background to-transparent z-10"></div>
<div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background to-transparent z-10"></div>

        </div>
        </div>
        
      </div>
    );
  }
  
