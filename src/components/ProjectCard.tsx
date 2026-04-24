type Props = {
  category: string;
  title: string;
  staticImage: string;
  hoverImage: string;
  staticAlt: string;
  hoverAlt: string;
  icon: string;
  badgeBgClass: string;
  badgeTextClass: string;
  badgeBorderClass: string;
  subtitle?: string;
  problem: string;
  solution: string;
  impactLabel: string;
  impactValue: string;
};

export function ProjectCard({
  category,
  title,
  staticImage,
  hoverImage,
  staticAlt,
  hoverAlt,
  icon,
  badgeBgClass,
  badgeTextClass,
  badgeBorderClass,
  subtitle,
  problem,
  solution,
  impactLabel,
  impactValue,
}: Props) {
  return (
    <div className="project-card morph-outset bg-surface-container rounded-2xl flex flex-col h-full border border-white/5 group hover:-translate-y-2 transition-all duration-300 overflow-hidden">
      {/* IMAGE + TITLE OVERLAY */}
      <div className="project-img-container relative h-72 md:h-80 overflow-hidden bg-slate-900 border-b border-white/5">
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
        {/* Gradient plus fort pour lisibilité du titre */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19] via-[#0b0f19]/60 to-transparent" />

        {/* Badge en haut à droite */}
        <div className="absolute top-4 right-4 z-10">
          <span
            className={`${badgeBgClass} backdrop-blur-md ${badgeTextClass} px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border ${badgeBorderClass}`}
          >
            {category}
          </span>
        </div>

        {/* Titre et icône superposés en bas */}
        <div className="absolute bottom-5 left-5 right-5 z-10">
          <div className="flex items-center gap-3 w-full">
            <div
              className={`w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md flex-shrink-0 flex items-center justify-center border border-white/20 ${badgeTextClass} shadow-lg`}
            >
              <span className="material-symbols-outlined text-[20px]">{icon}</span>
            </div>
            <h3 className="text-lg lg:text-xl font-bold text-white group-hover:text-primary-container transition-colors leading-tight tracking-tight drop-shadow-md flex-1">
              {title}
            </h3>
          </div>
        </div>
      </div>

      {/* CONTENU COMPACT EN DESSOUS */}
      <div className="p-5 md:p-6 flex flex-col flex-grow bg-surface-container">
        {/* SUBTITLE */}
        {subtitle && (
          <p className="text-sm text-slate-300 font-medium mb-4 leading-snug">{subtitle}</p>
        )}

        {/* BLOCS PROBLEME / SOLUTION / IMPACT */}
        <div className="space-y-4 mb-6 flex-grow">
          <div>
            <div className="text-[10px] uppercase font-black text-slate-500 mb-1 tracking-widest">
              Problem
            </div>
            <p className="text-sm text-slate-400">{problem}</p>
          </div>

          <div className="morph-inset bg-surface-container-lowest p-3 rounded-lg border border-white/5">
            <div className="text-[10px] uppercase font-black text-primary-container mb-1 tracking-widest">
              Solution
            </div>
            <p className="text-sm text-slate-300">{solution}</p>
          </div>

          <div className="bg-secondary/10 px-4 py-3 rounded-xl border border-secondary/20 block">
            <div className="text-[10px] uppercase font-black text-secondary tracking-widest leading-none mb-1 flex items-center gap-1.5 text-glow-orange">
              <span className="text-sm leading-none">💥</span>
              {impactLabel}
            </div>
            <div className="text-sm font-bold text-white leading-tight">{impactValue}</div>
          </div>
        </div>

        {/* BOUTON */}
        <button className="w-full py-3 rounded-xl border border-white/10 font-bold hover:bg-white/5 transition-colors flex items-center justify-center gap-2 group-hover:border-primary-container/30 group-hover:text-primary-container">
          Voir le projet
          <span className="material-symbols-outlined text-[18px] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
            arrow_forward
          </span>
        </button>
      </div>
    </div>
  );
}
