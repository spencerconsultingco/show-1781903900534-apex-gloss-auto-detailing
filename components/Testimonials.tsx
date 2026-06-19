'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star } from 'lucide-react';

const reviews = [
  {
    quote:
      'Brought my 2021 Porsche Macan in for a full paint correction and ceramic coat. The transformation was unreal -- it looked better than when I bought it. Marcus took his time and the results speak for themselves.',
    author: 'Jennifer A.',
  },
  {
    quote:
      "I've tried three other detailers in the Phoenix area and nobody comes close. My black F-150 had swirl marks everywhere and now it looks like a mirror. Pricing was fair and he finished right on time.",
    author: 'Derek M.',
  },
  {
    quote:
      'Apex Gloss did an interior detail on my SUV after my dog basically lived in it for two years. No trace of fur, stains, or smell left behind. Genuinely shocked at how good it turned out. Already booked my next appointment.',
    author: 'Carla S.',
  },
];

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="testimonials" className="bg-brand-primary py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="text-center mb-16">
          <motion.p
            className="font-body font-500 text-brand-accent uppercase tracking-[0.3em] text-sm mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Client Stories
          </motion.p>
          <motion.h2
            className="font-heading font-800 text-brand-background text-4xl sm:text-5xl leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            The Results
            <span className="text-brand-accent italic"> Do the Talking</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              className="bg-brand-secondary/20 border border-brand-secondary/30 rounded-xl p-8 flex flex-col"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * index }}
            >
              <div className="flex gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-brand-accent fill-brand-accent" />
                ))}
              </div>
              <p className="font-body text-brand-background/80 text-base leading-relaxed mb-6 flex-1 italic">
                &ldquo;{review.quote}&rdquo;
              </p>
              <div className="border-t border-brand-secondary/30 pt-5">
                <p className="font-heading font-600 text-brand-accent text-sm">
                  {review.author}
                </p>
                <p className="font-body text-brand-background/50 text-xs mt-0.5 uppercase tracking-widest">
                  Scottsdale Area Client
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
