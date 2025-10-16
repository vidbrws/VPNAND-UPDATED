'use client';

import Header from "@/components/sections/navbar/default";
import Footer from "@/components/sections/footer/default";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { z } from "zod";

const signUpSchema = z
  .object({
    name: z.string().min(5, "Имя должно быть не менее 5 символов."),
    email: z.string().email("Введите действительный email."),
    password: z.string().min(8, "Пароль должен быть не менее 8 символов."),
    confirmPassword: z.string().min(8, "Пароль должен быть не менее 8 символов."),
    phoneNumber: z.string().min(10, "Введите действительный номер телефона."),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Пароли не совпадают",
    path: ["confirmPassword"],
  });

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
  });
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const validatedData = signUpSchema.parse(formData);

      const response = await fetch('https://controller.vpnand.com/controller/add_partner', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          token: 'd524c1a0811da49592f841085cc0063eb62b3001252a94542795d1ca9824a941',
          email: validatedData.email,
          password: validatedData.password,
          name: validatedData.name,
          phone: validatedData.phoneNumber,
        }),
      });

      if (response.ok) {
        router.push("/signin");
      } else {
        const data = await response.json();
        setError(data.message || "Ошибка регистрации");
      }
    } catch (err) {
      if (err instanceof z.ZodError) {
        setError(err.issues[0]?.message || "Ошибка валидации");
      } else {
        setError("Сетевая ошибка");
      }
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
          <h1 className="text-xl font-semibold mb-2">Станьте партнёром VPNand</h1>
          <p className="text-sm mb-6">
            Создайте свою учетную запись, чтобы продолжить.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="email"
                placeholder="Еmail..."
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full border rounded-lg p-3 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Имя..."
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full border rounded-lg p-3 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <input
                type="tel"
                placeholder="Номер телефона..."
                value={formData.phoneNumber}
                onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                className="w-full border rounded-lg p-3 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Пароль..."
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="w-full border rounded-lg p-3 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Пожалуйста, подтвердите пароль"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                className="w-full border rounded-lg p-3 focus:outline-none focus:ring"
              />
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <div>
              <Button variant="default" asChild>
                <button type="submit">Зарегистрироваться</button>
              </Button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
