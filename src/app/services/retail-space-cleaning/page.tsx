import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

export default function RetailSpaceCleaningPage() {
  const features = [
    'Impeccable cleaning of floors, windows, and shelving to attract customers.',
    'Sanitization of fitting rooms, restrooms, and high-traffic areas.',
    'Flexible scheduling to avoid disruption to your business hours.',
    'Specialized care for all types of flooring and surfaces.',
    'A clean, inviting storefront that enhances your brand image.',
  ];

  return (
    <div className="bg-background">
      <header className="relative h-96">
        <Image
          src="https://i.ibb.co/fV99fkWP/image.png"
          alt="Modern retail store"
          data-ai-hint="retail interior"
          fill
          sizes="100vw"
          unoptimized
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white uppercase tracking-wider">
            Retail Space Cleaning
          </h1>
        </div>
      </header>

      <main className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-primary">Make a Lasting First Impression</h2>
              <p className="text-lg text-foreground/80">
                The cleanliness of your retail space is a direct reflection of your brand. A spotless, well-maintained store not only attracts customers but also encourages them to stay longer and return. Reliable Shine Cleaning provides comprehensive retail cleaning services that ensure your space is always customer-ready. From shining floors to dust-free displays, we create a shopping environment that radiates quality and care.
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
                src="https://i.ibb.co/VWS4y1jM/image.png"
                alt="Retail space cleaning"
                data-ai-hint="shopping mall"
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
