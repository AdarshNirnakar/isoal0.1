import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function V1FaqPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mt-10 mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-gray-600">
              Find answers to common questions about ISAOL and our programs.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">General Questions</h2>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border rounded-lg p-2">
                <AccordionTrigger className="text-lg font-medium px-4">
                Is the session free?
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4 pt-2">
                Yes, it’s completely free.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border rounded-lg p-2">
                <AccordionTrigger className="text-lg font-medium px-4">
                Do I need prior international experience?
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4 pt-2">
                No—our programs are designed for professionals at all stages.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border rounded-lg p-2">
                <AccordionTrigger className="text-lg font-medium px-4">
                What if I can’t join live?
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4 pt-2">
                No problem; we’ll send you a recording after the session.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border rounded-lg p-2">
                <AccordionTrigger className="text-lg font-medium px-4">
                  What if I can&apos;t attend the live session?
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4 pt-2">
                  Register anyway, and we&apos;ll send you a recording of the
                  session. However, we recommend attending live if possible, as
                  it allows for real-time interaction and personalized insights.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Still Have Questions?</h2>
            <p className="text-lg text-gray-700 mb-8">
              Contact us directly or register for our free 30-minute session to
              get personalized answers to your questions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg">Contact Us</Button>
              <Button size="lg" variant="outline">
                Register for Free Session
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
