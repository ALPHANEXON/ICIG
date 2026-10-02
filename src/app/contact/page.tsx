"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import PageHeader from "@/components/common/PageHeader";
import SectionHeading from "@/components/common/SectionHeading";
import Reveal from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { ICIG_SITE_INFO } from "@/data/icig-content";
import { SPRING } from "@/components/motion/springs";
import { Check } from "lucide-react";
import Photo from "@/components/common/Photo";
import { IMAGES } from "@/data/images";

const CATEGORIES = [
  "Certification enquiries",
  "Professional development",
  "Membership",
  "Organisational training",
  "Partnerships",
];

const CONTACT_ROWS = [
  { label: "Location", value: ICIG_SITE_INFO.location, pending: false },
  { label: "Email", value: ICIG_SITE_INFO.placeholders.email, pending: true },
  { label: "Telephone / WhatsApp", value: ICIG_SITE_INFO.placeholders.phone, pending: true },
  { label: "Website", value: ICIG_SITE_INFO.placeholders.website, pending: true },
  { label: "Social media", value: ICIG_SITE_INFO.placeholders.socialLinks, pending: true },
];

const FIELD =
  "w-full rounded-xl border border-hairline bg-surface px-4 py-3 text-small text-ink placeholder:text-ink-3/70 transition-colors duration-200 focus:border-accent focus:outline-none";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    category: CATEGORIES[0],
    organisation: "",
    message: "",
  });

  const update = (key: keyof typeof form) => (value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  return (
    <>
      <PageHeader
        eyebrow="Ghana Secretariat"
        title="Contact the ICIG Secretariat"
        subtitle="Certification enquiries, professional development, membership, organisational training and partnerships."
        breadcrumbs={[{ label: "Contact" }]}
      />

      <section className="bg-canvas">
        <div className="container-page section-y">
          <div className="grid gap-16 lg:grid-cols-12 lg:gap-16">
            {/* Details */}
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="Direct engagement"
                title="Reach us directly"
                subtitle="The Secretariat handles every enquiry personally. Choose the category that fits and you will receive a considered response."
              />

              <dl className="mt-12 border-t border-hairline">
                {CONTACT_ROWS.map((row) => (
                  <div key={row.label} className="border-b border-hairline py-5">
                    <dt className="label text-ink-3">{row.label}</dt>
                    <dd
                      className={`mt-2 text-body ${
                        row.pending
                          ? "text-ink-3 underline decoration-dotted underline-offset-[6px]"
                          : "text-ink"
                      }`}
                    >
                      {row.value}
                    </dd>
                  </div>
                ))}
              </dl>

              <Reveal delay={0.08} className="mt-10">
                <p className="text-small leading-relaxed text-ink-3">
                  Enquiries handled: CICS &amp; CICP information · CV assessment · corporate
                  training · membership · board retreats · strategic partnerships.
                </p>
              </Reveal>

              <Reveal delay={0.12} className="mt-10">
                <Photo image={IMAGES.contact} aspect="aspect-[16/10]" />
              </Reveal>
            </div>

            {/* Form */}
            <div className="lg:col-span-7">
              <div className="rounded-card bg-surface p-8 shadow-lifted lg:p-12">
                <AnimatePresence mode="wait" initial={false}>
                  {submitted ? (
                    <motion.div
                      key="sent"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={SPRING}
                      className="py-10 text-center"
                    >
                      <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-subtle text-accent">
                        <Check className="h-6 w-6" strokeWidth={2} />
                      </span>
                      <h3 className="text-heading mt-8 font-semibold text-ink">
                        Enquiry received
                      </h3>
                      <p className="mx-auto mt-4 max-w-sm text-body leading-relaxed text-ink-2">
                        Thank you for contacting Internal Control Institute Ghana. The
                        Secretariat will review your enquiry and respond promptly.
                      </p>
                      <div className="mt-10">
                        <Button variant="secondary" onClick={() => setSubmitted(false)}>
                          Submit another enquiry
                        </Button>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      onSubmit={(e) => {
                        e.preventDefault();
                        setSubmitted(true);
                      }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={SPRING}
                      className="space-y-6"
                    >
                      <h3 className="text-heading font-semibold text-ink">Send an enquiry</h3>

                      <div className="grid gap-6 sm:grid-cols-2">
                        <label className="block">
                          <span className="label text-ink-3">Full name *</span>
                          <input
                            required
                            placeholder="Kwame Mensah"
                            value={form.name}
                            onChange={(e) => update("name")(e.target.value)}
                            className={`mt-3 ${FIELD}`}
                          />
                        </label>
                        <label className="block">
                          <span className="label text-ink-3">Email *</span>
                          <input
                            type="email"
                            required
                            placeholder="name@organisation.com"
                            value={form.email}
                            onChange={(e) => update("email")(e.target.value)}
                            className={`mt-3 ${FIELD}`}
                          />
                        </label>
                      </div>

                      <div className="grid gap-6 sm:grid-cols-2">
                        <label className="block">
                          <span className="label text-ink-3">Telephone / WhatsApp</span>
                          <input
                            type="tel"
                            placeholder="+233 …"
                            value={form.phone}
                            onChange={(e) => update("phone")(e.target.value)}
                            className={`mt-3 ${FIELD}`}
                          />
                        </label>
                        <label className="block">
                          <span className="label text-ink-3">Category *</span>
                          <select
                            value={form.category}
                            onChange={(e) => update("category")(e.target.value)}
                            className={`mt-3 ${FIELD}`}
                          >
                            {CATEGORIES.map((c) => (
                              <option key={c} value={c}>
                                {c}
                              </option>
                            ))}
                          </select>
                        </label>
                      </div>

                      <label className="block">
                        <span className="label text-ink-3">Organisation / employer</span>
                        <input
                          placeholder="Company, ministry, agency or institution"
                          value={form.organisation}
                          onChange={(e) => update("organisation")(e.target.value)}
                          className={`mt-3 ${FIELD}`}
                        />
                      </label>

                      <label className="block">
                        <span className="label text-ink-3">Details *</span>
                        <textarea
                          required
                          rows={6}
                          placeholder="Tell us about your certification background, training requirements or the support you need."
                          value={form.message}
                          onChange={(e) => update("message")(e.target.value)}
                          className={`mt-3 resize-y ${FIELD}`}
                        />
                      </label>

                      <Button type="submit" variant="primary" size="lg" className="w-full">
                        Send to the Secretariat
                      </Button>

                      <p className="text-center text-[13px] leading-relaxed text-ink-3">
                        Your details are used only to respond to this enquiry.
                      </p>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}