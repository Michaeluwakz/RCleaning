"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = [
    { href: '/#services', label: 'Services' },
    { href: '/about', label: 'About' },
    { href: '/quote', label: 'Quote' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-primary text-primary-foreground">
      <div className="container flex h-16 items-center">
        <div className="flex items-center md:flex-1">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="https://i.ibb.co/W4RNtQbz/image-removebg-preview.png"
              alt="Reliable And Shine Cleaning Logo"
              width={200}
              height={50}
              sizes="200px"
              priority
              className="h-12 w-auto"
            />
          </Link>
        </div>
        <nav className="hidden items-center justify-center space-x-6 text-sm font-medium md:flex md:flex-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-primary-foreground/80 transition-colors hover:text-primary-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <Button asChild variant="secondary" className="hidden sm:inline-flex">
            <Link href="/quote">Get Your Free Quote</Link>
          </Button>
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="secondary" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs" aria-label="Mobile navigation menu">
              <div className="flex flex-col gap-6 pt-6">
                <Link href="/" className="mr-6 flex items-center space-x-2" onClick={() => setIsMenuOpen(false)}>
                  <Image
                    src="https://i.ibb.co/W4RNtQbz/image-removebg-preview.png"
                    alt="Reliable And Shine Cleaning Logo"
                    width={200}
                    height={50}
                    sizes="200px"
                    className="h-12 w-auto"
                  />
                </Link>
                <nav>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="main-nav">
                      <AccordionTrigger className="text-base">Navigate</AccordionTrigger>
                      <AccordionContent>
                        <div className="grid gap-3">
                          {navLinks.map((link) => (
                            <Link
                              key={link.href}
                              href={link.href}
                              onClick={() => setIsMenuOpen(false)}
                              className="text-base font-medium text-foreground/80 transition-colors hover:text-foreground"
                            >
                              {link.label}
                            </Link>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </nav>
                <Button asChild variant="secondary">
                  <Link href="/quote" onClick={() => setIsMenuOpen(false)}>Get Your Free Quote</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
