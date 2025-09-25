import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

export default function SchoolCleaningPage() {
  const features = [
    'Safe, non-toxic cleaning products suitable for educational environments.',
    'Comprehensive cleaning of classrooms, hallways, and common areas.',
    'Sanitization of high-touch surfaces to prevent illness spread.',
    'Specialized cleaning for science labs, gymnasiums, and cafeterias.',
    'Flexible scheduling to work around school hours and activities.',
  ];

  return (
    <div className="bg-background">
      <header className="relative h-72 md:h-96">
        <Image
          src="https://images.unsplash.com/photo-1523050854058-8df90110cfe1?q=80&w=1000&auto=format&fit=crop"
          alt="Clean school interior"
          data-ai-hint="school interior"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-wider text-center">
            School Cleaning
          </h1>
        </div>
      </header>

      <main className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-primary text-center md:text-left">Creating Healthy Learning Environments</h2>
              <p className="text-base md:text-lg text-foreground/80 text-center md:text-left">
                At Reliable Shine Cleaning, we recognize that clean, healthy schools are essential for student success and staff well-being. Our comprehensive school cleaning services are designed to maintain the highest standards of cleanliness and hygiene in educational facilities. We use safe, effective cleaning methods that create optimal learning environments while protecting the health of students, teachers, and staff.
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
                src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1000&auto=format&fit=crop"
                alt="School cleaning in action"
                data-ai-hint="cleaning supplies"
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
