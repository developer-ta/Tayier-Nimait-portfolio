import { templateData } from '../data/templateData';

export function AboutPage() {
  return (
    <main className="pt-32 pb-20 px-8 max-w-7xl mx-auto space-y-32">
      <section className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-7 space-y-8">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-surface-container-highest text-secondary font-bold text-sm tracking-widest uppercase">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-secondary" />
            </span>
            {templateData.aboutPage.badge}
          </div>
          <h1 className="font-headline text-6xl md:text-8xl font-black tracking-tighter leading-none">
            {templateData.aboutPage.name} <span className="text-orange-500 text-glow-orange">{templateData.aboutPage.heroHighlight}</span>
          </h1>
          <p className="text-on-surface-variant text-xl leading-relaxed max-w-xl font-light">
            {templateData.aboutPage.tagline}
          </p>
          <div className="flex flex-wrap gap-6 pt-4">
            {templateData.aboutPage.cards.map((card) => (
              <div
                key={card.title}
                className={`morph-card bg-surface-container p-6 rounded-xl border-l-4 flex-1 min-w-[200px] ${card.borderClass}`}
              >
                <div className={`font-headline font-bold text-3xl ${card.titleClass}`}>{card.title}</div>
                <div className="text-on-surface-variant text-sm uppercase tracking-widest mt-1">
                  {card.subtitle}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="md:col-span-5 relative">
          <div className="absolute -inset-4 bg-gradient-to-tr from-primary-container/20 to-secondary/20 blur-3xl opacity-30 rounded-full" />
          <div className="morph-card rounded-2xl overflow-hidden relative z-10 aspect-[4/5]">
            <img
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              src={templateData.aboutPage.heroImage}
              alt={templateData.aboutPage.heroAlt}
            />
          </div>
        </div>
      </section>

      <section className="space-y-16">
        <div className="text-center space-y-4">
          <h2 className="font-headline text-4xl font-bold tracking-tight">{templateData.aboutPage.coreValuesTitle}</h2>
          <div className="h-1 w-24 bg-orange-500 mx-auto rounded-full" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {templateData.aboutPage.coreValues.map((value) => (
            <div
              key={value.title}
              className="morph-card bg-surface-container p-10 rounded-2xl space-y-6 group hover:-translate-y-2 transition-all duration-500"
            >
              <div className="w-16 h-16 rounded-xl bg-surface-container-lowest morph-inset flex items-center justify-center">
                <span
                  className={`material-symbols-outlined ${value.iconClass} text-3xl`}
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  {value.icon}
                </span>
              </div>
              <h3 className="font-headline text-2xl font-bold">{value.title}</h3>
              <p className="text-on-surface-variant leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-16">
        <h2 className="font-headline text-4xl font-bold tracking-tight text-center">{templateData.aboutPage.evolutionTitle}</h2>
        <div className="relative max-w-4xl mx-auto px-4">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-surface-container-highest -translate-x-1/2 hidden md:block" />
          {templateData.aboutPage.evolution.map((entry, index) => {
            const isEven = index % 2 === 1;
            const periodClass =
              index === 0 ? 'text-orange-500' : index === 1 ? 'text-secondary' : 'text-tertiary';
            return (
              <div
                key={entry.period}
                className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${index < templateData.aboutPage.evolution.length - 1 ? 'mb-16' : ''}`}
              >
                {!isEven ? (
                  <div className="md:text-right space-y-2">
                    <div className={`font-headline font-bold ${periodClass}`}>{entry.period}</div>
                    <h4 className="text-xl font-bold">{entry.title}</h4>
                    <p className="text-on-surface-variant">{entry.description}</p>
                  </div>
                ) : (
                  <div className="hidden md:block" />
                )}
                <div className={`absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-4 border-surface ${entry.dot} hidden md:block`} />
                {isEven ? (
                  <div className="space-y-2">
                    <div className={`font-headline font-bold ${periodClass}`}>{entry.period}</div>
                    <h4 className="text-xl font-bold">{entry.title}</h4>
                    <p className="text-on-surface-variant">{entry.description}</p>
                  </div>
                ) : (
                  <div className="hidden md:block" />
                )}
              </div>
            );
          })}
        </div>
      </section>

      <section className="relative">
        <div className="morph-card bg-surface-container p-12 md:p-20 rounded-3xl overflow-hidden relative text-center space-y-8">
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-primary-container/10 blur-[100px] rounded-full" />
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-secondary/10 blur-[100px] rounded-full" />
          <h2 className="font-headline text-4xl md:text-5xl font-black max-w-2xl mx-auto">
            Ready to scale your vision with <span className="text-secondary">Precision</span>?
          </h2>
          <p className="text-on-surface-variant text-lg max-w-xl mx-auto">{templateData.aboutPage.ctaDescription}</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center pt-4">
            <button className="px-10 py-4 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 text-on-primary-container font-black tracking-tight text-lg shadow-xl hover:scale-105 active:scale-95 transition-all" type="button">
              {templateData.aboutPage.ctaPrimary}
            </button>
            <button className="px-10 py-4 rounded-xl bg-surface-container-highest text-on-surface font-bold hover:bg-white/10 transition-all border border-white/5" type="button">
              {templateData.aboutPage.ctaSecondary}
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
