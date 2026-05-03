import { homeData } from '../data/pages/homeData';
import { projectsData } from '../data/pages/projectsData';
import { ActiveProjectCard } from '../components/ActiveProjectCard';
import { HomeProjectCard } from '../components/HomeProjectCard';
import { ProjectDetailCard } from '../components/ProjectDetailCard';
import { MethodCard } from '../components/MethodCard';
import { SEO } from '../components/SEO';

export function ProjectsPage() {
  return (
    <main className="pt-32 pb-20 max-w-7xl mx-auto px-8">
      <SEO title={projectsData.metadata.title} description={projectsData.metadata.description} />
      <header className="mb-20">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-highest mb-6">
          <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse" />
          <span className="text-xs font-bold tracking-widest text-secondary uppercase">
            Portfolio 2026
          </span>
        </div>
        <h1 className="font-headline text-6xl md:text-8xl font-black tracking-tighter leading-none mb-8 text-on-background">
          {projectsData.title} <br />
          <span className="text-primary-container text-glow-orange">{projectsData.highlight}</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-400 max-w-2xl leading-relaxed">
          {projectsData.subtitle}
        </p>
      </header>

      <div className="flex flex-wrap gap-4 mb-16">
        {projectsData.filters.map((filter, index) => (
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

      <section className="mb-24">
        <div className="flex items-end justify-between gap-6 mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-on-background">
              Projets prioritaires
            </h2>
            <p className="text-on-surface-variant mt-2">
              Les projets les plus cohérents avec l’alternance, le freelance et les opportunités
              entreprise.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projectsData.featuredProjects.map((card) => (
            <ProjectDetailCard
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
              subtitle={card.subtitle}
              problem={card.problem}
              solution={card.solution}
              impactLabel={card.impactLabel}
              impactValue={card.impactValue}
            />
          ))}
        </div>
      </section>

      <section className="mb-24">
        <div className="flex items-end justify-between gap-6 mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-on-background">
              Projet en cours
            </h2>
            <p className="text-on-surface-variant mt-2">
              Le bloc qui montre l’architecture et la capacité à faire évoluer une base technique.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-10 max-w-2xl">
          <ActiveProjectCard
            status={projectsData.activeProject.status ?? 'Version active'}
            statusColor={projectsData.activeProject.statusColor ?? 'orange'}
            title={projectsData.activeProject.title}
            staticImage={projectsData.activeProject.staticImage}
            hoverImage={projectsData.activeProject.hoverImage}
            staticAlt={projectsData.activeProject.staticAlt}
            hoverAlt={projectsData.activeProject.hoverAlt}
            icon={projectsData.activeProject.icon}
            problem={projectsData.activeProject.problem}
            currentSolution={projectsData.activeProject.currentSolution ?? ''}
            currentImpact={projectsData.activeProject.currentImpact ?? ''}
            nextStep={projectsData.activeProject.nextStep ?? ''}
          />
        </div>
      </section>

      <section className="mb-24">
        <div className="flex items-end justify-between gap-6 mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-on-background">
              Autres vitrines
            </h2>
            <p className="text-on-surface-variant mt-2">
              Des projets publics supplémentaires pour montrer la polyvalence et la diversité des
              contextes.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projectsData.secondaryProjects.map((card) => (
            <HomeProjectCard
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
              subtitle={card.subtitle}
              impactLabel={card.impactLabel}
              impactValue={card.impactValue}
            />
          ))}
        </div>
      </section>

      {projectsData.scientificProjects.length > 0 && (
        <section className="mb-24">
          <div className="flex items-end justify-between gap-6 mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight text-on-background">
                Axe scientifique / bio-inspiré
              </h2>
              <p className="text-on-surface-variant mt-2">
                Des projets qui montrent la rigueur, le contrôle et la sensibilité aux contextes
                santé, scientifique et biomimétique.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {projectsData.scientificProjects.map((card) => (
              <ProjectDetailCard
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
                subtitle={card.subtitle}
                problem={card.problem}
                solution={card.solution}
                impactLabel={card.impactLabel}
                impactValue={card.impactValue}
              />
            ))}
          </div>
        </section>
      )}

      {projectsData.bonusProjects.length > 0 && (
        <section className="mb-12">
          <div className="flex items-end justify-between gap-6 mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight text-on-background">
                Bonus sécurité IA
              </h2>
              <p className="text-on-surface-variant mt-2">
                Un bloc utile pour montrer la capacité à travailler aussi sur la robustesse et la
                défense des systèmes IA.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-2xl">
            {projectsData.bonusProjects.map((card) => (
              <HomeProjectCard
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
                subtitle={card.subtitle}
                impactLabel={card.impactLabel}
                impactValue={card.impactValue}
              />
            ))}
          </div>
        </section>
      )}

      <section className="mt-40 mb-32">
        <div className="text-center mb-20">
          <h2 className="font-headline text-5xl font-black text-on-background mb-4 uppercase tracking-tighter">
            {projectsData.methodTitle}
          </h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto text-lg">
            {projectsData.methodSubtitle}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
      </section>

      <section className="relative p-12 md:p-20 rounded-[3rem] bg-gradient-to-br from-surface-container to-surface overflow-hidden morph-card border border-white/5">
        <div className="relative z-10 max-w-3xl">
          <h2 className="font-headline text-4xl md:text-6xl font-black text-on-background mb-8 tracking-tighter">
            Prêt à transformer <br />
            <span className="text-primary-container">votre vision en réalité ?</span>
          </h2>
          <p className="text-xl text-slate-400 mb-12 max-w-xl">{projectsData.ctaDescription}</p>
          <div className="flex flex-wrap gap-6">
            <button
              className="bg-primary-container text-on-primary-container px-10 py-5 rounded-2xl font-black text-lg shadow-[0_0_30px_rgba(249,115,22,0.4)] hover:scale-105 transition-all"
              type="button"
            >
              {projectsData.ctaPrimary}
            </button>
            <button
              className="bg-surface-container-highest text-on-surface px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all morph-card"
              type="button"
            >
              {projectsData.ctaSecondary}
            </button>
          </div>
        </div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-primary-container/20 rounded-full blur-[100px]" />
        <div className="absolute -top-20 -right-10 w-60 h-60 bg-secondary/10 rounded-full blur-[80px]" />
      </section>
    </main>
  );
}
