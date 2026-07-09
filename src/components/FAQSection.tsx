import ScrollReveal from "@/components/ScrollReveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is there a replay if I miss a session?",
    answer:
      "No. REST Reset is live group coaching, and the women in the room share real things. Sessions are recorded for Coach Pow's private notes only, never shared, never sent out, never posted. No replays are given, so what's shared in the room stays in the room. That's also why your commitment to all three evenings matters. Before you enroll, check that July 28 to 30, 7:00 to 9:30 PM, works for you.",
  },
  {
    question: "Do I have to speak or share?",
    answer:
      "You'll always be invited, never forced. Some women share a lot, some mostly listen, and both are welcome. Many participants say they felt safe enough to open up by Day 2, but that's always your choice.",
  },
  {
    question: "Is this a Bible study or coaching?",
    answer:
      "It's coaching, with Scripture woven through every evening. We use proven tools from CBT and mindfulness, and we anchor them in God's Word and His presence. You'll leave with practical skills for your mind and verses to stand on, side by side. Faith isn't an add-on here; it's the foundation.",
  },
  {
    question: "What if I'm not techie?",
    answer:
      "If you can open a Zoom link, you're ready. One tap and you're in. We'll send simple instructions before Day 1, and we're happy to help you test your setup beforehand.",
  },
  {
    question: "How do I pay?",
    answer:
      "Secure checkout via Xendit. GCash, Maya, and debit cards are all accepted. Your seat is confirmed the moment payment goes through.",
  },
];

const FAQSection = () => {
  return (
    <section className="section-calm bg-gradient-to-b from-background via-[hsl(270,20%,97%)] to-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-12">
          <ScrollReveal>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4 leading-tight">
              Questions You Might Be Carrying
            </h2>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.1}>
          <div className="bg-card rounded-2xl p-5 sm:p-7 md:p-8 shadow-soft border border-primary/10">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-b border-border/60 last:border-b-0"
                >
                  <AccordionTrigger className="text-left text-base sm:text-lg font-medium text-foreground py-5 hover:no-underline focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:rounded-md">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm sm:text-base text-muted-foreground leading-relaxed pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FAQSection;
