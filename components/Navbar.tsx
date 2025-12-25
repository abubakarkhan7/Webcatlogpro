import React, { useState, useRef, useEffect } from 'react';
import { Menu, Search, ShoppingBag, X, User } from 'lucide-react';
import Button from './Button';
import ThemeToggle from './ThemeToggle';
import { NAV_LINKS } from '../constants';
import { ViewState } from '../types';

interface NavbarProps {
  onNavigate: (view: ViewState) => void;
  currentView: ViewState;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentView }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0, opacity: 0 });
  const navContainerRef = useRef<HTMLDivElement>(null);

  const handleNavClick = (label: string) => {
    switch(label) {
      case 'MVP Kits':
      case 'Explore':
        onNavigate(ViewState.EXPLORE);
        break;
      case 'Use Cases':
      case 'Categories':
        onNavigate(ViewState.CATEGORIES);
        break;
      case 'Pricing':
        onNavigate(ViewState.PRICING);
        break;
      default:
        onNavigate(ViewState.HOME);
    }
    setIsMobileMenuOpen(false);
  };

  const isActive = (label: string) => {
    if ((label === 'Explore' || label === 'MVP Kits') && currentView === ViewState.EXPLORE) return true;
    if ((label === 'Categories' || label === 'Use Cases') && currentView === ViewState.CATEGORIES) return true;
    if (label === 'Pricing' && currentView === ViewState.PRICING) return true;
    return false;
  };

  useEffect(() => {
    const updateIndicator = () => {
      if (!navContainerRef.current) return;

      const activeLink = Array.from(navContainerRef.current.children).find((child) => {
        const label = (child as HTMLElement).getAttribute('data-label');
        return label && isActive(label);
      }) as HTMLElement;

      if (activeLink) {
        setIndicatorStyle({
          left: activeLink.offsetLeft,
          width: activeLink.offsetWidth,
          opacity: 1
        });
      } else {
        setIndicatorStyle(prev => ({ ...prev, opacity: 0 }));
      }
    };

    // Small delay to ensure layout is settled
    const timer = setTimeout(updateIndicator, 50);
    window.addEventListener('resize', updateIndicator);
    
    return () => {
      window.removeEventListener('resize', updateIndicator);
      clearTimeout(timer);
    };
  }, [currentView]);


  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-border transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <div 
            className="flex items-center gap-2.5 cursor-pointer group select-none"
            onClick={() => onNavigate(ViewState.HOME)}
          >
            {/* Logo Mark - Green (Trust) */}
            <div className="w-8 h-8 bg-accent-primary rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-sm">
              <div className="w-3 h-3 bg-white rounded-sm" />
            </div>
            <span className="text-lg font-display font-bold tracking-tight text-textMain leading-none">
              WebCatalog<span className="text-textMuted font-normal">Pro</span>
            </span>
          </div>

          {/* Desktop Links Container */}
          <div className="hidden md:flex items-center relative" ref={navContainerRef}>
            {NAV_LINKS.map(link => (
              <a 
                key={link.label}
                data-label={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.label);
                }}
                className={`text-[13px] font-medium transition-colors px-5 py-5 select-none relative z-10 ${
                  isActive(link.label)
                  ? 'text-textMain' 
                  : 'text-textMuted hover:text-textMain'
                }`}
              >
                {link.label}
              </a>
            ))}
            
            {/* Animated Indicator - Thin Green Line */}
            <div 
                className="absolute bottom-0 h-[2px] bg-accent-primary rounded-t-full transition-all duration-300 ease-[cubic-bezier(0.2,0.8,0.2,1)]"
                style={{
                    left: `${indicatorStyle.left + 20}px`, // Adjusted for padding
                    width: `${indicatorStyle.width - 40}px`, // Adjusted for padding
                    opacity: indicatorStyle.opacity
                }}
            />
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
             {/* Search */}
            <button 
              className="p-2 text-textMuted hover:text-textMain hover:bg-surfaceHighlight rounded-md transition-all"
              onClick={() => onNavigate(ViewState.EXPLORE)}
              aria-label="Search"
            >
              <Search size={18} />
            </button>
            
            {/* Dashboard */}
            <button 
              className={`hidden md:block p-2 rounded-md transition-all ${currentView === ViewState.DASHBOARD ? 'text-accent-primary bg-accent-primary/10' : 'text-textMuted hover:text-textMain hover:bg-surfaceHighlight'}`}
              onClick={() => onNavigate(ViewState.DASHBOARD)}
              title="Dashboard"
            >
              <User size={18} />
            </button>

            {/* Divider */}
            <div className="h-5 w-px bg-border hidden md:block"></div>

            {/* Theme Toggle */}
            <div className="hidden md:block">
               <ThemeToggle />
            </div>

            <div className="hidden md:flex gap-3 ml-1">
               <Button variant="ghost" size="sm" onClick={() => onNavigate(ViewState.SIGN_IN)} className="text-textSecondary">
                 Sign In
               </Button>
               <Button variant="primary" size="sm" onClick={() => onNavigate(ViewState.SUBMIT)}>
                  Submit Kit
               </Button>
            </div>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 text-textMain"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-background md:hidden animate-fade-in">
          <div className="flex flex-col h-full p-6">
            <div className="flex justify-between items-center mb-8">
              <span className="text-xl font-display font-bold text-textMain">Menu</span>
              <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-textMuted hover:text-textMain">
                <X size={24} />
              </button>
            </div>
            <div className="flex flex-col gap-6 text-xl">
              <a href="#" onClick={(e) => { e.preventDefault(); handleNavClick('Home'); }} className="text-textMuted hover:text-textMain">Home</a>
              {NAV_LINKS.map(link => (
                <a 
                  key={link.label} 
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.label);
                  }}
                  className="text-textMuted hover:text-textMain"
                >
                  {link.label}
                </a>
              ))}
              <div className="py-4 flex items-center justify-between border-t border-border">
                  <span className="text-base text-textMain">Appearance</span>
                  <ThemeToggle />
              </div>
              <hr className="border-border" />
              <a href="#" onClick={(e) => { e.preventDefault(); onNavigate(ViewState.SIGN_IN); setIsMobileMenuOpen(false); }} className="text-textMain">Sign In</a>
              <a href="#" onClick={(e) => { e.preventDefault(); onNavigate(ViewState.SUBMIT); setIsMobileMenuOpen(false); }} className="text-accent-primary">Submit Kit</a>
              <a href="#" onClick={(e) => { e.preventDefault(); onNavigate(ViewState.DASHBOARD); setIsMobileMenuOpen(false); }} className="text-textMain">Dashboard</a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;