import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSlider from '@/components/home/HeroSlider';
import ServicesSection from '@/components/home/ServicesSection';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import Testimonials from '@/components/home/Testimonials';
import ContactCTA from '@/components/home/ContactCTA';

export const metadata: Metadata = {
  title: 'Clarion Talentforge – Accounting Training & Placement in Hyderabad',
  description:
    "Clarion Talentforge LLP bridges the gap between accountants and accounting jobs in MSME markets in Hyderabad. Almost 100% placement guaranteed.",
};

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSlider />
      <ServicesSection />
      <WhyChooseUs />
      <Testimonials />
      <ContactCTA />
      <Footer />
    </main>
  );
}
