import Hero from '@/components/Hero';
import ServicesSection from '@/components/ServicesSection';
import IndustriesSection from '@/components/IndustriesSection';
import ProcessTimeline from '@/components/ProcessTimeline';
import CapabilitiesGrid from '@/components/CapabilitiesGrid';
import GalleryShowcase from '@/components/GalleryShowcase';
import Testimonials from '@/components/Testimonials';
import CallToAction from '@/components/CallToAction';

export default function Home() {
  return (
    <div>
      <Hero />
      <ServicesSection />
      <IndustriesSection />
      <ProcessTimeline />
      <CapabilitiesGrid />
      <GalleryShowcase />
      <Testimonials />
      <CallToAction />
    </div>
  );
}
