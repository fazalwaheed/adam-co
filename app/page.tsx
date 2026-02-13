// app/page.tsx
import Header from './components/Header';
import Hero from './components/Hero';
import MissionCard from './components/MissionCard';
import PracticeAreas from './components/PracticeArea';
import AboutFirm from './components/AboutFirm';
import Attorneys from './components/Attorneys';
//import Achievements from './components/Achievements';
// import Testimonials from './components/Testimonials';
// import BlogSection from './components/BlogSection';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <MissionCard />
      <PracticeAreas />
      <AboutFirm />
      <Attorneys />
    {/* <Achievements /> */}
      {/* <Testimonials /> */}
      {/* <BlogSection /> */}
      <ContactPage />
      <Footer />
    </>
  );
}