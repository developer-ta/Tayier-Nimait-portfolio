import type { PageKey, PortfolioData } from '../types';

type Props = {
  data: PortfolioData;
  currentPage: PageKey;
  onNavigate: (page: PageKey) => void;
};

const footerNav: Array<{ key: PageKey; label: string }> = [
  { key: 'home', label: 'Accueil' },
  { key: 'projects', label: 'Projets' },
  { key: 'about', label: 'À propos' },
  { key: 'cv', label: 'CV' },
  { key: 'contact', label: 'Contact' },
];

export function SiteFooter({ data, onNavigate }: Props) {
  return (
    <footer className="footer section">
      <div className="footer-brand">
        <strong>{data.site.name}</strong>
        <span>{data.site.role}</span>
        <p>J'aide les entreprises à gagner du temps grâce à des outils intelligents.</p>
      </div>
      <div className="footer-column">
        <span>Navigation</span>
        {footerNav.map((item) => (
          <button key={item.key} type="button" className="footer-link-button" onClick={() => onNavigate(item.key)}>
            {item.label}
          </button>
        ))}
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
  );
}
