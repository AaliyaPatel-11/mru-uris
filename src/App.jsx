import { useState, useEffect, useCallback } from 'react';
import ConstellationBg from './components/ConstellationBg';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import ResearchSection from './components/ResearchSection';
import ResearchPage from './components/ResearchPage';
import Leadership from './components/Leadership';
import Coordinators from './components/Coordinators';
import OpenRoles from './components/OpenRoles';
import Partners from './components/Partners';
import Footer from './components/Footer';
import SplashScreen from './components/SplashScreen';
import ApplyModal from './components/ApplyModal';

function checkIsResearchPath() {
  if (typeof window === 'undefined') return false;
  const path = window.location.pathname.toLowerCase();
  const hash = window.location.hash.toLowerCase();
  return (
    path === '/research' ||
    path === '/research/' ||
    hash === '#/research' ||
    hash === '#research-dossier'
  );
}

export default function App() {
  const [route, setRoute] = useState(() => (checkIsResearchPath() ? '/research' : '/'));
  // If navigating directly to /research, bypass splash screen so user sees content immediately
  const [splashDone, setSplashDone] = useState(() => checkIsResearchPath());
  const [animationStarted, setAnimationStarted] = useState(false);
  const [isApplyOpen, setIsApplyOpen] = useState(false);

  // Sync route on popstate and hashchange
  useEffect(() => {
    const handleLocationChange = () => {
      const isResearch = checkIsResearchPath();
      setRoute(isResearch ? '/research' : '/');
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  // Update document title and metadata based on route
  useEffect(() => {
    if (route === '/research') {
      document.title = 'Researchers & Research Initiatives | MRU-URIS';
      let metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute(
          'content',
          'MRU-URIS research initiatives, themes, methodology, ongoing contributions, and researcher profiles in speech AI and accessibility.'
        );
      }
    } else {
      document.title = 'MRU-URIS | Undergraduate Research & Innovation Society';
      let metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute(
          'content',
          "MRU-URIS — Malla Reddy University's Undergraduate Research and Innovation Society. Recruitment of Board Members, Class 26'."
        );
      }
    }
  }, [route]);

  const handleNavigate = useCallback((targetRoute, targetHash) => {
    if (targetRoute === '/research') {
      setRoute('/research');
      setSplashDone(true);
      window.history.pushState(null, '', '/research');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setRoute('/');
      const destination = targetHash ? `/${targetHash}` : '/';
      window.history.pushState(null, '', destination);
      if (targetHash) {
        setTimeout(() => {
          const el = document.querySelector(targetHash);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }, 50);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  }, []);

  const handleZoomStart = useCallback(() => {
    setAnimationStarted(true);
  }, []);

  const handleDone = useCallback(() => {
    setSplashDone(true);
  }, []);

  const handleOpenApply = useCallback(() => {
    setIsApplyOpen(true);
  }, []);

  const handleCloseApply = useCallback(() => {
    setIsApplyOpen(false);
  }, []);

  // Lock scroll while splash is showing
  useEffect(() => {
    if (!splashDone) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [splashDone]);

  return (
    <div className="relative min-h-screen bg-[#0a0a0d] text-white font-poppins overflow-x-hidden">
      {/* Splash overlay — sits above everything until dismissed (only shown on home route initial load) */}
      {!splashDone && (
        <SplashScreen onZoomStart={handleZoomStart} onDone={handleDone} />
      )}

      {/* Embedded application modal overlay */}
      <ApplyModal isOpen={isApplyOpen} onClose={handleCloseApply} />

      {/* Fixed constellation background */}
      <ConstellationBg />

      {/* Sticky navbar */}
      <Navbar
        onApply={handleOpenApply}
        currentRoute={route}
        onNavigate={handleNavigate}
      />

      {/* Main content router */}
      <main className="relative z-10">
        {route === '/research' ? (
          <>
            <ResearchPage
              onNavigateHome={() => handleNavigate('/')}
              onApply={handleOpenApply}
            />
            <Footer onApply={handleOpenApply} />
          </>
        ) : (
          <>
            <Hero startAnimation={animationStarted} />
            <Timeline />
            <ResearchSection
              onNavigateToResearch={() => handleNavigate('/research')}
            />
            <Leadership />
            <Coordinators />
            <OpenRoles onApply={handleOpenApply} />
            <Partners />
            <Footer onApply={handleOpenApply} />
          </>
        )}
      </main>
    </div>
  );
}
