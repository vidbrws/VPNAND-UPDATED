import { ReactNode } from "react";
import { siteConfig } from "@/config/site";

import { Apple, Smartphone, Laptop, Monitor, Server } from "lucide-react";

import { Badge } from "../../ui/badge";
import Logo from "../../ui/logo";
import { Section } from "../../ui/section";

interface LogosProps {
  title?: string;
  badge?: ReactNode | false;
  logos?: ReactNode[] | false;
  className?: string;
}

export default function Logos({
  title = "Доступно для всех устройств и платформ",
  badge = (
    <Badge variant="outline" className=" bg-gradient-to-b from-[#7ed981] to-[#5279a8] bg-clip-text text-transparent ">
      Кроссплатформенность и простота в использовании
    </Badge>
  ),
  logos = [
  <Logo key="ios" image={Apple} name="iOS" />,
  <Logo key="android" image={Smartphone} name="Android" />,
  <Logo key="macos" image={Laptop} name="macOS" />,
  <Logo key="windows" image={Monitor} name="Windows" />,
  <Logo key="linux" image={Server} name="Linux" />,
],
  className,
}: LogosProps) {
  return (
    <Section className={className}>
      <div className="max-w-container mx-auto flex flex-col items-center gap-8 text-center">
        <div className="flex flex-col items-center gap-6">
          {badge !== false && badge}
          <h2 className="text-md   font-semibold sm:text-2xl">{title}</h2>
        </div>
        {logos !== false && logos.length > 0 && (
          <div className="flex flex-wrap items-center justify-center gap-8">
            {logos}
          </div>
        )}
      </div>
    </Section>
  );
}
