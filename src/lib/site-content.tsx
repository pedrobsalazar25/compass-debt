import type { LucideIcon } from "lucide-react";
import {
  Briefcase,
  Car,
  CircleDollarSign,
  Compass,
  CreditCard,
  GraduationCap,
  HeartPulse,
  Phone,
  PiggyBank,
  ShieldCheck,
  TrendingDown,
  WalletCards,
  Percent,
  Unlock,
  Handshake,
  Calendar,
} from "lucide-react";

import aboutUsAsset from "@/assets/about-us.png.asset.json";
import businessDebtAsset from "@/assets/business-debt-settlement.jpg.asset.json";
import contactHeroAsset from "@/assets/contact-hero.png.asset.json";
import creditCardDebtAsset from "@/assets/credit-card-debt-relief.png.asset.json";
import heroAsset from "@/assets/hero.png.asset.json";
import localTrustAsset from "@/assets/local-trust.png.asset.json";
import logoAsset from "@/assets/compass-logo.png.asset.json";
import medicalDebtAsset from "@/assets/medical-debt-relief.jpg.asset.json";
import privateStudentLoansAsset from "@/assets/private-student-loans.png.asset.json";
import unsecuredLoansAsset from "@/assets/unsecured-loans-collections.png.asset.json";
import vehicleRepossessionAsset from "@/assets/vehicle-repossession-support.png.asset.json";
import ctaBgAsset from "@/assets/cta-bg.png.asset.json";

export type SitePath =
  | "/"
  | "/how-it-works"
  | "/services"
  | "/about"
  | "/contact"
  | "/apply"
  | "/services/credit-card-debt"
  | "/services/unsecured-loans-collections"
  | "/services/medical-debt"
  | "/services/business-debt"
  | "/services/vehicle-repossession"
  | "/services/private-student-loans";

export interface FaqItem {
  question: string;
  answer: string;
}

export interface StepItem {
  title: string;
  description: string;
}

export interface ServiceItem {
  slug:
    | "credit-card-debt"
    | "unsecured-loans-collections"
    | "medical-debt"
    | "business-debt"
    | "vehicle-repossession"
    | "private-student-loans";
  path: SitePath;
  name: string;
  shortDescription: string;
  heroSubtitle: string;
  problem: string;
  solution: string;
  ctaLabel: string;
  image: string;
  imageAlt: string;
  icon: LucideIcon;
  faq: FaqItem[];
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string;
}

export const site = {
  companyName: "Compass Debt Solutions",
  slogan: "Your compass towards financial freedom.",
  tagline: "Get help with your credit cards and unsecured debts now.",
  domain: "compassdebtsolutions.com",
  phoneDisplay: "(480) 686-4116",
  phoneHref: "tel:+14806864116",
  address: "1542 W Maplewood St, Chandler, AZ 85286",
  cityRegion: "Chandler, Arizona",
  email: "info@compassdebtsolutions.com",
} as const;

export const assets = {
  logo: logoAsset.url,
  hero: heroAsset.url,
  localTrust: localTrustAsset.url,
  aboutUs: aboutUsAsset.url,
  contactHero: contactHeroAsset.url,
  creditCardDebt: creditCardDebtAsset.url,
  unsecuredLoans: unsecuredLoansAsset.url,
  medicalDebt: medicalDebtAsset.url,
  businessDebt: businessDebtAsset.url,
  vehicleRepossession: vehicleRepossessionAsset.url,
  privateStudentLoans: privateStudentLoansAsset.url,
  ctaBg: ctaBgAsset.url,
} as const;

export const desktopNavLinks: ReadonlyArray<{ label: string; path: SitePath }> = [
  { label: "Home", path: "/" },
  { label: "How It Works", path: "/how-it-works" },
  { label: "About Us", path: "/about" },
  { label: "Contact Us", path: "/contact" },
] as const;

export const mobileBottomLinks: ReadonlyArray<{
  label: string;
  path: SitePath;
  icon: LucideIcon;
}> = [
  { label: "Home", path: "/", icon: Compass },
  { label: "Services", path: "/services", icon: Briefcase },
  { label: "How It Works", path: "/how-it-works", icon: Compass },
  { label: "Contact", path: "/contact", icon: Phone },
] as const;

