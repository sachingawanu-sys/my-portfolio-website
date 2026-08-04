import { useState, type ChangeEvent, type FormEvent } from 'react'
import {
  ArrowRight,
  BarChart3,
  Briefcase,
  Building2,
  CheckCircle2,
  ChevronRight,
  ClipboardCheck,
  Code2,
  Database,
  ExternalLink,
  FileCheck2,
  Globe2,
  LayoutDashboard,
  Link as LinkIcon,
  Mail,
  MapPin,
  Menu,
  Phone,
  Rocket,
  Send,
  Sparkles,
  X,
  type LucideIcon,
} from 'lucide-react'

type SkillGroup = {
  title: string
  description: string
  skills: string[]
}

type Service = {
  title: string
  description: string
  bullets: string[]
  href: string
  cta: string
  icon: LucideIcon
}

type Project = {
  title: string
  date: string
  type: string
  summary: string
  impact: string[]
  stack: string[]
  href: string
  cta: string
}

type Experience = {
  company: string
  role: string
  period: string
  points: string[]
}

type ContactForm = {
  name: string
  email: string
  company: string
  message: string
}

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

const stats = [
  { value: '14+', label: 'Years across e-commerce operations & legal documentation' },
  { value: '2', label: 'Owned business platforms in India' },
  { value: '6+', label: 'Automation, BI & web app builds' },
  { value: '360°', label: 'Ops, compliance, data & documentation' },
]

const skillGroups: SkillGroup[] = [
  {
    title: 'E-commerce & Operations',
    description: 'Marketplace, catalogue, inventory, ERP and fulfilment workflows.',
    skills: ['Shopify', 'Payment Reconciliation', 'Inventory Management', 'Catalogue Management', 'ERP', 'Odoo', 'Uniware'],
  },
  {
    title: 'Data, Reporting & Automation',
    description: 'Lean systems that reduce manual work and turn operations into clear dashboards.',
    skills: ['Google Sheets', 'Excel', 'Google Looker Studio', 'Google Apps Script', 'n8n', 'Make.com', 'Google AI Studio'],
  },
  {
    title: 'Business Tools & Platforms',
    description: 'Practical platforms for shipping, accounts, web presence and documentation.',
    skills: ['WordPress', 'Shiprocket', 'Shipway', 'Tally', 'Microsoft Word', 'Web Apps', 'Process SOPs'],
  },
]

const services: Service[] = [
  {
    title: 'Payment Reconciliation Systems',
    description: 'Design and implementation of reconciliation templates, controls and reporting workflows for e-commerce sellers.',
    bullets: ['Marketplace settlement checks', 'SKU-level mismatch tracking', 'Reusable reporting templates'],
    href: 'https://simplyrecon.in',
    cta: 'Explore SimplyRecon',
    icon: BarChart3,
  },
  {
    title: 'Legal Documentation & Compliance',
    description: 'PAN, registration, licence and documentation support delivered through a streamlined India-focused service model.',
    bullets: ['Business registration support', 'Government documentation flows', 'Compliance-ready file preparation'],
    href: 'https://clickdocs.co.in',
    cta: 'Visit ClickDocs',
    icon: FileCheck2,
  },
  {
    title: 'E-commerce Operations Consulting',
    description: 'Hands-on support for catalogue quality, inventory hygiene, ERP operations and decision-ready reporting.',
    bullets: ['Catalogue clean-up', 'Inventory control', 'Operations dashboards'],
    href: '#contact',
    cta: 'Discuss consulting',
    icon: Briefcase,
  },
]

const ownedPlatforms = [
  {
    name: 'ClickDocs',
    url: 'https://clickdocs.co.in',
    description: 'Business registration, legal, compliance and documentation services for individuals and businesses across India.',
  },
  {
    name: 'SimplyRecon',
    url: 'https://simplyrecon.in',
    description: 'Financial reconciliation, business automation and operational reporting for e-commerce and growing teams.',
  },
]

