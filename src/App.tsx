import { checklist, contactLinks, highlights, projects } from './content';

function App() {
  return (
    <div className="page-shell">
      <header className="hero">
        <div className="hero__badge">Portfolio recrutement · IA appliquée · Version publique</div>
        <div className="hero__grid">
          <section className="hero__copy">
            <p className="eyebrow">Développeur Python · Automatisation · Outils métier</p>
            <h1>
              Je transforme des besoins métier en
              <span> outils simples et fiables</span>
            </h1>
            <p className="lead">
              J'aide les entreprises et les équipes produit à gagner du temps avec Python, React
              et l'IA appliquée. Mon objectif: livrer vite, documenter proprement et rendre le
              résultat facile à reprendre.
            </p>
            <div className="hero__actions">
              <a className="button button--primary" href="#projects">
                Voir les preuves
              </a>
              <a className="button button--secondary" href="#contact">
                Demander le CV
              </a>
            </div>
          </section>

          <aside className="hero__panel" aria-label="Résumé du profil">
            <div className="panel-card panel-card--accent">
              <span className="panel-card__label">Positionnement</span>
              <strong>Python + IA appliquée</strong>
              <p>Automatisation, orchestration et outils métier lisibles.</p>
            </div>
            <div className="panel-card">
              <span className="panel-card__label">Cibles</span>
              <strong>PME, contrat, alternance</strong>
              <p>Une base qui parle au marché sans perdre ma singularité.</p>
            </div>
            <div className="panel-card">
              <span className="panel-card__label">Livrables</span>
              <strong>Prototypes utiles</strong>
              <p>Workflows, automatisation, assistants, tableaux de bord, outils internes.</p>
            </div>
          </aside>
        </div>
      </header>

      <main>
        <section className="section section--highlights" id="profile">
          {highlights.map((item) => (
            <article className="stat-card" key={item.label}>
              <span className="stat-card__label">{item.label}</span>
              <strong>{item.value}</strong>
              <p>{item.note}</p>
            </article>
          ))}
        </section>

        <section className="section" id="projects">
          <div className="section__heading">
            <p className="eyebrow">Projets piliers</p>
            <h2>Des preuves concrètes, pas seulement des idées</h2>
            <p className="section__lede">
              Le recruteur doit voir le problème, le rôle, la solution et l'impact en quelques
              lignes. Chaque projet ci-dessous sert cette lecture rapide.
            </p>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <div className="project-card__top">
                  <span>{project.domain}</span>
                  <strong>{project.title}</strong>
                </div>

                <div className="project-card__section">
                  <span>Contexte</span>
                  <p>{project.context}</p>
                </div>

                <div className="project-card__section">
                  <span>Rôle</span>
                  <p>{project.role}</p>
                </div>

                <div className="project-card__section project-card__section--impact">
                  <span>Impact</span>
                  <p>{project.impact}</p>
                </div>

                <div className="tag-row">
                  {project.stack.map((tag) => (
                    <span className="tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>

                <a className="project-card__link" href={project.href}>
                  {project.linkLabel}
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="section section--split" id="strategy">
          <div>
            <p className="eyebrow">Ce que le marché doit lire</p>
            <h2>Clarté, preuve et contact simple</h2>
            <ul className="checklist">
              {checklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="strategy-card">
            <p className="eyebrow">Lecture rapide</p>
            <p>
              Le site doit permettre à un recruteur ou à un client de comprendre en quelques
              secondes que tu sais cadrer un besoin, produire proprement et livrer des outils
              utiles.
            </p>
          </div>
        </section>
      </main>

      <footer className="footer section" id="contact">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Simple, direct, prêt pour le marché</h2>
          <p>
            Cette version du portfolio est conçue pour être lue vite, contactée facilement et
            reliée à un CV clair.
          </p>
        </div>
        <div className="footer__links">
          {contactLinks.map((link) => (
            <a className="footer__link" href={link.href} key={link.label}>
              {link.label}
            </a>
          ))}
        </div>
      </footer>
    </div>
  );
}

export default App;
