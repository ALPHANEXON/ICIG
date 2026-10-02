import CertificationDetail from "@/components/common/CertificationDetail";
import { CERTIFICATIONS } from "@/data/icig-content";

const cicp = CERTIFICATIONS.find((c) => c.id === "cicp")!;

export const metadata = {
  title: "CICP — Certified Internal Control Professional",
  description:
    "The Certified Internal Control Professional (CICP) is the senior-level designation for experienced practitioners with substantial leadership in internal control.",
};

export default function CicpPage() {
  return (
    <CertificationDetail
      cert={cicp}
      overviewEyebrow="Senior designation overview"
      overviewTitle="About the CICP designation"
      overviewSubtitle="For professionals who have developed significant practical competence across the Internal Control Common Body of Knowledge."
      domainsTitle="Senior competency domains"
      audienceTitle="Particularly relevant to experienced leaders"
      asideTitle="Are you eligible for CICP?"
      asideMeta="Senior level evaluation"
      asideBody="Submit your current CV to ICIG for an initial eligibility review and a personalised recommendation."
      primaryLabel="Request an eligibility review"
    />
  );
}