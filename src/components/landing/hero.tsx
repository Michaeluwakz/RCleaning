import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative w-full min-h-[450px] md:min-h-[650px]" style={{ paddingTop: '56.71%' }}>
      <Image
        src="https://i.ibb.co/Dgw5brHc/Untitled-design.jpg"
        alt="A clean and modern office space"
        data-ai-hint="office cleaning"
        fill
        sizes="100vw"
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/30" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto space-y-4 bg-black/20 p-4 sm:p-6 md:p-8 rounded-lg">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-6xl font-headline uppercase bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
              WELCOME TO RELIABLE AND SHINE CLEANING
            </h1>
            <p className="text-base sm:text-lg text-gray-200 md:text-xl">
              A CLEAN WORKSPACE IS A PRODUCTIVE SPACE
            </p>
            <Button size="lg" className="mt-4" asChild>
              <Link href="/quote">Get Your Free Quote</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
