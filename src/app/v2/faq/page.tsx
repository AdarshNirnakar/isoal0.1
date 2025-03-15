import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function FaqSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mt-10 mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Frequently Asked Questions</h2>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border rounded-lg p-2">
              <AccordionTrigger className="text-lg font-medium px-4">Is the session really free?</AccordionTrigger>
              <AccordionContent className="px-4 pb-4 pt-2">Absolutely—no cost to attend.</AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border rounded-lg p-2">
              <AccordionTrigger className="text-lg font-medium px-4">Can I join if I&apos;m returning to education later in life?</AccordionTrigger>
              <AccordionContent className="px-4 pb-4 pt-2">Yes! Our Second Innings track is designed just for you.</AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border rounded-lg p-2">
              <AccordionTrigger className="text-lg font-medium px-4">What if I can&apos;t attend live?</AccordionTrigger>
              <AccordionContent className="px-4 pb-4 pt-2">Register anyway, and we&apos;ll send you a recording.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
