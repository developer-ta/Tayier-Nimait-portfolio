import { templateData } from '../data/templateData';

export function ContactPage() {
  return (
    <main className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
      <section className="mb-20">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 border-l-4 border-primary pl-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-secondary" />
              </span>
              <span className="text-secondary font-label uppercase tracking-widest text-xs font-bold">
                {templateData.contactPage.status}
              </span>
            </div>
            <h1 className="font-headline text-5xl md:text-7xl font-black leading-tight text-on-background tracking-tighter uppercase">
              Parlons de votre <span className="text-primary text-glow">besoin</span>
            </h1>
          </div>
          <p className="text-on-surface-variant max-w-sm font-body text-lg leading-relaxed">
            Vous avez un projet d&apos;automatisation ou d&apos;IA ? Discutons-en pour transformer vos idées en solutions concrètes et performantes.
          </p>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5 space-y-8 order-2 lg:order-1">
          <div className="morph-card bg-surface-container-high p-8 rounded-xl border-t border-white/5">
            <h3 className="font-headline text-xl mb-6 text-on-background">{templateData.contactPage.directTitle}</h3>
            <div className="space-y-6">
              <a className="flex items-center p-4 rounded-xl bg-surface-container-lowest morph-inset group hover:bg-surface-container-high transition-all" href={`mailto:${templateData.contactPage.email}`}>
                <div className="h-12 w-12 rounded-lg bg-primary-container flex items-center justify-center text-on-primary-container mr-4">
                  <span className="material-symbols-outlined">mail</span>
                </div>
                <div>
                  <p className="text-xs text-on-surface-variant uppercase font-bold tracking-widest">{templateData.contactPage.emailLabel}</p>
                  <p className="text-on-surface font-semibold">{templateData.contactPage.email}</p>
                </div>
                <span className="material-symbols-outlined ml-auto text-on-surface-variant group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </a>
              <a className="flex items-center p-4 rounded-xl bg-surface-container-lowest morph-inset group hover:bg-surface-container-high transition-all" href="#">
                <div className="h-12 w-12 rounded-lg bg-secondary-container flex items-center justify-center text-on-secondary-container mr-4">
                  <span className="material-symbols-outlined">link</span>
                </div>
                <div>
                  <p className="text-xs text-on-surface-variant uppercase font-bold tracking-widest">LinkedIn</p>
                  <p className="text-on-surface font-semibold">Tayier NIMAIT</p>
                </div>
                <span className="material-symbols-outlined ml-auto text-on-surface-variant group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </a>
              <a className="flex items-center p-4 rounded-xl bg-surface-container-lowest morph-inset group hover:bg-surface-container-high transition-all" href="#">
                <div className="h-12 w-12 rounded-lg bg-tertiary-container flex items-center justify-center text-on-tertiary-container mr-4">
                  <span className="material-symbols-outlined">code</span>
                </div>
                <div>
                  <p className="text-xs text-on-surface-variant uppercase font-bold tracking-widest">GitHub</p>
                  <p className="text-on-surface font-semibold">snorbik-dev</p>
                </div>
                <span className="material-symbols-outlined ml-auto text-on-surface-variant group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </a>
            </div>
          </div>

          <div className="relative overflow-hidden morph-card bg-surface-container-low p-8 rounded-xl aspect-video md:aspect-auto flex flex-col justify-end">
            <img
              className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale mix-blend-overlay"
              data-alt="Futuristic dark data center with orange and blue glowing cable lines atmospheric lighting high-tech aesthetic"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvGa1p36IJo9dlHr-vIlG5iWmNkOE9bS9oRnmt51V6zm5WQTO8SJYXSwOv-8qHwO8BtNb_tef8MfXDYV-xL1j5H72Hof8PNu7WmoVy5CJFOsG5iJsNQk-Iw2GA7zc3KCppOdqYzTY01O9nPslkNWQm6BnnpZeIForJPRdd4sOI81lkMh_sjFMocEP0LMPp-LIbLD1ZG-_ZozqRm61ejdDk2ZT1pxjd37PlWuPeFloGUjFgAAPY62qylTPsmIxLkFvMThtNApKJyI"
              alt=""
            />
            <div className="relative z-10">
              <p className="text-3xl font-headline font-extrabold text-on-background mb-2">Prêt à démarrer ?</p>
              <p className="text-on-surface-variant font-body">Mes prochains créneaux sont ouverts à partir de la semaine prochaine.</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 order-1 lg:order-2">
          <div className="morph-card bg-surface-container p-8 md:p-12 rounded-xl relative">
            <div className="absolute top-0 right-0 p-8">
              <span className="material-symbols-outlined text-surface-container-highest text-8xl rotate-12 select-none">edit_note</span>
            </div>
            <form className="space-y-8 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-sm font-bold uppercase tracking-widest text-on-surface-variant ml-2">
                    {templateData.contactPage.formLabels.name}
                  </label>
                  <input
                    className="w-full bg-surface-container-lowest border-none morph-inset rounded-xl p-4 text-on-surface placeholder:text-surface-container-highest focus:ring-2 focus:ring-secondary/50 transition-all"
                    placeholder="Alex Dupont"
                    type="text"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-bold uppercase tracking-widest text-on-surface-variant ml-2">
                    Adresse Email
                  </label>
                  <input
                    className="w-full bg-surface-container-lowest border-none morph-inset rounded-xl p-4 text-on-surface placeholder:text-surface-container-highest focus:ring-2 focus:ring-secondary/50 transition-all"
                    placeholder="alex@exemple.com"
                    type="email"
                  />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-sm font-bold uppercase tracking-widest text-on-surface-variant ml-2">
                  {templateData.contactPage.formLabels.message}
                </label>
                <textarea
                  className="w-full bg-surface-container-lowest border-none morph-inset rounded-xl p-4 text-on-surface placeholder:text-surface-container-highest focus:ring-2 focus:ring-secondary/50 transition-all resize-none"
                  placeholder="Parlez-moi de votre projet, de vos objectifs et de vos contraintes..."
                  rows={6}
                />
              </div>
              <button className="w-full md:w-auto px-12 py-5 bg-gradient-to-br from-primary-container to-orange-700 text-on-primary-container font-headline font-black text-xl uppercase tracking-tighter morph-button rounded-xl flex items-center justify-center gap-3" type="submit">
                {templateData.contactPage.formLabels.submit}
                <span className="material-symbols-outlined">send</span>
              </button>
            </form>
          </div>
        </div>
      </div>

      <section className="mt-32 pt-20 border-t border-white/5">
        <p className="text-center text-on-surface-variant uppercase tracking-widest font-bold text-xs mb-12">Expertise &amp; Solutions</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-40">
          <div className="flex flex-col items-center gap-2">
            <span className="material-symbols-outlined text-4xl">automation</span>
            <span className="font-headline text-sm">Automation</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="material-symbols-outlined text-4xl">psychology</span>
            <span className="font-headline text-sm">AI Integration</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="material-symbols-outlined text-4xl">terminal</span>
            <span className="font-headline text-sm">Custom Dev</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="material-symbols-outlined text-4xl">query_stats</span>
            <span className="font-headline text-sm">Data Viz</span>
          </div>
        </div>
      </section>
    </main>
  );
}
