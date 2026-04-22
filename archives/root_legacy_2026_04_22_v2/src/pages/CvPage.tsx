import { templateData } from '../data/templateData';
import { CvFeatureCard } from '../components/CvFeatureCard';

export function CvPage() {
  return (
    <main className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-container-high mb-6">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            <span className="text-secondary text-sm font-bold uppercase tracking-widest font-label">
              Available for AI Projects
            </span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black font-headline text-on-background leading-tight mb-6 tracking-tighter uppercase">
            Tayier <span className="text-primary-container text-glow-orange">NIMAIT</span>
          </h1>
          <p className="text-xl md:text-2xl text-on-surface-variant font-light mb-10 max-w-2xl leading-relaxed">
            Architecting the future through <span className="text-secondary font-semibold">AI Automation</span>. Bridging medical precision with deep neural engineering.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="morph-button bg-primary-container text-on-primary-container px-8 py-4 rounded-xl font-black text-lg flex items-center gap-3" type="button">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                description
              </span>
              Télécharger CV COMPLET (PDF)
            </button>
            <button className="morph-button bg-surface-container-high text-on-surface px-8 py-4 rounded-xl font-bold flex items-center gap-3 border border-white/5" type="button">
              <span className="material-symbols-outlined">mail</span>
              Let's Talk
            </button>
          </div>
        </div>
        <div className="lg:col-span-5 relative">
          <div className="morph-card rounded-3xl p-4 aspect-square flex items-center justify-center relative z-10">
            <img
              alt="Tayier Nimait Portrait"
              className="w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-700"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBc2_wSGbGrQFYS-FIvYYpt-DHbbcnpZaDyalg6v8X5pRCYt7NyEUwiVj9tRFQn2BKuAEkgQxj31SnrpGzt_k0uekYEeLTYBkDgg0cRSDy_erXLZNtL6-sfwjLd8EbA3f4pEVsEFZPpgaN4wOtUObXUEMa8UP2hUx9IdJGl_phQOpSbYu91ECqY1Sys4CJaJXDe8cJagkiiQKQSuYDk_4DgVhBSJUByuXm5V8FRGb9r5LAKw0O9sv04RDsxec8OXbBWshI49t99VCI"
            />
          </div>
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 blur-[100px] rounded-full" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary/20 blur-[100px] rounded-full" />
        </div>
      </section>

      <section className="mb-32">
        <h2 className="text-4xl font-black font-headline mb-12 flex items-center gap-4">
          <span className="text-secondary">01.</span> Technical Arsenal
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6">
          <CvFeatureCard className="md:col-span-2 flex flex-col justify-between">
            <div className="w-14 h-14 morph-card-inset rounded-2xl flex items-center justify-center text-primary-container mb-6">
              <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                psychology
              </span>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">IA &amp; Machine Learning</h3>
              <p className="text-on-surface-variant text-sm">Deep Learning, Transformers, LLM orchestration, and prompt engineering.</p>
            </div>
          </CvFeatureCard>
          <CvFeatureCard className="md:col-span-1 flex flex-col items-center justify-center text-center">
            <div className="text-4xl font-black text-secondary mb-4 font-headline">Python</div>
            <div className="w-full h-1.5 morph-card-inset rounded-full overflow-hidden">
              <div className="bg-secondary h-full w-[95%]" />
            </div>
          </CvFeatureCard>
          <CvFeatureCard className="md:col-span-1 flex flex-col items-center justify-center text-center">
            <div className="text-4xl font-black text-primary-container mb-4 font-headline">React</div>
            <div className="w-full h-1.5 morph-card-inset rounded-full overflow-hidden">
              <div className="bg-primary-container h-full w-[85%]" />
            </div>
          </CvFeatureCard>
          <CvFeatureCard className="md:col-span-2 flex items-center gap-6">
            <div className="w-14 h-14 morph-card-inset rounded-full flex items-center justify-center text-tertiary">
              <span className="material-symbols-outlined text-3xl">database</span>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold">PostgreSQL &amp; SQL</h3>
              <p className="text-on-surface-variant text-xs">Complex querying &amp; architecture.</p>
            </div>
          </CvFeatureCard>
          <CvFeatureCard className="md:col-span-3 lg:col-span-4 group">
            <h3 className="text-3xl font-black mb-6 text-glow-cyan">Automation Workflows</h3>
            <div className="flex flex-wrap gap-3">
              {['Zapier', 'Make.com', 'n8n', 'LangChain', 'API Integration'].map((chip) => (
                <span key={chip} className="px-5 py-2 morph-card-inset rounded-xl text-secondary font-bold">
                  {chip}
                </span>
              ))}
            </div>
          </CvFeatureCard>
          <CvFeatureCard className="md:col-span-1 lg:col-span-2 flex items-end">
            <span className="text-5xl font-black text-white/10 uppercase font-headline">Data Viz</span>
          </CvFeatureCard>
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32">
        <div>
          <h2 className="text-4xl font-black font-headline mb-12 flex items-center gap-4">
            <span className="text-primary-container">02.</span> Experience
          </h2>
          <div className="space-y-8">
            <div className="relative pl-8 border-l border-white/5 group">
              <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-primary-container group-hover:scale-150 transition-transform" />
              <span className="text-sm text-secondary font-bold uppercase tracking-widest mb-2 block">Present</span>
              <h3 className="text-2xl font-bold mb-1">AI Automation Developer</h3>
              <p className="text-on-surface-variant font-medium mb-4">SNORBIK Labs</p>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Leading the development of autonomous agent systems for enterprise clients. Specializing in integrating LLMs into existing business operations to reduce overhead by up to 40%.
              </p>
            </div>
            <div className="relative pl-8 border-l border-white/5 group">
              <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-slate-700 group-hover:bg-primary-container transition-colors" />
              <span className="text-sm text-on-surface-variant font-bold uppercase tracking-widest mb-2 block">2021 - 2023</span>
              <h3 className="text-2xl font-bold mb-1">Software Solutions Architect</h3>
              <p className="text-on-surface-variant font-medium mb-4">TechInnovate Corp</p>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Developed bespoke automation tools using Python and React. Managed full-stack delivery of 12+ major automation projects.
              </p>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-4xl font-black font-headline mb-12 flex items-center gap-4">
            <span className="text-secondary">03.</span> Education
          </h2>
          <div className="space-y-8">
            <div className="morph-card p-6 rounded-3xl border-l-4 border-secondary">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-black">Expert IA - RNCP 7</h3>
                  <p className="text-secondary font-bold">Specialization in Neural Networks</p>
                </div>
                <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>
                  school
                </span>
              </div>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Master's level certification focusing on advanced AI architectures, deployment, and ethical implementation.
              </p>
            </div>
            <div className="morph-card p-6 rounded-3xl border-l-4 border-tertiary">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-black">Medical Background</h3>
                  <p className="text-tertiary font-bold">Professional Curriculum</p>
                </div>
                <span className="material-symbols-outlined text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>
                  medical_services
                </span>
              </div>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                A unique foundation in healthcare that provides a structured, analytical approach to problem-solving and complex system architecture.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-32">
        <h2 className="text-4xl font-black font-headline mb-12 flex items-center gap-4">
          <span className="text-primary-container">04.</span> Major Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="group morph-card rounded-[2rem] overflow-hidden">
            <div className="h-64 overflow-hidden relative">
              <img
                alt="AI Agent Workflow"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2wW5cD50XfAD7l3csojSocwpnfBib-FGdHJ_KdI4hJz1anp0TByp3sYLA4pnq0dr4Igc49QNphqODL5hxBbLTgashKlCSPgQQ1qxTCTygsglsWsGUQrM1qhl7cyevYLL-lpnVLJfWgY-Dor8pGBonuL8tfLAhp4u6zMT8drAhOAN1S4DXtIDWi9IA1zONJVk_ZjVuQcnr-vmI6J-wdC5Ex3eaWhZFjCAX0QtZGRlZhU-1VL9VXPkFWgN3JtL4ewAE4xkDtmt9k5k"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent" />
              <div className="absolute bottom-6 left-6">
                <span className="px-3 py-1 bg-primary-container text-on-primary-container rounded-lg text-xs font-black uppercase tracking-widest">
                  Enterprise AI
                </span>
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-3xl font-black mb-4">Autonomous Agent Mesh</h3>
              <p className="text-on-surface-variant mb-6 leading-relaxed">
                A decentralized system of AI agents capable of collaborative task solving, featuring a custom React dashboard and Python-based orchestration engine.
              </p>
              <div className="flex gap-4">
                <a className="text-secondary font-bold flex items-center gap-2 hover:translate-x-2 transition-transform" href="#">
                  View Case Study <span className="material-symbols-outlined">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>
          <div className="group morph-card rounded-[2rem] overflow-hidden">
            <div className="h-64 overflow-hidden relative">
              <img
                alt="Medical Data Dashboard"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDyDYho4SAqwXFk4YFFrGdj-lCAHANhV-ph1g6Ptoo7QKGtAGHGG8O3EP2RLVFNpQ0Go45ySzC2xnejPLO8a_1zkYiiE2yD3IJhdZAiQrgbDyaJyRnax_N3qAi6pgUgAUVVcTi_HudoWzRjEbgITaeHe6plOFoWXMh1cbcJds26lplBiMNr0jWnaNMdGCnm_2sre7DDU41Dy3F8KoVoFGbT7DwrtF-7TNinXlrDVik-4xYGdAgsa07FKLPgXZqJBFYbUwCzUIpUSsY"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent" />
              <div className="absolute bottom-6 left-6">
                <span className="px-3 py-1 bg-secondary text-on-secondary rounded-lg text-xs font-black uppercase tracking-widest">
                  HealthTech
                </span>
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-3xl font-black mb-4">Med-Analytica Suite</h3>
              <p className="text-on-surface-variant mb-6 leading-relaxed">
                Leveraging my medical background to build a predictive diagnostic assistant. Built with PyTorch and integrated into hospital CRM via custom APIs.
              </p>
              <div className="flex gap-4">
                <a className="text-secondary font-bold flex items-center gap-2 hover:translate-x-2 transition-transform" href="#">
                  View Case Study <span className="material-symbols-outlined">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="morph-card p-12 md:p-20 rounded-[3rem] text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[120px] rounded-full" />
        <div className="relative z-10">
          <h2 className="text-4xl md:text-6xl font-black font-headline mb-8 max-w-3xl mx-auto">
            Prêt à automatiser votre <span className="text-secondary">succès</span> ?
          </h2>
          <p className="text-xl text-on-surface-variant mb-12 max-w-xl mx-auto">
            Consultez l'intégralité de mon parcours et de mes compétences techniques.
          </p>
          <button className="morph-button bg-primary-container text-on-primary-container px-12 py-5 rounded-2xl font-black text-xl flex items-center gap-4 mx-auto" type="button">
            <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>
              download
            </span>
            Télécharger CV COMPLET (PDF)
          </button>
        </div>
      </section>
    </main>
  );
}