export const homeBenefits: ReadonlyArray<{
  title: string;
  description: string;
  icon: LucideIcon;
}> = [
  {
    title: "Reduce Your Total Debt",
    description:
      "Debt settlement may allow you to pay less than the full amount you owe. Instead of struggling with overwhelming balances, you could potentially resolve your debt for a reduced amount and move forward with confidence.",
    icon: TrendingDown,
  },
  {
    title: "Lower Financial Stress",
    description:
      "Constant collection calls, mounting balances, and monthly financial pressure can take a toll. Debt settlement provides a structured path toward resolving your debt and regaining peace of mind.",
    icon: ShieldCheck,
  },
  {
    title: "Affordable Monthly Program Payments",
    description:
      "Many clients are able to make one manageable monthly program payment instead of trying to keep up with multiple creditors and high-interest accounts.",
    icon: WalletCards,
  },
  {
    title: "A Faster Path to Becoming Debt-Free",
    description:
      "Rather than spending years making minimum payments, debt settlement can help create a clear strategy to resolve debt and work toward a stronger financial future.",
    icon: CircleDollarSign,
  },
] as const;

export const condensedSteps: ReadonlyArray<StepItem> = [
  {
    title: "Free Financial Consultation",
    description:
      "Our debt specialists review your financial situation, answer your questions, and determine whether debt settlement is a good fit for your goals.",
  },
  {
    title: "Create Your Personalized Plan",
    description:
      "We develop a customized strategy based on your debt amount, budget, and timeline.",
  },
  {
    title: "Begin Monthly Program Deposits",
    description:
      "You make affordable monthly deposits into a dedicated account designed to help fund future settlements.",
  },
  {
    title: "We Negotiate with Your Creditors",
    description:
      "Our experienced team works to negotiate settlements with your creditors to potentially reduce the amount you owe.",
  },
  {
    title: "Resolve Your Debts & Celebrate",
    description:
      "As agreements are reached and funded, your enrolled debts are settled one by one. With each debt resolved, you're taking another step toward financial freedom.",
  },
] as const;

export const fullSteps: ReadonlyArray<StepItem> = [
  {
    title: "Free Financial Consultation",
    description:
      "Our debt specialists review your financial situation, answer your questions, and determine whether debt settlement is a good fit for your goals.",
  },
  {
    title: "Create Your Personalized Debt Resolution Plan",
    description:
      "We develop a customized strategy based on your debt amount, budget, and timeline.",
  },
  {
    title: "Begin Your Monthly Program Deposits",
    description:
      "You make affordable monthly deposits into a dedicated account designed to help fund future settlements.",
  },
  {
    title: "We Negotiate with Your Creditors",
    description:
      "Our experienced team works to negotiate settlements with your creditors to potentially reduce the amount you owe.",
  },
  {
    title: "Resolve Your Debts",
    description:
      "As agreements are reached and funded, your enrolled debts are settled one by one.",
  },
  {
    title: "Celebrate Your Progress",
    description:
      "With each debt resolved, you're taking another step toward financial freedom and a more secure future.",
  },
  {
    title: "Move Forward with Confidence",
    description:
      "Once your program is complete, you'll have the opportunity to focus on rebuilding your financial foundation, achieving your goals, and creating the future you deserve.",
  },
] as const;

export const testimonials = [
  {
    quote:
      'Compass Debt Solutions helped me reduce my credit card debt by over 40%. Their team was professional, compassionate, and got results I couldn\'t achieve on my own.',
    name: "Sarah M.",
  },
  {
    quote:
      "I was drowning in medical bills and didn't know where to turn. Compass negotiated with my creditors and gave me a path forward. I'm finally debt-free.",
    name: "James R.",
  },
  {
    quote:
      "The team at Compass made the whole process simple and stress-free. They handled everything with my creditors while I focused on getting my life back on track.",
    name: "Maria G.",
  },
] as const;

