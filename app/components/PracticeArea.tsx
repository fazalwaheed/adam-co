// app/components/PracticeAreas.tsx
import Link from 'next/link';

const PracticeAreas = () => {
  const areas = [
    { title: "Litigation", icon: "M12 15v3m-6-6V9m6 6h6v-6m-6 6l-6-6 6-6", 
      desc: "We Manage a diverse caseload involving civil & criminal litigation, service matters, labour laws conflicts, family law disputes, and arbitration." },
   { title: "Civil Laws", icon: "M12 6v6m0 0v6m0-6h6m-6 0H6", 
    desc: "Skilled representation in civil litigations cases including  property disputes, personal injury claims, financial embezzlement cases, Specific Performance and Cancellation of Agreements, Employer and Employees Disputes and Landlord and tenant conflicts." },
    
    { title: "Corporate Law", icon: "M12 6v6m0 0v6m0-6h6m-6 0H6", 
      desc: "Provide legal guidance/advised the company’s management & other corporate clients on various legal issues including contract interpretation, regulatory compliance, employment matters, risk management and intellectual property matters , Conducted legal research and prepared legal brief to support case strategies and ensure compliance with statutory laws and precedents of superior courts." },
    { title: "Real Estate Law",
       icon: "M2.25 12l8.954-8.954a1.5 1.5 0 012.122 0L22.25 12M2.25 12l8.954 8.954a1.5 1.5 0 002.122 0L22.25 12M2.25 12c5.591 0 10.5-4.467 10.5-10.5S17.75 1.5 23.25 1.5c5.591 0 10.5 4.467 10.5 10.5S28.841 22.5 23.25 22.5c-5.591 0-10.5-4.467-10.5-10.5z",
        desc: " Representation in property transactions,Litigation ,Acquisition of Land Dispute , Inheretance ,Landlord and tenants disputes , and agreements to sell movable and immovable properties." },
    { title: "Contracts Drafting - Vetting & Negotiations  ", icon: "M12 21a9.004 9.004 0 009-9H3a9.004 9.004 0 009 9z M18 10a3 3 0 00-6 0m6 0a3 3 0 006 0",
       desc: "Draft review & negotiates legal documents, including commercial contracts, lease agreements, company policies, agreement to sell moveable & immovable properties, employment contracts, and pleadings." },
    { title: "Family Law", icon: "M21 8.25c0-2.485-2.09-4.5-4.688-4.5H5.688C3.09 3.75 1 5.765 1 8.25v12c0 2.485 2.09 4.5 4.688 4.5h10.624c2.592 0 4.688-2.015 4.688-4.5V8.25ZM12 15.75a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z", 
      desc: " Guidance and Litigation of Family laws,Guardian and wards inter alia through divorce , Khula , Dissolution of Marriage and Custody Matters ." },
  ];

  return (
    // app/components/PracticeAreas.tsx
<section id="practice-areas" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Practice Areas</h2>
        <p className="section-subtitle text-center">Our experienced attorneys provide expert legal services across a wide range of practice areas</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {areas.map((area, index) => (
            <div key={index} className="card">
              <div className="icon-box">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d={area.icon} />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">{area.title}</h3>
              <p className="text-gray-700 mb-4">{area.desc}</p>
              <Link href="#contact" className="text-amber-500 font-medium flex items-center">
  Learn More
  <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 5l5 5m0 0l-5 5m5-5H7" />
  </svg>
</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;