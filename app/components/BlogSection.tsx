// // app/components/BlogSection.tsx
// import Image from 'next/image';
// import Link from 'next/link';

// const BlogSection = () => {
//   const posts = [
//     { title: "Understanding Your Rights in Criminal Defense Cases", excerpt: "Learn about your fundamental rights...", date: "January 10, 2026", author: "Sarah Mitchell", category: "Criminal Law", image: "/criminal-law.jpg", slug: "criminal-defense-rights" },
//     { title: "The Complete Guide to Corporate Mergers", excerpt: "Navigate the complex world of M&A...", date: "January 5, 2026", author: "David Chen", category: "Corporate Law", image: "/corporate-law.jpg", slug: "corporate-mergers-guide" },
//     { title: "Family Law: Protecting Children During Divorce", excerpt: "Discover best practices for minimizing impact...", date: "December 28, 2025", author: "Michael Rodriguez", category: "Family Law", image: "/family-law.jpg", slug: "protecting-children-divorce" }
//   ];

//   return (
//     // app/components/BlogSection.tsx
// <section id="blog" className="py-12 bg-white">
//       <div className="container mx-auto px-4">
//         <h2 className="section-title text-center">Latest Insights</h2>
//         <p className="section-subtitle text-center">Stay informed with our latest articles</p>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
//           {posts.map((post, index) => (
//             <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
//               <div className="relative h-48">
//                 <Image
//                   src={post.image}
//                   alt={post.title}
//                   fill
//                   className="object-cover"
//                 />
//                 <div className="absolute top-3 left-3 bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-medium">
//                   {post.category}
//                 </div>
//               </div>
//               <div className="p-6">
//                 <div className="flex items-center text-gray-500 text-sm mb-2">
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4v4m-8-4h8M3 21h18M3 10h18v11H3z" />
//                   </svg>
//                   <span>{post.date}</span>
//                   <span className="mx-2">•</span>
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0z" />
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M12 14a4 4 0 014-4h6M12 14a4 4 0 01-4-4H6M12 14a4 4 0 01-4 4H6M12 14a4 4 0 014 4h6" />
//                   </svg>
//                   <span>{post.author}</span>
//                 </div>
//                 <h3 className="text-xl font-bold mb-2">{post.title}</h3>
//                 <p className="text-gray-700 mb-4">{post.excerpt}</p>
//                 <Link href={`/blog/${post.slug}`} className="text-amber-500 font-medium flex items-center">
//                   Read More <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M17 5l5 5m0 0l-5 5m5-5H7" />
//                   </svg>
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="mt-12 text-center">
//           <Link href="/blog" className="btn-primary inline-flex items-center">
//             View All Articles →
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BlogSection;