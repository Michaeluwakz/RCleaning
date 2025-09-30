"use client";

import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Star, ShieldCheck, Sparkle } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

const testimonials = [
  {
    name: 'Gabriel',
    title: 'Office Manager',
    icon: 'shield',
    quote:
      'Reliable And Shine Cleaning has transformed our office. Their attention to detail is unmatched, and our workspace has never been cleaner. Highly recommended for any business!',
  },
  {
    name: 'Sarah J.',
    title: 'Airbnb Host',
    icon: 'sparkle',
    quote:
      'As an Airbnb host, cleanliness is my top priority. This team consistently delivers 5-star quality cleaning, which has significantly boosted my guest reviews. They are professional and trustworthy.',
  },
];

export function Testimonials() {
  const plugins = typeof window !== 'undefined'
    ? [Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true })]
    : [];
  return (
    <section id="about" className="w-full py-10 md:py-20 lg:py-32 bg-muted">
      <div className="container px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center space-y-3 sm:space-y-4 mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tighter font-headline">
            WHAT OUR CLIENTS SAY
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-xl">
            We take pride in our work, and our clients' satisfaction is our greatest reward.
          </p>
        </div>
        {/* Mobile: autoplay carousel */}
        <div className="md:hidden">
          <Carousel opts={{ loop: true, align: 'start' }} plugins={plugins}>
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="basis-full">
                  <Card className="flex flex-col">
                    <CardHeader className="flex flex-col items-center gap-3 sm:gap-4 pb-3 sm:pb-4 sm:flex-row">
                      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-primary/10 flex items-center justify-center border">
                        {testimonial.icon === 'shield' && <ShieldCheck className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />}
                        {testimonial.icon === 'sparkle' && <Sparkle className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />}
                        {!testimonial.icon && <Sparkle className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />}
                      </div>
                      <div className="text-center sm:text-left">
                        <h3 className="text-base sm:text-lg font-bold">{testimonial.name}</h3>
                        <p className="text-xs sm:text-sm text-muted-foreground">{testimonial.title}</p>
                      </div>
                    </CardHeader>
                    <CardContent className="flex flex-col flex-1 pt-2 sm:pt-4 items-center sm:items-start">
                      <div className="flex mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <blockquote className="italic text-foreground/80 border-l-4 border-primary pl-3 sm:pl-4 flex-1 text-sm sm:text-base text-center sm:text-left">
                        &quot;{testimonial.quote}&quot;
                      </blockquote>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        {/* Desktop/Tablet: static grid */}
        <div className="hidden md:grid grid-cols-1 gap-5 sm:gap-8 md:grid-cols-2 lg:gap-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader className="flex flex-col items-center gap-3 sm:gap-4 pb-3 sm:pb-4 sm:flex-row">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-primary/10 flex items-center justify-center border">
                  {testimonial.icon === 'shield' && <ShieldCheck className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />}
                  {testimonial.icon === 'sparkle' && <Sparkle className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />}
                  {!testimonial.icon && <Sparkle className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />}
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-base sm:text-lg font-bold">{testimonial.name}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">{testimonial.title}</p>
                </div>
              </CardHeader>
              <CardContent className="flex flex-col flex-1 pt-2 sm:pt-4 items-center sm:items-start">
                <div className="flex mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="italic text-foreground/80 border-l-4 border-primary pl-3 sm:pl-4 flex-1 text-sm sm:text-base text-center sm:text-left">
                  &quot;{testimonial.quote}&quot;
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
