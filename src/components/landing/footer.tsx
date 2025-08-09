import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';
import Image from 'next/image';

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
      text: '40 Symond Road, Great, Manchester, M9 6QS, United Kingdom',
      href: '#',
    },
  ];

  return (
    <footer id="contact" className="bg-primary text-primary-foreground">
      <div className="container py-12 px-4 md:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="https://i.ibb.co/W4RNtQbz/image-removebg-preview.png"
                alt="Reliable And Shine Cleaning Logo"
                width={250}
                height={60}
                sizes="250px"
                unoptimized
                className="h-14 w-auto"
              />
            </Link>
            <p className="text-primary-foreground/80">
              A LARGE VARIETY OF PREMIUM-QUALITY CLEANING SERVICES, SINCE 2020.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold uppercase tracking-wider">Contact</h4>
            <ul className="space-y-2">
              {contactDetails.map((detail, index) => (
                <li key={index}>
                  <a
                    href={detail.href}
                    className="flex items-center text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {detail.icon}
                    <span>{detail.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold uppercase tracking-wider">Hours</h4>
            <ul className="space-y-1 text-primary-foreground/80">
              <li>Mon - Fri: 06:00 am - 06:00 pm</li>
              <li>Sat - Sun: 07:00 am - 06:00 pm</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold uppercase tracking-wider">Navigate</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/60">
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
