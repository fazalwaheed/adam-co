// // app/components/Testimonials.tsx
// import Image from 'next/image';

// const Testimonials = () => {
//   const testimonials = [
//     { quote: "Justice & Co. provided exceptional legal guidance...", name: "Jennifer Williams", role: "Business Owner", avatar: "/jennifer.jpg" },
//     { quote: "I have worked with many law firms...", name: "Robert Thompson", role: "Real Estate Developer", avatar: "/robert.jpg" },
//     { quote: "The team handled my family law case with compassion...", name: "Maria Garcia", role: "Private Client", avatar: "/maria.jpg" }
//   ];

//   return (
//     <section className="py-12 bg-gray-50">
//       <div className="container mx-auto px-4">
//         <h2 className="section-title text-center">Client Testimonials</h2>
//         <p className="section-subtitle text-center">Don't just take our word for it — hear what our clients have to say</p>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
//           {testimonials.map((testimonial, index) => (
//             <div key={index} className="bg-white p-6 rounded-xl shadow-md relative overflow-hidden">
//               <div className="absolute top-4 right-4 text-gray-200 opacity-20 text-8xl font-bold pointer-events-none select-none">
//                 99
//               </div>
//               <div className="flex mb-4">
//                 {[...Array(5)].map((_, i) => (
//                   <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
//                     <path d="M9.049 2.917c1.927-2.823 6.05-2.823 7.977 0l2.197 3.295a8.004 8.004 0 01-1.467 10.068l-1.546 1.546a4.002 4.002 0 01-5.656 0L9.049 17.817c-1.927-2.823-6.05-2.823-7.977 0L2.197 21.11A8.004 8.004 0 013.664 11.068l1.546-1.546a4.002 4.002 0 015.656 0l1.546 1.546c1.927 2.823 6.05 2.823 7.977 0l2.197-3.295a8.004 8.004 0 01-1.467-10.068l-1.546-1.546a4.002 4.002 0 01-5.656 0L9.049 2.917zM10 10a4 4 0 100-8 4 4 0 000 8z" />
//                   </svg>
//                 ))}
//               </div>
//               <p className="text-gray-700 italic mb-6">"{testimonial.quote}"</p>
//               <hr className="border-gray-200 my-6" />
//               <div className="flex items-center">
//                 <Image
//                   src={testimonial.avatar}
//                   alt={testimonial.name}
//                   width={50}
//                   height={50}
//                   className="rounded-full mr-4 border-2 border-gray-100"
//                 />
//                 <div>
//                   <h4 className="font-bold">{testimonial.name}</h4>
//                   <p className="text-sm text-gray-600">{testimonial.role}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;