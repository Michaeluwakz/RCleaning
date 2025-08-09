import { Hero } from '@/components/landing/hero';
import { Intro } from '@/components/landing/intro';
import { Services } from '@/components/landing/services';
import { Testimonials } from '@/components/landing/testimonials';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Intro />
      <Services />
      <Testimonials />
    </>
  );
}
