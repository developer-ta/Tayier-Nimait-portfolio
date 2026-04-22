import React from 'react';
import { View, TechSkill } from '../../domain/models';
import { Icon } from '../components/Icons';

interface HeaderProps {
  currentView: View;
  onViewChange: (view: View) => void;
  skills: TechSkill[];
  tools: TechSkill[];
  theme: 'dark' | 'light';
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({
  currentView,
  onViewChange,
  skills,
  tools,
  theme,
  toggleTheme,
}) => {
  return (
    <>
      <header
        className="sticky top-0 z-50 bg-slate-100/80 dark:bg-dark-bg/95 backdrop-blur-md shadow-lg"
        id="main-header"
      >
        {/* Top Row: Main Navigation */}
        <div className="border-b border-slate-200 dark:border-white/5">
          <div className="w-full max-w-[1800px] mx-auto px-6 md:px-12 h-24 relative flex items-center justify-between">
            <div className="relative z-10 flex items-center">
              <div
                className="text-2xl font-bold tracking-wider cursor-pointer text-slate-900 dark:text-white hover:text-brand-cyan transition-all duration-300 truncate"
                onClick={() => onViewChange(View.ACCUEIL)}
              >
                Tayier NIMAIT
              </div>
            </div>

            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden md:flex items-center space-x-12 lg:space-x-20">
              <button
                className={`transition-all duration-300 text-[22px] font-bold whitespace-nowrap 
                    ${
                      currentView === View.ACCUEIL || currentView === View.TECH_PYTHON
                        ? 'text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-brand-orange to-brand-cyan dark:drop-shadow-[0_0_10px_rgba(6,182,212,0.45)]'
                        : 'text-slate-500 dark:text-medium-text hover:text-brand-cyan dark:hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.35)]'
                    }`}
                onClick={() => onViewChange(View.ACCUEIL)}
              >
                Accueil
              </button>
              <button
                className={`transition-all duration-300 text-[22px] font-bold whitespace-nowrap 
                    ${
                      currentView === View.PROJETS
                        ? 'text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-brand-orange to-brand-cyan dark:drop-shadow-[0_0_10px_rgba(6,182,212,0.45)]'
                        : 'text-slate-500 dark:text-medium-text hover:text-brand-cyan dark:hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.35)]'
                    }`}
                onClick={() => onViewChange(View.PROJETS)}
              >
                Projets
              </button>
              <button
                className={`transition-all duration-300 text-[22px] font-bold whitespace-nowrap 
                    ${
                      currentView === View.A_PROPOS
                        ? 'text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-brand-orange to-brand-cyan dark:drop-shadow-[0_0_10px_rgba(6,182,212,0.45)]'
                        : 'text-slate-500 dark:text-medium-text hover:text-brand-cyan dark:hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.35)]'
                    }`}
                onClick={() => onViewChange(View.A_PROPOS)}
              >
                À Propos
              </button>
              <button
                className={`transition-all duration-300 text-[22px] font-bold whitespace-nowrap 
                    ${
                      currentView === View.CONTACT
                        ? 'text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-brand-orange to-brand-cyan dark:drop-shadow-[0_0_10px_rgba(6,182,212,0.45)]'
                        : 'text-slate-500 dark:text-medium-text hover:text-brand-cyan dark:hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.35)]'
                    }`}
                onClick={() => onViewChange(View.CONTACT)}
              >
                Contact
              </button>
            </div>

            <div className="relative z-10 flex items-center justify-end space-x-3">
              <a
                href="mailto:ntparis9@gmail.com?subject=Demande%20de%20CV"
                className="morph-button flex items-center justify-center bg-slate-200 dark:bg-[#1E293B] hover:bg-slate-300 dark:hover:bg-[#2b3a52] border border-slate-300 dark:border-white/10 hover:border-brand-cyan/50 text-slate-800 dark:text-white px-4 py-2 rounded-md transition-all duration-300 text-sm font-bold hover:shadow-[0_12px_30px_rgba(6,182,212,0.14)] hover:-translate-y-0.5 active:scale-[0.98] mr-2 whitespace-nowrap"
              >
                CV
              </a>

              <a
                href="https://www.linkedin.com/in/tayier-dev-ai-data/"
                className="morph-button hidden lg:flex items-center gap-2 bg-[#0E76A8] hover:bg-[#0b5f87] text-white px-4 py-2 rounded-full transition-all duration-300 text-sm font-bold shadow-lg shadow-blue-900/20 hover:shadow-[0_12px_30px_rgba(14,118,168,0.24)] hover:-translate-y-0.5 active:scale-[0.98] whitespace-nowrap"
                title="LinkedIn"
                target="_blank"
                rel="noreferrer"
              >
                <Icon name="linkedin" className="w-5 h-5" />
                <span className="hidden xl:inline">Linkedin</span>
              </a>
              <a
                href="https://github.com/developer-ta"
                className="morph-button hidden lg:flex items-center gap-2 bg-slate-800 dark:bg-[#161B22] border border-slate-300 dark:border-white/10 hover:border-brand-orange/40 text-white px-4 py-2 rounded-full transition-all duration-300 text-sm font-bold shadow-lg hover:shadow-[0_12px_30px_rgba(249,115,22,0.14)] hover:-translate-y-0.5 active:scale-[0.98] whitespace-nowrap"
                title="GitHub"
                target="_blank"
                rel="noreferrer"
              >
                <Icon name="github" className="w-5 h-5 text-brand-orange" />
                <span className="hidden xl:inline">GitHub</span>
              </a>

              <button
                onClick={toggleTheme}
                className="text-slate-500 dark:text-medium-text hover:text-slate-900 dark:hover:text-white transition-all duration-300 ml-2 bg-slate-200 dark:bg-white/5 p-2 rounded-full hover:bg-slate-300 dark:hover:bg-white/10 hover:scale-105 hover:shadow-[0_10px_20px_rgba(0,0,0,0.12)] flex-shrink-0"
                title="Changer de thème"
              >
                {theme === 'dark' ? (
                  <Icon name="sun" className="w-6 h-6" />
                ) : (
                  <Icon name="moon" className="w-6 h-6" />
                )}
              </button>

              <div className="ml-4 w-11 h-11 rounded-full overflow-hidden border-2 border-slate-300 dark:border-white/10 hover:border-brand-cyan transition-all duration-300 cursor-pointer shadow-xl hover:shadow-[0_12px_28px_rgba(6,182,212,0.15)] relative group flex-shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
                  alt="Profil"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-200/50 dark:bg-black/40 border-b border-slate-200 dark:border-white/5 relative z-40">
          <div className="container mx-auto px-6 h-16 flex items-center md:justify-center gap-x-8 overflow-x-auto md:overflow-visible no-scrollbar">
            <span className="text-xs font-bold tracking-[0.2em] text-slate-400 dark:text-medium-text/60 whitespace-nowrap uppercase">
              TECH STACK DEMOS:
            </span>

            <div className="flex items-center h-full text-slate-500 dark:text-medium-text">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className={`group relative h-full flex items-center px-4 border-b-2 border-transparent hover:border-lime-400 transition-all duration-200 cursor-pointer hover:bg-black/5 dark:hover:bg-white/5 ${
                    currentView === View.TECH_PYTHON && skill.name === 'PYTHON'
                      ? 'border-lime-400 bg-black/5 dark:bg-white/5'
                      : ''
                  }`}
                  onClick={() => {
                    if (skill.name === 'PYTHON') {
                      onViewChange(View.TECH_PYTHON);
                    }
                  }}
                >
                  <div className="flex items-center gap-3 opacity-90 group-hover:opacity-100">
                    <Icon
                      name={skill.iconKey}
                    className={`w-6 h-6 ${skill.color} dark:group-hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.4)] transition-all duration-300`}
                    />

                    <span
                      className={`text-lg font-bold tracking-tight whitespace-nowrap ${skill.color} dark:group-hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.28)]`}
                    >
                      {skill.name}
                    </span>
                  </div>
                </div>
              ))}

              <div className="group relative h-full flex items-center px-4 border-b-2 border-transparent hover:border-lime-400 transition-all duration-200 cursor-pointer hover:bg-black/5 dark:hover:bg-white/5 ml-4">
                <div className="flex items-center gap-2 opacity-90 group-hover:opacity-100">
                  <Icon
                    name="settings"
                    className="w-5 h-5 text-gray-500 dark:text-gray-400 group-hover:text-brand-cyan dark:group-hover:text-white dark:group-hover:drop-shadow-[0_0_5px_rgba(6,182,212,0.35)] transition-all"
                  />
                  <span className="text-lg font-bold tracking-tight text-gray-600 dark:text-gray-300 group-hover:text-brand-cyan dark:group-hover:text-white">
                    OUTILS
                  </span>
                  <Icon
                    name="chevron-down"
                    className="w-4 h-4 text-gray-400 dark:text-gray-500 group-hover:text-brand-cyan dark:group-hover:text-white transition-colors"
                  />
                </div>

                <div className="absolute top-full right-0 mt-0 w-60 bg-white dark:bg-[#1E293B] border border-slate-200 dark:border-white/10 shadow-2xl rounded-b-lg overflow-hidden hidden group-hover:block animate-in fade-in zoom-in-95 duration-200">
                  <div className="py-2">
                    <div className="px-4 py-2 text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">
                      Workflow & Tools
                    </div>
                    {tools.map((tool) => (
                      <div
                        key={tool.name}
                        className="group/item flex items-center gap-3 px-4 py-3 hover:bg-slate-100 dark:hover:bg-white/5 transition-colors cursor-pointer"
                      >
                        <Icon
                          name={tool.iconKey}
                          className={`w-5 h-5 ${tool.color} dark:group-hover/item:drop-shadow-[0_0_5px_rgba(255,255,255,0.3)] transition-all`}
                        />
                        <span className={`text-sm font-semibold ${tool.color}`}>{tool.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
