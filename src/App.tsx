import { useEffect, useMemo, useState } from 'react';

type Highlight = {
  label: string;
  value: string;
  note: string;
};

type ValueCard = {
  title: string;
  description: string;
  icon: string;
};

type Project = {
  title: string;
  domain: string;
  summary: string;
  stack: string[];
  problem: string;
  solution: string;
  result: string;
};

type PortfolioData = {
  site: {
    name: string;
    role: string;
    tagline: string;
    description: string;
    ctaPrimary: string;
    ctaSecondary: string;
    availability: string;
    location: string;
    responseTime: string;
  };
  highlights: Highlight[];
  valueCards: ValueCard[];
  heroStats: Array<{ label: string; value: string; delta: string }>;
  heroActions: Array<{ label: string; status: string }>;
  skills: Array<{ label: string; score: number }>;
  projects: Project[];
  missionReady: string[];
  techStack: string[];
  contact: {
    headline: string;
    description: string;
    email: string;
    github: string;
    linkedin: string;
  };
};

const iconMap: Record<string, string> = {
  robot: '🤖',
  chart: '📊',
  brain: '🧠',
  tools: '🛠️',
};

function App() {
  const [data, setData] = useState<PortfolioData | null>(null);

  useEffect(() => {
    let active = true;

    fetch('/portfolio-data.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to load portfolio-data.json: ${response.status}`);
        }

        return response.json() as Promise<PortfolioData>;
      })
      .then((json) => {
        if (active) {
          setData(json);
        }
      })
      .catch((error) => {
        console.error(error);
      });

    return () => {
      active = false;
    };
  }, []);

  const missionReadyColumns = useMemo(() => {
    if (!data) {
      return [];
    }

    return data.missionReady;
  }, [data]);

  if (!data) {
    return (
      <div className="page-shell">
        <div className="section loading-state">Chargement du portfolio...</div>
      </div>
    );
  }

  return (
    <div className="page-shell">
      <header className="hero">
        <div className="hero__topline">
          <div className="hero__brand">
            <span className="hero__mark">AM</span>
            <div>
              <strong>{data.site.name}</strong>
              <span>{data.site.role}</span>
            </div>
          </div>

          <nav className="hero__nav" aria-label="Navigation principale">
            <a href="#profile">Accueil</a>
            <a href="#projects">Projets</a>
            <a href="#strategy">À propos</a>
            <a href="#contact">Contact</a>
          </nav>

          <a className="button button--primary hero__cta-top" href="#contact">
            Travaillons ensemble
          </a>
        </div>

        <div className="hero__grid">
          <section className="hero__copy">
            <p className="eyebrow">{data.site.role}</p>
            <h1>
              Je conçois des outils intelligents qui font
              <span> gagner du temps</span> et créent de la valeur.
            </h1>
            <p className="lead">{data.site.description}</p>

            <div className="hero__actions">
              <a className="button button--primary" href="#projects">
                {data.site.ctaPrimary}
              </a>
              <a className="button button--secondary" href="#contact">
                {data.site.ctaSecondary}
              </a>
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
      </header>

      <main>
        <section className="section section--highlights" id="profile">
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

        <section className="section" id="projects">
          <div className="section__heading section__heading--row">
            <div>
              <p className="eyebrow">Projets en vedette</p>
              <h2>Quelques réalisations concrètes qui montrent mon impact.</h2>
            </div>
            <a className="section__link" href="#contact">
              Voir tous les projets
            </a>
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
                <div className="project-details">
                  <div>
                    <span>Problème</span>
                    <p>{project.problem}</p>
                  </div>
                  <div>
                    <span>Solution</span>
                    <p>{project.solution}</p>
                  </div>
                  <div>
                    <span>Résultat</span>
                    <p>{project.result}</p>
                  </div>
                </div>
                <div className="tag-row">
                  {project.stack.map((tag) => (
                    <span className="tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <a className="project-card__link" href="#contact">
                  Voir le projet →
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="section section--split" id="strategy">
          <div>
            <p className="eyebrow">Je peux intervenir sur vos besoins</p>
            <h2>Je me rends utile dès les premières semaines.</h2>
            <div className="mission-grid">
              {missionReadyColumns.map((item) => (
                <div className="mission-item" key={item}>
                  <span className="mission-item__dot" aria-hidden="true" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="strategy-card">
            <p className="eyebrow">Lecture rapide</p>
            <p>
              Le visiteur doit comprendre en quelques secondes que je sais cadrer un besoin,
              produire proprement et parler de mes projets sans flou.
            </p>
          </div>
        </section>

        <section className="section skills-section">
          <div className="section__heading">
            <p className="eyebrow">Stack technique</p>
            <h2>Les technologies que je mobilise selon le besoin.</h2>
          </div>
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
          <div className="tech-pill-grid">
            {data.techStack.map((tech) => (
              <span className="tech-pill" key={tech}>
                {tech}
              </span>
            ))}
          </div>
        </section>

        <section className="section contact-band" id="contact">
          <div>
            <p className="eyebrow">Contact CTA</p>
            <h2>{data.contact.headline}</h2>
            <p>{data.contact.description}</p>
          </div>
          <div className="footer__links contact-band__links">
            <a className="button button--primary" href={`mailto:${data.contact.email}`}>
              Me contacter
            </a>
            <a className="button button--secondary" href={data.contact.github} target="_blank" rel="noreferrer">
              Voir mes projets
            </a>
          </div>
        </section>
      </main>

      <footer className="footer section">
        <div className="footer-brand">
          <strong>{data.site.name}</strong>
          <span>{data.site.role}</span>
          <p>J'aide les entreprises à gagner du temps grâce à des outils intelligents.</p>
        </div>
        <div className="footer-column">
          <span>Navigation</span>
          <a href="#profile">Accueil</a>
          <a href="#projects">Projets</a>
          <a href="#strategy">À propos</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="footer-column">
          <span>Infos</span>
          <p>Basé en France</p>
          <p>Disponible rapidement</p>
          <p>Réponse sous 24h</p>
        </div>
        <div className="footer-column footer-column--cta">
          <span>Travaillons ensemble</span>
          <p>Vous avez un projet ? Parlons de vos besoins.</p>
          <a className="button button--primary" href={`mailto:${data.contact.email}`}>
            Me contacter
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
