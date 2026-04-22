type Props = {
  number: string;
  title: string;
  icon: string;
  iconClass: string;
  offsetClass: string;
  description: string;
};

export function MethodCard({ number, title, icon, iconClass, offsetClass, description }: Props) {
  return (
    <div className={`p-8 rounded-2xl bg-surface-container hover:bg-surface-container-high transition-all border border-white/5 group ${offsetClass}`}>
      <div className="text-6xl font-black text-white/5 group-hover:text-primary-container/20 transition-colors mb-4">
        {number}
      </div>
      <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
        <span className={`material-symbols-outlined ${iconClass}`}>{icon}</span>
        {title}
      </h4>
      <p className="text-sm text-on-surface-variant leading-relaxed">{description}</p>
    </div>
  );
}
