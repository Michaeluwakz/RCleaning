import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

const features = [
  'Flexible contract',
  'One low monthly fee',
  'No cancellation fees',
];

export function Pricing() {
  return (
    <section id="quote" className="w-full py-12 md:py-24 lg:py-32 bg-card">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight font-headline">
            PICK THE PLAN THAT BEST SUITS YOUR NEEDS
          </h2>
        </div>
        <div className="mx-auto w-full max-w-sm space-y-2">
          <div className="flex flex-col items-center sm:items-start gap-4 my-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-accent" />
                <span className="text-lg">{feature}</span>
              </div>
            ))}
          </div>
          <Button type="submit" size="lg" className="w-full">
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
}
