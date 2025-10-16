"use client";
import { redirect } from "next/navigation";
import React, { useEffect, useState } from "react";

import Header from "@/components/sections/navbar/default";
import Footer from "@/components/sections/footer/default";

interface ReferalData {
  orders: number;
  summ: number;
  sumout: number;
  precent: number;
}

interface UserData {
  idp: number;
  email: string;
  name: string;
  link: string;
  tg: string | null;
  phone: string | null;
  referal?: ReferalData;
}

const DashboardPage = () => {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [paymentDetails, setPaymentDetails] = useState({ number: "", card: "", usdt: "", phone: "", comment: "" });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPaymentDetails({ ...paymentDetails, [name]: value });
  };

  const [isFormOpen, setIsFormOpen] = useState(false);
  const toggleForm = () => setIsFormOpen(!isFormOpen);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const fetchUserData = async () => {
    try {
      const response = await fetch("https://controller.vpnand.com/controller/get_partner", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token: "d524c1a0811da49592f841085cc0063eb62b3001252a94542795d1ca9824a941",
          email: localStorage.getItem("email"),
          password: localStorage.getItem("password"),
        }),
      });

      if (!response.ok) {
        throw new Error("Не удалось загрузить данные пользователя.");
      }

      const data: UserData = await response.json();
      setUserData(data);
    } catch (err: any) {
      setError(err.message);
      redirect("/signin");
    }
  };

  const submitPaymentDetails = async () => {
    try {
      const response = await fetch("https://controller.vpnand.com/controller/set_partner_card", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token: "d524c1a0811da49592f841085cc0063eb62b3001252a94542795d1ca9824a941",
          email: localStorage.getItem("email"),
          phone: paymentDetails.phone || undefined,
          card: paymentDetails.number || undefined,
          usdt: paymentDetails.usdt || undefined,
          comment: paymentDetails.comment || undefined,
        }),
      });

      if (!response.ok) {
        throw new Error("Не удалось отправить данные о реквизитах.");
      }

      await response.json();
      alert("Данные успешно отправлены!");
    } catch (err: any) {
      alert(err.message);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  if (!userData) {
    return (
      <div className="text-center py-10">
        {error ? <p className="text-red-500">{error}</p> : <p>Загрузка данных...</p>}
      </div>
    );
  }

  return (
    <>
      <Header />

      {isFormOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="relative w-full max-w-md">
            <div className="absolute inset-0 rounded-2xl opacity-50 blur-md -z-10"></div>
            <div className="relative bg-white bg-opacity-90 backdrop-blur-xl rounded-2xl shadow-lg px-8 py-12">
              <div className="flex flex-col items-center space-y-4">
                <input
                  type="text"
                  name="number"
                  placeholder="Введите номер карты"
                  value={paymentDetails.number}
                  onChange={handleInputChange}
                  className="w-4/5 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray text-center bg-white text-gray-700"
                />
                <input
                  type="text"
                  name="card"
                  placeholder="Введите инициалы владельца карты"
                  value={paymentDetails.card}
                  onChange={handleInputChange}
                  className="w-4/5 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray text-center bg-white text-gray-700"
                />
                <p>...или введите номер телефона для перевода</p>
                <input
                  type="text"
                  name="phone"
                  placeholder="Номер телефона"
                  value={paymentDetails.phone}
                  onChange={handleInputChange}
                  className="w-4/5 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray text-center bg-white text-gray-700"
                />
                <input
                  type="text"
                  name="comment"
                  placeholder="Название банка, к которому привязан номер телефона"
                  value={paymentDetails.comment}
                  onChange={handleInputChange}
                  className="w-4/5 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray text-center bg-white text-gray-700"
                />
                <p>...или введите адрес кошелька USDT</p>
                <input
                  type="text"
                  name="usdt"
                  placeholder="Адрес кошелька USDT"
                  value={paymentDetails.usdt}
                  onChange={handleInputChange}
                  className="w-4/5 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray text-center bg-white text-gray-700"
                />

                <button
                  onClick={submitPaymentDetails}
                  className="w-4/5 py-3 bg-[#090930] text-white font-semibold rounded-lg text-lg transition-all hover:opacity-95"
                >
                  Подтвердить
                </button>
              </div>
              <button onClick={toggleForm} className="absolute top-3 right-6 text-gray-600 hover:text-gray-800">
                ×
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="container mx-auto max-w-[1080px] px-4 flex flex-col">
        <div className="mt-8">
          <h2 className="text-lg">Ваша реферальная ссылка:</h2>
          <p className="text-blue-500 mb-4">
            <a
              href={`https://vpnand.com/?${userData.link}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Перейти по реферальной ссылке"
            >
              {`https://vpnand.com/?${userData.link}`}
            </a>
          </p>
          <div className="mt-3">
            <h2 className="text-lg cursor-pointer" onClick={toggleForm}>
              Ваши реквизиты для выплаты
            </h2>
          </div>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 bg-white border rounded-lg shadow-md">
              <p className="text-gray-500">Заработано</p>
              <p className="bg-gradient-to-b from-[#3be21b] to-[#0c39ba] bg-clip-text text-transparent text-4xl font-semibold inline">
                {userData.referal?.sumout || 0}
              </p>
              <span className="text-2xl text-gray-500"> руб.</span>
            </div>
            <div className="p-4 bg-white border rounded-lg shadow-md">
              <p className="text-gray-500">Процент выплат</p>
              <p className="bg-gradient-to-b from-[#3be21b] to-[#0c39ba] bg-clip-text text-transparent text-4xl font-semibold inline">
                {userData.referal?.precent || 0}
              </p>
              <span className="text-2xl text-gray-500">%</span>
            </div>
            <div className="p-4 bg-white border rounded-lg shadow-md">
              <p className="text-gray-500">Общая сумма заказов</p>
              <p className="bg-gradient-to-b from-[#3be21b] to-[#0c39ba] bg-clip-text text-transparent text-4xl font-semibold inline">
                {userData.referal?.summ || 0}
              </p>
              <span className="text-2xl text-gray-500"> руб.</span>
            </div>
            <div className="p-4 bg-white border rounded-lg shadow-md">
              <p className="text-gray-500">Количество заказов</p>
              <p className="bg-gradient-to-b from-[#3be21b] to-[#0c39ba] bg-clip-text text-transparent text-4xl font-semibold inline">
                {userData.referal?.orders || 0}
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default DashboardPage;
