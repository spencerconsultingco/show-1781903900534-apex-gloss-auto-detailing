'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { BadgeCheck, Camera, ThumbsUp, ShieldCheck } from 'lucide-react';

const differentiators = [
  {
    icon: BadgeCheck,
    title: 'Marcus Does Every Job',
    body: 'No crew rotations. No handoffs to less experienced technicians. Marcus Trevino personally oversees and performs every detail, every time.',
  },
  {
    icon: Camera,
    title: 'Before and After Photo Report',
    body: 'You receive a full photographic record of your vehicle before, during, and after the detail. See exactly what was corrected and why.',
  },
  {
    icon: ShieldCheck,
    title: 'Gtechniq and Koch-Chemie Only',
    body: 'Professional-grade products that outlast store-bought alternatives by years. No diluted consumer chemicals touch your paint.',
  },
  {
    icon: ThumbsUp,
    title: 'Satisfaction Guarantee',
    body: "If it's not right, Marcus makes it right. No questions asked, no fine print. Your satisfaction is the only acceptable outcome.",
  },
];

export default function FeatureSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="feature" className="bg-brand-background py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="font-body font-500 text-brand-accent uppercase tracking-[0.3em] text-sm mb-4">
              Why Apex Gloss
            </p>
            <h2 className="font-heading font-800 text-brand-primary text-4xl sm:text-5xl leading-tight mb-6">
              No Assembly Lines.
              <br />
              <span className="text-brand-secondary italic">No Shortcuts.</span>
            </h2>
            <p className="font-body text-brand-text/70 text-lg leading-relaxed mb-10">
              After 11 years refining his craft in the Scottsdale heat, Marcus knows what Arizona does to paint. He built Apex Gloss on a simple idea: do it right the first time, stand behind every job, and never let a car leave looking anything less than extraordinary.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              {differentiators.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    className="flex gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  >
                    <div className="w-10 h-10 rounded-lg bg-brand-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon className="w-5 h-5 text-brand-accent" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="font-heading font-700 text-brand-primary text-base mb-1">
                        {item.title}
                      </h4>
                      <p className="font-body text-brand-text/65 text-sm leading-relaxed">
                        {item.body}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.a
              href="#contact"
              className="inline-flex items-center gap-3 bg-brand-accent hover:bg-brand-secondary text-brand-background font-body font-600 text-sm uppercase tracking-widest px-10 py-5 rounded transition-all duration-300 shadow-md"
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              Contact Us
            </motion.a>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5]">
              <Image
                src="/images/gallery-1.jpg"
                alt="Marcus Trevino performing paint correction at Apex Gloss"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-brand-background/95 rounded-xl p-5 backdrop-blur-sm">
                  <p className="font-heading font-700 text-brand-primary text-lg leading-tight">
                    11 Years. One Standard.
                  </p>
                  <p className="font-body text-brand-text/70 text-sm mt-1">
                    Every vehicle detailed as if it were Marcus's own.
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-40 h-40 rounded-xl overflow-hidden shadow-xl border-4 border-brand-background hidden sm:block">
              <Image
                src="/images/gallery-2.jpg"
                alt="Ceramic coating application at Apex Gloss Auto Detailing"
                fill
                className="object-cover"
                sizes="160px"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
