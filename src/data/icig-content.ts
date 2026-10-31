export interface Certification {
  id: string;
  code: string;
  name: string;
  tagline: string;
  description: string;
  focusAreas: string[];
  targetAudience: string[];
  ctaLabel: string;
  ctaHref: string;
}

export interface JourneyStep {
  step: number;
  title: string;
  description: string;
}

export interface TrainingProgramme {
  id: string;
  title: string;
  category: string;
  summary: string;
  fullDescription: string;
  targetAudience: string[];
  outcomes: string[];
  formatOptions: string[];
}

export interface CorporateService {
  id: string;
  title: string;
  summary: string;
  details: string;
  benefits: string[];
}

export interface RealWorldExample {
  id: string;
  role: string;
  action: string;
  iconName: string;
  category: "finance" | "procurement" | "healthcare" | "education" | "operations" | "security" | "management";
}

export interface ProfessionalValue {
  name: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface KnowledgeArticle {
  slug: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  summary: string;
  keyTakeaways: string[];
  sections: {
    heading: string;
    content: string;
  }[];
}

export const ICIG_SITE_INFO = {
  name: "Internal Control Institute Ghana",
  acronym: "ICIG",
  affiliation: "The Ghana Affiliate of the Internal Control Institute (ICI), USA",
  coreMessage: "INTERNAL CONTROL IS EVERYONE'S BUSINESS.",
  tagline: "Building Stronger Organizations Through Effective Internal Controls",
  location: "Accra, Ghana",
  copyright: "© 2026 Internal Control Institute Ghana. All rights reserved.",
  email: "info@icighana.org",
  website: "https://icighana.org/",
  websiteLabel: "icighana.org",
  placeholders: {
    phone: "[Insert Number]",
    socialLinks: "[Insert Links]",
  },
  disclaimerNotice:
    "Internal Control Institute Ghana is affiliated with the Internal Control Institute (ICI), USA. References to ICI professional certifications, including CICS and CICP, relate to certification programmes administered under the authority and requirements of the Internal Control Institute and its certification arrangements. ICIG provides local professional development, candidate support, awareness and related services in Ghana.",
  relationshipExplanation: {
    parent: {
      name: "ICI USA",
      role: "Parent professional body and administrator of the international professional certification programmes.",
    },
    affiliate: {
      name: "ICIG",
      role: "The Ghana affiliate responsible for promoting internal control practice, developing the local professional community, providing training and professional development, supporting certification candidates and advancing internal control awareness in Ghana.",
    },
  },
};

export const NAVIGATION_ITEMS = [
  { label: "Home", href: "/" },
  {
    label: "About ICIG",
    href: "/about",
  },
  {
    label: "Certification",
    href: "/certification",
    children: [
      { label: "Overview", href: "/certification" },
      { label: "CICS Designation", href: "/certification/cics" },
      { label: "CICP Designation", href: "/certification/cicp" },
      { label: "Certification Journey", href: "/certification/journey" },
    ],
  },
  {
    label: "Training & Events",
    href: "/training",
    children: [
      { label: "Training Catalogue", href: "/training" },
      { label: "Upcoming Events", href: "/events" },
    ],
  },
  { label: "Membership", href: "/membership" },
  {
    label: "Corporate Services",
    href: "/corporate-services",
    children: [
      { label: "Services Overview", href: "/corporate-services" },
      { label: "For Organisations", href: "/for-organisations" },
      { label: "Boards & Executives", href: "/boards-and-executives" },
      { label: "SMEs & Entrepreneurs", href: "/smes-and-entrepreneurs" },
    ],
  },
  { label: "Knowledge Centre", href: "/knowledge" },
  { label: "Contact", href: "/contact" },
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: "cics",
    code: "CICS",
    name: "Certified Internal Control Specialist",
    tagline: "Demonstrate essential competence in internal control principles and practice.",
    description:
      "The Certified Internal Control Specialist (CICS) is a professional certification for individuals who wish to demonstrate competence in the principles and practice of internal control. The certification addresses key areas including internal control concepts, the control environment, risk management, control design, control assessment, governance and related professional competencies.",
    focusAreas: [
      "Internal Control Concepts & Frameworks",
      "Control Environment Assessment",
      "Risk Identification & Risk-Control Mapping",
      "Control Design & Implementation",
      "Monitoring & Evaluation Methods",
      "Governance & Ethical Conduct",
    ],
    targetAudience: [
      "Internal Audit",
      "Risk Management",
      "Finance and Accounting",
      "Legal",
      "Engineering",
      "Hospitality",
      "Agriculture",
      "Health",
      "Economics",
      "Not-for-Profit",
      "Compliance",
      "Operations",
      "Information Technology",
      "Quality Assurance",
      "Governance",
      "Fraud Risk Management",
      "Process Improvement",
      "Public Sector Management",
    ],
    ctaLabel: "Apply for CICS",
    ctaHref: "/certification/cics",
  },
  {
    id: "cicp",
    code: "CICP",
    name: "Certified Internal Control Professional",
    tagline: "The senior-level professional designation for experienced internal control leaders.",
    description:
      "The Certified Internal Control Professional (CICP) is a senior-level professional designation for experienced practitioners who can demonstrate substantial knowledge and professional experience in internal control. It recognises professionals who have developed significant practical competence in areas covered by the Internal Control Common Body of Knowledge.",
    focusAreas: [
      "Advanced Enterprise Control Design",
      "Internal Control Governance & Oversight",
      "Strategic Fraud Risk Management",
      "Operational & Financial Process Assurance",
      "Board Advisory & Control Culture Development",
      "Common Body of Knowledge Expertise",
    ],
    targetAudience: [
      "Experienced Internal Audit Professionals",
      "Risk Leaders & Chief Risk Officers",
      "Compliance Heads & Directors",
      "Finance Executives & CFOs",
      "Governance Practitioners",
      "Internal Control Specialists",
      "Management Consultants",
      "Senior Operations Directors",
      "Assurance Professionals",
      "Control & Process Improvement Specialists",
    ],
    ctaLabel: "Request Eligibility Review",
    ctaHref: "/certification/cicp",
  },
];

