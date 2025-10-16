'use client';

import Header from "@/components/sections/navbar/default";
import Footer from "@/components/sections/footer/default";
import { Section } from "@/components/ui/section";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function SignInPage() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      setError("Пожалуйста, заполните все поля.");
      return;
    }

    try {
      const payload = {
        token: "d524c1a0811da49592f841085cc0063eb62b3001252a94542795d1ca9824a941",
        email: formData.email,
        password: formData.password,
      };

      const response = await fetch("https://controller.vpnand.com/controller/get_partner", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Ошибка авторизации");
      }

      const data = await response.json();
      console.log("Ответ от сервера:", data);

      localStorage.setItem("email", formData.email);
      localStorage.setItem("password", formData.password);

      router.push("/dashboard_partner");
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Произошла ошибка");
    }
  };

  return (
    <>
      <Header />
      
         <div className="flex justify-center items-center min-h-screen">
        <div
          className="w-full max-w-md p-8  rounded-[25px] 
                     shadow-[0_0_15px_0.3px_#e0e8e6]
                     dark:bg-[#131314]"
        >

          <h1 className="text-xl font-semibold mb-2">
            Вход в аккаунт партнёра
          </h1>
          <p className="text-sm mb-6">
            Войдите в свою учетную запись, чтобы продолжить.
          </p>

          <form onSubmit={handleSubmit} className="w-full max-w-md flex flex-col gap-4">
            <input
              type="email"
              placeholder="Введите ваш email..."
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full rounded-lg border p-3 focus:outline-none focus:ring"
            />

            <input
              type="password"
              placeholder="Введите ваш пароль..."
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="w-full rounded-lg border p-3 focus:outline-none focus:ring"
            />

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <div>
              <Button variant="default" asChild>
                <button type="submit">Войти</button>
              </Button>
            </div>
          </form>
        </div>
      </div> 
      
    
      <Footer />
    </>
  );
}
