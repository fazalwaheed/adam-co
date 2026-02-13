// app/components/Attorneys.tsx
import Image from 'next/image';
import Link from 'next/link';

const Attorneys = () => {
  const attorneys = [
    { name: "Ghulam Nabi Niazi", title: "Senior Partner", 
      bio: "With over 12 years of experience...", image: "/GN.jpeg" },
    { name: "Wali Muhammad", title: "Partner",
       bio: "Wali Muhammad specializes in corporate law", image: "/wali.jpeg" },
    { name: "Akhtar Wali", title: "Partner", 
      bio: "Akhtar wali provides compassionate representation in family law matters", image: "/AKH.jpeg" }
  ];

  // Same email for all attorneys
  const commonEmail = "info@adamandcompany.com";

  return (
    <section id="attorneys" className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Our Attorneys</h2>
        <p className="section-subtitle text-center">Meet our team of experienced legal professionals</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {attorneys.map((attorney, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src={attorney.image}
                alt={attorney.name}
                width={300}
                height={450}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{attorney.name}</h3>
                <p className="text-amber-500 font-medium mb-4">{attorney.title}</p>
                <p className="text-gray-700 mb-6">{attorney.bio}</p>
                
                {/* Contact Links */}
                <div className="flex space-x-4">
                  {/* Twitter Icon (unchanged) */}
                  <Link 
                    href="#" 
                    className="text-gray-900 hover:text-amber-500"
                    aria-label={`Twitter - ${attorney.name}`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.55v-5.884c0-1.405-.027-3.198-1.944-3.198-1.944 0-2.246 1.517-2.246 3.093v6.001h-3.55V11.9h3.386v1.655h.05c0 .05.05.1.05.15h.05c.472-.9.845-1.85 1.745-1.85 1.895 0 2.246 1.517 2.246 3.093v6.001zm-10.17-13.8c0-1.944-1.517-3.461-3.461-3.461s-3.461 1.517-3.461 3.461 1.517 3.461 3.461 3.461 3.461-1.517 3.461-3.461zm-3.461 2.424c-1.05 0-1.944-.845-1.944-1.944s.845-1.944 1.944-1.944 1.944.845 1.944 1.944-.894 1.944-1.944 1.944z"/>
                    </svg>
                  </Link>
                  
                  {/* Email Icon - Same for all attorneys */}
                  <Link 
                    href={`mailto:${commonEmail}`}
                    className="text-gray-900 hover:text-amber-500"
                    aria-label={`Email - ${attorney.name}`}
                    title={`Contact ${attorney.name}`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 6 8-6v10zm-8-7L4 6h16l-8 6z"/>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Attorneys;