export const CERTIFICATION_JOURNEY_STEPS: JourneyStep[] = [
  {
    step: 1,
    title: "Submit Your CV",
    description:
      "Send your current professional CV to ICIG for an initial assessment of your education, professional experience and internal control exposure.",
  },
  {
    step: 2,
    title: "Eligibility Review",
    description:
      "Your background is reviewed to determine the professional certification pathway most appropriate for you (CICS or CICP).",
  },
  {
    step: 3,
    title: "Certification Application",
    description:
      "Eligible candidates proceed with the relevant certification application and fulfil the requirements prescribed for the applicable designation under ICI arrangements.",
  },
  {
    step: 4,
    title: "Professional Development",
    description:
      "Candidates participate in appropriate internal control learning and professional development activities to strengthen their practical understanding.",
  },
  {
    step: 5,
    title: "Code of Professional Conduct",
    description:
      "Certified professionals are expected to uphold high standards of integrity, competence, responsibility and ethical professional behaviour.",
  },
  {
    step: 6,
    title: "Continuing Professional Development",
    description:
      "Professional competence does not end with certification. Certified professionals continuously develop their knowledge and remain current with evolving control standards.",
  },
];

export const TRAINING_PROGRAMMES: TrainingProgramme[] = [
  {
    id: "ic-fundamentals",
    title: "Internal Control Fundamentals",
    category: "Foundations",
    summary: "Understanding internal control principles, responsibilities and practical application across organisations.",
    fullDescription:
      "A comprehensive foundation course providing a clear, non-jargon understanding of what internal controls are, why they exist, and how every department contributes to an effective control structure.",
    targetAudience: ["All staff", "Newly promoted managers", "Compliance staff", "Operational supervisors"],
    outcomes: ["Understand core control components", "Identify daily control activities", "Differentiate audit vs management controls"],
    formatOptions: ["1-Day Masterclass", "In-House Workshop", "Virtual Seminar"],
  },
  {
    id: "ic-bootcamp",
    title: "Internal Control Bootcamp",
    category: "Intensive Practice",
    summary: "An intensive practical programme covering control design, implementation, assessment and improvement.",
    fullDescription:
      "Hands-on workshop designed to immerse participants in practical scenarios. Learners work through end-to-end control exercises from identifying process bottlenecks to designing resilient control mechanisms.",
    targetAudience: ["Process owners", "Internal control officers", "Risk analysts", "Finance managers"],
    outcomes: ["Map business process risks", "Draft risk-control matrices", "Test control operating effectiveness"],
    formatOptions: ["3-Day Executive Bootcamp", "Corporate Cohort"],
  },
  {
    id: "designing-effective-controls",
    title: "Designing Effective Internal Controls",
    category: "Control Design",
    summary: "Moving beyond policies and procedures to controls that actually address organisational risks.",
    fullDescription:
      "Focuses on creating pragmatic, proportionate controls. Learn how to prevent control overload while ensuring critical risk exposures are properly mitigated without crippling operational efficiency.",
    targetAudience: ["Operations directors", "Department heads", "Systems designers", "Compliance officers"],
    outcomes: ["Eliminate duplicate controls", "Design automated & preventive controls", "Ensure control proportionality"],
    formatOptions: ["2-Day Workshop", "Executive Masterclass"],
  },
  {
    id: "ic-assessment",
    title: "Internal Control Assessment",
    category: "Assurance & Testing",
    summary: "Learning how to determine whether controls are properly designed, implemented and operating effectively.",
    fullDescription:
      "Teaches structured methodology for assessing internal control environments. Covers sample testing, identifying control deficiencies, evaluating compensating controls, and reporting assessment findings.",
    targetAudience: ["Internal auditors", "Risk managers", "Quality assurance specialists", "Compliance reviewers"],
    outcomes: ["Conduct design vs operating assessments", "Categorize control deficiencies", "Develop actionable remediation plans"],
    formatOptions: ["2-Day Masterclass", "Interactive Clinic"],
  },
  {
    id: "risk-and-control",
    title: "Risk and Control",
    category: "Enterprise Risk",
    summary: "Connecting organisational objectives, risks, controls and performance.",
    fullDescription:
      "Demonstrates how internal control directly serves enterprise risk management. Participants build the linkage between strategic objectives, risk appetite, key risk indicators, and key control activities.",
    targetAudience: ["Risk professionals", "Strategic planners", "Business unit leaders", "Corporate executives"],
    outcomes: ["Align controls with business objectives", "Build integrated risk-control frameworks", "Measure control ROI"],
    formatOptions: ["2-Day Executive Seminar", "Customized Advisory Workshop"],
  },
  {
    id: "fraud-risk-ic",
    title: "Fraud Risk and Internal Control",
    category: "Fraud Prevention",
    summary: "Using controls to prevent, deter and detect fraud and misconduct.",
    fullDescription:
      "Examines the fraud triangle within modern Ghanaian and global business environments. Learn how control design flaws enable occupational fraud, asset misappropriation, and financial misstatement.",
    targetAudience: ["Fraud examiners", "Security leads", "Finance managers", "Payroll & procurement heads"],
    outcomes: ["Identify fraud vulnerability points", "Implement segregation of duties", "Design fraud detection indicators"],
    formatOptions: ["2-Day Intensive", "Public Executive Forum"],
  },
  {
    id: "corporate-governance-ic",
    title: "Corporate Governance and Internal Control",
    category: "Governance",
    summary: "Understanding the responsibilities of Boards, management and employees for organisational control.",
    fullDescription:
      "Explores governance structures, tone at the top, oversight expectations, and the regulatory mandate for effective control environments in public and private institutions.",
    targetAudience: ["Board members", "Company secretaries", "C-suite executives", "Governance officers"],
    outcomes: ["Understand Board oversight duties", "Establish tone at the top", "Implement effective reporting lines"],
    formatOptions: ["1-Day Executive Retreat", "Board Briefing Session"],
  },
  {
    id: "coso-framework",
    title: "COSO Internal Control Framework",
    category: "Global Standards",
    summary: "Practical application of recognised internal control principles and frameworks.",
    fullDescription:
      "In-depth analysis of the 5 COSO components and 17 principles. Translates international standard guidelines into practical application steps suited for Ghanaian business contexts.",
    targetAudience: ["CICS/CICP candidates", "Senior auditors", "Governance advisors", "Financial controllers"],
    outcomes: ["Apply 17 COSO principles", "Perform COSO evaluation", "Document entity-level controls"],
    formatOptions: ["2-Day Masterclass", "Certification Support Module"],
  },
  {
    id: "controls-for-managers",
    title: "Controls for Managers and Supervisors",
    category: "Management Leadership",
    summary: "Helping operational leaders understand their role as control owners.",
    fullDescription:
      "Targeted at non-audit line managers. Clarifies that operational managers own the risks and controls in their functions, providing practical tools to supervise control execution daily.",
    targetAudience: ["Branch managers", "Plant managers", "Project managers", "HR & IT supervisors"],
    outcomes: ["Accept control ownership", "Conduct supervisory reviews", "Spot process control breakdowns"],
    formatOptions: ["1-Day Practical Workshop", "Managerial Series"],
  },
  {
    id: "ic-for-smes",
    title: "Internal Controls for SMEs",
    category: "SMEs & Growth",
    summary: "Simple, practical and affordable control solutions for growing businesses.",
    fullDescription:
      "Customised for small and medium enterprises where resources are lean. Demonstrates affordable, high-impact controls that protect cash, inventory, sales revenues, and customer data.",
    targetAudience: ["SME owners", "Entrepreneurs", "Family business leaders", "Accountants for SMEs"],
    outcomes: ["Separate personal & business funds", "Implement simple cash/stock checks", "Prevent internal leakages"],
    formatOptions: ["1-Day SME Clinic", "Community Business Workshop"],
  },
  {
    id: "public-sector-ic",
    title: "Public Sector Internal Controls",
    category: "Public Sector",
    summary: "Strengthening accountability, stewardship and operational controls in public institutions.",
    fullDescription:
      "Focuses on statutory requirements, public financial management laws, procurement procedures, and public asset protection controls for Ministries, Departments, Agencies (MDAs), and MMDAs in Ghana.",
    targetAudience: ["Public sector managers", "Internal audit units", "Chief directors", "Public finance officers"],
    outcomes: ["Enhance public fund stewardship", "Comply with PFM guidelines", "Strengthen public procurement controls"],
    formatOptions: ["2-Day Public Seminar", "Institutional In-House Training"],
  },
];

