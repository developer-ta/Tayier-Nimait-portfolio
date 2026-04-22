import { templateData } from '../data/templateData';

export function Footer() {
  return (
    <footer className="bg-surface py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="space-y-6 text-center md:text-left">
          <div className="font-headline font-black text-3xl text-orange-500 uppercase tracking-tighter">
            {templateData.footer.name}
          </div>
          <p className="text-slate-500 max-w-sm font-body">{templateData.footer.summary}</p>
          <div className="flex justify-center md:justify-start gap-4">
            <a className="flex items-center gap-2 text-primary-container font-bold hover:underline" href={`mailto:${templateData.footer.email}`}>
              <span className="material-symbols-outlined">mail</span>
              {templateData.footer.email}
            </a>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-12">
          <div className="flex flex-col gap-4">
            <span className="font-bold text-white uppercase text-xs tracking-widest">Reseaux</span>
            {templateData.footer.columns.networks.map((item) => (
              <a key={item} className="text-slate-500 hover:text-orange-400 transition-all font-body text-sm" href="#">
                {item}
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            <span className="font-bold text-white uppercase text-xs tracking-widest">Navigation</span>
            {templateData.footer.columns.navigation.map((item) => (
              <a key={item} className="text-slate-500 hover:text-orange-400 transition-all font-body text-sm" href="#">
                {item}
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            <span className="font-bold text-white uppercase text-xs tracking-widest">Legal</span>
            {templateData.footer.columns.legal.map((item) => (
              <a key={item} className="text-slate-500 hover:text-orange-400 transition-all font-body text-sm" href="#">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-8 mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
        <p>{templateData.footer.copyright}</p>
        <p className="mt-4 md:mt-0 italic opacity-60">{templateData.footer.tagline}</p>
      </div>
    </footer>
  );
}
