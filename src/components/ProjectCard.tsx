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
  problem,
  solution,
  impactLabel,
  impactValue,
}: Props) {
  return (
    <div className="project-card morph-outset bg-surface-container rounded-xl flex flex-col h-full border border-white/5 group hover:-translate-y-2 transition-all duration-300 overflow-hidden">
      <div className="project-img-container relative h-48 overflow-hidden bg-slate-900">
        <img alt={staticAlt} className="static-img absolute inset-0 w-full h-full object-cover" src={staticImage} />
        <img alt={hoverAlt} className="hover-gif absolute inset-0 w-full h-full object-cover" src={hoverImage} />
        <div className="absolute top-4 right-4 z-10">
          <span className={`${badgeBgClass} backdrop-blur-md ${badgeTextClass} px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border ${badgeBorderClass}`}>
            {category}
          </span>
        </div>
      </div>
      <div className="p-8 flex flex-col flex-grow">
        <div className="mb-4">
          <div className={`w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center morph-inset ${badgeTextClass}`}>
            <span className="material-symbols-outlined text-2xl">{icon}</span>
          </div>
        </div>
        <h3 className="text-2xl font-bold mb-6 group-hover:text-primary-container transition-colors">{title}</h3>
        <div className="space-y-4 mb-8 flex-grow">
          <div>
            <div className="text-xs uppercase font-black text-slate-500 mb-1">Problem</div>
            <p className="text-sm">{problem}</p>
          </div>
          <div className="morph-inset bg-surface-container-lowest p-4 rounded-lg">
            <div className="text-xs uppercase font-black text-primary-container mb-1">Solution</div>
            <p className="text-sm italic">{solution}</p>
          </div>
          <div>
            <div className="text-xs uppercase font-black text-secondary mb-1">{impactLabel}</div>
            <p className="text-sm font-bold">{impactValue}</p>
          </div>
        </div>
        <button className="w-full py-3 rounded-lg border border-outline-variant font-bold hover:bg-white/5 transition-colors">
          Détails du projet
        </button>
      </div>
    </div>
  );
}