export const CORPORATE_SERVICES: CorporateService[] = [
  {
    id: "health-checks",
    title: "Internal Control Health Checks",
    summary: "An independent review of the organisation's overall control environment to identify weaknesses, gaps and improvement opportunities.",
    details:
      "A fast-response diagnostic that benchmarks your existing internal control environment against best practices, giving leadership an objective summary of high-risk vulnerabilities.",
    benefits: ["Rapid identification of control blind spots", "Clear prioritization of risk areas", "Actionable recommendations for management"],
  },
  {
    id: "maturity-assessments",
    title: "Internal Control Maturity Assessments",
    summary: "Assessing how well internal controls are understood, implemented, monitored and embedded across the organisation.",
    details:
      "Evaluates where your organization sits on the control maturity scale—from ad-hoc and reactive to optimized and continuously monitored.",
    benefits: ["Structured maturity roadmap", "Benchmark against industry peers", "Clear path to strategic control integration"],
  },
  {
    id: "design-reviews",
    title: "Control Design Reviews",
    summary: "Evaluating whether controls are properly designed to address identified business risks.",
    details:
      "Examines whether existing control activities match the actual risks faced by key business units, preventing over-control or critical gaps.",
    benefits: ["Elimination of redundant controls", "Targeted risk mitigation", "Improved process speed and clarity"],
  },
  {
    id: "process-reviews",
    title: "Process and Control Reviews",
    summary: "Reviewing key business processes and identifying opportunities to strengthen controls while improving efficiency.",
    details:
      "Combines business process re-engineering with internal control principles to streamline operations without compromising compliance or asset protection.",
    benefits: ["Streamlined operational workflows", "Reduced error rates and cycle times", "Integrated automated control points"],
  },
  {
    id: "workshops",
    title: "Risk and Control Workshops",
    summary: "Facilitated sessions that help management teams identify important risks and determine appropriate controls and responsibilities.",
    details:
      "Collaborative executive sessions where cross-functional leadership teams map out operational risks and establish clear responsibility metrics.",
    benefits: ["Cross-departmental risk alignment", "Clear control ownership assignments", "Shared accountability culture"],
  },
  {
    id: "executive-training",
    title: "Board and Executive Training",
    summary: "Helping Boards and senior executives understand their responsibilities for governance, risk management and internal control.",
    details:
      "Tailored executive briefings designed for Directors, Audit Committees, and C-Suite leaders on setting control tone and evaluating control reports.",
    benefits: ["Fulfillment of fiduciary duties", "Enhanced Board oversight capability", "Constructive inquiry techniques"],
  },
  {
    id: "culture-programmes",
    title: "Internal Control Culture Programmes",
    summary: "Supporting organisations to move from a compliance-based control environment to a culture in which employees understand and take ownership of controls.",
    details:
      "Change management initiatives that embed internal control into the organizational DNA, empowering staff at all levels to act as control champions.",
    benefits: ["Proactive risk reporting by staff", "Reduced reliance on external audit policing", "Long-term organizational resilience"],
  },
];

