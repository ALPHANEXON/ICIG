import Link from "next/link";
import { NAVIGATION_ITEMS, ICIG_SITE_INFO } from "@/data/icig-content";
import { ArrowUpRight } from "lucide-react";

const RESOURCES = [
  { label: "CICS — Certified Internal Control Specialist", href: "/certification/cics" },
  { label: "CICP — Certified Internal Control Professional", href: "/certification/cicp" },
  { label: "The Certification Journey", href: "/certification/journey" },
  { label: "Training Programmes", href: "/training" },
  { label: "Knowledge Centre", href: "/knowledge" },
  { label: "Events", href: "/events" },
];

const AUDIENCES = [
  { label: "For Organisations", href: "/for-organisations" },
  { label: "For Boards & Executives", href: "/boards-and-executives" },
  { label: "For SMEs & Entrepreneurs", href: "/smes-and-entrepreneurs" },
  { label: "Corporate Health Checks", href: "/corporate-services" },
  { label: "Membership", href: "/membership" },
];

function FooterColumn({
  title,
  items,
}: {
  title: string;
  items: { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="label text-white/40">{title}</h3>
      <ul className="mt-6 space-y-3.5">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="group inline-flex items-start gap-1 text-small leading-snug text-white/60 transition-colors duration-200 hover:text-white"
            >
              <span>{item.label}</span>
              <ArrowUpRight className="mt-0.5 h-3.5 w-3.5 shrink-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="on-night bg-night">
      <div className="container-page">
        {/* Statement */}
        <div className="grid gap-12 border-b border-white/10 py-20 lg:grid-cols-12 lg:gap-8 lg:py-28">
          <div className="lg:col-span-6">
            <p className="label text-accent-bright">{ICIG_SITE_INFO.acronym}</p>
            <p className="font-editorial mt-6 text-[clamp(1.75rem,3.4vw,2.75rem)] leading-[1.15] text-white">
              {ICIG_SITE_INFO.coreMessage}
            </p>
          </div>
          <div className="lg:col-span-6 lg:pt-14">
            <p className="max-w-md text-body leading-relaxed text-white/60">
              {ICIG_SITE_INFO.relationshipExplanation.affiliate.role}
            </p>
            <p className="mt-8 text-small text-white/40">{ICIG_SITE_INFO.location}</p>
          </div>
        </div>

        {/* Directory */}
        <div className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div>
            <h3 className="label text-white/40">Institute</h3>
            <ul className="mt-6 space-y-3.5">
              {NAVIGATION_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-small text-white/60 transition-colors duration-200 hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <FooterColumn title="Certification & Learning" items={RESOURCES} />
          <FooterColumn title="Who We Serve" items={AUDIENCES} />

          <div>
            <h3 className="label text-white/40">Secretariat</h3>
            <dl className="mt-6 space-y-4 text-small">
              {[
                { term: "Email", value: ICIG_SITE_INFO.placeholders.email },
                { term: "Telephone", value: ICIG_SITE_INFO.placeholders.phone },
                { term: "Web", value: ICIG_SITE_INFO.placeholders.website },
              ].map((row) => (
                <div key={row.term}>
                  <dt className="text-white/35">{row.term}</dt>
                  <dd className="mt-0.5 text-white/60 underline decoration-dotted underline-offset-4">
                    {row.value}
                  </dd>
                </div>
              ))}
            </dl>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-small font-semibold text-night transition-opacity duration-200 hover:opacity-90"
            >
              Contact the Secretariat
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Legal */}
        <div className="border-t border-white/10 py-10">
          <p className="max-w-3xl text-[13px] leading-relaxed text-white/35">
            {ICIG_SITE_INFO.disclaimerNotice}
          </p>
          <div className="mt-8 flex flex-col gap-3 text-[13px] text-white/40 sm:flex-row sm:items-center sm:justify-between">
            <p>{ICIG_SITE_INFO.copyright}</p>
            <p>{ICIG_SITE_INFO.affiliation}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}