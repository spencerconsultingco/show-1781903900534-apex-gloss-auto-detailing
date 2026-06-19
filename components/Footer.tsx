import { Car, Phone, Mail, Clock } from 'lucide-react';

export default function Footer() {
  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Why Apex Gloss', href: '#feature' },
    { label: 'Reviews', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  const services = [
    'Full Interior Detail',
    'Exterior Hand Wash & Clay Bar',
    'Paint Correction & Polish',
    'Ceramic Coating Application',
    'Headlight Restoration',
    'Engine Bay Cleaning',
  ];

  return (
    <footer className="bg-brand-primary border-t border-brand-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full bg-brand-accent flex items-center justify-center">
                <Car className="w-5 h-5 text-brand-background" strokeWidth={1.5} />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-heading font-700 text-brand-background text-base tracking-tight">
                  Apex Gloss
                </span>
                <span className="text-brand-accent text-xs font-body font-500 uppercase tracking-widest">
                  Auto Detailing
                </span>
              </div>
            </a>
            <p className="font-body text-brand-background/55 text-sm leading-relaxed">
              11 years of obsessive paint correction and interior restoration in Scottsdale, AZ. Every vehicle detailed by hand, every time.
            </p>
          </div>

          <div>
            <h4 className="font-body font-600 text-brand-background/50 text-xs uppercase tracking-widest mb-5">
              Navigation
            </h4>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-body text-brand-background/70 hover:text-brand-accent text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-body font-600 text-brand-background/50 text-xs uppercase tracking-widest mb-5">
              Services
            </h4>
            <ul className="flex flex-col gap-3">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="font-body text-brand-background/70 hover:text-brand-accent text-sm transition-colors duration-200"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-body font-600 text-brand-background/50 text-xs uppercase tracking-widest mb-5">
              Contact
            </h4>
            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href="tel:5555744753"
                  className="flex items-center gap-3 font-body text-brand-background/70 hover:text-brand-accent text-sm transition-colors duration-200"
                >
                  <Phone className="w-4 h-4 text-brand-accent flex-shrink-0" strokeWidth={1.5} />
                  (555) 574-4753
                </a>
              </li>
              <li>
                <a
                  href="mailto:todd@thesitesmith.co"
                  className="flex items-center gap-3 font-body text-brand-background/70 hover:text-brand-accent text-sm transition-colors duration-200"
                >
                  <Mail className="w-4 h-4 text-brand-accent flex-shrink-0" strokeWidth={1.5} />
                  todd@thesitesmith.co
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-brand-accent flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                <span className="font-body text-brand-background/70 text-sm">
                  Mon to Sat, 8am to 6pm
                </span>
              </li>
            </ul>
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-brand-accent hover:bg-brand-secondary text-brand-background font-body font-600 text-xs uppercase tracking-widest px-6 py-3 rounded transition-all duration-300 mt-6"
            >
              Contact Us
            </a>
          </div>
        </div>

        <div className="border-t border-brand-secondary/25 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-brand-background/40 text-xs">
            &copy; {new Date().getFullYear()} Apex Gloss Auto Detailing. All rights reserved. Scottsdale, AZ.
          </p>
          <a
            href="https://thesitesmith.co"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-brand-background/40 hover:text-brand-accent text-xs transition-colors duration-200"
          >
            Website by The Sitesmith
          </a>
        </div>
      </div>
    </footer>
  );
}
