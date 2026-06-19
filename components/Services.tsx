'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { Sparkles, Droplets, Paintbrush, ShieldCheck, Zap, Wrench } from 'lucide-react';

const services = [
  {
    icon: Sparkles,
    title: 'Full Interior Detail',
    description:
      'Deep extraction, leather conditioning, vinyl dressing, and odor elimination. Every surface cleaned with professional-grade products so the inside matches the outside.',
  },
  {
    icon: Droplets,
    title: 'Exterior Hand Wash & Clay Bar',
    description:
      'Two-bucket hand wash followed by a thorough clay bar decontamination that removes embedded iron, road film, and bonded contamination from your paint surface.',
  },
  {
    icon: Paintbrush,
    title: 'Paint Correction & Polish',
    description:
      'Multi-stage machine polishing that eliminates swirl marks, water spots, and light scratches. The foundation of every flawless finish Marcus produces.',
  },
  {
    icon: ShieldCheck,
    title: 'Ceramic Coating Application',
    description:
      'Professional Gtechniq ceramic coatings that bond to your paint and protect against the harsh Arizona sun, UV rays, bird droppings, and environmental fallout for years.',
  },
  {
    icon: Zap,
    title: 'Headlight Restoration',
    description:
      'Oxidized, yellowed headlights are wet-sanded, polished, and sealed back to crystal clarity. Better visibility and a dramatically cleaner look front to back.',
  },
  {
    icon: Wrench,
    title: 'Engine Bay Cleaning',
    description:
      'A clean engine bay signals a well-cared-for vehicle. We degrease, rinse, and dress all components for a showroom-ready result under the hood.',
  },
];

export default function Services() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" className="bg-brand-primary py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="text-center mb-16">
          <motion.p
            className="font-body font-500 text-brand-accent uppercase tracking-[0.3em] text-sm mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            What We Offer
          </motion.p>
          <motion.h2
            className="font-heading font-800 text-brand-background text-4xl sm:text-5xl lg:text-6xl leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Services Built for
            <br />
            <span className="text-brand-accent italic">Perfectionists</span>
          </motion.h2>
          <motion.p
            className="font-body text-brand-background/70 text-lg max-w-2xl mx-auto mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            From a weekend wash to a full paint correction and ceramic package, every service is performed by hand with professional-grade products.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                className="group bg-brand-secondary/20 border border-brand-secondary/30 hover:border-brand-accent/50 rounded-xl p-8 transition-all duration-400 hover:bg-brand-secondary/30"
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <div className="w-12 h-12 rounded-lg bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center mb-6 group-hover:bg-brand-accent/20 transition-colors duration-300">
                  <Icon className="w-5 h-5 text-brand-accent" strokeWidth={1.5} />
                </div>
                <h3 className="font-heading font-700 text-brand-background text-xl mb-3">
                  {service.title}
                </h3>
                <p className="font-body text-brand-background/65 text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="text-center mt-14"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-3 bg-brand-accent hover:bg-brand-secondary text-brand-background font-body font-600 text-sm uppercase tracking-widest px-10 py-5 rounded transition-all duration-300 shadow-lg"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}
