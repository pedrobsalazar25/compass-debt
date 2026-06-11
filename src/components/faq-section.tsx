import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { FaqItem } from "@/lib/site-content";

interface FaqSectionProps {
  title: string;
  items: readonly FaqItem[];
}

export function FaqSection({ title, items }: FaqSectionProps) {
  return (
    <section className="section-band">
      <div className="page-shell">
        <div className="section-heading max-w-2xl">
          <p className="eyebrow">Answers that keep things clear</p>
          <h2 className="font-display text-3xl font-semibold tracking-normal text-foreground md:text-4xl">
            {title}
          </h2>
        </div>
        <div className="glass-panel mt-8 p-4 md:p-6">
          <Accordion type="single" collapsible className="w-full">
            {items.map((item, index) => (
              <AccordionItem key={item.question} value={`item-${index}`} className="border-border/60">
                <AccordionTrigger className="text-left font-display text-base font-medium text-foreground hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="pr-6 text-sm leading-7 text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
