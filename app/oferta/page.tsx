"use client";
import React from "react";
import { ContainerScrollOferta }  from "@/components/ui/ScrollAnimation_oferta";
import  Header  from "@/components/sections/navbar/default";
import  Footer  from "@/components/sections/footer/default";

export default function Page() {
  return (
    <div className="flex flex-col mt-20 min-h-screen">
      <Header className="fixed top-0 left-0 w-full z-50" />
      <ContainerScrollOferta
        titleComponent={
          <h1 className="text-5xl font-semibold text-black dark:text-white text-center mb-2">
            <br />
            <span className="text-3xl md:text-[6rem] font-bold mb-13 leading-none">
              
            </span>
          </h1>
        }
      >
        <div className="
        mx-auto text-left p-4 mt-1 rounded-2xl ">
          <h2 className="text-3xl text-center pb-3">Публичная оферта</h2>
          <p className="text-sm font-semibold mb-4  ">
            Данная Оферта от владельца интернет-сайта https://vpnand.com в дальнейшем «Продавец», в адрес пользователя услуг интернет-сайта, в дальнейшем «Заказчик», является предложением заключить Договор оказания Услуг и определяет основные условия оказания Услуг через интернет-сайт https://vpnand.com.
          </p>
          <p className="text-sm text-black dark:text-white mb-4">
            Покупатель, действуя с целью приобретения Услуг, принимает условия настоящего Договора оказания услуг (далее – Договор) на следующих условиях.
          </p>
          <h3 className="text-1xl font-semibold mb-4 text-black dark:text-white">
            1. ОПРЕДЕЛЕНИЕ ТЕРМИНОВ
          </h3>
          <p className="text-sm text-black dark:text-white mb-4">
            1.1. Публичная оферта (далее – Оферта) – публичное предложение Продавца, адресованное неопределенному кругу лиц, заключить с Продавцом Договор оказания услуг дистанционным способом (далее – «Договор») на условиях, содержащихся в настоящей Оферте, включая все Приложения.
          </p>
          <p className="text-sm text-black dark:text-white mb-4">
            1.2. Заказ – решение Заказчика заказать Услугу обработки данных через интернет-сайт https://vpnand.com посредством выбора одного из тарифов или его оплаты, является полным и безоговорочным акцептом Заказчиком настоящей Оферты.
          </p>
          <p className="text-sm text-black dark:text-white mb-4">
            1.3. Продавец предоставляет Услуги обработки данных, включая услуги частного виртуального доступа, а также иные Услуги относящиеся к частной безопасности в сети Интернет и частному доступу к сети Интернет (далее – Услуги). Услуги включают, но не ограничиваются VPN и прочими программным обеспечением, дополнениями, приложениями, информацией и информационными материалами доступными Заказчику от Продавца.
          </p>
          <p className="text-sm text-black dark:text-white mb-4">
            1.4. Тарифы – система цен за Услуги обработки данных, представленная на интернет-сайте https://vpnand.com.
          </p>
          <h3 className="text-1xl font-semibold mb-4 text-black dark:text-white">
            2. ОБЩИЕ ПОЛОЖЕНИЯ
          </h3>
          <p className="text-sm text-black dark:text-white mb-4">
            2.1. Покупатель осуществляет Заказ Услуг обработки данных через интернет-сайт https://vpnand.com посредством выбора одного из представленных на сайте тарифов. Оплатой Заказа Покупатель подтверждает согласие на заключение настоящего Договора (акцепт оферты).
          </p>
          <p className="text-sm text-black dark:text-white mb-4">
            2.2. Заключая Договор, Покупатель подтверждает следующее:
          </p>
          <ul className="list-disc list-inside text-sm text-black dark:text-white space-y-2 mb-4">
            <li>а) Покупатель целиком и полностью ознакомлен, и согласен с условиями настоящего Договора;</li>
            <li>б) Покупатель дает разрешение на сбор, обработку и передачу персональных данных на условиях, определенных законодательством, размещенной на интернет-сайте https://vpnand.com.</li>
          </ul>
          <h3 className="text-1xl font-semibold mb-4 text-black dark:text-white">
            3. СТОИМОСТЬ УСЛУГ
          </h3>
          <p className="text-sm text-black dark:text-white mb-4">
            3.1. Цена на Услуги обработки данных указана на интернет-сайте https://vpnand.com в блоке тарифы на главной странице.
          </p>
          <p className="text-sm text-black dark:text-white mb-4">
            3.2. Продавец имеет право в одностороннем порядке изменить цену на любой Тариф.
          </p>
          <p className="text-sm text-black dark:text-white mb-4">
            3.3. Изменение Продавцом цены на оплаченный Заказ не допускается.
          </p>
          <p className="text-sm text-black dark:text-white mb-4">
            3.4. Обязательства Покупателя по оплате Заказа считаются исполненными с момента поступления Продавцу денежных средств в соответствии с Тарифами в полном размере.
          </p>
          <p className="text-sm text-black dark:text-white mb-4">
            3.5. Расчеты между Продавцом и Покупателем за услуги производятся способами, указанными на сайте https://vpnand.com.
          </p>
          <h3 className="text-1xl font-semibold mb-4 text-black dark:text-white">
            4. ОФОРМЛЕНИЕ ЗАКАЗА
          </h3>
          <p className="text-sm text-black dark:text-white mb-4">
            4.1. Заказ Услуг осуществляется Покупателем через сайт https://vpnand.com либо путём выставления счета на оплату на электронную почту клиента.
          </p>
          <p className="text-sm text-black dark:text-white mb-4">
            4.2. Если Продавцу необходима дополнительная информация, он вправе запросить ее у Покупателя. В случае не предоставления необходимой информации Покупателем, Продавец не несет ответственности за предоставление качественной услуги Покупателю.
          </p>
          <p className="text-sm text-black dark:text-white mb-4">
            4.3. Покупатель несет ответственность за достоверность предоставленной информации при оформлении и оплате Заказа.
          </p>
          <p className="text-sm text-black dark:text-white mb-4">
            4.4. Договор между Продавцом и Покупателем считается заключенным с момента электронного оформления заказа на сайте https://vpnand.com или его оплаты Покупателем.
          </p>
          <h3 className="text-1xl font-semibold mb-4 text-black dark:text-white">
            5. ПОРЯДОК ОКАЗАНИЯ УСЛУГ
          </h3>
          <p className="text-sm text-black dark:text-white mb-4">
            5.1. Оказание Услуг осуществляется в порядке, описанном на интернет-сайте https://vpnand.com.
          </p>
          <h3 className="text-1xl font-semibold mb-4 text-black dark:text-white">
            6. ПРЕКРАЩЕНИЕ ОКАЗАНИЯ УСЛУГ
          </h3>
          <p className="text-sm text-black dark:text-white mb-4">
            6.1. Покупатель вправе отказаться от Услуг в любое время действия Договора, средства, уплаченные в соответствии с Тарифами, возврату не подлежат.
          </p>
          <p className="text-sm text-black dark:text-white mb-4">
            6.2. Если Покупатель не обратился к Продавцу в письменном виде по адресам, указанным на интернет-сайте https://vpnand.com с предложением о прекращении Договора, Договор признается действующим до его прекращения по соглашению Сторон.
          </p>
          <p className="text-sm text-black dark:text-white mb-4">
            6.3. Продавец вправе ограничить Покупателю предоставление Услуг в случае выявления фактов недобросовестного использования Сервиса, а именно:
          </p>
          <ul className="list-disc list-inside text-sm text-black dark:text-white space-y-2 mb-4">
            <li>а) Использование Сервиса Покупателем в целях нарушения законодательства Российской Федерации или других государств;</li>
            <li>в) Использование в рамках услуг доступа к пиринговым сетям, распространение вредоносного программного обеспечения, ведение пиринговых программ и пр.</li>
          </ul>
          <h3 className="text-1xl font-semibold mb-4 text-black dark:text-white">
            7. ОТВЕТСТВЕННОСТЬ СТОРОН
          </h3>
          <p className="text-sm text-black dark:text-white mb-4">
            7.1. Продавец не несет ответственности за убытки, понесенные Покупателем или третьими лицами в результате использования или невозможности использования услуг.
          </p>
          <h3 className="text-1xl font-semibold mb-4 text-black dark:text-white">
            8. ЗАКЛЮЧИТЕЛЬНЫЕ ПОЛОЖЕНИЯ
          </h3>
          <p className="text-sm text-black dark:text-white mb-4">
            8.1. Настоящая Оферта является публичной и может быть изменена Продавцом в одностороннем порядке без предварительного уведомления.
          </p>
          <p className="text-sm text-black dark:text-white mb-4">
            8.2. Все споры, возникающие из настоящей Оферты, разрешаются в соответствии с действующим законодательством.
          </p>
          <p className="text-sm text-black dark:text-white mb-4">
            8.3. Заказчик подтверждает, что принял условия настоящего Договора и согласен с ними.
          </p>
        </div>
      </ContainerScrollOferta>
      <Footer />
    </div>
  );
}
