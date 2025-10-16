import { User, Users } from "lucide-react";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

import { PaymentMethods } from "../../ui/payment-methods";
import { PricingColumn, PricingColumnProps } from "../../ui/pricing-column";
import { Section } from "../../ui/section";

interface PricingProps {
  title?: string | false;
  description?: string | false;
  plans?: PricingColumnProps[] | false;
  className?: string;
}

export default function Pricing({
  title = "Выберите тариф",
  description = "Высокое качество, доступное всем",
  plans = [
    {
      name: "Подписка месяц",
      description: "200 ₽",
      price: 180,
 
      cta: {
        variant: "default",
        label: "Купить VPN",
        href: "/docs/getting-started/introduction",
      },
      features: [
        "Трафик: безлимитный",
        "Скорость: до 250 Мбит",
        "Шифрование: авто",
        "Техподдержка: есть",
        "Кол-во устройств: 1",
      ],
      variant: "default",
    
    },
    {
      name: "Подписка 3 месяца",
      icon: <User className="size-4" />,
      description: "600 ₽",
      price: 510,
      
      cta: {
        variant: "default",
        label: "Купить VPN",
        href: siteConfig.pricing.pro,
      },
      features: [
        "Трафик: безлимитный",
        "Скорость: до 250 Мбит",
        "Шифрование: авто",
        "Техподдержка: есть",
        "Кол-во устройств: 1",
      ],
      variant: "glow-brand",
    },
    {
      name: "Подписка 6 месяцев",
      icon: <Users className="size-4" />,
      description: "1100 ₽",
      price: 970,
      
      cta: {
        variant: "default",
        label: "Купить VPN",
        href: siteConfig.pricing.team,
      },
      features: [
        "Трафик: безлимитный",
        "Скорость: до 250 Мбит",
        "Шифрование: авто",
        "Техподдержка: есть",
        "Кол-во устройств: 1",
      ],
      variant: "glow",
    },
    {
      name: "Подписка 12 месяцев",
      icon: <Users className="size-4" />,
      description: "2000 ₽",
      price: 1830,

      cta: {
        variant: "default",
        label: "Купить VPN",
        href: siteConfig.pricing.team,
      },
      features: [
        "Трафик: безлимитный",
        "Скорость: до 250 Мбит",
        "Шифрование: авто",
        "Техподдержка: есть",
        "Кол-во устройств: 1",
      ],
      variant: "glow",
    },
  ],
  className = "",
}: PricingProps) {
  return (
    <Section className={cn(className)}>
      <div className="mx-auto flex max-w-6xl mt-10 flex-col items-center ">
        {(title || description) && (
          <div className="flex flex-col items-center gap-2 md:mt-16 bg:mt-40  px-2 text-center  ">
            {title && (
              <h2 className="text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
                {title}
              </h2>
            )}
            {description && (
              <p className="text-md text-muted-foreground max-w-[600px] font-medium sm:text-xl">
                {description}
              </p>
            )}
          </div>
        )}
        {plans !== false && plans.length > 0 && (
          <div className="max-w-container mx-auto grid grid-cols-1 mt-8 gap-8 sm:grid-cols-4 lg:grid-cols-4">
            {plans.map((plan) => (
              <PricingColumn
                key={plan.name}
                name={plan.name}
              
                description={plan.description}
                price={plan.price}
               
                cta={plan.cta}
                features={plan.features}
                variant={plan.variant}
                className={plan.className}
              />
            ))}
          </div>
        )}
      </div>
      <PaymentMethods />
    </Section>
  );
}
