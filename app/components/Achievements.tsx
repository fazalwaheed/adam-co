// // app/components/Achievements.tsx
// const Achievements = () => {
//   const stats = [
//     { number: "500+", label: "Cases Won", icon: "award" },
//     { number: "20+", label: "Years Experience", icon: "growth" },
//     { number: "98%", label: "Client Satisfaction", icon: "users" },
//     { number: "1000+", label: "Happy Clients", icon: "check" }
//   ];

//   return (
//     <section className="py-12 bg-gray-900 text-white">
//       <div className="container mx-auto px-4">
//         <h2 className="section-title text-center text-white">Our Achievements</h2>
//         <p className="section-subtitle text-center text-gray-300">Numbers that reflect our commitment to excellence</p>

//         {/* <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
//           {stats.map((stat, index) => (
//             <div key={index} className="dark-card text-center p-6">
//               <div className="icon-box bg-amber-500 text-white mb-4">
//                 {stat.icon === "award" && (
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
//                     <path d="M12 2l3.09 6.26L22 9.27l-5 4.87.69 6.89L12 21l-5.69-.01.69-6.89-5-4.87 6.91-1.01L12 2z"/>
//                   </svg>
//                 )}
//                 {stat.icon === "growth" && (
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
//                     <path d="M13 7h8v8h-8v-8zm-2-4l-6 6h4v8h4V9h4l-6-6z"/>
//                   </svg>
//                 )}
//                 {stat.icon === "users" && (
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
//                     <path d="M16 7c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-2 14c2 0 3.7-1.7 3.7-3.7 0-.7-.3-1.4-.6-2.1-.8-1.2-2.1-2.1-3.1-2.1-1.1 0-2.4.9-3.1 2.1-.4.7-.7 1.4-.7 2.1 0 2 1.7 3.7 3.7 3.7z"/>
//                   </svg>
//                 )}
//                 {stat.icon === "check" && (
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
//                     <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
//                   </svg>
//                 )}
//               </div>
//               <div className="stats-number">{stat.number}</div>
//               <div className="stats-label">{stat.label}</div>
//             </div> */}
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Achievements;