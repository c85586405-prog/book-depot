import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ContactButtons } from './components/ContactButtons';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { GalleryPage } from './pages/GalleryPage';
import { ReviewsPage } from './pages/ReviewsPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  // Support hash-based routing so refreshing or sharing specific sections works cleanly
  const getInitialPage = (): PageId => {
    const hash = window.location.hash.replace('#', '').toLowerCase();
    const validPages: PageId[] = ['home', 'services', 'gallery', 'reviews', 'about', 'contact'];
    if (validPages.includes(hash as PageId)) {
      return hash as PageId;
    }
    return 'home';
  };

  const [currentPage, setCurrentPage] = useState<PageId>(getInitialPage());
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>(undefined);

  // Sync state with URL hash and listen for popstate/hashchange
  useEffect(() => {
    const handleHashChange = () => {
      const page = getInitialPage();
      setCurrentPage(page);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Update document title and meta description dynamically based on the current page for SEO
  useEffect(() => {
    const pageTitles: Record<PageId, string> = {
      home: "Bankey Bihari Book Depot | Mathura's Trusted Printing, Thesis Binding & Stationery",
      services: "Printing & Hard Binding Services in Mathura | Bankey Bihari Book Depot",
      gallery: "Work Showcase & Sample Gallery | Bankey Bihari Book Depot Mathura",
      reviews: "5.0★ Google Customer Reviews (142 Reviews) | Bankey Bihari Book Depot",
      about: "About Us | Mathura's Printing & Binding Centre | Bankey Bihari Book Depot",
      contact: "Contact, Map & Urgent Orders | Bankey Bihari Book Depot BSA Rd Mathura",
    };

    document.title = pageTitles[currentPage] || pageTitles.home;
    window.location.hash = currentPage === 'home' ? '' : currentPage;
  }, [currentPage]);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '' : page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectService = (serviceId: string) => {
    setSelectedServiceId(serviceId);
    handleNavigate('services');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FDF9F3] text-[#2D2926] selection:bg-[#800020] selection:text-white font-sans" id="bankey-bihari-app-root">
      {/* Sticky Top Header with Branding, Navigation & Instant Call/WhatsApp */}
      <Header currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main Multi-Page Content Area */}
      <main className="grow" id="main-content-area">
        {currentPage === 'home' && (
          <HomePage onNavigate={handleNavigate} onSelectService={handleSelectService} />
        )}
        {currentPage === 'services' && (
          <ServicesPage initialSelectedId={selectedServiceId} />
        )}
        {currentPage === 'gallery' && (
          <GalleryPage />
        )}
        {currentPage === 'reviews' && (
          <ReviewsPage />
        )}
        {currentPage === 'about' && (
          <AboutPage onNavigate={handleNavigate} />
        )}
        {currentPage === 'contact' && (
          <ContactPage />
        )}
      </main>

      {/* Persistent Floating Quick Action Buttons on Mobile */}
      <ContactButtons variant="floating" />

      {/* Rich Schema-enabled Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
