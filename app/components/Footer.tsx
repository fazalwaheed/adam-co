// app/components/Footer.tsx
import Link from 'next/link';
import Image from 'next/image'; // Add this import

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Social */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              {/* Replace SVG with Image Logo */}
              <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center overflow-hidden">
                <Image
                  src="/logo.PNG"  // Place your logo in public/logo.png
                  alt="ADAM & CO Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                  priority
                />
              </div>
              <span className="text-xl font-bold">ADAM & COMPANY</span>
            </div>
            <p className="text-gray-400 mb-4">Providing exceptional legal services with integrity, excellence, and dedication for over 12 years.</p>
            {/* Social icons commented out */}
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-amber-500 mb-4">Quick Links</h3>
            {['Home', 'About Us', 'Practice Areas', 'Our Attorneys'].map((link) => (
              <div key={link} className="mb-2"><Link href="#" className="text-gray-400 hover:text-white">{link}</Link></div>
            ))}
          </div>

          {/* Practice Areas */}
          <div>
            <h3 className="text-lg font-bold text-amber-500 mb-4">Practice Areas</h3>
            {['Litigation', 'Civil Laws', 'Corporate Law', 'Real Estate Law', 'Contracts Drafting - Vetting & Negotiations', 'Family law'].map((area) => (
              <div key={area} className="mb-2"><Link href="#" className="text-gray-400 hover:text-white">{area}</Link></div>
            ))}
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-amber-500 mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.995 1.995 0 01-2.828 0l-4.244-4.244a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-400"> Office No . 15 , 3rd floor , Mall 9 , G-9 Markaz<br />Islamabad -Pakistan</span>
              </div>
              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502.95l-1.498 4.493a1 1 0 01-.502.95c-.48.29-.987.515-1.505.674A7 7 0 003 14a7 7 0 007 7h3.28a1 1 0 00.948-.684l1.498-4.493a1 1 0 00-.502-.95l-1.498-4.493a1 1 0 00-.502-.95c-.48-.29-.987-.515-1.505-.674A7 7 0 0010 14a7 7 0 007 7m0 0a7 7 0 007-7m0 7a7 7 0 00-7-7" />
                </svg>
                <span className="text-gray-400">(+92)344-8552914</span>
              </div>
              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14v2H5v-2z" />
                </svg>
                <span className="text-gray-400">gnniaziadv@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <div>© 2026 ADAM & CO. All rights reserved.</div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white">Privacy Policy</Link>
            <Link href="#" className="hover:text-white">Terms of Service</Link>
            <Link href="#" className="hover:text-white">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;