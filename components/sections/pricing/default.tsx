import { Section } from "../../ui/section";
import { User, Users } from "lucide-react";
import { siteConfig } from "@/config/site";
import { PricingColumn, PricingColumnProps } from "../../ui/pricing-column";
import { ReactNode } from "react";

interface PricingProps {
  title?: string;
  description?: string;
  plans?: PricingColumnProps[] | false;
}

export default function Pricing({
  title = "Build your dream landing page, today.",
  description = "Get lifetime access to all the components. No recurring fees. Just simple, transparent pricing.",
  plans = [
    {
      name: "Free",
      description: "For everyone starting out on a website for their big idea",
      price: 0,
      priceNote: "Free and open-source forever.",
      cta: {
        variant: "glow",
        label: "Get started for free",
        href: "/docs/getting-started/introduction",
      },
      features: [
        "9 landing page sections",
        "36 components",
        "5 custom animations",
      ],
      variant: "default",
    },
    {
      name: "Pro",
      icon: <User className="size-4" />,
      description: "For early-stage founders, solopreneurs and indie devs",
      price: 99,
      priceNote: "Lifetime access. Free updates. No recurring fees.",
      cta: {
        variant: "default",
        label: "Get all-access",
        href: siteConfig.pricing.pro,
      },
      features: [
        `${siteConfig.stats.sections} landing page sections`,
        `${siteConfig.stats.components} components`,
        `${siteConfig.stats.illustrations} illustrations`,
        `${siteConfig.stats.animations} custom animations`,
      ],
      variant: "glow-brand",
    },
    {
      name: "Pro Team",
      icon: <Users className="size-4" />,
      description: "For teams and agencies working on cool products together",
      price: 499,
      priceNote: "Lifetime access. Free updates. No recurring fees.",
      cta: {
        variant: "default",
        label: "Get all-access for your team",
        href: siteConfig.pricing.team,
      },
      features: [
        "All the templates, components and sections available for your entire team",
      ],
      variant: "glow",
    },
  ],
}: PricingProps) {
  return (
    <Section>
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12">
        <div className="flex flex-col items-center gap-4 px-4 text-center sm:gap-8">
          <h2 className="text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
            {title}
          </h2>
          <p className="text-md text-muted-foreground max-w-[600px] font-medium sm:text-xl">
            {description}
          </p>
        </div>
        {plans !== false && plans.length > 0 && (
          <div className="max-w-container mx-auto grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {plans.map((plan) => (
              <PricingColumn
                key={plan.name}
                name={plan.name}
                icon={plan.icon}
                description={plan.description}
                price={plan.price}
                priceNote={plan.priceNote}
                cta={plan.cta}
                features={plan.features}
                variant={plan.variant}
              />
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}
