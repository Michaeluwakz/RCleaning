import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Building, ShoppingBag, ShieldCheck, Utensils, Martini, Home, Banknote, GraduationCap } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    icon: <Building className="h-8 w-8 md:h-10 md:w-10 text-primary" />,
    title: 'Office Cleaning',
    description:
      'We provide top-tier cleaning services for office spaces, ensuring a pristine and productive environment for your employees and clients.',
    href: '/services/office-cleaning',
  },
  {
    icon: <ShoppingBag className="h-8 w-8 md:h-10 md:w-10 text-primary" />,
    title: 'Retail Space Cleaning',
    description:
      'Our team specializes in maintaining the cleanliness and appeal of retail stores, creating a welcoming atmosphere for your customers.',
    href: '/services/retail-space-cleaning',
  },
  {
    icon: <Utensils className="h-8 w-8 md:h-10 md:w-10 text-primary" />,
    title: 'Restaurant Cleaning',
    description:
      'Keep your establishment pristine with our specialized restaurant cleaning services, ensuring a safe and appealing dining experience for your patrons.',
    href: '/services/restaurant-cleaning',
  },
  {
    icon: <Martini className="h-8 w-8 md:h-10 md:w-10 text-primary" />,
    title: 'Pub and Bar Cleaning',
    description:
      'From the front of the house to the back, we provide comprehensive cleaning for pubs and bars, helping you maintain a welcoming and hygienic environment.',
    href: '/services/pub-and-bar-cleaning',
  },
  {
    icon: <Home className="h-8 w-8 md:h-10 md:w-10 text-primary" />,
    title: 'Airbnb Cleaning',
    description:
      'Impress your guests with our reliable Airbnb cleaning services. We ensure your property is spotless and ready for every check-in, helping you get 5-star reviews.',
    href: '/services/airbnb-cleaning',
  },
  {
    icon: <Banknote className="h-8 w-8 md:h-10 md:w-10 text-primary" />,
    title: 'Bank Cleaning',
    description:
      'Maintain the highest standards of cleanliness in financial institutions with our secure, professional bank cleaning services that build customer trust.',
    href: '/services/bank-cleaning',
  },
  {
    icon: <GraduationCap className="h-8 w-8 md:h-10 md:w-10 text-primary" />,
    title: 'School Cleaning',
    description:
      'Create healthy learning environments with our comprehensive school cleaning services using safe, effective methods for educational facilities.',
    href: '/services/school-cleaning',
  },
];

export function Services() {
  return (
    <section id="services" className="w-full py-10 md:py-20 lg:py-32 bg-card">
      <div className="container px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center space-y-3 sm:space-y-4">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tighter font-headline">
            HERE'S OUR SERVICES
          </h2>
        </div>
        <div className="mx-auto grid max-w-5xl items-stretch justify-center gap-5 sm:gap-8 md:gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-8 sm:mt-12">
          {services.map((service, index) => (
            <Card
              key={index}
              className="h-full transition-transform duration-300 ease-in-out lg:hover:-translate-y-2 lg:hover:shadow-lg text-center flex flex-col"
            >
              <CardHeader className="pb-3 sm:pb-4 items-center">
                <div className="mb-3 sm:mb-4">{service.icon}</div>
                <CardTitle className="text-xl sm:text-2xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center flex-1">
                <CardDescription className="text-sm sm:text-base min-h-0 sm:min-h-[100px] flex-1">
                  {service.description}
                </CardDescription>
                <Button variant="outline" className="mt-4 w-full sm:w-auto" asChild>
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
