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

            {/* <h2 className="text-2xl font-bold mt-12 mb-8">
              Higher Studies Questions
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-5" className="border rounded-lg p-2">
                <AccordionTrigger className="text-lg font-medium px-4">
                  How does ISAOL help with university admissions?
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4 pt-2">
                  ISAOL provides you with direct strategies to approach
                  universities, craft compelling applications, and secure
                  scholarships without expensive intermediaries. Our programs
                  give you insider knowledge on what admissions committees are
                  looking for and how to position yourself effectively.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="border rounded-lg p-2">
                <AccordionTrigger className="text-lg font-medium px-4">
                  Can ISAOL help with specific countries or universities?
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4 pt-2">
                  Yes. Our programs cover strategies for universities across the
                  globe, including the US, UK, Canada, Australia, and Europe. We
                  can provide tailored guidance based on your target
                  institutions and countries.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7" className="border rounded-lg p-2">
                <AccordionTrigger className="text-lg font-medium px-4">
                  How much can I save compared to traditional consultancies?
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4 pt-2">
                  On average, our participants save 50%+ compared to traditional
                  education consultancies. Beyond the financial savings, you
                  gain valuable skills and knowledge that empower you to
                  navigate future opportunities independently.
                </AccordionContent>
              </AccordionItem>
            </Accordion> */}

            {/* <h2 className="text-2xl font-bold mt-12 mb-8">
              Career Development Questions
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-8" className="border rounded-lg p-2">
                <AccordionTrigger className="text-lg font-medium px-4">
                  How does ISAOL help with international job placements?
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4 pt-2">
                  ISAOL equips you with strategies to build a global
                  professional network, master cross-cultural interviews, and
                  position yourself effectively in international markets. We
                  focus on direct approaches that bypass traditional recruitment
                  agencies and their high fees.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-9" className="border rounded-lg p-2">
                <AccordionTrigger className="text-lg font-medium px-4">
                  I'm from a non-traditional background. Is Super 30 right for
                  me?
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4 pt-2">
                  Super 30 is specifically designed for individuals from
                  non-traditional backgrounds like security, farming,
                  homemaking, etc. The program helps you transform your unique
                  perspective and experience into competitive advantages in the
                  global marketplace.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-10" className="border rounded-lg p-2">
                <AccordionTrigger className="text-lg font-medium px-4">
                  I'm returning to work after a break. How can Second Innings
                  help?
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4 pt-2">
                  Second Innings provides tailored strategies for professionals
                  restarting their careers. The program helps you rebrand
                  yourself, leverage your existing expertise, update your
                  skills, and reconnect with modern workplace dynamics. We've
                  helped numerous returning mothers and professionals
                  successfully re-enter the workforce.
                </AccordionContent>
              </AccordionItem>
            </Accordion> */}

            {/* <h2 className="text-2xl font-bold mt-12 mb-8">Program-Specific Questions</h2>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-11" className="border rounded-lg p-2">
                <AccordionTrigger className="text-lg font-medium px-4">
                  What is the Global Fusion Program?
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4 pt-2">
                  The Global Fusion Program is an immersive learning environment that combines virtual reality
                  simulations, live cross-cultural exchanges, and AI-powered career insights. It provides a dynamic,
                  interactive experience that prepares you for global opportunities through real-time collaboration.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-12" className="border rounded-lg p-2">
                <AccordionTrigger className="text-lg font-medium px-4">
                  How does the Founders Cohort work?
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4 pt-2">
                  The Founders Cohort provides hands-on guidance for first-time startup founders. You'll receive
                  mentorship from seasoned entrepreneurs, participate in peer networking, and gain practical tools to
                  launch and scale your business. The program covers everything from idea validation to securing
                  funding.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-13" className="border rounded-lg p-2">
                <AccordionTrigger className="text-lg font-medium px-4">
                  What is the duration of ISAOL programs?
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4 pt-2">
                  Program durations vary based on the specific track and your goals. Most programs range from 8-12
                  weeks, with flexible scheduling options to accommodate different time zones and commitments. The free
                  30-minute session will provide more details on the specific program that interests you.
                </AccordionContent>
              </AccordionItem>
            </Accordion> */}
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
