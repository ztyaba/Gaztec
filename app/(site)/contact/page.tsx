import PageHeader from '@/components/PageHeader';
import ContactSection from '@/components/ContactSection';
import CallToAction from '@/components/CallToAction';

export default function ContactPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Contact"
        title="Start a project or request a capabilities review"
        description="Share a few details about your program and we will coordinate a technical deep dive with the right subject matter experts."
      />
      <ContactSection />
      <CallToAction />
    </div>
  );
}
