import Image from 'next/image';
import { Shield, Star, Users } from 'lucide-react';

export default function AboutPage() {
  const chooseUsReasons = [
    {
      icon: <Shield className="w-8 h-8 group-hover:text-green-500 transition-colors" />,
      title: 'Reliability & Trust',
      description:
        'Our team is fully insured and bonded, providing peace of mind with every clean. We build lasting relationships based on trust and consistently high standards.',
    },
    {
      icon: <Star className="w-8 h-8 group-hover:text-green-500 transition-colors" />,
      title: 'Quality Service',
      description:
        'We use premium, eco-friendly cleaning products and cutting-edge equipment to deliver a superior clean every time, tailored to your specific needs.',
    },
    {
      icon: <Users className="w-8 h-8 group-hover:text-green-500 transition-colors" />,
      title: 'Experienced Team',
      description:
        'Our professional cleaners are meticulously trained and dedicated to perfection. With years of experience, we guarantee a spotless finish for your workspace.',
    },
  ];

  return (
    <div className="bg-background">
      <header className="bg-white py-12 md:py-20 text-center">
        <div className="container px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-primary uppercase tracking-wider">
            ABOUT US
          </h1>
          <p className="mt-2 text-lg md:text-xl text-foreground/80">
            A Short Story About Reliable and Shine Cleaning
          </p>
        </div>
      </header>
      
      <main>
        <section className="bg-gray-100 py-16 md:py-24">
            <div className="container px-4 md:px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6 text-foreground">
                        <h2 className="text-3xl font-bold text-primary">Our Journey to a Brighter Clean</h2>
                        <p>
                            Founded by Sandra P. with a passion for creating pristine environments, Reliable Shine Cleaning began its journey with a simple mission: to provide dependable, high-quality cleaning services that businesses can count on. We believe a clean space is the foundation for success and well-being.
                        </p>
                        <p>
                            From our humble beginnings, we have grown into a trusted name in the cleaning industry, known for our meticulous attention to detail and unwavering commitment to client satisfaction. Our team is the heart of our company, and we invest in their training and development to ensure they are equipped with the best tools and techniques in the industry.
                        </p>
                         <div className="flex items-center gap-4 pt-4">
                            <div className="bg-primary text-primary-foreground font-bold py-2 px-4 rounded-md">
                                Since 2020
                            </div>
                            <p className="text-foreground/80">Years of dedicated service and sparkling results.</p>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <Image
                        src="https://i.ibb.co/35CKp3wD/image.png"
                        alt="Reliable Shine Cleaning in action"
                        data-ai-hint="cleaning crew at work"
                        width={400}
                        height={400}
                        sizes="(min-width: 768px) 400px, 70vw"
                        unoptimized
                        className="w-full max-w-[400px] h-auto rounded-full object-cover aspect-square border-8 border-white shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </section>

        <section id="why-choose-us" className="py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary">
                NOT CONVINCED YET? WHY CHOOSE US
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {chooseUsReasons.map((reason, index) => (
                <div key={index} className="group text-center p-6 rounded-lg transition-all">
                  <div className="flex justify-center items-center mb-6">
                     <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary text-primary-foreground">
                        {reason.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-3">{reason.title}</h3>
                  <p className="text-foreground/80">{reason.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
