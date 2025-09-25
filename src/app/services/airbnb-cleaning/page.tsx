import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

export default function AirbnbCleaningPage() {
  const features = [
    'Quick and efficient turnovers between guests.',
    'Hotel-quality cleaning to ensure 5-star reviews.',
    'Restocking of essentials like toiletries and coffee.',
    'Laundry service for linens and towels.',
    'Thorough inspection to ensure everything is perfect for the next guest.',
  ];

  return (
    <div className="bg-background">
      <header className="relative h-72 md:h-96">
        <Image
          src="https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=1600&auto=format&fit=crop"
          alt="A welcoming and clean Airbnb"
          data-ai-hint="modern apartment"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-wider text-center">
            Airbnb Cleaning
          </h1>
        </div>
      </header>

      <main className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-primary text-center md:text-left">Five-Star Cleanliness for Every Guest</h2>
              <p className="text-base md:text-lg text-foreground/80 text-center md:text-left">
                For Airbnb hosts, cleanliness is paramount to success. Positive reviews depend on providing a spotless and welcoming space for every guest. Reliable Shine Cleaning offers specialized Airbnb cleaning services designed for fast turnovers and impeccable results. We ensure your property is perfectly clean, sanitized, and restocked, ready to impress your next guest and earn you that coveted 5-star rating.
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
               <Image
                src="https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?q=80&w=1000&auto=format&fit=crop"
                alt="Airbnb bedroom"
                data-ai-hint="cozy bedroom"
                width={500}
                height={500}
                sizes="(min-width: 768px) 500px, 100vw"
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
