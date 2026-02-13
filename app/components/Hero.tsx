// app/components/Hero.tsx
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <section id="home" className="relative h-[70vh] md:h-screen flex items-center justify-center text-white">
      <Image
        src="/hero-bg.jpg"
        alt="Courthouse exterior"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 text-center max-w-4xl px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Protecting Your Rights <br />
          With <span className="text-amber-500">Integrity</span> and <span className="text-amber-500">Excellence</span>
        </h1>
        <p className="text-lg md:text-xl mb-8">Experienced legal representation for individuals and businesses</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="#contact" className="btn-primary flex items-center justify-center">
            Schedule Consultation →
          </Link>
          <Link
            href="#practice-areas"
            className="border-2 border-white text-white font-medium py-2 px-6 rounded-md hover:bg-white hover:text-gray-900 flex items-center justify-center"
          >
            Our Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;