export const REAL_WORLD_CAMPAIGN_EXAMPLES: RealWorldExample[] = [
  {
    id: "1",
    role: "Cashier",
    action: "Reconciles the day's sales against cash received and point-of-sale reports.",
    iconName: "Receipt",
    category: "finance",
  },
  {
    id: "2",
    role: "Procurement Officer",
    action: "Obtains the required multi-level approvals before issuing a purchase order.",
    iconName: "FileCheck",
    category: "procurement",
  },
  {
    id: "3",
    role: "Nurse",
    action: "Correctly identifies a patient using two unique identifiers before administering medication.",
    iconName: "Stethoscope",
    category: "healthcare",
  },
  {
    id: "4",
    role: "Teacher / Bursar",
    action: "Records school fees accurately and issues official numbered receipts immediately.",
    iconName: "GraduationCap",
    category: "education",
  },
  {
    id: "5",
    role: "Warehouse Officer",
    action: "Counts physical inventory and matches counts to receiving notes before signing.",
    iconName: "Boxes",
    category: "operations",
  },
  {
    id: "6",
    role: "Driver",
    action: "Completes a vehicle safety inspection checklist before starting a journey.",
    iconName: "Truck",
    category: "security",
  },
  {
    id: "7",
    role: "Bank Teller",
    action: "Verifies customer identity and signature authority before processing withdrawals.",
    iconName: "Building2",
    category: "finance",
  },
  {
    id: "8",
    role: "Contractor / Engineer",
    action: "Follows established safety procedures and wears personal protective equipment.",
    iconName: "HardHat",
    category: "operations",
  },
  {
    id: "9",
    role: "Business Owner",
    action: "Separates personal money from business funds and maintains distinct accounts.",
    iconName: "Wallet",
    category: "management",
  },
  {
    id: "10",
    role: "Manager",
    action: "Reviews supporting documentation thoroughly before approving a transaction.",
    iconName: "UserCheck",
    category: "management",
  },
];

