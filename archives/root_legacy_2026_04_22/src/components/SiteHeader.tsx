import type { PageKey, PortfolioData } from '../types';

type Props = {
  data: PortfolioData;
  currentPage: PageKey;
  onNavigate: (page: PageKey) => void;
};

const navItems: Array<{ key: PageKey; label: string }> = [
  { key: 'home', label: 'Accueil' },
  { key: 'projects', label: 'Projets' },
  { key: 'about', label: 'À propos' },
  { key: 'cv', label: 'CV' },
  { key: 'contact', label: 'Contact' },
];

export function SiteHeader({ data, currentPage, onNavigate }: Props) {
  return (
    <header className="hero page-header">
      <div className="hero__topline">
        <div className="hero__brand">
          <span className="hero__mark">AM</span>
          <div>
            <strong>{data.site.name}</strong>
            <span>{data.site.role}</span>
          </div>
        </div>

        <nav className="hero__nav" aria-label="Navigation principale">
          {navItems.map((item) => (
            <button
              key={item.key}
              type="button"
              className={item.key === currentPage ? 'nav-button nav-button--active' : 'nav-button'}
              onClick={() => onNavigate(item.key)}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <button className="button button--primary hero__cta-top" type="button" onClick={() => onNavigate('contact')}>
          Travaillons ensemble
        </button>
      </div>
    </header>
  );
}
