import type { PageKey, PortfolioData } from '../types';

type Props = {
  data: PortfolioData;
  onNavigate: (page: PageKey) => void;
};

export function ContactPage({ data, onNavigate }: Props) {
  return (
    <main className="page-content">
      <section className="hero page-hero page-hero--compact">
        <div className="hero__grid hero__grid--single">
          <section className="hero__copy">
            <p className="eyebrow">Contact</p>
            <h1>
              Parlons de votre besoin et voyons <span>comment je peux vous aider</span>.
            </h1>
            <p className="lead">{data.contact.description}</p>
            <div className="hero__actions">
              <a className="button button--primary" href={`mailto:${data.contact.email}`}>
                Me contacter
              </a>
              <button type="button" className="button button--secondary" onClick={() => onNavigate('projects')}>
                Voir les projets
              </button>
            </div>
          </section>
        </div>
      </section>

      <section className="section contact-band page-section">
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

      <section className="section page-section">
        <div className="contact-list">
          <div className="contact-card">
            <span>Email</span>
            <a href={`mailto:${data.contact.email}`}>{data.contact.email}</a>
          </div>
          <div className="contact-card">
            <span>GitHub</span>
            <a href={data.contact.github} target="_blank" rel="noreferrer">
              developer-ta
            </a>
          </div>
          <div className="contact-card">
            <span>LinkedIn</span>
            <a href={data.contact.linkedin} target="_blank" rel="noreferrer">
              tayier-dev-ai-data
            </a>
          </div>
        </div>

        <div className="section__heading about-lower">
          <p className="eyebrow">Navigation rapide</p>
          <h2>Revenir aux projets ou au profil ?</h2>
          <div className="hero__actions">
            <button type="button" className="button button--secondary" onClick={() => onNavigate('home')}>
              Retour accueil
            </button>
            <button type="button" className="button button--primary" onClick={() => onNavigate('about')}>
              À propos
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
