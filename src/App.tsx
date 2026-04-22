import { useEffect, useMemo, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ProjectsPage } from './pages/ProjectsPage';
import { AboutPage } from './pages/AboutPage';
import { CvPage } from './pages/CvPage';
import { ContactPage } from './pages/ContactPage';
import type { PageKey } from './types';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageKey>('home');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const page = useMemo(() => {
    switch (currentPage) {
      case 'projects':
        return <ProjectsPage />;
      case 'about':
        return <AboutPage />;
      case 'cv':
        return <CvPage />;
      case 'contact':
        return <ContactPage />;
      case 'home':
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  }, [currentPage]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      <div className="flex-grow">{page}</div>
      <Footer />
    </div>
  );
}
