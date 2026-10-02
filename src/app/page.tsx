import Hero from "@/components/home/Hero";
import WhyICIG from "@/components/home/WhyICIG";
import CertificationPreview from "@/components/home/CertificationPreview";
import CertificationJourney from "@/components/home/CertificationJourney";
import TrainingPreview from "@/components/home/TrainingPreview";
import CorporateServicesPreview from "@/components/home/CorporateServicesPreview";
import SignatureCampaignSection from "@/components/home/SignatureCampaignSection";
import EcosystemSection from "@/components/home/EcosystemSection";
import LeadershipSection from "@/components/home/LeadershipSection";
import SmeSection from "@/components/home/SmeSection";
import ValuesSection from "@/components/home/ValuesSection";
import FAQSection from "@/components/home/FAQSection";
import CTASection from "@/components/common/CTASection";

export default function HomePage() {
  return (
    <div className="w-full">
      <Hero />
      <WhyICIG />
      <CertificationPreview />
      <CertificationJourney />
      <TrainingPreview />
      <CorporateServicesPreview />
      <SignatureCampaignSection />
      <EcosystemSection />
      <LeadershipSection />
      <SmeSection />
      <ValuesSection />
      <FAQSection />
      <CTASection />
    </div>
  );
}
