import type { PageKey, PortfolioData } from '../types';

type Props = {
  data: PortfolioData;
  onNavigate: (page: PageKey) => void;
};

export function ProjectsPage({ data, onNavigate }: Props) {
  return (
    <main className="page-content">
      <section className="hero page-hero page-hero--compact">
        <div className="hero__grid hero__grid--single">
          <section className="hero__copy">
            <p className="eyebrow">Projets / Case studies</p>
            <h1>
              Des cas concrets pour montrer <span>la valeur livrée</span>.
            </h1>
            <p className="lead">
              Chaque projet est présenté avec un problème, une solution, une stack et un résultat mesurable.
            </p>

            <div className="hero__actions">
              <button type="button" className="button button--primary" onClick={() => onNavigate('contact')}>
                Me contacter
              </button>
              <button type="button" className="button button--secondary" onClick={() => onNavigate('home')}>
                Retour accueil
              </button>
            </div>
          </section>
        </div>
      </section>

      <section className="section">
        <div className="section__heading section__heading--row">
          <div>
            <p className="eyebrow">Sélection</p>
            <h2>Quelques réalisations concrètes qui montrent mon impact.</h2>
          </div>
        </div>

        <div className="project-grid project-grid--detail">
          {data.projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-preview" aria-hidden="true">
                <span
                  className={`project-preview__badge project-preview__badge--${project.domain
                    .toLowerCase()
                    .replace(/[^a-z0-9]+/g, '-')}`}
                >
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
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
