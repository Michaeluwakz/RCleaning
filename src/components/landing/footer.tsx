import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';
import Image from 'next/image';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';

export function Footer() {
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/#services', label: 'Services' },
    { href: '/about', label: 'About' },
    { href: '/quote', label: 'Quote' },
    { href: '#contact', label: 'Contact' },
  ];

  const contactDetails = [
    {
      icon: <Phone className="w-4 h-4 mr-2" />,
      text: '0161 667 0902',
      href: 'tel:01616670902',
    },
    {
      icon: <Mail className="w-4 h-4 mr-2" />,
      text: 'support@reliableshinecleaning.co.uk',
      href: 'mailto:support@reliableshinecleaning.co.uk',
    },
    {
      icon: <MapPin className="w-4 h-4 mr-2" />,
      text: 'Symond Road, Great, Manchester, M9 6QS, United Kingdom',
      href: '#',
    },
  ];

  return (
    <footer id="contact" className="bg-primary text-primary-foreground">
      <div className="container py-10 md:py-12 px-4 sm:px-6">
        <div className="grid gap-8 sm:gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="https://i.ibb.co/W4RNtQbz/image-removebg-preview.png"
                alt="Reliable And Shine Cleaning Logo"
                width={250}
                height={60}
                sizes="(max-width: 640px) 180px, 250px"
                className="h-12 sm:h-14 w-auto"
              />
            </Link>
            <p className="text-primary-foreground/80 text-sm sm:text-base">
              A LARGE VARIETY OF PREMIUM-QUALITY CLEANING SERVICES, SINCE 2020.
            </p>
          </div>

          {/* Mobile accordion for sections */}
          <div className="sm:hidden">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="contact">
                <AccordionTrigger className="text-base">Contact</AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2">
                    {contactDetails.map((detail, index) => (
                      <li key={index}>
                        <a
                          href={detail.href}
                          className="flex items-center text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm sm:text-base"
                        >
                          {detail.icon}
                          <span>{detail.text}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="hours">
                <AccordionTrigger className="text-base">Hours</AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-1 text-primary-foreground/80 text-sm sm:text-base">
                    <li>Mon - Fri: 06:00 am - 06:00 pm</li>
                    <li>Sat - Sun: 07:00 am - 06:00 pm</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="navigate">
                <AccordionTrigger className="text-base">Navigate</AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2">
                    {navLinks.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm sm:text-base"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div className="space-y-4 hidden sm:block">
            <h4 className="font-semibold uppercase tracking-wider">Contact</h4>
            <ul className="space-y-2">
              {contactDetails.map((detail, index) => (
                <li key={index}>
                  <a
                    href={detail.href}
                    className="flex items-center text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm sm:text-base"
                  >
                    {detail.icon}
                    <span>{detail.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4 hidden sm:block">
            <h4 className="font-semibold uppercase tracking-wider">Hours</h4>
            <ul className="space-y-1 text-primary-foreground/80 text-sm sm:text-base">
              <li>Mon - Fri: 06:00 am - 06:00 pm</li>
              <li>Sat - Sun: 07:00 am - 06:00 pm</li>
            </ul>
          </div>

          <div className="space-y-4 hidden sm:block">
            <h4 className="font-semibold uppercase tracking-wider">Navigate</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm sm:text-base"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-6 sm:mt-8 border-t border-primary-foreground/20 pt-6 sm:pt-8 text-center text-xs sm:text-sm text-primary-foreground/60">
          <p>
            Copyright © {new Date().getFullYear()} Reliable And Shine Cleaning. All rights
            reserved.
          </p>
           <p>Powered by Reliable And Shine Cleaning</p>
        </div>
      </div>
    </footer>
  );
}
