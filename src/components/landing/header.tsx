"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from '@/components/ui/sheet';
import { Menu, ChevronRight, Phone, Mail } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = [
    { href: '/#services', label: 'Services' },
    { href: '/about', label: 'About' },
    { href: '/quote', label: 'Quote' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-primary/60 backdrop-blur-sm md:bg-primary md:backdrop-blur-0 text-primary-foreground">
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
            <SheetContent side="right" className="w-full max-w-xs bg-primary text-primary-foreground" aria-label="Mobile navigation menu">
              <div className="flex h-full flex-col">
                <SheetTitle className="sr-only">Mobile navigation</SheetTitle>
                <SheetDescription className="sr-only">Primary navigation links and actions</SheetDescription>
                <div className="pt-6 px-6">
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
                </div>
                <nav className="mt-6 flex-1 overflow-auto px-6">
                  <ul className="space-y-3">
                    {navLinks.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          onClick={() => setIsMenuOpen(false)}
                          className="flex items-center justify-between rounded-lg px-4 py-3 bg-primary-foreground/10 hover:bg-primary-foreground/15 transition-colors"
                        >
                          <span className="text-base font-medium">{link.label}</span>
                          <ChevronRight className="h-4 w-4" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
                <div className="px-6 pb-6 space-y-3">
                  <Button asChild variant="secondary" className="w-full">
                    <Link href="/quote" onClick={() => setIsMenuOpen(false)}>Get Your Free Quote</Link>
                  </Button>
                  <div className="grid grid-cols-2 gap-3">
                    <a href="tel:01616670902" className="flex items-center justify-center gap-2 rounded-lg px-3 py-2 bg-primary-foreground/10 hover:bg-primary-foreground/15 transition-colors">
                      <Phone className="h-4 w-4" />
                      <span className="text-sm font-medium">Call</span>
                    </a>
                    <a href="mailto:support@reliableshinecleaning.co.uk" className="flex items-center justify-center gap-2 rounded-lg px-3 py-2 bg-primary-foreground/10 hover:bg-primary-foreground/15 transition-colors">
                      <Mail className="h-4 w-4" />
                      <span className="text-sm font-medium">Email</span>
                    </a>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