const projects: Project[] = [
  {
    title: 'Unified Marketplace Dashboard',
    date: 'Apr 2024',
    type: 'BI & Reporting',
    summary: 'Built a Google Looker Studio dashboard for a Dubai-based seller to consolidate multi-marketplace SKU data and surface real-time insights.',
    impact: ['Created a single source of truth for SKU performance', 'Improved review speed for marketplace operations', 'Enabled faster data-backed decisions'],
    stack: ['Looker Studio', 'Google Sheets', 'SKU Analytics'],
    href: 'https://lookerstudio.google.com/reporting/227e09c0-bdfa-4257-abe3-8abd36728c26',
    cta: 'View report',
  },
  {
    title: 'Amazon SKU–ASIN Cross-reference App',
    date: 'Mar 2024',
    type: 'Automation',
    summary: 'Developed a custom Google Apps Script web app to automate SKU-to-ASIN mapping and reduce the repeated manual checking effort.',
    impact: ['Reduced manual lookup cycles', 'Improved catalogue mapping accuracy', 'Made cross-team reference data easier to use'],
    stack: ['Google Apps Script', 'Sheets', 'Amazon Catalogue Ops'],
    href: '#contact',
    cta: 'Request walkthrough',
  },
  {
    title: 'Order Status Tracking System',
    date: 'Dec 2023',
    type: 'Customer Operations',
    summary: 'Created a lightweight order tracking web app that lets customers view real-time order status while reducing support follow-ups.',
    impact: ['Improved customer transparency', 'Reduced repetitive support queries', 'Connected operations data with customer-facing views'],
    stack: ['Apps Script', 'Google Sheets', 'Web App'],
    href: '#contact',
    cta: 'Build similar system',
  },
  {
    title: 'WordPress Service Websites',
    date: 'Jul 2023',
    type: 'Web Delivery',
    summary: 'Planned and built service websites for documentation, licence and local business use cases, including ClickDocs and related client properties.',
    impact: ['Structured service pages for lead generation', 'Created clean content flows for local search', 'Improved online credibility for service providers'],
    stack: ['WordPress', 'Service SEO', 'Lead Forms'],
    href: 'https://clickdocs.co.in',
    cta: 'See ClickDocs',
  },
]

const experiences: Experience[] = [
  {
    company: 'Independent Consulting / E-commerce Industry',
    role: 'Freelancer — Reconciliation, Automation & Catalogue Operations',
    period: 'Oct 2023 — Present',
    points: [
      'Designing payment reconciliation templates for multiple e-commerce platforms to improve accuracy and reporting efficiency.',
      'Managing product listings, catalogue hygiene and operational reporting across marketplace workflows.',
      'Building custom dashboards and automation utilities for SKU, order and reconciliation use cases.',
    ],
  },
  {
    company: 'ClickDocs',
    role: 'Legal Documentation Consultant',
    period: 'Oct 2022 — Oct 2023',
    points: [
      'Delivered legal documentation services and structured repeatable document preparation workflows.',
      'Translated complex registration and compliance requirements into clear, customer-friendly service journeys.',
    ],
  },
  {
    company: 'Rustom Hospitality Pvt Ltd',
    role: 'E-commerce Manager',
    period: 'Aug 2017 — Nov 2019',
    points: [
      'Managed end-to-end payment reconciliation across e-commerce platforms and reduced operational blind spots.',
      'Led e-commerce growth strategy implementation to improve operational efficiency and sales performance.',
      'Implemented process improvements, system automation and data-driven reporting for better decision-making.',
    ],
  },
  {
    company: 'Shopper52',
    role: 'E-commerce Executive',
    period: 'Dec 2014 — Jul 2017',
    points: [
      'Handled payment reconciliation, inventory control and catalogue operations across multiple e-commerce platforms.',
      'Supported daily marketplace execution and reporting for cross-functional business teams.',
    ],
  },
  {
    company: 'Omtarang Data Pvt Ltd',
    role: 'Data Entry Operator',
    period: 'Sep 2013 — Oct 2014',
    points: ['Maintained structured data entry operations with attention to accuracy and turnaround time.'],
  },
  {
    company: 'Ashray Udyog Pvt Ltd',
    role: 'Back Office Executive',
    period: 'Nov 2010 — May 2013',
    points: ['Supported data entry operations, account reconciliation and back-office process execution.'],
  },
]

const workingPrinciples = [
  'Build simple systems before complex software.',
  'Make every operational number traceable.',
  'Document the process so teams can repeat it.',
  'Use automation where it saves time, errors or follow-ups.',
]

