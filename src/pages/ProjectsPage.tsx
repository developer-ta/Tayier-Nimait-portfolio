import { templateData } from '../data/templateData';
import { ProjectCard } from '../components/ProjectCard';
import { MethodCard } from '../components/MethodCard';

export function ProjectsPage() {
  return (
    <main className="pt-32 pb-20 max-w-7xl mx-auto px-8">
      <header className="mb-20">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-highest mb-6">
          <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse" />
          <span className="text-xs font-bold tracking-widest text-secondary uppercase">
            Portfolio 2024
          </span>
        </div>
        <h1 className="font-headline text-6xl md:text-8xl font-black tracking-tighter leading-none mb-8 text-on-background">
          {templateData.projectsPage.title} <br />
          <span className="text-primary-container text-glow-orange">{templateData.projectsPage.highlight}</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-400 max-w-2xl leading-relaxed">
          {templateData.projectsPage.subtitle}
        </p>
      </header>

      <div className="flex flex-wrap gap-4 mb-16">
        {templateData.projectsPage.filters.map((filter, index) => (
          <button
            key={filter}
            className={
              index === 0
                ? 'px-8 py-3 rounded-xl font-bold bg-primary-container text-on-primary-container shadow-lg transition-all'
                : 'px-8 py-3 rounded-xl font-bold bg-surface-container-low text-on-surface hover:bg-surface-container-highest transition-all morph-card'
            }
            type="button"
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {templateData.home.projects.map((card) => (
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
            problem={card.problem}
            solution={card.solution}
            impactLabel={card.impactLabel}
            impactValue={card.impactValue}
          />
        ))}
      </div>

      <div className="morph-outset bg-gradient-to-r from-surface-container-low to-surface-container-high rounded-[2rem] p-12 border border-white/5 relative overflow-hidden mt-12">
        <div className="absolute top-0 right-0 p-8">
          <span className="flex items-center gap-2 bg-primary-container text-on-primary-container px-4 py-2 rounded-full text-xs font-black animate-pulse">
            <span className="w-2 h-2 rounded-full bg-white" />
            {templateData.projectsPage.ongoing.status}
          </span>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-4xl font-black mb-6 italic">{templateData.projectsPage.ongoing.title}</h3>
            <p className="text-lg text-on-surface-variant mb-8 leading-relaxed">
              {templateData.projectsPage.ongoing.description}
            </p>
            <div className="flex gap-4">
              {templateData.projectsPage.ongoing.tags.map((tag) => (
                <span key={tag} className="px-4 py-2 bg-surface-container-highest rounded-lg text-sm font-bold">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="morph-inset bg-surface-container-lowest rounded-2xl p-6 border border-white/5">
            <div className="flex items-center justify-between mb-4">
              <span className="font-bold text-secondary">{templateData.projectsPage.ongoing.progressLabel}</span>
              <span className="font-bold">{templateData.projectsPage.ongoing.progressValue}</span>
            </div>
            <div className="w-full h-3 bg-surface-container-high rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-secondary to-primary-container w-[85%] rounded-full shadow-[0_0_10px_rgba(6,182,212,0.5)]" />
            </div>
          </div>
        </div>
      </div>

      <section className="mt-40 mb-32">
        <div className="text-center mb-20">
          <h2 className="font-headline text-5xl font-black text-on-background mb-4 uppercase tracking-tighter">
            {templateData.projectsPage.methodTitle}
          </h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto text-lg">{templateData.projectsPage.methodSubtitle}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {templateData.home.methodSteps.map((step) => (
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
      </section>

      <section className="relative p-12 md:p-20 rounded-[3rem] bg-gradient-to-br from-surface-container to-surface overflow-hidden morph-card border border-white/5">
        <div className="relative z-10 max-w-3xl">
          <h2 className="font-headline text-4xl md:text-6xl font-black text-on-background mb-8 tracking-tighter">
            Prêt à transformer <br />
            <span className="text-primary-container">votre vision en réalité ?</span>
          </h2>
          <p className="text-xl text-slate-400 mb-12 max-w-xl">{templateData.projectsPage.ctaDescription}</p>
          <div className="flex flex-wrap gap-6">
            <button className="bg-primary-container text-on-primary-container px-10 py-5 rounded-2xl font-black text-lg shadow-[0_0_30px_rgba(249,115,22,0.4)] hover:scale-105 transition-all" type="button">
              {templateData.projectsPage.ctaPrimary}
            </button>
            <button className="bg-surface-container-highest text-on-surface px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all morph-card" type="button">
              {templateData.projectsPage.ctaSecondary}
            </button>
          </div>
        </div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-primary-container/20 rounded-full blur-[100px]" />
        <div className="absolute -top-20 -right-10 w-60 h-60 bg-secondary/10 rounded-full blur-[80px]" />
      </section>
    </main>
  );
}
