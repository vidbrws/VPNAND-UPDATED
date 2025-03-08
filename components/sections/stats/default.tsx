import { Section } from "../../ui/section";
import { siteConfig } from "@/config/site";

export default function Stats() {
  return (
    <Section>
      <div className="container mx-auto max-w-[960px]">
        <div className="grid grid-cols-2 gap-12 sm:grid-cols-4">
          <div className="flex flex-col items-start gap-3 text-left">
            <div className="text-muted-foreground text-sm font-semibold">
              used by
            </div>
            <div className="flex items-baseline gap-2">
              <div className="from-foreground to-foreground dark:to-brand bg-linear-to-r bg-clip-text text-4xl font-medium text-transparent drop-shadow-[2px_1px_24px_var(--brand-foreground)] transition-all duration-300 sm:text-5xl md:text-6xl">
                {Math.round(siteConfig.stats.figma / 100) / 10}
              </div>
              <div className="text-brand text-2xl font-semibold">k</div>
            </div>
            <div className="text-muted-foreground text-sm font-semibold text-pretty">
              designers on Figma Community
            </div>
          </div>
          <div className="flex flex-col items-start gap-3 text-left">
            <div className="text-muted-foreground text-sm font-semibold">
              over
            </div>
            <div className="flex items-baseline gap-2">
              <div className="from-foreground to-foreground dark:to-brand bg-linear-to-r bg-clip-text text-4xl font-medium text-transparent drop-shadow-[2px_1px_24px_var(--brand-foreground)] transition-all duration-300 sm:text-5xl md:text-6xl">
                {siteConfig.stats.github}
              </div>
            </div>
            <div className="text-muted-foreground text-sm font-semibold text-pretty">
              clones and forks of the template on Github
            </div>
          </div>
          <div className="flex flex-col items-start gap-3 text-left">
            <div className="text-muted-foreground text-sm font-semibold">
              already
            </div>
            <div className="flex items-baseline gap-2">
              <div className="from-foreground to-foreground dark:to-brand bg-linear-to-r bg-clip-text text-4xl font-medium text-transparent drop-shadow-[2px_1px_24px_var(--brand-foreground)] transition-all duration-300 sm:text-5xl md:text-6xl">
                {Math.round(siteConfig.stats.cli / 100) / 10}
              </div>
              <div className="text-brand text-2xl font-semibold">k</div>
            </div>
            <div className="text-muted-foreground text-sm font-semibold text-pretty">
              installations with shadcn/ui CLI
            </div>
          </div>
          <div className="flex flex-col items-start gap-3 text-left">
            <div className="text-muted-foreground text-sm font-semibold">
              includes
            </div>
            <div className="from-foreground to-foreground dark:to-brand bg-linear-to-r bg-clip-text text-4xl font-medium text-transparent drop-shadow-[2px_1px_24px_var(--brand-foreground)] transition-all duration-300 sm:text-5xl md:text-6xl">
              {siteConfig.stats.components}
            </div>
            <div className="text-muted-foreground text-sm font-semibold text-pretty">
              React components and sections
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
