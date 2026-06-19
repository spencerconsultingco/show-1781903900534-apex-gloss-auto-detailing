'use client';

import { useState, useEffect } from 'react';
import { Car, Menu, X, Phone } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Why Apex Gloss', href: '#feature' },
    { label: 'Reviews', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-brand-primary/95 backdrop-blur-sm shadow-2xl'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-brand-accent flex items-center justify-center group-hover:bg-brand-secondary transition-colors duration-300">
              <Car className="w-5 h-5 text-brand-background" strokeWidth={1.5} />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-heading font-700 text-brand-background text-lg tracking-tight">
                Apex Gloss
              </span>
              <span className="text-brand-accent text-xs font-body font-500 uppercase tracking-widest">
                Auto Detailing
              </span>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-brand-background/80 hover:text-brand-accent font-body font-500 text-sm uppercase tracking-widest transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:5555744753"
              className="flex items-center gap-2 text-brand-background/80 hover:text-brand-accent font-body font-500 text-sm transition-colors duration-200"
            >
              <Phone className="w-4 h-4" />
              <span>(555) 574-4753</span>
            </a>
            <a
              href="#contact"
              className="bg-brand-accent hover:bg-brand-secondary text-brand-background font-body font-600 text-sm uppercase tracking-widest px-6 py-3 rounded transition-all duration-300"
            >
              Contact Us
            </a>
          </nav>

          <button
            className="lg:hidden text-brand-background p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-brand-primary/98 backdrop-blur-sm border-t border-brand-secondary/30">
          <div className="px-4 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-brand-background/80 hover:text-brand-accent font-body font-500 text-base uppercase tracking-widest transition-colors duration-200 py-2 border-b border-brand-secondary/20"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:5555744753"
              className="flex items-center gap-2 text-brand-background/80 hover:text-brand-accent font-body font-500 text-base transition-colors duration-200 py-2 border-b border-brand-secondary/20"
            >
              <Phone className="w-4 h-4" />
              <span>(555) 574-4753</span>
            </a>
            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="bg-brand-accent hover:bg-brand-secondary text-brand-background font-body font-600 text-sm uppercase tracking-widest px-6 py-4 rounded text-center transition-all duration-300 mt-2"
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
