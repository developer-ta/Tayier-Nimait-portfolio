import { templateData } from '../data/templateData';
import type { PageKey } from '../types';

type Props = {
  currentPage: PageKey;
  onNavigate: (page: PageKey) => void;
};

export function Navbar({ currentPage, onNavigate }: Props) {
  const isActive = (page: PageKey) => currentPage === page;

  return (
    <nav className="fixed top-0 w-full z-50 glass-nav border-b border-white/10 backdrop-blur-xl">
      <div className="max-w-[1600px] mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => onNavigate('home')}
            className="w-10 h-10 bg-primary-container rounded-lg flex items-center justify-center font-black text-on-primary-container text-xl shadow-lg shadow-primary-container/20"
          >
            {templateData.site.name.charAt(0)}
          </button>
          <div className="flex flex-col leading-tight">
            <span className="font-headline font-black text-xl tracking-tighter text-white">
              {templateData.site.name}
            </span>
            <span className="text-[10px] uppercase tracking-widest text-primary-container font-bold">
              {templateData.site.owner} - {templateData.site.role}
            </span>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-10">
          <button
            type="button"
            onClick={() => onNavigate('home')}
            className={`${isActive('home') ? 'text-primary-container font-black tracking-wide text-sm uppercase nav-glow-active' : 'text-slate-400 hover:text-white transition-colors font-bold tracking-wide text-sm uppercase'}`}
          >
            {templateData.nav.home}
          </button>
          <button
            type="button"
            onClick={() => onNavigate('projects')}
            className={`${isActive('projects') ? 'text-primary-container font-black tracking-wide text-sm uppercase nav-glow-active' : 'text-slate-400 hover:text-white transition-colors font-bold tracking-wide text-sm uppercase'}`}
          >
            {templateData.nav.projects}
          </button>
          <button
            type="button"
            onClick={() => onNavigate('about')}
            className={`${isActive('about') ? 'text-primary-container font-black tracking-wide text-sm uppercase nav-glow-active' : 'text-slate-400 hover:text-white transition-colors font-bold tracking-wide text-sm uppercase'}`}
          >
            {templateData.nav.services}
          </button>
          <button
            type="button"
            onClick={() => onNavigate('cv')}
            className={`${isActive('cv') ? 'text-primary-container font-black tracking-wide text-sm uppercase nav-glow-active' : 'text-slate-400 hover:text-white transition-colors font-bold tracking-wide text-sm uppercase'}`}
          >
            {templateData.nav.expertise}
          </button>
          <button
            type="button"
            onClick={() => onNavigate('contact')}
            className={`${isActive('contact') ? 'text-primary-container font-black tracking-wide text-sm uppercase nav-glow-active' : 'text-slate-400 hover:text-white transition-colors font-bold tracking-wide text-sm uppercase'}`}
          >
            {templateData.nav.contact}
          </button>
        </div>

        <div className="flex items-center gap-3">
          <button className="hidden sm:flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-2 rounded-full text-xs font-bold transition-all">
            <span className="material-symbols-outlined text-[18px]">download</span>
            CV
          </button>
          <div className="h-6 w-[1px] bg-white/10 mx-1 hidden sm:block" />
          <div className="flex items-center gap-2">
            <a
              className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary-container/20 transition-all border border-white/5 group"
              href="#"
            >
              <svg
                className="w-4 h-4 fill-slate-400 group-hover:fill-primary-container"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a
              className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary-container/20 transition-all border border-white/5 group"
              href="#"
            >
              <svg
                className="w-4 h-4 fill-slate-400 group-hover:fill-primary-container"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </div>
          <button className="w-9 h-9 flex items-center justify-center rounded-full bg-surface-container hover:bg-surface-container-high transition-colors">
            <span className="material-symbols-outlined text-[20px] text-primary-container">
              light_mode
            </span>
          </button>
          <div className="relative w-10 h-10 rounded-full border-2 border-primary-container/30 p-[2px]">
            <img
              alt="Profile"
              className="w-full h-full rounded-full object-cover"
              src="/tayier_photo_pro-job.jpg"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
