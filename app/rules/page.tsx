"use client";
import React from "react";
import { ContainerScroll} from "@/components/ui/ScrollAnimation";
import  Header  from "@/components/sections/navbar/default";
import  Footer  from "@/components/sections/footer/default";


export default function Page() {
  return (
    <div className="flex flex-col ">
      <Header className="fixed top-0 left-0 mb-40 w-full z-50" />
      <ContainerScroll
        titleComponent={
          <h1 className="text-4xl font-semibold pt-30 text-black dark:text-white">
             <br />
            <span className="text-5xl md:text-[6rem] font-bold leading-none">
            Правила использования
            </span>
          </h1>
        }
      >
        <div className="mx-auto text-left  mt-2 rounded-2xl bg-gray-100 dark:bg-black/95">
          <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">
            Следующие действия запрещены на всех серверах и тарифах VPNand и могут привести к немедленной блокировке доступа:
          </h2>
          <ul className="list-decimal list-inside text-sm text-black dark:text-white space-y-2">
            <li>Распространение и получение спама через электронную почту.</li>
            <li>Использование ботнетов, вирусов, эксплойтов, а также перенаправление на сайты, содержащие их.</li>
            <li>Хранение и распространение порнографии.</li>
            <li>Мошенничество и кража, а также ссылки на ресурсы, связанные с такими действиями.</li>
            <li>Постоянная загрузка файлов больших объемов.</li>
            <li>Деятельность, связанная с кардингом.</li>
            <li>Любые действия, направленные против правительственных и других организаций.</li>
            <li>Действия, приводящие к попаданию IP-адресов в черные списки (SpamHaus, StopForumSpam, SpamCop и другие).</li>
            <li>Организация и участие в DDoS-атаках, включая «тестовые» атаки.</li>
            <li>Продажа нелегальных фармацевтических препаратов и наркотиков.</li>
            <li>Создание и продажа поддельных товаров (часы, сумки, одежда и т. д.).</li>
            <li>Сканирование портов и уязвимостей.</li>
            <li>Использование нелицензионного программного обеспечения.</li>
            <li>Добавление и использование IP-адресов, которые вам не принадлежат.</li>
            Также запрещены любые другие действия, которые могут нанести материальный или репутационный ущерб компании VPNand и её клиентам, а также нарушение законов любых стран, в том числе стран, где расположен сервер.
          </ul>
        </div>
      </ContainerScroll>
      <Footer />
    </div>
  );
}
