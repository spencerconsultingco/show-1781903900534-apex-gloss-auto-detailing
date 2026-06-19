'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  const badges = [
    '11+ Years in Scottsdale',
    'Gtechniq Certified Products',
    'Satisfaction Guaranteed',
  ];

  return (
    <section
      ref={ref}
      className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{ y: imageY }}
      >
        <motion.div
          className="w-full h-full"
          initial={{ scale: 1 }}
          animate={{ scale: 1.08 }}
          transition={{ duration: 10, ease: 'linear' }}
        >
          <Image
            src="/images/hero.jpg"
            alt="Premium auto detailing in Scottsdale AZ"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        </motion.div>
      </motion.div>

      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.60) 100%)',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="font-body font-500 text-brand-accent uppercase tracking-[0.3em] text-sm mb-6">
            Scottsdale, AZ Premium Auto Detailing
          </p>
        </motion.div>

        <motion.h1
          className="font-heading font-800 text-brand-background text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-tight mb-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
        >
          Your Car Deserves
          <br />
          <span className="text-brand-accent italic">Obsessive</span> Attention
        </motion.h1>

        <motion.p
          className="font-body text-brand-background/85 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Paint correction, ceramic coatings, and full interior restoration handcrafted by Marcus Trevino. Every vehicle treated like it just rolled off the showroom floor.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 bg-brand-accent hover:bg-brand-secondary text-brand-background font-body font-600 text-sm uppercase tracking-widest px-10 py-5 rounded transition-all duration-300 shadow-lg hover:shadow-2xl"
          >
            Contact Us
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-3 border border-brand-background/40 hover:border-brand-accent text-brand-background hover:text-brand-accent font-body font-500 text-sm uppercase tracking-widest px-10 py-5 rounded transition-all duration-300"
          >
            View Services
          </a>
        </motion.div>

        <motion.div
          className="flex flex-wrap items-center justify-center gap-4 sm:gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          {badges.map((badge) => (
            <div key={badge} className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-brand-accent flex-shrink-0" />
              <span className="font-body text-brand-background/80 text-sm">{badge}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
