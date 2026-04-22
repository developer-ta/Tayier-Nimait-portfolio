import type { PageKey, PortfolioData } from '../types';

type Props = {
  data: PortfolioData;
  onNavigate: (page: PageKey) => void;
};

export function AboutPage({ data, onNavigate }: Props) {
  return (
    <main className="page-content">
      <section className="hero page-hero page-hero--compact">
        <div className="hero__grid hero__grid--single">
          <section className="hero__copy">
            <p className="eyebrow">À propos</p>
            <h1>
              Un profil technique orienté <span>utilité, livraison et clarté</span>.
            </h1>
            <p className="lead">{data.about.intro}</p>
            <div className="hero__actions">
              <button type="button" className="button button--primary" onClick={() => onNavigate('contact')}>
                Me contacter
              </button>
              <button type="button" className="button button--secondary" onClick={() => onNavigate('projects')}>
                Voir les projets
              </button>
            </div>
          </section>
        </div>
      </section>

      <section className="section page-section">
        <div className="section__heading">
          <p className="eyebrow">Parcours et méthode</p>
          <h2>Un profil technique, cadré et orienté résultats.</h2>
        </div>

        <div className="about-grid">
          <article className="about-card">
            <span>Introduction</span>
            <p>{data.about.intro}</p>
          </article>
          <article className="about-card">
            <span>Background</span>
            <p>{data.about.background}</p>
          </article>
          <article className="about-card">
            <span>Approche</span>
            <p>{data.about.approach}</p>
          </article>
          <article className="about-card">
            <span>Recherche</span>
            <p>{data.about.lookingFor}</p>
          </article>
        </div>

        <div className="section__heading about-lower">
          <p className="eyebrow">Je peux intervenir sur vos besoins</p>
          <h2>Je me rends utile dès les premières semaines.</h2>
          <div className="mission-grid">
            {data.missionReady.map((item) => (
              <div className="mission-item" key={item}>
                <span className="mission-item__dot" aria-hidden="true" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
