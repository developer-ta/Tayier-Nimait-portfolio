
import React from 'react';
import { Icon } from '../components/Icons';

const AboutPage: React.FC = () => {
  const experiences = [
    {
      year: '2026 - PRÉSENT',
      title: 'Développeur Python & IA appliquée',
      company: 'Portfolio indépendant',
      desc: 'Conception d’outils métier, automatisation de tâches répétitives et prototypes IA orientés valeur.',
      color: 'text-brand-cyan',
      dot: 'bg-brand-cyan'
    },
    {
      year: '2020 - 2025',
      title: 'Études et cadrage technique',
      company: 'Conception logicielle / IA',
      desc: 'Montée en compétence sur Python, React, .NET, data et orchestration d’outils métier.',
      color: 'text-brand-orange',
      dot: 'bg-brand-orange'
    },
    {
      year: 'Avant 2020',
      title: 'Parcours médical et informatique',
      company: 'Bac +5 médical, Bac +3 concepteur développeur',
      desc: 'Double culture métier qui aide à comprendre rapidement les besoins opérationnels et à structurer les solutions.',
      color: 'text-brand-green',
      dot: 'bg-brand-green'
    }
  ];

  const principles = [
    {
      title: 'Clarté',
      desc: 'Des messages simples et lisibles pour être compris rapidement par le marché.',
      icon: 'neuro'
    },
    {
      title: 'Utilité',
      desc: 'Des solutions concrètes qui font gagner du temps et réduisent les erreurs.',
      icon: 'ui'
    },
    {
      title: 'Livraison',
      desc: 'Un travail rapide, structuré et documenté pour passer de l’idée à l’usage.',
      icon: 'chart'
    }
  ];

  return (
    <div className="container mx-auto px-6 py-20 animate-in fade-in duration-700">
      {/* Bio Hero Section */}
      <div className="flex flex-col lg:flex-row items-center gap-16 mb-32">
        <div className="lg:w-1/2">
          <div className="inline-block mb-4 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan text-xs font-bold tracking-widest uppercase">
            Mon Positionnement
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-8 text-slate-900 dark:text-white leading-tight">
            Développeur Python & IA orienté <span className="text-brand-orange">automatisation</span>.
          </h1>
          <p className="text-lg text-slate-600 dark:text-medium-text leading-relaxed mb-8">
            Je transforme des besoins métier en solutions simples: automatisation de tâches, outils internes, dashboards et intégration d’IA appliquée.
          </p>
          <div className="grid grid-cols-2 gap-6">
            <div className="p-4 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10">
              <span className="block text-3xl font-black text-brand-cyan">3</span>
              <span className="text-xs uppercase font-bold text-slate-500 dark:text-medium-text/60">Axes clés</span>
            </div>
            <div className="p-4 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10">
              <span className="block text-3xl font-black text-brand-orange">1</span>
              <span className="text-xs uppercase font-bold text-slate-500 dark:text-medium-text/60">Objectif: utile vite</span>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 relative">
            <div className="rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-2xl relative group">
              <img 
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Espace de travail technologique" 
                className="w-full h-[450px] object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
              />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <p className="text-xl font-bold italic leading-tight">
                "Le marché doit comprendre en quelques secondes ce que tu fais et pourquoi il doit te contacter."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Methodology Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
        {principles.map((p, i) => (
          <div key={i} className="group p-8 rounded-2xl bg-white dark:bg-dark-card border border-slate-200 dark:border-white/5 hover:border-brand-cyan/30 transition-all shadow-xl">
            <div className="w-14 h-14 rounded-xl bg-slate-100 dark:bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Icon name={p.icon} className="w-7 h-7 text-brand-cyan" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">{p.title}</h3>
            <p className="text-slate-600 dark:text-medium-text text-sm leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>

      {/* Career Timeline */}
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-16 text-center text-slate-900 dark:text-white flex items-center justify-center gap-4">
          <span className="w-12 h-px bg-brand-orange"></span>
          Mon Parcours Évolutif
          <span className="w-12 h-px bg-brand-orange"></span>
        </h2>
        
        <div className="relative space-y-12 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-brand-cyan before:via-brand-orange before:to-brand-green">
          {experiences.map((exp, i) => (
            <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              {/* Timeline Dot */}
              <div className={`flex items-center justify-center w-10 h-10 rounded-full border border-white dark:border-dark-bg shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 ${exp.dot} z-10`}>
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              {/* Content Card */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-white dark:bg-dark-card border border-slate-200 dark:border-white/5 shadow-xl hover:-translate-y-1 transition-transform">
                <div className={`font-black text-xs uppercase mb-1 ${exp.color}`}>{exp.year}</div>
                <div className="text-lg font-bold text-slate-900 dark:text-white">{exp.title}</div>
                <div className="text-brand-cyan font-semibold text-sm mb-4">{exp.company}</div>
                <p className="text-sm text-slate-600 dark:text-medium-text leading-relaxed">{exp.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-40 p-12 rounded-3xl bg-gradient-to-br from-brand-orange/10 to-brand-cyan/10 border border-white/10 backdrop-blur-xl text-center">
        <h2 className="text-3xl md:text-5xl font-black mb-6 text-slate-900 dark:text-white">Construisons quelque chose d’utile ensemble.</h2>
        <p className="text-lg text-slate-600 dark:text-medium-text mb-10 max-w-2xl mx-auto">
          Je suis ouvert aux missions, contrats et opportunités où l’automatisation, la data et l’IA ont un impact concret.
        </p>
        <button className="morph-button px-10 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold rounded-full hover:scale-105 transition-transform shadow-2xl uppercase tracking-widest text-xs">
          Me contacter
        </button>
      </div>
    </div>
  );
};

export default AboutPage;