export const PROFESSIONAL_AUDIENCE_LIST = [
  "Internal Auditors",
  "External Auditors",
  "Risk Professionals",
  "Accountants",
  "Finance Professionals",
  "Compliance Officers",
  "Fraud Examiners",
  "Board Members",
  "Chief Executives",
  "Business Owners",
  "Operations Managers",
  "Procurement Professionals",
  "IT Professionals",
  "HR Professionals",
  "Public Sector Professionals",
  "Banking Professionals",
  "Insurance Professionals",
  "Students",
  "Academics",
  "Consultants",
  "Entrepreneurs",
];

export const PROFESSIONAL_VALUES: ProfessionalValue[] = [
  {
    name: "Integrity",
    description: "We promote honesty, transparency and ethical behaviour across all organizational activities.",
  },
  {
    name: "Competence",
    description: "We encourage continuous learning, technical rigor, and professional excellence in control practices.",
  },
  {
    name: "Accountability",
    description: "We believe responsibilities must be clearly defined, assigned, understood and accepted.",
  },
  {
    name: "Professionalism",
    description: "We promote high standards in the design, implementation, assessment and monitoring of internal controls.",
  },
  {
    name: "Continuous Improvement",
    description: "Controls must evolve dynamically as organisations, risks, operating environments, and technology change.",
  },
  {
    name: "Practical Impact",
    description: "Internal control must contribute directly to better organisational performance, not merely administrative compliance.",
  },
];

