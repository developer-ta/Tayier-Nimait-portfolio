import type { PageKey, PortfolioData } from '../types';

type Props = {
  data: PortfolioData;
  onNavigate: (page: PageKey) => void;
};

const iconMap: Record<string, string> = {
  robot: '🤖',
  chart: '📊',
  brain: '🧠',
  tools: '🛠️',
};

export function HomePage({ data, onNavigate }: Props) {
  return (
    <main className="page-content">
      <section className="hero page-hero">
          <div className="hero__grid">
            <section className="hero__copy">
              <p className="eyebrow">{data.site.role}</p>
              <h1>
                Je conçois des outils intelligents qui font
                <span> gagner du temps</span> et créent de la valeur.
              </h1>
              <p className="lead">
                {data.site.tagline} {data.site.description}
              </p>

              <div className="hero__actions">
                <button type="button" className="button button--primary" onClick={() => onNavigate('projects')}>
                  {data.site.ctaPrimary}
                </button>
                <button type="button" className="button button--secondary" onClick={() => onNavigate('contact')}>
                  {data.site.ctaSecondary}
                </button>
              </div>

              <div className="hero__badges">
                <span>{data.site.availability}</span>
                <span>{data.site.location}</span>
                <span>{data.site.responseTime}</span>
              </div>
            </section>

            <aside className="hero__panel" aria-label="Aperçu dashboard">
              <div className="dashboard-shell">
                <div className="dashboard-shell__side">
                  <div className="dashboard-shell__logo">AI</div>
                  <div className="dashboard-menu">
                    <span className="active">Accueil</span>
                    <span>Tableau de bord</span>
                    <span>Données</span>
                    <span>Analyses</span>
                    <span>Automatisation</span>
                    <span>Paramètres</span>
                  </div>
                </div>
                <div className="dashboard-shell__main">
                  <div className="dashboard-head">
                    <span>Vue d'ensemble</span>
                    <button type="button">30 derniers jours</button>
                  </div>
                  <div className="stats-grid">
                    {data.heroStats.map((item) => (
                      <article className="stat-mini" key={item.label}>
                        <span>{item.label}</span>
                        <strong>{item.value}</strong>
                        <small>{item.delta}</small>
                      </article>
                    ))}
                  </div>
                  <div className="dashboard-body">
                    <div className="chart-card">
                      <div className="chart-card__title">Activité</div>
                      <div className="chart-line" aria-hidden="true">
                        <span style={{ height: '38%' }} />
                        <span style={{ height: '56%' }} />
                        <span style={{ height: '44%' }} />
                        <span style={{ height: '73%' }} />
                        <span style={{ height: '52%' }} />
                        <span style={{ height: '68%' }} />
                        <span style={{ height: '82%' }} />
                      </div>
                    </div>
                    <div className="actions-card">
                      <div className="chart-card__title">Automatisations récentes</div>
                      <div className="actions-list">
                        {data.heroActions.map((item) => (
                          <div className="action-row" key={item.label}>
                            <span>{item.label}</span>
                            <strong>{item.status}</strong>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </section>

      <section className="section section--highlights" aria-label="Points clés">
          {data.highlights.map((item) => (
            <article className="stat-card" key={item.label}>
              <span className="stat-card__label">{item.label}</span>
              <strong>{item.value}</strong>
              <p>{item.note}</p>
            </article>
          ))}
      </section>

      <section className="section">
        <div className="section__heading">
          <p className="eyebrow">Ce que je peux apporter à votre entreprise</p>
          <h2>Des solutions concrètes pour optimiser, automatiser et innover.</h2>
        </div>
        <div className="value-grid">
          {data.valueCards.map((card) => (
            <article className="value-card" key={card.title}>
              <div className="value-card__icon">{iconMap[card.icon] ?? '•'}</div>
              <strong>{card.title}</strong>
              <p>{card.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section__heading section__heading--row">
          <div>
            <p className="eyebrow">Projets en vedette</p>
            <h2>Quelques réalisations concrètes qui montrent mon impact.</h2>
          </div>
          <button type="button" className="button button--secondary" onClick={() => onNavigate('projects')}>
            Voir tous les projets
          </button>
        </div>
        <div className="project-grid">
          {data.projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-preview" aria-hidden="true">
                <span className={`project-preview__badge project-preview__badge--${project.domain.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}>
                  {project.domain}
                </span>
                <div className="project-preview__mock" />
              </div>
              <strong>{project.title}</strong>
              <p>{project.summary}</p>
              <div className="tag-row">
                {project.stack.map((tag) => (
                  <span className="tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--split">
        <div className="panel-card panel-card--accent">
          <span className="eyebrow">Je peux intervenir sur vos besoins</span>
          <strong>Je me rends utile dès les premières semaines.</strong>
          <div className="mission-grid">
            {data.missionReady.map((item) => (
              <div className="mission-item" key={item}>
                <span className="mission-item__dot" aria-hidden="true" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="skills-section">
          <div className="panel-card">
            <span className="eyebrow">Stack technique</span>
            <strong>Outils que j’utilise au quotidien</strong>
            <div className="tech-pill-grid">
              {data.techStack.map((tech) => (
                <span className="tech-pill" key={tech}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="panel-card">
            <span className="eyebrow">Compétences clés</span>
            <div className="skill-bars">
              {data.skills.map((skill) => (
                <div className="skill-bar" key={skill.label}>
                  <div className="skill-bar__head">
                    <span>{skill.label}</span>
                    <strong>{skill.score}%</strong>
                  </div>
                  <div className="skill-bar__track">
                    <span style={{ width: `${skill.score}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section contact-band">
        <div>
          <p className="eyebrow">Contact CTA</p>
          <h2>{data.contact.headline}</h2>
          <p>{data.contact.description}</p>
        </div>
        <div className="footer__links contact-band__links">
          <button type="button" className="button button--primary" onClick={() => onNavigate('contact')}>
            Me contacter
          </button>
          <button type="button" className="button button--secondary" onClick={() => onNavigate('projects')}>
            Voir mes projets
          </button>
        </div>
      </section>
    </main>
  );
}
