import Link from 'next/link';

export default function QuotePage() {
  return (
    <div className="bg-background text-foreground">
      <header className="bg-white py-12 md:py-20 text-center">
        <div className="container px-4 md:px-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary uppercase tracking-wider">
            OUR PRICES
          </h1>
        </div>
      </header>

      <main className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-base md:text-lg">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary text-center mb-8">
              REQUEST A CUSTOMIZED QUOTE
            </h2>
            <p className="mb-6">
              At Reliable Shine Cleaning, we understand that every business is
              unique, and so are its cleaning needs. That’s why we don’t
              believe in one-size-fits-all pricing. Instead, we offer
              customized quotes tailored to your specific requirements.
            </p>
            <p className="mb-6">
              Our experienced team will work closely with you to assess your
              cleaning needs and develop a personalized cleaning plan that
              fits your budget and schedule. Whether you need daily, weekly,
              or monthly cleaning services, we’ve got you covered.
            </p>
            <p className="mb-6 text-center">
              To request a customized quote, simply call us at{' '}
              <a
                href="tel:01616670902"
                className="text-primary underline font-semibold hover:text-primary/80"
              >
                0161 667 0902
              </a>
              . Our friendly representatives are available to discuss your
              cleaning needs in detail and provide a free consultation.
            </p>
            <p className="font-semibold text-center mt-12 text-sm md:text-base">
              Take the first step towards a cleaner, healthier, and more
              productive workspace. Contact us today!
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
