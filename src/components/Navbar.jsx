import { useState, useEffect } from 'react';

const navLinks = [
  { label: 'Roadmap', href: '#roadmap' },
  { label: 'Research', href: '#research', isResearch: true },
  { label: 'Leadership', href: '#leadership' },
  { label: 'Roles', href: '#roles' },
  { label: 'Partners', href: '#partners' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ onApply, currentRoute = '/', onNavigate }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLinkClick = (e, link) => {
    if (link.isResearch) {
      e.preventDefault();
      setMenuOpen(false);
      if (onNavigate) {
        onNavigate('/research');
      } else {
        window.location.hash = '#research';
      }
      return;
    }

    // If we're on the dedicated /research page and clicking another section link
    if (currentRoute === '/research') {
      e.preventDefault();
      setMenuOpen(false);
      if (onNavigate) {
        onNavigate('/', link.href);
      } else {
        window.location.href = `/${link.href}`;
      }
      return;
    }

    setMenuOpen(false);
  };

  const handleLogoClick = (e) => {
    if (currentRoute === '/research') {
      e.preventDefault();
      if (onNavigate) {
        onNavigate('/');
      } else {
        window.location.href = '/';
      }
    }
  };

  const isResearchActive = currentRoute === '/research';

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || isResearchActive
          ? 'bg-[#0a0a0d]/90 backdrop-blur-xl border-b border-[#2b2b32]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          onClick={handleLogoClick}
          className="flex items-center gap-2 group cursor-pointer"
        >
          <img
            src="/uris-logo.jpg"
            alt="MRU-URIS"
            className="h-8 w-auto select-none"
            style={{ mixBlendMode: 'lighten' }}
            draggable={false}
          />
          <span className="text-[#2dd4bf] text-xs font-bold tracking-widest hidden sm:block">'26</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = link.isResearch && isResearchActive;
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link)}
                className={`text-sm font-medium tracking-wide transition-colors duration-200 cursor-pointer ${
                  isActive
                    ? 'text-[#2dd4bf] font-semibold'
                    : 'text-[#a3a3ab] hover:text-white'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="block h-0.5 bg-[#2dd4bf] rounded-full mt-0.5" />
                )}
              </a>
            );
          })}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center">
          <button
            onClick={onApply}
            className="btn-gradient px-5 py-2 rounded-full text-sm font-bold transition-all duration-200 hover:scale-105 hover:shadow-[0_0_20px_rgba(45,212,191,0.3)]"
          >
            Apply Now →
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`w-5 h-0.5 bg-white transition-all duration-200 ${
              menuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`w-5 h-0.5 bg-white transition-all duration-200 ${
              menuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`w-5 h-0.5 bg-white transition-all duration-200 ${
              menuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-96' : 'max-h-0'
        } bg-[#0a0a0d]/95 backdrop-blur-xl border-b border-[#2b2b32]`}
      >
        <div className="px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => {
            const isActive = link.isResearch && isResearchActive;
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link)}
                className={`text-sm font-medium py-1 transition-colors ${
                  isActive
                    ? 'text-[#2dd4bf] font-bold'
                    : 'text-[#a3a3ab] hover:text-white'
                }`}
              >
                {link.label}
              </a>
            );
          })}
          <button
            onClick={() => {
              setMenuOpen(false);
              onApply();
            }}
            className="btn-gradient px-5 py-2.5 rounded-full text-sm font-bold text-center mt-2 w-full"
          >
            Apply Now →
          </button>
        </div>
      </div>
    </nav>
  );
}
