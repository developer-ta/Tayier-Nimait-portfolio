import type { PageKey } from '../types';
import { homeData } from '../data/pages/homeData';
import { ProjectCard } from '../components/ProjectCard';
import { MethodCard } from '../components/MethodCard';
import { SEO } from '../components/SEO';

type Props = {
  onNavigate: (page: PageKey) => void;
};

export function HomePage({ onNavigate }: Props) {
  return (
    <>
      <SEO title={homeData.metadata.title} description={homeData.metadata.description} />
      <section className="relative min-h-screen flex items-center pt-32 lg:pt-40 pb-20 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 -left-24 w-64 h-64 bg-secondary/10 rounded-full blur-[100px]" />
        <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div className="z-10">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-surface-container-high border border-white/5 mb-8">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              <span className="text-secondary text-xs lg:text-sm font-bold uppercase tracking-widest">
                {homeData.eyebrow}
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-on-background leading-tight md:leading-[1.1] mb-6 tracking-tight">
              {homeData.headlineBefore}{' '}
              <span className="text-primary-container">{homeData.highlighted}</span>{' '}
              {homeData.headlineAfter}
            </h1>
            <p className="text-xl md:text-2xl text-on-surface-variant font-light mb-10 max-w-xl leading-relaxed">
              {homeData.description}
            </p>
            <div className="flex flex-wrap gap-6">
              <button
                className="bg-primary-container text-on-primary-container px-8 py-4 rounded-xl font-black text-lg morph-outset hover:scale-95 transition-all"
                type="button"
              >
                {homeData.primaryAction}
              </button>
              <button
                type="button"
                className="flex items-center gap-4 group cursor-pointer h-[60px]"
              >
                <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center morph-outset group-hover:bg-secondary transition-colors">
                  <span className="material-symbols-outlined text-secondary group-hover:text-on-secondary">
                    play_arrow
                  </span>
                </div>
                <span className="font-bold text-slate-300 group-hover:text-white transition-colors">
                  {homeData.secondaryAction}
                </span>
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="morph-outset rounded-[3rem] p-4 bg-surface-container-low border border-white/5 relative z-10 overflow-hidden">
              <img
                alt="Abstract 3D digital visualization of neural network connections"
                className="rounded-[2.5rem] w-full h-[600px] object-cover"
                src={homeData.heroImage}
              />
              <div className="absolute bottom-6 left-6 right-6 lg:bottom-10 lg:left-10 lg:right-10 p-6 lg:p-8 glass-nav rounded-2xl morph-outset border border-white/10">
                <div className="flex flex-wrap justify-between items-center gap-4">
                  <div>
                    <div className="text-secondary font-bold text-[10px] lg:text-xs uppercase tracking-widest mb-1">
                      {homeData.metricOneLabel}
                    </div>
                    <div className="text-3xl lg:text-4xl font-black text-on-surface">
                      {homeData.metricOneValue}
                    </div>
                  </div>
                  <div className="hidden md:block h-12 w-[1px] bg-white/10" />
                  <div>
                    <div className="text-primary-container font-bold text-[10px] lg:text-xs uppercase tracking-widest mb-1">
                      {homeData.metricTwoLabel}
                    </div>
                    <div className="text-3xl lg:text-4xl font-black text-on-surface">
                      {homeData.metricTwoValue}
                    </div>
                  </div>
                  <div className="hidden lg:block h-12 w-[1px] bg-white/10" />
                  <div className="hidden lg:block">
                    <div className="text-tertiary font-bold text-[10px] lg:text-xs uppercase tracking-widest mb-1">
                      Projets Livrés
                    </div>
                    <div className="text-3xl lg:text-4xl font-black text-on-surface">12+</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-20">
            <h2 className="text-5xl font-black mb-4">
              {homeData.featuredTitle.split(' ')[0]}{' '}
              <span className="text-primary-container">
                {homeData.featuredTitle.split(' ').slice(1).join(' ')}
              </span>
            </h2>
            <div className="w-24 h-1 bg-secondary rounded-full" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {homeData.projects.map((card) => (
              <ProjectCard
                key={card.title}
                category={card.category}
                title={card.title}
                staticImage={card.staticImage}
                hoverImage={card.hoverImage}
                staticAlt={card.staticAlt}
                hoverAlt={card.hoverAlt}
                icon={card.icon}
                badgeBgClass={card.badgeBgClass}
                badgeTextClass={card.badgeTextClass}
                badgeBorderClass={card.badgeBorderClass}
                subtitle={(card as any).subtitle || ''}
                problem={card.problem}
                solution={card.solution}
                impactLabel={card.impactLabel}
                impactValue={card.impactValue}
              />
            ))}
          </div>

          <div className="morph-outset bg-gradient-to-r from-surface-container-low to-surface-container-high rounded-[2rem] p-12 border border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8">
              <span className="flex items-center gap-2 bg-primary-container text-on-primary-container px-4 py-2 rounded-full text-xs font-black animate-pulse">
                <span className="w-2 h-2 rounded-full bg-white" />
                {homeData.ongoing.status}
              </span>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-4xl font-black mb-6 italic">{homeData.ongoing.title}</h3>
                <p className="text-lg text-on-surface-variant mb-8 leading-relaxed">
                  {homeData.ongoing.description}
                </p>
                <div className="flex gap-4">
                  {homeData.ongoing.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 bg-surface-container-highest rounded-lg text-sm font-bold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="morph-inset bg-surface-container-lowest rounded-2xl p-6 border border-white/5">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-bold text-secondary">{homeData.ongoing.progressLabel}</span>
                  <span className="font-bold">{homeData.ongoing.progressValue}</span>
                </div>
                <div className="w-full h-3 bg-surface-container-high rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-secondary to-primary-container w-[85%] rounded-full shadow-[0_0_10px_rgba(6,182,212,0.5)]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-24">
            <h2 className="text-5xl font-black mb-6">
              Ma <span className="text-secondary">Méthode</span>
            </h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto text-lg">
              {homeData.methodSubtitle}
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-4">
            {homeData.methodSteps.map((step) => (
              <MethodCard
                key={step.number}
                number={step.number}
                title={step.title}
                icon={step.icon}
                iconClass={step.iconClass}
                offsetClass={step.offsetClass}
                description={step.description}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 overflow-hidden">
        <div className="max-w-5xl mx-auto px-8 relative">
          <div className="morph-outset bg-gradient-to-br from-primary-container to-orange-800 rounded-[3rem] p-16 text-center relative z-10">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-8">{homeData.ctaTitle}</h2>
            <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
              {homeData.ctaDescription}
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <button
                className="bg-white text-orange-600 px-10 py-5 rounded-xl font-black text-xl shadow-xl hover:scale-105 transition-transform"
                type="button"
              >
                {homeData.ctaPrimary}
              </button>
              <button
                className="bg-black/20 text-white backdrop-blur-sm px-10 py-5 rounded-xl font-bold text-xl border border-white/20 hover:bg-black/30 transition-colors"
                type="button"
              >
                {homeData.ctaSecondary}
              </button>
            </div>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[150%] bg-primary/20 blur-[150px] -z-10 rounded-full" />
        </div>
      </section>
    </>
  );
}
