
import React from 'react';
import { View } from '../../domain/models';
import { PortfolioService } from '../../application/services/PortfolioService';
import Hero from '../sections/Hero';
import ProjectsList from '../sections/ProjectsList';
import ArticlesList from '../sections/ArticlesList';

interface HomePageProps {
  onViewChange: (view: View) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onViewChange }) => {
  // Restore: Use only featured projects for the home page to keep it focused and clean
  const featuredProjects = PortfolioService.getFeaturedProjects();
  const articles = PortfolioService.getLatestArticles();

  return (
    <div className="animate-in fade-in duration-1000">
      <Hero onViewChange={onViewChange} />
      
      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-brand-cyan/20 to-transparent my-4"></div>
      
      <ProjectsList 
        projects={featuredProjects} 
        onViewChange={onViewChange} 
        title="Projets utiles et orientés résultat"
      />
      
      <ArticlesList articles={articles} />
      
      {/* Bottom CTA on Home */}
      <section className="py-20 text-center container mx-auto px-6">
         <div className="p-12 rounded-[2rem] bg-slate-200/30 dark:bg-white/[0.02] border border-slate-300 dark:border-white/5 backdrop-blur-xl">
           <h2 className="text-3xl md:text-4xl font-black mb-6 text-slate-900 dark:text-white">
             Prêt à automatiser <span className="text-brand-orange">plus vite</span> ?
           </h2>
           <button 
             onClick={() => onViewChange(View.A_PROPOS)}
             className="morph-button px-10 py-4 bg-slate-900 dark:bg-brand-cyan text-white dark:text-slate-900 font-black rounded-full hover:scale-105 transition-all shadow-xl text-xs uppercase tracking-widest"
           >
             Découvrir mon profil
           </button>
         </div>
      </section>
    </div>
  );
};

export default HomePage;