const initialFormState: ContactForm = {
  name: '',
  email: '',
  company: '',
  message: '',
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [form, setForm] = useState<ContactForm>(initialFormState)
  const [formStatus, setFormStatus] = useState<'idle' | 'sent'>('idle')

  const handleFieldChange = (field: keyof ContactForm) => (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((current) => ({ ...current, [field]: event.target.value }))
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name || 'website visitor'}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company || 'Not specified'}\n\nMessage:\n${form.message}`,
    )

    window.location.href = `mailto:sachingawanu@gmail.com?subject=${subject}&body=${body}`
    setFormStatus('sent')
    setForm(initialFormState)
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-slate-950 text-slate-100 selection:bg-cyan-300 selection:text-slate-950">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8" aria-label="Primary navigation">
          <a href="#home" className="group flex items-center gap-3" onClick={() => setIsMenuOpen(false)}>
            <span className="grid h-11 w-11 place-items-center overflow-hidden rounded-2xl border border-cyan-300/30 bg-gradient-to-br from-cyan-300 to-blue-500 p-0.5 shadow-lg shadow-cyan-500/20">
              <img src="/sachin-profile.jpg" alt="Sachin Gawanu" className="h-full w-full rounded-[0.85rem] object-cover" />
            </span>
            <span className="leading-tight">
              <span className="block text-sm font-semibold tracking-wide text-white">Sachin Gawanu</span>
              <span className="block text-xs text-slate-400 group-hover:text-cyan-200">Operations · Automation · Compliance</span>
            </span>
          </a>

          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/10 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="https://simplyrecon.in"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-100 transition hover:border-cyan-200 hover:bg-cyan-300/20"
            >
              SimplyRecon
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="https://clickdocs.co.in"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:border-cyan-200 hover:bg-white/15"
            >
              ClickDocs
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 text-white lg:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </nav>

        {isMenuOpen && (
          <div className="border-t border-white/10 bg-slate-950/95 px-4 py-4 lg:hidden">
            <div className="mx-auto grid max-w-7xl gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-2xl px-4 py-3 text-sm font-medium text-slate-200 transition hover:bg-white/10"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="mt-3 flex flex-col gap-2.5 border-t border-white/10 pt-3">
                <a
                  href="https://simplyrecon.in"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-cyan-300/30 bg-cyan-300/10 px-4 py-3 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-300/20"
                >
                  SimplyRecon
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </a>
                <a
                  href="https://clickdocs.co.in"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
                >
                  ClickDocs
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      <main>
        <section id="home" className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-40">
          <div className="absolute left-1/2 top-0 h-[44rem] w-[44rem] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" aria-hidden="true" />
          <div className="absolute right-0 top-28 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" aria-hidden="true" />
          <div className="mx-auto grid max-w-7xl gap-12 px-4 pb-20 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:pb-28">
            <div className="relative z-10 flex flex-col justify-center">
              <div className="animate-fade-up inline-flex w-fit items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-100 shadow-lg shadow-cyan-500/10">
                <Sparkles className="h-4 w-4" aria-hidden="true" />
                Senior E-commerce & Operations Manager · 14+ years
              </div>
              <h1 className="animate-fade-up mt-7 max-w-4xl text-3xl font-black tracking-tight text-white sm:text-5xl lg:text-7xl">
                I build reliable operations, reconciliation systems and automation for growing businesses.
              </h1>
              <p className="animate-fade-up mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
                I am Sachin Gawanu, an India-based operator and builder helping founders, e-commerce sellers and service businesses turn messy workflows into transparent, compliant and data-driven systems.
              </p>

              <div className="animate-fade-up mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-300 px-6 py-3 text-base font-black text-slate-950 shadow-xl shadow-cyan-500/20 transition hover:-translate-y-1 hover:bg-cyan-200"
                >
                  Start a conversation
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </a>
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3 text-base font-bold text-white transition hover:-translate-y-1 hover:border-cyan-200/60 hover:bg-white/10"
                >
                  View selected work
                  <LayoutDashboard className="h-5 w-5" aria-hidden="true" />
                </a>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="rounded-3xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur">
                    <p className="text-2xl font-black text-white sm:text-3xl">{stat.value}</p>
                    <p className="mt-1 text-xs leading-5 text-slate-400 sm:mt-2 sm:text-sm">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-4 text-sm text-slate-300">
                <a href="mailto:sachingawanu@gmail.com" className="inline-flex items-center gap-2 hover:text-cyan-200">
                  <Mail className="h-4 w-4 text-cyan-300" aria-hidden="true" />
                  sachingawanu@gmail.com
                </a>
                <a href="tel:+919930036907" className="inline-flex items-center gap-2 hover:text-cyan-200">
                  <Phone className="h-4 w-4 text-cyan-300" aria-hidden="true" />
                  +91 99300 36907
                </a>
                <span className="inline-flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-cyan-300" aria-hidden="true" />
                  Serving clients across India
                </span>
              </div>
            </div>

            <div className="relative z-10 lg:pt-8">
              <div className="animate-float rounded-[2rem] border border-white/10 bg-white/[0.06] p-4 shadow-2xl shadow-cyan-950/40 backdrop-blur-xl">
                <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/90 p-5">
                  <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-5">
                    <div>
                      <p className="text-sm font-semibold text-cyan-200">Operations command centre</p>
                      <h2 className="mt-1 text-2xl font-black text-white">Reconcile · Automate · Report</h2>
                    </div>
                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-cyan-300 text-slate-950">
                      <Database className="h-6 w-6" aria-hidden="true" />
                    </div>
                  </div>

                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    {[
                      ['Settlement variance', 'Trace mismatches before they become losses', '92%'],
                      ['Catalogue hygiene', 'Keep SKUs, ASINs and listings aligned', '88%'],
                      ['Documentation flow', 'Move registrations with clearer checklists', '81%'],
                      ['Decision reports', 'Dashboards for daily operational reviews', '95%'],
                    ].map(([title, text, progress]) => (
                      <div key={title} className="rounded-3xl border border-white/10 bg-white/[0.04] p-4">
                        <div className="flex items-center justify-between gap-3">
                          <p className="font-bold text-white">{title}</p>
                          <span className="text-xs font-bold text-cyan-200">{progress}</span>
                        </div>
                        <p className="mt-2 min-h-10 text-sm leading-5 text-slate-400">{text}</p>
                        <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
                          <div className="h-full rounded-full bg-gradient-to-r from-cyan-300 to-blue-500" style={{ width: progress }} />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 rounded-3xl border border-cyan-300/20 bg-cyan-300/10 p-5">
                    <div className="flex items-start gap-4">
                      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-cyan-300 text-slate-950">
                        <Rocket className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="font-black text-white">Current focus</p>
                        <p className="mt-2 text-sm leading-6 text-cyan-50/80">
                          Scaling ClickDocs and SimplyRecon while consulting on reconciliation dashboards, marketplace operations and practical automation for Indian businesses.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="scroll-mt-24 border-y border-white/10 bg-white/[0.03] py-20 sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.3em] text-cyan-300">About me</p>
              <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-5xl">Operator mindset. Builder execution. Business-first automation.</h2>
            </div>
            <div className="grid gap-6 text-slate-300">
              <p className="text-lg leading-8">
                My career started in back-office and data operations, grew through e-commerce execution and management, and evolved into automation, dashboards, payment reconciliation and legal documentation services. That journey helps me understand both the ground-level process and the leadership-level reporting need.
              </p>
              <p className="text-lg leading-8">
                Today I own and operate ClickDocs for documentation and compliance services, and SimplyRecon for reconciliation and business automation. I combine practical operations experience with tools like Google Sheets, Looker Studio, Apps Script, n8n, Make.com, ERP systems and WordPress to create systems that are clear, fast and maintainable.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {workingPrinciples.map((principle) => (
                  <div key={principle} className="flex gap-3 rounded-3xl border border-white/10 bg-slate-950/60 p-4">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-300" aria-hidden="true" />
                    <p className="text-sm font-medium leading-6 text-slate-200">{principle}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="scroll-mt-24 py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-black uppercase tracking-[0.3em] text-cyan-300">Skills & technologies</p>
              <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-5xl">Tools I use to simplify complex operations.</h2>
              <p className="mt-5 text-lg leading-8 text-slate-300">
                A practical stack for e-commerce, reconciliation, dashboards, workflow automation and service delivery.
              </p>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {skillGroups.map((group) => (
                <article key={group.title} className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-xl shadow-slate-950/20">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-200">
                    {group.title.includes('Data') ? <Code2 className="h-6 w-6" aria-hidden="true" /> : group.title.includes('Tools') ? <Globe2 className="h-6 w-6" aria-hidden="true" /> : <Building2 className="h-6 w-6" aria-hidden="true" />}
                  </div>
                  <h3 className="mt-5 text-xl font-black text-white">{group.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">{group.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span key={skill} className="rounded-full border border-white/10 bg-slate-950/70 px-3 py-1.5 text-sm font-semibold text-slate-200">
                        {skill}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="scroll-mt-24 border-y border-white/10 bg-white/[0.03] py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.3em] text-cyan-300">Services</p>
                <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-5xl">Services offered through my portfolio of businesses.</h2>
              </div>
              <p className="text-lg leading-8 text-slate-300">
                Whether you need documentation support, reconciliation visibility or automation for everyday operations, I focus on outcomes that are simple to run and measurable from day one.
              </p>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {services.map((service) => {
                const Icon = service.icon
                const isExternal = service.href.startsWith('http')

                return (
                  <article key={service.title} className="group flex h-full flex-col rounded-[2rem] border border-white/10 bg-slate-950/70 p-6 transition hover:-translate-y-2 hover:border-cyan-300/40 hover:bg-slate-900/90">
                    <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-cyan-300 to-blue-500 text-slate-950 shadow-lg shadow-cyan-500/20">
                      <Icon className="h-7 w-7" aria-hidden="true" />
                    </div>
                    <h3 className="mt-6 text-xl font-black text-white">{service.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-400">{service.description}</p>
                    <ul className="mt-5 grid gap-3">
                      {service.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-2 text-sm text-slate-300">
                          <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" aria-hidden="true" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                    <a
                      href={service.href}
                      target={isExternal ? '_blank' : undefined}
                      rel={isExternal ? 'noreferrer' : undefined}
                      className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-black text-cyan-200 transition group-hover:translate-x-1"
                    >
                      {service.cta}
                      {isExternal ? <ExternalLink className="h-4 w-4" aria-hidden="true" /> : <ArrowRight className="h-4 w-4" aria-hidden="true" />}
                    </a>
                  </article>
                )
              })}
            </div>

            <div className="mt-12 rounded-[2rem] border border-cyan-300/20 bg-cyan-300/10 p-6 sm:p-8">
              <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
                <div>
                  <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-200">Owned platforms</p>
                  <h3 className="mt-3 text-2xl font-black text-white sm:text-3xl">A connected ecosystem for documentation, reconciliation and automation.</h3>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {ownedPlatforms.map((platform) => (
                    <a
                      key={platform.url}
                      href={platform.url}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-3xl border border-white/10 bg-slate-950/60 p-5 transition hover:-translate-y-1 hover:border-cyan-200/50 hover:bg-slate-950"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <p className="font-black text-white">{platform.name}</p>
                        <ExternalLink className="h-4 w-4 text-cyan-200" aria-hidden="true" />
                      </div>
                      <p className="mt-3 text-sm leading-6 text-slate-300">{platform.description}</p>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="scroll-mt-24 py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-black uppercase tracking-[0.3em] text-cyan-300">Featured projects</p>
              <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-5xl">Selected builds that connect data, operations and user experience.</h2>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              {projects.map((project) => {
                const isExternal = project.href.startsWith('http')

                return (
                  <article key={project.title} className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-xl shadow-slate-950/20 transition hover:-translate-y-1 hover:border-cyan-300/30">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
                        {project.type}
                      </span>
                      <span className="text-sm font-bold text-slate-400">{project.date}</span>
                    </div>
                    <h3 className="mt-5 text-2xl font-black text-white">{project.title}</h3>
                    <p className="mt-3 text-base leading-7 text-slate-300">{project.summary}</p>
                    <div className="mt-6 grid gap-3">
                      {project.impact.map((item) => (
                        <div key={item} className="flex gap-3 text-sm leading-6 text-slate-300">
                          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-300" aria-hidden="true" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.stack.map((tool) => (
                        <span key={tool} className="rounded-full bg-slate-950/70 px-3 py-1.5 text-xs font-bold text-slate-300">
                          {tool}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.href}
                      target={isExternal ? '_blank' : undefined}
                      rel={isExternal ? 'noreferrer' : undefined}
                      className="mt-6 inline-flex items-center gap-2 text-sm font-black text-cyan-200 transition hover:translate-x-1"
                    >
                      {project.cta}
                      {isExternal ? <ExternalLink className="h-4 w-4" aria-hidden="true" /> : <ArrowRight className="h-4 w-4" aria-hidden="true" />}
                    </a>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section id="experience" className="scroll-mt-24 border-y border-white/10 bg-white/[0.03] py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.3em] text-cyan-300">Experience</p>
                <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-5xl">Built from the operational floor up.</h2>
                <p className="mt-5 text-lg leading-8 text-slate-300">
                  A 14+ year journey through back-office operations, data entry, accounts reconciliation, e-commerce execution, management, consulting and productised service platforms.
                </p>
              </div>

              <div className="relative">
                <div className="absolute left-4 top-4 hidden h-[calc(100%-2rem)] w-px bg-gradient-to-b from-cyan-300 via-white/20 to-transparent sm:block" aria-hidden="true" />
                <div className="grid gap-5">
                  {experiences.map((experience) => (
                    <article key={`${experience.company}-${experience.period}`} className="relative rounded-[2rem] border border-white/10 border-l-cyan-300/40 bg-slate-950/75 p-5 border-l-4 sm:border-l sm:p-6 sm:ml-12">
                      <span className="absolute -left-[3.25rem] top-6 hidden h-8 w-8 rounded-full border border-cyan-300/40 bg-slate-950 ring-8 ring-slate-950 sm:grid sm:place-items-center">
                        <span className="h-3 w-3 rounded-full bg-cyan-300" />
                      </span>
                      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <h3 className="text-xl font-black text-white">{experience.company}</h3>
                          <p className="mt-1 font-semibold text-cyan-100">{experience.role}</p>
                        </div>
                        <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-sm font-bold text-slate-300">{experience.period}</span>
                      </div>
                      <ul className="mt-5 grid gap-3">
                        {experience.points.map((point) => (
                          <li key={point} className="flex gap-3 text-sm leading-6 text-slate-300">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="credentials" className="scroll-mt-24 py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-3">
              <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 lg:col-span-1">
                <ClipboardCheck className="h-10 w-10 text-cyan-300" aria-hidden="true" />
                <h2 className="mt-5 text-2xl font-black text-white">Education & credentials</h2>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  Formal education supported by hands-on experience in operations, automation and business service delivery. Certifications can be added as they become available.
                </p>
              </div>
              <div className="grid gap-6 lg:col-span-2 sm:grid-cols-3">
                {[
                  ['Mumbai University, Mumbai', 'T.Y.B.Com', '2008 — 2009'],
                  ['S.I.W.S., Mumbai', 'S.Y.J.C. (Class XII)', '2005 — 2006'],
                  ['S.S.D.H. School, Mumbai', 'S.S.C. (Class X)', '2003 — 2004'],
                ].map(([institution, credential, year]) => (
                  <div key={institution} className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-6">
                    <p className="text-sm font-black text-cyan-200">{year}</p>
                    <h3 className="mt-4 text-lg font-black text-white">{institution}</h3>
                    <p className="mt-2 text-sm text-slate-400">{credential}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-24 border-t border-white/10 bg-gradient-to-b from-white/[0.04] to-cyan-950/30 py-20 sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.3em] text-cyan-300">Contact</p>
              <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-5xl">Let’s build a cleaner system for your business.</h2>
              <p className="mt-5 text-lg leading-8 text-slate-300">
                Share your requirement for reconciliation, automation, e-commerce operations or documentation services. I will review the context and suggest a practical next step.
              </p>

              <div className="mt-8 grid gap-4">
                <a href="mailto:sachingawanu@gmail.com" className="flex items-center gap-4 rounded-3xl border border-white/10 bg-slate-950/60 p-4 transition hover:border-cyan-300/40 hover:bg-slate-950">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-cyan-300/10 text-cyan-200">
                    <Mail className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-sm font-bold text-slate-400">Email</span>
                    <span className="block font-black text-white">sachingawanu@gmail.com</span>
                  </span>
                </a>
                <a href="tel:+919930036907" className="flex items-center gap-4 rounded-3xl border border-white/10 bg-slate-950/60 p-4 transition hover:border-cyan-300/40 hover:bg-slate-950">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-cyan-300/10 text-cyan-200">
                    <Phone className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-sm font-bold text-slate-400">Phone</span>
                    <span className="block font-black text-white">+91 99300 36907</span>
                  </span>
                </a>
                <a href="https://sachingawanu.in" target="_blank" rel="noreferrer" className="flex items-center gap-4 rounded-3xl border border-white/10 bg-slate-950/60 p-4 transition hover:border-cyan-300/40 hover:bg-slate-950">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-cyan-300/10 text-cyan-200">
                    <LinkIcon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-sm font-bold text-slate-400">Website</span>
                    <span className="block font-black text-white">sachingawanu.in</span>
                  </span>
                </a>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-6 shadow-2xl shadow-slate-950/40 sm:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-bold text-slate-200">
                  Name
                  <input
                    type="text"
                    value={form.name}
                    onChange={handleFieldChange('name')}
                    required
                    autoComplete="name"
                    className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300 focus:ring-4 focus:ring-cyan-300/10"
                    placeholder="Your name"
                  />
                </label>
                <label className="grid gap-2 text-sm font-bold text-slate-200">
                  Email
                  <input
                    type="email"
                    value={form.email}
                    onChange={handleFieldChange('email')}
                    required
                    autoComplete="email"
                    className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300 focus:ring-4 focus:ring-cyan-300/10"
                    placeholder="you@example.com"
                  />
                </label>
              </div>
              <label className="mt-5 grid gap-2 text-sm font-bold text-slate-200">
                Company / website
                <input
                  type="text"
                  value={form.company}
                  onChange={handleFieldChange('company')}
                  autoComplete="organization"
                  className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300 focus:ring-4 focus:ring-cyan-300/10"
                  placeholder="Company name or website"
                />
              </label>
              <label className="mt-5 grid gap-2 text-sm font-bold text-slate-200">
                What do you want to improve?
                <textarea
                  value={form.message}
                  onChange={handleFieldChange('message')}
                  required
                  rows={6}
                  className="resize-none rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300 focus:ring-4 focus:ring-cyan-300/10"
                  placeholder="Tell me about reconciliation, automation, documentation, reporting or e-commerce operations support you need."
                />
              </label>
              <button
                type="submit"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-cyan-300 px-6 py-3 text-base font-black text-slate-950 shadow-xl shadow-cyan-500/20 transition hover:-translate-y-1 hover:bg-cyan-200"
              >
                Send enquiry
                <Send className="h-5 w-5" aria-hidden="true" />
              </button>
              {formStatus === 'sent' && (
                <p className="mt-4 rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-4 text-sm leading-6 text-cyan-50">
                  Your email app has been opened with the enquiry details. If it did not open, please email me directly at sachingawanu@gmail.com.
                </p>
              )}
              <p className="mt-5 text-xs leading-5 text-slate-500">
                This form uses your email client so no personal information is stored on the website.
              </p>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-slate-950 py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center overflow-hidden rounded-2xl border border-cyan-300/30 bg-gradient-to-br from-cyan-300 to-blue-500 p-0.5 shadow-lg shadow-cyan-500/20">
                <img src="/sachin-profile.jpg" alt="Sachin Gawanu" className="h-full w-full rounded-[0.75rem] object-cover" />
              </span>
              <div>
                <p className="font-black text-white">Sachin Gawanu</p>
                <p className="text-sm text-slate-400">E-commerce operations, reconciliation and automation.</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-slate-500">© {new Date().getFullYear()} Sachin Gawanu. All rights reserved.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {ownedPlatforms.map((platform) => (
              <a
                key={platform.url}
                href={platform.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm font-bold text-slate-300 transition hover:border-cyan-300/40 hover:text-cyan-200"
              >
                {platform.name}
                <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            ))}
            <a href="mailto:sachingawanu@gmail.com" className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm font-bold text-slate-300 transition hover:border-cyan-300/40 hover:text-cyan-200">
              Email
              <Mail className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