export const homeFaqs: ReadonlyArray<FaqItem> = [
  {
    question: "What is debt settlement and how does it work?",
    answer:
      "Debt settlement is a process where we negotiate with your creditors to accept a lump-sum payment that's less than the full amount you owe. You make affordable monthly deposits into a dedicated account, and we use those funds to negotiate settlements on your behalf.",
  },
  {
    question: "How much can I save with Compass Debt Solutions?",
    answer:
      "Our clients typically save up to 50% on their total debt. The exact amount depends on your specific situation, the type of debt, and your creditors' willingness to negotiate.",
  },
  {
    question: "Are there any upfront fees?",
    answer:
      "No. We work on a performance-based model — you don't pay until we successfully settle a debt on your behalf.",
  },
  {
    question: "How long does the debt settlement process take?",
    answer:
      "Most clients complete their program within 24 to 48 months. The timeline depends on your total debt amount and your monthly deposit schedule.",
  },
  {
    question: "What types of debt can you help with?",
    answer:
      "We handle credit cards, personal loans, medical bills, collections, business debt, vehicle repossession, and private student loans. We do not handle federal student loans, mortgages, or secured debt.",
  },
] as const;

export const howItWorksFaqs: ReadonlyArray<FaqItem> = [
  {
    question: "Do I need to have all my debt information ready for the consultation?",
    answer:
      "It helps, but it's not required. Our specialists will guide you through what's needed during your free consultation.",
  },
  {
    question: "Can I make extra payments to finish faster?",
    answer:
      "Absolutely. There are zero prepayment penalties. Any extra payments you make go directly toward reducing your principal balance and shortening your timeline.",
  },
  {
    question: "What happens if I miss a monthly deposit?",
    answer:
      "We work with you to find a solution. Communication is key — reach out to your dedicated specialist and we'll adjust your plan as needed.",
  },
  {
    question: "Do I have to speak with my creditors directly?",
    answer:
      "No. Once you enroll, we handle all communication with your creditors. You can stop taking their calls and let us do the work.",
  },
] as const;

export const aboutAdvantages = [
  {
    title: "Up to 50% Savings",
    description: "Negotiation strategies that significantly reduce your overall debt.",
    icon: Percent,
  },
  {
    title: "Zero Prepayment Penalties",
    description: "Extra payments go directly toward shortening your timeline.",
    icon: Unlock,
  },
  {
    title: "Restructuring",
    description: "Direct creditor negotiation to settle for less than owed.",
    icon: Handshake,
  },
  {
    title: "24-48 Month Timeline",
    description: "A clear, accelerated path to debt freedom.",
    icon: Calendar,
  },
] as const;

