import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

export default function BankCleaningPage() {
  const features = [
    'Secure cleaning protocols that respect sensitive financial environments.',
    'After-hours cleaning to avoid disrupting banking operations.',
    'Disinfection of high-touch areas including ATMs, counters, and waiting areas.',
    'Professional appearance maintenance for customer-facing areas.',
    'Compliance with financial industry cleanliness standards.',
  ];

  return (
    <div className="bg-background">
      <header className="relative h-72 md:h-96">
        <img
          src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1000&auto=format&fit=crop"
          alt="Clean bank interior"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-wider text-center">
            Bank Cleaning
          </h1>
        </div>
      </header>

      <main className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-primary text-center md:text-left">Professional Banking Environment Maintenance</h2>
              <p className="text-base md:text-lg text-foreground/80 text-center md:text-left">
                At Reliable Shine Cleaning, we understand the importance of maintaining a pristine, professional appearance in financial institutions. Our specialized bank cleaning services ensure that your facility maintains the highest standards of cleanliness and hygiene, creating a welcoming environment that builds customer trust and confidence. We work discreetly and efficiently to maintain the professional image your institution requires.
              </p>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <p className="text-foreground/80">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center">
               <img 
                src="https://i.ibb.co/hFfP2jTv/image.png" 
                alt="Bank cleaning in action" 
                className="w-full h-auto rounded-lg object-cover shadow-lg"
              />
            </div>
          </div>
          <div className="text-center mt-16">
            <Button size="lg" asChild>
              <Link href="/quote">Get Your Free Quote</Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
