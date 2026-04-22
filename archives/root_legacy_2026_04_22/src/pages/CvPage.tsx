import type { PageKey, PortfolioData } from '../types';

type Props = {
  data: PortfolioData;
  onNavigate: (page: PageKey) => void;
};

export function CvPage({ data, onNavigate }: Props) {
  return (
    <main className="page-content">
      <section className="hero page-hero page-hero--compact">
        <div className="hero__grid hero__grid--single">
          <section className="hero__copy">
            <p className="eyebrow">CV</p>
            <h1>
              {data.cv.title} avec un focus sur <span>IA, automatisation et livraison utile</span>.
            </h1>
            <p className="lead">{data.cv.intro}</p>
            <p className="lead">{data.cv.summary}</p>
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

      <section className="section">
        <div className="section__heading">
          <p className="eyebrow">Arsenal technique</p>
          <h2>Les piliers qui structurent mon travail au quotidien.</h2>
        </div>

        <div className="cv-focus-grid">
          {data.cv.skillFocus.map((item) => (
            <article className="cv-focus-card" key={item.title}>
              <span className="cv-focus-card__tag">{item.highlight}</span>
              <strong>{item.title}</strong>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--split">
        <div className="panel-card">
          <span className="eyebrow">Expérience</span>
          <strong>Parcours opérationnel</strong>
          <div className="cv-timeline">
            {data.cv.experience.map((item) => (
              <article className="cv-timeline__item" key={`${item.period}-${item.role}`}>
                <span>{item.period}</span>
                <strong>{item.role}</strong>
                <p>{item.company}</p>
                <p>{item.summary}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="panel-card">
          <span className="eyebrow">Formation</span>
          <strong>Base académique et certification</strong>
          <div className="cv-education">
            {data.cv.education.map((item) => (
              <article className="cv-education__item" key={item.title}>
                <span>{item.title}</span>
                <strong>{item.subtitle}</strong>
                <p>{item.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section contact-band">
        <div>
          <p className="eyebrow">Téléchargement</p>
          <h2>Je peux aussi préparer une version PDF de ce CV.</h2>
          <p>Si tu veux, je peux ensuite brancher un bouton de téléchargement réel dans la version suivante.</p>
        </div>
        <div className="footer__links contact-band__links">
          <button type="button" className="button button--primary" onClick={() => onNavigate('contact')}>
            Me contacter
          </button>
          <button type="button" className="button button--secondary" onClick={() => onNavigate('home')}>
            Retour accueil
          </button>
        </div>
      </section>
    </main>
  );
}