export const serviceItems: ReadonlyArray<ServiceItem> = [
  {
    slug: "credit-card-debt",
    path: "/services/credit-card-debt",
    name: "Credit Card Debt",
    shortDescription: "Reduce or eliminate high-interest credit card balances.",
    heroSubtitle: "Stop paying high interest and start settling for less.",
    problem:
      "Credit card debt can feel impossible to escape. With high interest rates piling up month after month, minimum payments barely make a dent. You deserve a faster way out.",
    solution:
      "We negotiate directly with your credit card issuers to settle your balances for a fraction of what you owe. Our experienced team handles all communication while you make one affordable monthly deposit. Most clients get their first settlement with in the first 3-7 month of the program",
    ctaLabel: "Get Help With Credit Card Debt",
    image: assets.creditCardDebt,
    imageAlt: "Compass Debt Solutions credit card debt relief service",
    icon: CreditCard,
    faq: [
      {
        question: "How much credit card debt do I need to qualify?",
        answer: "We typically work with clients who have $5,000 or more in unsecured credit card debt.",
      },
      {
        question: "Will I still have to pay interest while in the program?",
        answer:
          "During our negotiation process, we work to freeze or reduce interest on your enrolled accounts, so your balance stops growing.",
      },
      {
        question: "Can I keep using my credit cards while in the program?",
        answer:
          "No. To achieve the best settlement outcomes, you'll stop using enrolled credit cards during the program.",
      },
    ],
    metaTitle: "Credit Card Debt Relief in Arizona | Compass Debt Solutions",
    metaDescription:
      "Get help settling high-interest credit card debt in Arizona. Compass Debt Solutions helps reduce balances and build a faster path to debt freedom.",
    metaKeywords:
      "credit card debt relief arizona, chandler debt settlement, arizona debt relief, credit card settlement phoenix",
  },
  {
    slug: "unsecured-loans-collections",
    path: "/services/unsecured-loans-collections",
    name: "Unsecured Loans & Collections",
    shortDescription: "Stop collector calls and negotiate old debt.",
    heroSubtitle: "Put an end to collection calls and negotiate your way out.",
    problem:
      "Collection calls and mounting loan payments can take over your life. When you're juggling multiple personal loans, it's easy to fall behind. We help you regain control.",
    solution:
      "Once you enroll, we reach out to each of your creditors on your behalf. We then negotiate lump-sum settlements with each creditor, often reducing your total debt significantly.",
    ctaLabel: "Get Help With Unsecured Loans & Collections",
    image: assets.unsecuredLoans,
    imageAlt: "Compass Debt Solutions unsecured loans and collections support",
    icon: PiggyBank,
    faq: [
      {
        question: "Will the collection calls stop?",
        answer:
          "Once you enroll with us, we ask collectors to direct all communication to our office. You should see a significant reduction in calls.",
      },
      {
        question: "Can you settle debts that are already in collections?",
        answer:
          "Yes. Debts in collections are often the easiest to settle because collectors are motivated to recover something rather than nothing.",
      },
      {
        question: "How long does it take to settle a personal loan?",
        answer: "Most personal loan settlements are reached within 12–24 months of enrolling.",
      },
    ],
    metaTitle: "Unsecured Loan Debt Help in Arizona | Compass Debt Solutions",
    metaDescription:
      "Stop collection calls and settle unsecured loan debt with Compass Debt Solutions. Serving Chandler, Phoenix, and clients across Arizona.",
    metaKeywords:
      "unsecured loan settlement arizona, collections help phoenix, personal loan debt relief arizona, debt collectors chandler",
  },
  {
    slug: "medical-debt",
    path: "/services/medical-debt",
    name: "Medical Debt",
    shortDescription: "Negotiate complex hospital bills.",
    heroSubtitle: "Turn overwhelming medical bills into manageable settlements.",
    problem:
      "A single medical emergency can lead to thousands of dollars in bills. Even with insurance, hospital costs can quickly become overwhelming. You shouldn't have to choose between your health and your financial future.",
    solution:
      "Medical debt is one of the most common types of debt. We leverage outstanding long term relationships to reduce your hospital bills and stop collection efforts. You focus on healing — we handle the paperwork.",
    ctaLabel: "Get Help With Medical Debt",
    image: assets.medicalDebt,
    imageAlt: "Compass Debt Solutions medical debt relief service",
    icon: HeartPulse,
    faq: [
      {
        question: "Can you negotiate medical bills that have already gone to collections?",
        answer:
          "Yes. Medical debt in collections is highly negotiable, and we often achieve significant reductions.",
      },
      {
        question: "Does medical debt affect my credit differently?",
        answer:
          "Medical debt is treated similarly to other unsecured debt, but there are special protections and dispute options we can leverage on your behalf.",
      },
      {
        question: "Will I have to pay the full hospital bill?",
        answer:
          "No. Our goal is to settle your medical debt for less than the full amount — often much less.",
      },
    ],
    metaTitle: "Medical Debt Relief Arizona | Compass Debt Solutions",
    metaDescription:
      "Negotiate hospital bills and medical collections with Compass Debt Solutions. Arizona medical debt relief built around faster, manageable settlements.",
    metaKeywords:
      "medical debt relief arizona, hospital bill negotiation phoenix, medical collections help chandler, debt settlement arizona",
  },
  {
    slug: "business-debt",
    path: "/services/business-debt",
    name: "Business Debt",
    shortDescription: "Accelerated settlement within 24-48 months.",
    heroSubtitle: "Accelerate your path out of business debt in 24-48 months.",
    problem:
      "Business debt can stifle your company's growth and keep you up at night. \u00a0If your business is no longer on operation or dissolved, we can help reduce what I owed.",
    solution:
      "We work directly with your business creditors to negotiate reduced settlements, often on an accelerated timeline. If your business is closed, we tailor our approach to your specific situation.",
    ctaLabel: "Get Help With Business Debt",
    image: assets.businessDebt,
    imageAlt: "Compass Debt Solutions business debt settlement service",
    icon: Briefcase,
    faq: [
      {
        question: "Can you help if my business is still operating?",
        answer:
          "No, we only work with business that are dissolved and no longer active.",
      },
      {
        question: "How is business debt settlement different from personal?",
        answer:
          "Business debt settlement follows a similar process, but timelines are often faster — typically 24–48 months.\u00a0",
      },
      {
        question: "Will my personal credit be affected by business debt settlement?",
        answer:
          "It depends on whether you personally guaranteed the debt. We'll review your situation and explain the implications during your consultation.",
      },
    ],
    metaTitle: "Business Debt Settlement Arizona | Compass Debt Solutions",
    metaDescription:
      "Resolve business debt in Arizona with accelerated settlement strategies from Compass Debt Solutions. Support for active and closed businesses.",
    metaKeywords:
      "business debt settlement arizona, small business debt relief phoenix, chandler business debt help, arizona debt solutions",
  },
  {
    slug: "vehicle-repossession",
    path: "/services/vehicle-repossession",
    name: "Vehicle Repossession",
    shortDescription: "Guidance for at-risk or already-repossessed vehicles.",
    heroSubtitle: "Protect your vehicle or recover it after repossession.",
    problem:
      "Looking for help with a vehicle that has been repossessed, we cn potentially reduce the amount owed. Give us a ca",
    solution:
      "We step in on your behalf to settle the debt for less in it’s owed.",
    ctaLabel: "Get Help With Vehicle Repossession",
    image: assets.vehicleRepossession,
    imageAlt: "Compass Debt Solutions vehicle repossession support service",
    icon: Car,
    faq: [
      {
        question: "Can you help if my car has already been repossessed?",
        answer:
          "Yes. We can negotiate with the lender to potentially return the vehicle or settle the remaining deficiency balance for less.",
      },
      {
        question: "What if I'm at risk of repossession right now?",
        answer:
          "Contact us immediately. The sooner we get involved, the more options we have to protect your vehicle.",
      },
      {
        question: "Do you handle voluntary repossessions?",
        answer:
          "Yes. If you choose to voluntarily return your vehicle, we can help negotiate the remaining balance and minimize the financial impact.",
      },
    ],
    metaTitle: "Vehicle Repossession Help Arizona | Compass Debt Solutions",
    metaDescription:
      "Get vehicle repossession support in Arizona. Compass Debt Solutions helps protect or recover vehicles and settle deficiency balances for less.",
    metaKeywords:
      "vehicle repossession help arizona, car repossession phoenix, deficiency balance settlement chandler, debt relief arizona",
  },
  {
    slug: "private-student-loans",
    path: "/services/private-student-loans",
    name: "Private Student Loans",
    shortDescription: "Settle private student loan debt for less than owed.",
    heroSubtitle: "Settle your private student loans for less than you owe.",
    problem:
      "Private student loan debt follows you long after graduation. Unlike federal loans, private loans have fewer protections — but they can still be settled for less than you owe.",
    solution:
      "Private student loans are negotiable, and we have experience working with private lenders to reduce balances. We'll review your loan details and build a settlement strategy tailored to your situation.",
    ctaLabel: "Get Help With Private Student Loans",
    image: assets.privateStudentLoans,
    imageAlt: "Compass Debt Solutions private student loan relief service",
    icon: GraduationCap,
    faq: [
      {
        question: "Can you help with federal student loans?",
        answer:
          "No. We only handle private student loans. Federal loans have separate programs like income-driven repayment and forgiveness.",
      },
      {
        question: "How much private student loan debt do I need to qualify?",
        answer:
          "We work with clients who have $5,000 or more in private student loan debt.",
      },
      {
        question: "Will settling my student loans affect my co-signer?",
        answer:
          "Yes, it may. We'll review your specific situation and discuss how to handle co-signer considerations during your consultation.",
      },
    ],
    metaTitle: "Private Student Loan Settlement Arizona | Compass Debt Solutions",
    metaDescription:
      "Compass Debt Solutions helps Arizona clients settle private student loan debt for less. Guidance for co-signed and high-balance private loans.",
    metaKeywords:
      "private student loan settlement arizona, student loans phoenix, private student debt relief chandler, debt settlement arizona",
  },
] as const;

export const servicesByPath = Object.fromEntries(serviceItems.map((service) => [service.path, service])) as Record<
  Extract<SitePath, `/services/${string}`>,
  ServiceItem
>;

export const servicePaths = serviceItems.map((service) => service.path) as Extract<
  SitePath,
  `/services/${string}`
>[];
