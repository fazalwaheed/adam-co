// app/components/AboutFirm.tsx
const AboutFirm = () => {
  const features = [
    { title: "Experience", icon: "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z", 
      desc: "Over a decade of legal expertise..." },
    { title: "Client Trust", icon: "M15 19.128a9.38 9.38 0 008.669-9.38 9.38 9.38 0 00-9.38-9.38 9.38 9.38 0 00-9.38 9.38 9.38 9.38 0 008.669 9.38zm0 0a8.668 8.668 0 01-8.668-8.668 8.668 8.668 0 018.668-8.668 8.668 8.668 0 018.668 8.668 8.668 8.668 0 01-8.668 8.668z M15 15.362c0 .68-1.077 1.362-2.48 1.362S10.077 16.042 10.077 15.362a4.965 4.965 0 014.923 0z",
       desc: "Built on strong relationships and personalized attention..." },
    { title: "Proven Results", icon: "M3 13.2l6-6m0 0 6 6m-6-6v17.4",
       desc: "Consistently delivering favorable outcomes..." }
  ];

  return (
    // app/components/AboutFirm.tsx
<section id="about" className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">About Our Firm</h2>
        <p className="section-subtitle text-center">
           Over a decade, ADAM & COMPANY. has been a trusted name in legal representation. We are committed to upholding the highest standards of integrity, professionalism, and client service.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {features.map((feature, index) => (
            <div key={index} className="dark-card">
              <div className="icon-box bg-amber-500 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d={feature.icon} />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutFirm;