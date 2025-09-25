import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

export default function OfficeCleaningPage() {
  const features = [
    'Customized cleaning plans to fit your office schedule and needs.',
    'Disinfection of high-touch surfaces to ensure a hygienic workspace.',
    'Eco-friendly cleaning products that are safe for your employees.',
    'Trash removal, recycling, and restocking of essential supplies.',
    'Floor care including vacuuming, mopping, and carpet cleaning.',
  ];

  return (
    <div className="bg-background">
      <header className="relative h-72 md:h-96">
        <Image
          src="https://i.ibb.co/KpV1VcYq/image.png"
          alt="Clean office space"
          data-ai-hint="office interior"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-wider text-center">
            Office Cleaning
          </h1>
        </div>
      </header>

      <main className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-primary text-center md:text-left">A Clean Office is a Productive Office</h2>
              <p className="text-base md:text-lg text-foreground/80 text-center md:text-left">
                At Reliable Shine Cleaning, we understand that a clean and organized office environment is crucial for productivity, employee morale, and making a positive impression on clients. Our professional office cleaning services are designed to maintain a pristine workspace, allowing you to focus on what matters most—running your business. We handle everything from daily upkeep to deep cleaning, ensuring your office is always welcoming and professional.
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
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1000&auto=format&fit=crop"
                alt="Office cleaning in action"
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
