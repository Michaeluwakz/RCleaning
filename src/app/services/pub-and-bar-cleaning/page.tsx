import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

export default function PubAndBarCleaningPage() {
  const features = [
    'Deep cleaning of bar areas, including sticky floors and surfaces.',
    'Sanitization of restrooms to maintain a high standard of hygiene.',
    'Front-of-house cleaning to create a welcoming atmosphere.',
    'Back-of-house and cellar cleaning.',
    'Flexible after-hours scheduling to ensure no disruption to your business.',
  ];

  return (
    <div className="bg-background">
      <header className="relative h-96">
        <Image
          src="https://i.ibb.co/FqcFt1ty/image.png"
          alt="A lively and clean pub"
          data-ai-hint="bar interior"
          fill
          sizes="100vw"
          unoptimized
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white uppercase tracking-wider">
            Pub and Bar Cleaning
          </h1>
        </div>
      </header>

      <main className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-primary">A Clean Slate for Every Patron</h2>
              <p className="text-lg text-foreground/80">
                A clean and well-maintained pub or bar is essential for attracting and retaining customers. Reliable Shine Cleaning provides thorough and reliable cleaning services tailored to the unique environment of pubs and bars. We tackle everything from sticky floors to sparkling restrooms, ensuring your establishment is always a clean, safe, and enjoyable place for your patrons to unwind. With our flexible scheduling, we work around your hours to keep your business shining.
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
                src="https://i.ibb.co/PGkycyjY/image.png"
                alt="Pub interior"
                data-ai-hint="pub interior"
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
