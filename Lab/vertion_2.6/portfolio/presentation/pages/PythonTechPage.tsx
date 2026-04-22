import React, { useState } from 'react';
import { View } from '../../domain/models';

interface ContentItem {
  type: 'tutorial' | 'notebook' | 'snippet';
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  tech: 'python';
  codeSnippet?: {
    file: string;
    language: string;
    content: string;
  };
}

const PythonTechPage: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'tutorial' | 'notebook' | 'snippet'>('all');

  const contentItems: ContentItem[] = [
    {
      type: 'tutorial',
      title: 'Conventions de nommage Python',
      excerpt: 'Suivre la PEP 8 pour améliorer la qualité du code.',
      date: '24 NOV 2023',
      tags: ['#Python', '#PEP8', '#BestPractices'],
      tech: 'python',
      codeSnippet: {
        file: 'naming.py',
        language: 'python',
        content: `# Variables and functions: snake_case
my_function(user_age)

# Classes: PascalCase
class MyClass:
    pass
class PersonInfo:
    pass

# Constants: UPPER_CASE
MAX_SIZE = 100
API_KEY = "sk_..."`,
      },
    },
  ];

  /* Additional resources mocked for visual completeness */
  const resourceItems = [
    {
      type: 'guide',
      title: 'Structure de projet Python',
      date: '15 NOV 2023',
      excerpt: 'Comment organiser vos dossiers, tests, et fichiers setup.py...',
      color: 'border-cyan-500',
    },
    {
      type: 'snippet',
      title: 'Type Hints avancés',
      date: '10 NOV 2023',
      excerpt: 'Utilisation de Generic, Union et Protocol pour un typage statique...',
      color: 'border-purple-500',
    },
  ];

  const filteredItems = contentItems.filter((item) =>
    filter === 'all' ? true : item.type === filter
  );

  return (
    <div className="container mx-auto px-4 py-8 space-y-8 animate-in fade-in duration-500">
      {/* Secondary Tech Nav (Simplified for this view) */}
      <nav className="sticky top-[80px] z-30 bg-slate-100/90 dark:bg-slate-900/90 backdrop-blur-sm border-b border-orange-700/50 py-2">
        <div className="container mx-auto flex items-center overflow-x-auto no-scrollbar">
          <span className="text-sm font-semibold text-slate-500 uppercase mr-6 hidden md:block flex-shrink-0">
            Tech Stack Demos:
          </span>
          <div className="flex space-x-6 py-1">
            {/* Active Python Tab */}
            <div className="flex items-center space-x-2 text-orange-500 border-b-2 border-orange-500 pb-1 cursor-default">
              <span className="text-xl">🐍</span>
              <span className="font-bold">PYTHON</span>
            </div>
            {/* Inactive Tabs (Visual Only for now) */}
            <span className="flex items-center space-x-2 text-slate-400 opacity-50 cursor-not-allowed">
              <span className="text-xl">⚛️</span>
              <span className="font-bold">REACT</span>
            </span>
            <span className="flex items-center space-x-2 text-slate-400 opacity-50 cursor-not-allowed">
              <span className="text-xl">🐱</span>
              <span className="font-bold">GIT</span>
            </span>
          </div>
        </div>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Sidebar */}
        <aside className="col-span-1 space-y-6 sticky top-[140px] h-fit">
          <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 space-y-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Rechercher..."
                className="w-full p-2 pl-10 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-white border border-slate-300 dark:border-slate-600 focus:ring-2 focus:ring-cyan-500 outline-none"
              />
              <svg
                className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-slate-500 dark:text-slate-300 uppercase text-sm mb-3 flex items-center space-x-2">
                <span className="text-orange-400">🔥</span>
                <span>CATÉGORIES</span>
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex justify-between items-center p-2 rounded-lg bg-slate-100 dark:bg-slate-700 text-orange-600 dark:text-orange-400 font-medium cursor-pointer">
                  Python Standard{' '}
                  <span className="bg-slate-200 dark:bg-slate-600 text-slate-600 dark:text-slate-300 px-2 py-0.5 rounded-full text-xs">
                    8
                  </span>
                </li>
                <li className="flex justify-between items-center p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-400 cursor-pointer transition">
                  Computer Vision{' '}
                  <span className="bg-slate-200 dark:bg-slate-600 px-2 py-0.5 rounded-full text-xs">
                    12
                  </span>
                </li>
                <li className="flex justify-between items-center p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-400 cursor-pointer transition">
                  Automation & Bots{' '}
                  <span className="bg-slate-200 dark:bg-slate-600 px-2 py-0.5 rounded-full text-xs">
                    15
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border-l-4 border-cyan-500 shadow-md">
            <h3 className="font-bold text-slate-700 dark:text-slate-300 uppercase text-sm flex items-center space-x-2 mb-2">
              <span className="text-cyan-500">💡</span>
              <span>NOTE DU LAB</span>
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Penser à mettre à jour les dépendances{' '}
              <strong className="text-orange-500">TensorFlow 2.14</strong>.
            </p>
          </div>
        </aside>

        {/* Main Content */}
        <section className="col-span-1 md:col-span-3 space-y-8">
          <div className="flex items-center space-x-4 mb-4">
            <span className="text-5xl">🐍</span>
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500">
                Python appliqué
              </h1>
              <p className="text-lg text-slate-500 dark:text-slate-400 mt-2">
                Automatisation, outils métier et bonnes pratiques orientées production.
              </p>
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-3 mb-6">
            {[
              { id: 'all', label: 'Tout' },
              { id: 'tutorial', label: 'Tutoriels' },
              { id: 'notebook', label: 'Notebooks' },
              { id: 'snippet', label: 'Snippets' },
            ].map((btn) => (
              <button
                key={btn.id}
                onClick={() => setFilter(btn.id as any)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === btn.id
                    ? 'bg-orange-600 text-white shadow-lg shadow-orange-500/30'
                    : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-600'
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>

          {/* Articles List */}
          <div className="space-y-6">
            {filteredItems.map((item, idx) => (
              <article
                key={idx}
                className="bg-white dark:bg-[#1E293B] bg-opacity-80 backdrop-blur-md p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-xl"
              >
                <h2 className="text-2xl font-bold text-orange-500 mb-2">{item.title}</h2>
                <p className="text-slate-600 dark:text-slate-300 mb-6">{item.excerpt}</p>

                {/* Code Block if present */}
                {item.codeSnippet && (
                  <div className="space-y-4 mb-6">
                    <div className="bg-slate-900 rounded-lg overflow-hidden border border-slate-700">
                      <div className="flex items-center justify-between px-4 py-2 bg-slate-800/50 border-b border-slate-700">
                        <div className="flex space-x-2">
                          <div className="w-3 h-3 rounded-full bg-red-500" />
                          <div className="w-3 h-3 rounded-full bg-yellow-500" />
                          <div className="w-3 h-3 rounded-full bg-green-500" />
                        </div>
                        <span className="text-xs text-slate-400 font-mono">
                          {item.codeSnippet.file}
                        </span>
                      </div>
                      <pre className="p-4 overflow-x-auto text-sm font-mono text-emerald-400">
                        <code>{item.codeSnippet.content}</code>
                      </pre>
                    </div>
                  </div>
                )}

                <div className="flex justify-between items-center text-xs text-slate-500 dark:text-slate-400 border-t border-slate-100 dark:border-slate-700 pt-4">
                  <div className="flex gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-300 px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span>{item.date}</span>
                </div>
              </article>
            ))}
          </div>

          {/* Other Resources */}
          <div className="mt-12">
            <h3 className="text-xl font-bold text-slate-700 dark:text-slate-300 mb-6 uppercase tracking-wider">
              Autres Ressources
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {resourceItems.map((res, i) => (
                <div
                  key={i}
                  className={`bg-white dark:bg-slate-800 p-4 border-l-4 ${res.color} rounded-r-lg shadow-sm hover:shadow-md transition-shadow`}
                >
                  <div className="flex justify-between text-xs text-slate-400 mb-2">
                    <span className="uppercase font-bold tracking-wider">{res.type}</span>
                    <span>{res.date}</span>
                  </div>
                  <h4 className="font-bold text-slate-800 dark:text-slate-200">{res.title}</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{res.excerpt}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PythonTechPage;
