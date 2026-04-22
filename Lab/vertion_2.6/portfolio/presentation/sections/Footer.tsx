
import React from 'react';
import { Icon } from '../components/Icons';

const Footer: React.FC = () => {
  return (
    <footer className="mt-40 border-t border-slate-200 dark:border-white/10 relative overflow-hidden" id="main-footer">
      {/* Subtle background glow to ground the footer */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-48 bg-brand-cyan/5 blur-[120px] pointer-events-none"></div>
      
      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          
          {/* Brand & Mission */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
             <div className="flex items-center gap-3 mb-4">
                <Icon name="logo" className="w-6 h-6 text-brand-cyan" />
                <span className="text-xl font-black tracking-tighter text-slate-900 dark:text-white uppercase">
                  Tayier NIMAIT
                </span>
             </div>
             <p className="text-sm text-slate-500 dark:text-medium-text max-w-xs leading-relaxed font-medium">
               Développeur Python & IA appliquée, orienté automatisation, outils métier et gain de temps pour les équipes.
             </p>
          </div>

          {/* Social Links & Copyright */}
          <div className="flex flex-col items-center md:items-end">
            <div className="flex items-center space-x-8 mb-8">
              <a 
                href="https://www.linkedin.com/in/tayier-dev-ai-data/" 
                className="text-slate-400 dark:text-medium-text/40 hover:text-[#0E76A8] transition-all transform hover:scale-125 duration-300" 
                title="LinkedIn"
                target="_blank"
                rel="noreferrer"
              >
                <Icon name="linkedin" className="w-6 h-6" />
              </a>
              <a 
                href="mailto:ntparis9@gmail.com" 
                className="text-slate-400 dark:text-medium-text/40 hover:text-[#1DA1F2] transition-all transform hover:scale-125 duration-300" 
                title="Email"
              >
                <Icon name="logo" className="w-6 h-6" />
              </a>
              <a 
                href="https://github.com/developer-ta" 
                className="text-slate-400 dark:text-medium-text/40 hover:text-slate-900 dark:hover:text-white transition-all transform hover:scale-125 duration-300" 
                title="GitHub"
                target="_blank"
                rel="noreferrer"
              >
                <Icon name="github" className="w-6 h-6" />
              </a>
            </div>
            
            <div className="flex flex-col md:items-end gap-1">
              <p className="text-[10px] font-black tracking-[0.3em] text-slate-400 dark:text-medium-text/30 uppercase">
                © 2026 Portfolio professionnel
              </p>
              <p className="text-[10px] font-bold tracking-[0.1em] text-slate-300 dark:text-medium-text/20 uppercase">
                Tous droits réservés.
              </p>
            </div>
          </div>
        </div>
        
        {/* Accent bar decorative element */}
        <div className="mt-12 h-px w-full bg-gradient-to-r from-transparent via-slate-200 dark:via-white/10 to-transparent"></div>
        <div className="mt-1 h-0.5 w-1/4 mx-auto bg-brand-cyan/30 blur-sm rounded-full"></div>
      </div>
    </footer>
  );
};

export default Footer;