export const WHY_ICIG_OUTCOMES = [
  { title: "Corporate Governance", desc: "Sets clear oversight boundaries and ensures executive responsibility." },
  { title: "Risk Management", desc: "Converts strategic risk identification into actionable daily control measures." },
  { title: "Fraud Prevention & Detection", desc: "Deters misconduct and catches anomalies before major financial loss occurs." },
  { title: "Regulatory Compliance", desc: "Ensures adherence to statutory laws, financial regulations, and industry standards." },
  { title: "Reliable Information", desc: "Guarantees accuracy and integrity in operational, management, and financial reports." },
  { title: "Asset Protection", desc: "Safeguards physical, financial, data, and intellectual property resources." },
  { title: "Accountability", desc: "Establishes clear ownership so every decision maker is responsible for outcomes." },
  { title: "Ethical Behaviour", desc: "Fosters an organizational tone where integrity is expected at all levels." },
  { title: "Operational Efficiency", desc: "Streamlines processes by removing control redundancy and bottleneck friction." },
  { title: "Sustainable Performance", desc: "Protects long-term enterprise value and enables confident business growth." },
];

export const SME_PRACTICAL_CONTROLS = [
  "Recording every sale immediately upon receipt",
  "Separating personal money from business funds completely",
  "Regularly counting stock and matching to sales records",
  "Approving significant payments through dual authorization",
  "Reconciling bank statements with cash books monthly",
  "Keeping proper supporting invoices and payment vouchers",
  "Controlling physical and digital access to cash and systems",
  "Reviewing supplier invoices against delivered goods before paying",
  "Monitoring customer debts and establishing clear credit terms",
];

export const BOARD_EXECUTIVE_QUESTIONS = {
  superficial: "Do we have a policy?",
  meaningful: "How do we know the controls are working?",
  responsibilities: [
    "Setting tone at the top regarding integrity & ethics",
    "Defining organizational risk appetite & boundaries",
    "Ensuring clear delegation of control ownership",
    "Establishing consequences for deliberate control overrides",
    "Monitoring independent control health assessment reports",
  ],
};

export const FAQS: FAQItem[] = [
  {
    question: "What is ICIG?",
    answer:
      "Internal Control Institute Ghana (ICIG) is the Ghana affiliate of the Internal Control Institute (ICI), USA. ICIG promotes internal control education, professional development, certification awareness and the advancement of good internal control practices across all sectors in Ghana.",
  },
  {
    question: "What is ICI USA?",
    answer:
      "The Internal Control Institute (ICI), USA is the parent professional body dedicated to advancing professional knowledge and competence in internal control through education, international resources and professional certification standards.",
  },
  {
    question: "Does ICIG issue the CICS and CICP certifications?",
    answer:
      "The professional certification programmes are administered under the certification authority and arrangements of the Internal Control Institute (ICI), USA. ICIG supports candidates in Ghana through awareness, candidate guidance, preparatory professional development and application processing.",
  },
  {
    question: "What is CICS?",
    answer:
      "CICS stands for Certified Internal Control Specialist. It is an internationally recognized professional certification recognizing operational knowledge and practical competence in internal control design, assessment, and risk mapping.",
  },
  {
    question: "What is CICP?",
    answer:
      "CICP stands for Certified Internal Control Professional. It is a senior-level professional designation focused particularly on substantial leadership experience and practical governance competence in internal control.",
  },
  {
    question: "How do I know which certification I qualify for?",
    answer:
      "You can submit your CV to ICIG for an initial eligibility review. Your educational background, work experience, and degree of internal control exposure will be evaluated to recommend the most appropriate certification pathway.",
  },
  {
    question: "Is internal control certification only for auditors?",
    answer:
      "No. Internal control is relevant to professionals across all functions including finance, operations, risk management, compliance, IT, procurement, HR, legal, healthcare, engineering, public administration, and executive management.",
  },
  {
    question: "Can organisations request customised training?",
    answer:
      "Yes. ICIG provides customized in-house training, executive retreats, board briefings, and internal control maturity assessments tailored to the specific operational risks and sector requirements of your organization.",
  },
];

