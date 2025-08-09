import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

export default function RestaurantCleaningPage() {
  const features = [
    'Comprehensive kitchen cleaning, including equipment and exhaust systems.',
    'Dining area cleaning to create a welcoming ambiance for guests.',
    'Strict hygiene and sanitation practices to meet health code standards.',
    'Grease trap cleaning and management.',
    'Restroom cleaning and sanitization to ensure a pleasant guest experience.',
  ];

  return (
    <div className="bg-background">
      <header className="relative h-96">
        <Image
          src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1600&auto=format&fit=crop"
          alt="Interior of a clean restaurant"
          data-ai-hint="restaurant interior"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white uppercase tracking-wider">
            Restaurant Cleaning
          </h1>
        </div>
      </header>

      <main className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-primary">Excellence in Every Corner</h2>
              <p className="text-lg text-foreground/80">
                In the food service industry, cleanliness is non-negotiable. Reliable Shine Cleaning offers specialized restaurant cleaning services to ensure your establishment not only meets but exceeds health and safety standards. From the kitchen to the dining room, we provide meticulous cleaning that ensures a safe, hygienic, and inviting environment for both your staff and your patrons. Let us handle the clean, so you can focus on creating unforgettable dining experiences.
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
                src="https://i.ibb.co/0RRy4XTV/image.png"
                alt="Restaurant kitchen"
                data-ai-hint="commercial kitchen"
                width={500}
                height={500}
                sizes="(min-width: 768px) 500px, 100vw"
                unoptimized
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
