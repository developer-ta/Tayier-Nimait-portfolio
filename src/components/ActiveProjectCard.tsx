type Props = {
  status: string; // e.g. "Version active", "MVP Validé", etc.
  statusColor?: 'orange' | 'blue' | 'green';
  title: string;
  staticImage: string;
  hoverImage: string;
  staticAlt: string;
  hoverAlt: string;
  icon: string;
  problem: string;
  currentSolution: string;
  currentImpact: string;
  nextStep: string;
};

export function ActiveProjectCard({
  status,
  statusColor = 'orange',
  title,
  staticImage,
  hoverImage,
  staticAlt,
  hoverAlt,
  icon,
  problem,
  currentSolution,
  currentImpact,
  nextStep,
}: Props) {
  // Définition conditionnelle des couleurs selon le statut
  const colors = {
    orange: {
      badge: 'bg-orange-500/20 text-orange-400 border-orange-500/30',
      glow: 'drop-shadow-[0_0_8px_rgba(249,115,22,0.6)]',
    },
    blue: {
      badge: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
      glow: 'drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]',
    },
    green: {
      badge: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
      glow: 'drop-shadow-[0_0_8px_rgba(16,185,129,0.6)]',
    },
  }[statusColor];

  return (
    <div className="project-card morph-outset bg-surface-container rounded-2xl flex flex-col h-full border border-white/5 group hover:-translate-y-2 transition-all duration-300 overflow-hidden relative">
      {/* 🚀 LIGNE SUPÉRIEURE DE STATUT (Design Startup CTO) */}
      <div className="absolute top-0 left-0 right-0 z-20 flex justify-end p-4 pointer-events-none">
        <span
          className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border backdrop-blur-md animate-pulse ${colors.badge} ${colors.glow}`}
        >
          ● {status}
        </span>
      </div>

      {/* IMAGE + TITLE OVERLAY */}
      <div className="project-img-container relative h-64 md:h-72 overflow-hidden bg-slate-900 border-b border-white/5">
        <img
          alt={staticAlt}
          className="static-img absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          src={staticImage}
        />
        <img
          alt={hoverAlt}
          className="hover-gif absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          src={hoverImage}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19] via-[#0b0f19]/60 to-transparent" />

        {/* Titre et icône en bas */}
        <div className="absolute bottom-5 left-5 right-5 z-10 flex items-center gap-3 w-full">
          <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md flex-shrink-0 flex items-center justify-center border border-white/20 shadow-lg text-white">
            <span className="material-symbols-outlined text-[20px]">{icon}</span>
          </div>
          <h3 className="text-lg lg:text-xl font-bold text-white leading-tight tracking-tight drop-shadow-md flex-1 pr-2">
            {title}
          </h3>
        </div>
      </div>

      {/* STRUCTURE D'UN "ONGOING MVP" PRO */}
      <div className="p-5 md:p-6 flex flex-col flex-grow bg-surface-container">
        <div className="space-y-4 mb-6 flex-grow">
          {/* PROBLEME RÉEL */}
          <div>
            <div className="text-[10px] uppercase font-black text-slate-500 mb-1 tracking-widest">
              Problème
            </div>
            <p className="text-sm text-slate-400">{problem}</p>
          </div>

          {/* SOLUTION ACTUELLE (CE QUI EST DÉJÀ LÀ) */}
          <div className="morph-inset bg-surface-container-lowest p-3 rounded-lg border border-white/5">
            <div className="text-[10px] uppercase font-black text-primary-container mb-1 tracking-widest">
              Solution actuelle
            </div>
            <p className="text-sm text-slate-300">{currentSolution}</p>
          </div>

          {/* IMPACT / RÉSULTAT ACTUEL (CE QUI MARCHE DÉJÀ) */}
          <div className="bg-[#00ffb4]/10 p-4 rounded-xl border border-[#00ffb4]/20 block">
            <div className="text-[10px] uppercase font-black text-[#00ffb4] tracking-widest leading-none mb-2 drop-shadow-[0_0_8px_rgba(0,255,180,0.5)]">
              Résultat Actuel
            </div>
            <div className="text-base font-black text-white leading-tight flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px] text-[#00ffb4]">verified</span>
              <span>{currentImpact}</span>
            </div>
          </div>

          {/* EN COURS / PROCHAINE ÉTAPE */}
          <div className="pt-2">
            <div className="text-[10px] uppercase font-black text-secondary tracking-widest mb-1 flex items-center gap-1.5 opacity-80">
              <span className="material-symbols-outlined text-[14px]">rocket_launch</span>
              Prochaine étape
            </div>
            <p className="text-sm text-slate-400 font-medium italic border-l-2 border-secondary/30 pl-3 ml-1">
              {nextStep}
            </p>
          </div>
        </div>

        {/* BOUTON */}
        <button className="w-full py-3 rounded-xl border border-white/10 font-bold text-slate-300 hover:bg-white/5 transition-colors flex items-center justify-center gap-2">
          Voir les tests MVP
        </button>
      </div>
    </div>
  );
}
