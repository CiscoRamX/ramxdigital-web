import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ColorModeToggle } from './components/ColorModeToggle';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { PackagesPage } from './pages/PackagesPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { CaseStudyPage } from './pages/CaseStudyPage';
import { CarePlansPage } from './pages/CarePlansPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { TermsPage } from './pages/TermsPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { ThankYouPage } from './pages/ThankYouPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [caseStudyId, setCaseStudyId] = useState<string | null>(null);

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const handleNavigate = (page: string, params?: Record<string, string>) => {
    setCurrentPage(page);
    if (params?.caseStudyId) {
      setCaseStudyId(params.caseStudyId);
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'about':
        return <AboutPage onNavigate={handleNavigate} />;
      case 'packages':
        return <PackagesPage onNavigate={handleNavigate} />;
      case 'portfolio':
        return <PortfolioPage onNavigate={handleNavigate} />;
      case 'case-study':
        return <CaseStudyPage projectId={caseStudyId} onNavigate={handleNavigate} />;
      case 'care-plans':
        return <CarePlansPage onNavigate={handleNavigate} />;
      case 'contact':
        return <ContactPage onNavigate={handleNavigate} />;
      case 'privacy':
        return <PrivacyPage onNavigate={handleNavigate} />;
      case 'terms':
        return <TermsPage onNavigate={handleNavigate} />;
      case 'thank-you':
        return <ThankYouPage onNavigate={handleNavigate} />;
      case '404':
        return <NotFoundPage onNavigate={handleNavigate} />;
      default:
        return <NotFoundPage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: 'var(--color-bg)', color: 'var(--color-text)' }}>
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      <main className="flex-1 pt-16 lg:pt-20">
        {renderPage()}
      </main>
      <Footer onNavigate={handleNavigate} />
      <ColorModeToggle />
    </div>
  );
}