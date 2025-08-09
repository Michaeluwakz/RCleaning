import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Building, ShoppingBag, ShieldCheck, Utensils, Martini, Home } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    icon: <Building className="h-10 w-10 text-primary" />,
    title: 'Office Cleaning',
    description:
      'We provide top-tier cleaning services for office spaces, ensuring a pristine and productive environment for your employees and clients.',
    href: '/services/office-cleaning',
  },
  {
    icon: <ShoppingBag className="h-10 w-10 text-primary" />,
    title: 'Retail Space Cleaning',
    description:
      'Our team specializes in maintaining the cleanliness and appeal of retail stores, creating a welcoming atmosphere for your customers.',
    href: '/services/retail-space-cleaning',
  },
  {
    icon: <Utensils className="h-10 w-10 text-primary" />,
    title: 'Restaurant Cleaning',
    description:
      'Keep your establishment pristine with our specialized restaurant cleaning services, ensuring a safe and appealing dining experience for your patrons.',
    href: '/services/restaurant-cleaning',
  },
  {
    icon: <Martini className="h-10 w-10 text-primary" />,
    title: 'Pub and Bar Cleaning',
    description:
      'From the front of the house to the back, we provide comprehensive cleaning for pubs and bars, helping you maintain a welcoming and hygienic environment.',
    href: '/services/pub-and-bar-cleaning',
  },
  {
    icon: <Home className="h-10 w-10 text-primary" />,
    title: 'Airbnb Cleaning',
    description:
      'Impress your guests with our reliable Airbnb cleaning services. We ensure your property is spotless and ready for every check-in, helping you get 5-star reviews.',
    href: '/services/airbnb-cleaning',
  },
];

export function Services() {
  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-card">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
            HERE'S OUR SERVICES
          </h2>
        </div>
        <div className="mx-auto grid max-w-5xl items-stretch justify-center gap-8 grid-cols-1 sm:grid-cols-2 md:gap-12 lg:grid-cols-3 mt-12">
          {services.map((service, index) => (
            <Card
              key={index}
              className="h-full transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg text-center flex flex-col"
            >
              <CardHeader className="pb-4 items-center">
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-2xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center flex-1">
                <CardDescription className="text-base min-h-[100px] flex-1">
                  {service.description}
                </CardDescription>
                <Button variant="outline" className="mt-4" asChild>
                  <Link href={service.href}>Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
