import CertificationDetail from "@/components/common/CertificationDetail";
import { CERTIFICATIONS } from "@/data/icig-content";

const cics = CERTIFICATIONS.find((c) => c.id === "cics")!;

export const metadata = {
  title: "CICS — Certified Internal Control Specialist",
  description:
    "The Certified Internal Control Specialist (CICS) designation recognises professional competence in internal control principles, risk mapping, control design and assessment.",
};

export default function CicsPage() {
  return (
    <CertificationDetail
      cert={cics}
      overviewEyebrow="Certification overview"
      overviewTitle="About the CICS designation"
      overviewSubtitle="A professional certification for individuals who wish to demonstrate competence in the principles and practice of internal control."
      domainsTitle="Key competency domains covered"
      audienceTitle="Suitable professional backgrounds"
      asideTitle="Start your CICS journey"
      asideMeta="ICI USA designation"
      asideBody="Applicants may submit their CV to ICIG for an initial eligibility review and guidance on the appropriate certification pathway."
      primaryLabel="Apply for the CICS pathway"
    />
  );
}