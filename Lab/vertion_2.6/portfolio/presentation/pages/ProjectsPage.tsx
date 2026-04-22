
import React, { useState, useMemo } from 'react';
import { PortfolioService } from '../../application/services/PortfolioService';
import { Icon } from '../components/Icons';
import { Project, ProjectStatus } from '../../domain/models';

const ProjectsPage: React.FC = () => {
  const allProjects = PortfolioService.getAllProjects();
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<'apps' | 'lab'>('apps');

  const techFilters = [
    { id: 'PYTHON', label: 'PYTHON', icon: 'python', color: 'text-[#3776AB]', glow: 'shadow-glow-cyan' },
    { id: 'IA APPLIQUÉE', label: 'IA APPLIQUÉE', icon: 'brain', color: 'text-brand-cyan', glow: 'shadow-glow-purple' },
    { id: 'AUTOMATISATION', label: 'AUTOMATISATION', icon: 'robot', color: 'text-brand-orange', glow: 'shadow-glow-orange' },
    { id: 'REACT', label: 'REACT', icon: 'react', color: 'text-brand-cyan', glow: 'shadow-glow-cyan' },
    { id: 'DATA', label: 'DATA', icon: 'chart', color: 'text-brand-indigo', glow: 'shadow-glow-indigo' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 180;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const getStatusVisuals = (status: ProjectStatus) => {
    switch (status) {
      case 'completed':
        return {
          badge: 'bg-brand-green/20 text-brand-green border-brand-green/30',
          text: 'Terminé',
          card: 'border-slate-800 hover:border-brand-green/50 hover:shadow-glow-green',
          img: 'opacity-100 grayscale-0',
          overlay: null
        };
      case 'in-progress':
        return {
          badge: 'bg-brand-orange/20 text-brand-orange border-brand-orange/30 animate-pulse',
          text: 'En cours',
          card: 'border-slate-800 hover:border-brand-orange/50 hover:shadow-glow-orange',
          img: 'opacity-100',
          overlay: null
        };
      case 'future':
        return {
          badge: 'bg-brand-cyan/10 text-brand-cyan border-brand-cyan/20',
          text: 'Roadmap',
          card: 'border-slate-800 opacity-60 grayscale-[0.5] hover:opacity-100 transition-opacity',
          img: 'opacity-40 grayscale',
          overlay: <Icon name="vision" className="w-12 h-12 text-white/10" />
        };
      case 'secret':
        return {
          badge: 'bg-brand-purple/20 text-brand-purple border-brand-purple/30',
          text: 'Confidentiel',
          card: 'border-brand-purple/20 bg-black/40 backdrop-blur-md',
          img: 'opacity-20 blur-xl',
          overlay: <Icon name="lock" className="w-12 h-12 text-brand-purple/50 animate-pulse" />
        };
      default:
        return { badge: '', text: '', card: '', img: '', overlay: null };
    }
  };

  const renderProjectCard = (project: Project) => {
    const visuals = getStatusVisuals(project.status);
    const isSecret = project.status === 'secret';
    const linkColor = project.tags.includes('IA APPLIQUÉE') || project.tags.includes('PYTHON') ? 'text-brand-cyan' : 'text-brand-orange';

    return (
      <div key={project.id} className={`group relative bg-dark-card/20 rounded-xl border transition-all duration-500 overflow-hidden flex flex-col h-full ${visuals.card}`}>
        <div className="h-48 relative overflow-hidden bg-slate-900">
          <img src={project.imageUrl} alt={project.title} className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${visuals.img}`} />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 to-transparent"></div>
          <div className="absolute top-4 right-4 z-10">
            <span className={`px-2.5 py-1 text-[9px] font-black uppercase tracking-widest rounded border ${visuals.badge}`}>{visuals.text}</span>
          </div>
          {visuals.overlay && <div className="absolute inset-0 flex items-center justify-center pointer-events-none">{visuals.overlay}</div>}
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-bold mb-3 text-white">{isSecret ? 'PROJET CLASSIFIÉ' : project.title}</h3>
          <p className="text-sm text-slate-400 leading-relaxed mb-6 line-clamp-3">{isSecret ? 'Détails sous NDA.' : project.description}</p>
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map(tag => (
              <span key={tag} className="px-2 py-0.5 rounded bg-slate-800/80 text-[9px] font-bold text-slate-500 border border-white/5">{tag.toUpperCase()}</span>
            ))}
          </div>
          <div className="mt-auto">
            {project.status !== 'future' && (
              <a href={project.link || "#"} className={`text-[11px] font-black uppercase tracking-widest transition-all inline-flex items-center ${isSecret ? 'text-brand-purple' : linkColor} hover:brightness-125`}>
                {isSecret ? 'S\'AUTHENTIFIER' : (project.linkText?.toUpperCase() || 'CONSULTER LE PROJET')} <span className="ml-2">→</span>
              </a>
            )}
          </div>
        </div>
      </div>
    );
  };

  const renderSection = (title: string, status: ProjectStatus, icon: string, id: string) => {
    let list = allProjects.filter(p => p.status === status && (activeCategory === 'lab' ? p.isResearch : !p.isResearch));
    if (selectedTag) list = list.filter(p => p.tags.includes(selectedTag));
    if (list.length === 0) return null;

    return (
      <div id={id} className="mb-24 scroll-mt-48 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 shadow-inner">
              <Icon name={icon} className="w-5 h-5 text-brand-cyan" />
            </div>
            <h2 className="text-2xl font-black text-white uppercase tracking-widest">{title}</h2>
          <div className="flex-grow h-px bg-gradient-to-r from-white/10 to-transparent"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {list.map(renderProjectCard)}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-dark-bg text-white pb-32">
      {/* Hero Section - Bigger and more impactful */}
      <div className="pt-28 pb-12 text-center">
        <h1 className="text-6xl md:text-8xl font-black mb-12 tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-brand-green to-brand-cyan animate-gradient-x">
          L'Archive <span className="text-white/90">Projets</span>
        </h1>

        {/* Tech Filter Pills - Enlarged */}
        <div className="flex flex-wrap justify-center items-center gap-5 px-6 max-w-6xl mx-auto mb-20">
          <button 
            onClick={() => setSelectedTag(null)} 
            className={`px-8 py-3 rounded-full border-2 transition-all duration-300 font-black text-sm uppercase tracking-widest ${!selectedTag ? 'bg-slate-800 border-brand-cyan shadow-glow-cyan text-white scale-105' : 'bg-slate-900/50 border-white/10 text-slate-500 hover:border-white/30'}`}
          >
            Tous les Projets
          </button>
          
          {techFilters.map(filter => (
            <button 
              key={filter.id} 
              onClick={() => setSelectedTag(filter.id)} 
              className={`flex items-center gap-3 px-7 py-3 rounded-full border-2 transition-all duration-300 font-black text-sm uppercase tracking-widest ${selectedTag === filter.id ? `bg-slate-800 border-white/60 ${filter.glow} text-white scale-105` : 'bg-slate-900/50 border-white/5 text-slate-500 hover:border-white/20'}`}
            >
              <Icon name={filter.icon} className={`w-6 h-6 ${filter.color}`} />
              {filter.label}
            </button>
          ))}
        </div>

        {/* Categories & Navigation - Unified and Bold */}
        <div className="flex flex-col items-center gap-10 mb-20 px-6">
            <div className="inline-flex p-1.5 bg-black/40 rounded-2xl border border-white/10 shadow-2xl">
                    <button 
                    onClick={() => setActiveCategory('apps')} 
                    className={`px-10 py-3.5 rounded-xl text-sm font-black uppercase tracking-widest transition-all flex items-center gap-4 ${activeCategory === 'apps' ? 'bg-slate-800 text-white shadow-glow-cyan border border-brand-cyan/30' : 'text-slate-500 hover:text-white'}`}
                >
                    <Icon name="terminal" className="w-5 h-5" /> Missions
                </button>
                <button 
                    onClick={() => setActiveCategory('lab')} 
                    className={`px-10 py-3.5 rounded-xl text-sm font-black uppercase tracking-widest transition-all flex items-center gap-4 ${activeCategory === 'lab' ? 'bg-brand-orange text-white shadow-glow-orange' : 'text-slate-500 hover:text-brand-orange'}`}
                >
                    <Icon name="beaker" className="w-5 h-5" /> Lab & prototypes
                </button>
            </div>

            {/* Saut Rapide (Section Navigator) - NEW: Action Pills style */}
            <div className="flex flex-col items-center gap-5">
                <span className="text-[11px] font-black uppercase tracking-[0.4em] text-slate-600 mb-2">Navigation Rapide</span>
                <div className="flex flex-wrap justify-center items-center gap-4">
                    <button 
                        onClick={() => scrollToSection('completed-section')} 
                        className="px-6 py-2.5 rounded-xl bg-brand-green/10 border border-brand-green/20 text-brand-green text-xs font-black uppercase tracking-widest hover:bg-brand-green hover:text-white transition-all flex items-center gap-3 group"
                    >
                        <span className="w-2 h-2 rounded-full bg-brand-green group-hover:bg-white animate-pulse"></span>
                        Projets Terminés
                    </button>
                    
                    <button 
                        onClick={() => scrollToSection('in-progress-section')} 
                        className="px-6 py-2.5 rounded-xl bg-brand-orange/10 border border-brand-orange/30 text-brand-orange text-xs font-black uppercase tracking-widest hover:bg-brand-orange hover:text-white hover:shadow-glow-orange transition-all flex items-center gap-3 group"
                    >
                        <span className="w-2.5 h-2.5 rounded-full bg-brand-orange group-hover:bg-white animate-ping"></span>
                        En développement actif
                    </button>
                    
                    <button 
                        onClick={() => scrollToSection('future-section')} 
                        className="px-6 py-2.5 rounded-xl bg-brand-indigo/10 border border-brand-indigo/20 text-brand-indigo text-xs font-black uppercase tracking-widest hover:bg-brand-indigo hover:text-white transition-all flex items-center gap-3 group"
                    >
                        <span className="w-2 h-2 rounded-full bg-brand-indigo group-hover:bg-white"></span>
                        Roadmap & Vision
                    </button>
                </div>
            </div>
        </div>
      </div>

      <div className="container mx-auto px-6">
        {activeCategory === 'lab' && !selectedTag && (
             <div className="mb-20 p-12 md:p-16 rounded-[2.5rem] bg-gradient-to-br from-brand-orange/10 via-slate-900 to-brand-cyan/10 border border-white/10 relative overflow-hidden group shadow-2xl">
                <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity">
                    <Icon name="dna" className="w-80 h-80 text-brand-orange" />
                </div>
                <div className="relative z-10 max-w-3xl">
                    <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-brand-orange/20 border border-brand-orange/30 text-[11px] font-black uppercase tracking-widest text-brand-orange mb-8">
                        <Icon name="neuro" className="w-4 h-4" />
                        Profil hybride
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">Python, IA et outils <span className="text-brand-orange">métier</span></h2>
                    <p className="text-slate-400 text-lg leading-relaxed font-light mb-8">
                        Je conçois des solutions d’automatisation, des assistants IA et des outils internes pour faire gagner du temps aux équipes et réduire les erreurs.
                    </p>
                    <div className="flex gap-4">
                        <div className="h-1 w-12 bg-brand-orange rounded-full"></div>
                        <div className="h-1 w-8 bg-brand-cyan rounded-full"></div>
                        <div className="h-1 w-4 bg-white/20 rounded-full"></div>
                    </div>
                </div>
             </div>
        )}

        {/* Projects by Status */}
        {renderSection('Projets Terminés', 'completed', 'stars', 'completed-section')}
        {renderSection('En Développement Actif', 'in-progress', 'settings', 'in-progress-section')}
        {renderSection('Vision & Roadmap', 'future', 'vision', 'future-section')}
        {renderSection('Archives Confidentielles', 'secret', 'lock', 'secret-section')}

        {useMemo(() => {
            const filtered = allProjects.filter(p => (activeCategory === 'lab' ? p.isResearch : !p.isResearch) && (!selectedTag || p.tags.includes(selectedTag)));
            return filtered.length === 0;
        }, [allProjects, activeCategory, selectedTag]) && (
          <div className="text-center py-40 bg-white/5 rounded-[2rem] border border-dashed border-white/10">
            <Icon name="logo" className="w-16 h-16 text-slate-600 mx-auto mb-6 opacity-20" />
            <p className="text-slate-500 text-xl font-bold">Aucun projet ne correspond à vos critères de sélection.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsPage;