export const KNOWLEDGE_CATEGORIES = [
  "Internal Control",
  "Enterprise Risk Management",
  "Corporate Governance",
  "Fraud Risk Management",
  "Internal Audit",
  "Compliance",
  "Control Culture",
  "Ethics",
  "Business Processes",
  "Technology Controls",
  "Leadership and Accountability",
];

export const SAMPLE_KNOWLEDGE_ARTICLES: KnowledgeArticle[] = [
  {
    slug: "moving-internal-control-beyond-audit",
    title: "Moving Internal Control Beyond the Audit Function",
    category: "Internal Control",
    readTime: "6 min read",
    date: "October 2026",
    summary: "Why relying solely on internal auditors to enforce controls leaves organizations vulnerable, and how to embed control ownership into daily operations.",
    keyTakeaways: [
      "Auditors test controls; operational managers own controls.",
      "A strong control environment depends on frontline operational discipline.",
      "Control design must fit seamlessly into daily business workflows.",
    ],
    sections: [
      {
        heading: "The Common Misconception",
        content:
          "For decades, many Ghanaian organizations treated internal control as a synonym for internal audit. When a control breakdown occurred, questions were directed at the internal auditor rather than the manager responsible for the process. This misunderstanding creates a dangerous false sense of security.",
      },
      {
        heading: "Management Ownership of Controls",
        content:
          "The ICIG philosophy emphasizes that internal control is everyone's business. Operational supervisors, procurement heads, HR leads, and IT administrators are the primary line of defense. When line management takes ownership of control execution, audit shifts from a policing mechanism to an advisory partner.",
      },
      {
        heading: "Practical Action Steps for Leadership",
        content:
          "1. Define explicit control responsibilities in job descriptions.\n2. Train department heads on risk-control mapping.\n3. Measure control health in monthly performance reviews, not just annual audit reports.",
      },
    ],
  },
  {
    slug: "practical-controls-for-growing-smes-in-ghana",
    title: "Practical Internal Controls for Growing SMEs in Ghana",
    category: "Control Culture",
    readTime: "5 min read",
    date: "September 2026",
    summary: "How small business owners can protect cash, inventory, and business value without creating overwhelming bureaucratic friction.",
    keyTakeaways: [
      "Growth without control leads to cash drain and unexpected failure.",
      "Basic controls like bank reconciliations and stock counts are high-yield investments.",
      "Separating owner personal finances from business accounts is the foundational rule.",
    ],
    sections: [
      {
        heading: "Why Small Businesses Need Controls Early",
        content:
          "Many entrepreneurs believe internal control is an expensive luxury reserved for multinational corporations. In reality, SMEs are far more vulnerable to control failures because a single fraud incident or unrecorded cash leak can wipe out an entire quarter's profit.",
      },
      {
        heading: "Core Controls Every Ghanaian SME Must Implement",
        content:
          "Start with simple, non-negotiable checks: issue pre-numbered receipts for all incoming payments, conduct surprise monthly inventory checks, require two signatures for bank transfers over a set threshold, and maintain an updated fixed asset register.",
      },
    ],
  },
  {
    slug: "board-oversight-and-the-control-environment",
    title: "Board Oversight: Asking the Right Control Questions",
    category: "Corporate Governance",
    readTime: "7 min read",
    date: "August 2026",
    summary: "Transitioning from superficial governance ('Do we have a policy?') to deep assurance ('How do we know the controls are working?').",
    keyTakeaways: [
      "Tone at the top sets the boundaries for organizational integrity.",
      "Policies are useless if operational controls are systematically bypassed.",
      "Boards must insist on quantitative control maturity reporting.",
    ],
    sections: [
      {
        heading: "The Difference Between Compliance and Control",
        content:
          "Having a documented policy manual binder on an executive bookshelf satisfies compliance checklists but does not protect an organization. True internal control is dynamic, continuously evaluated, and supported by leadership accountability.",
      },
    ],
  },
];
