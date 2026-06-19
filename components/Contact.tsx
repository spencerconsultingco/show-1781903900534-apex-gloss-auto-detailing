'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Phone, Mail, Clock, Send, MapPin } from 'lucide-react';

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    email: '',
    vehicle: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-brand-background py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="text-center mb-16">
          <motion.p
            className="font-body font-500 text-brand-accent uppercase tracking-[0.3em] text-sm mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Get In Touch
          </motion.p>
          <motion.h2
            className="font-heading font-800 text-brand-primary text-4xl sm:text-5xl leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Book Your Detail
            <br />
            <span className="text-brand-secondary italic">Today</span>
          </motion.h2>
          <motion.p
            className="font-body text-brand-text/65 text-lg max-w-xl mx-auto mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Serving Scottsdale, Tempe, Mesa, Chandler, and the greater Phoenix metro. Reach out and Marcus will respond within one business day.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <motion.div
            className="lg:col-span-2 flex flex-col gap-6"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-brand-primary rounded-xl p-8">
              <h3 className="font-heading font-700 text-brand-background text-xl mb-6">
                Contact Information
              </h3>
              <div className="flex flex-col gap-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-brand-accent/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-brand-accent" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="font-body text-brand-background/50 text-xs uppercase tracking-widest mb-1">Phone</p>
                    <a
                      href="tel:5555744753"
                      className="font-body text-brand-background font-500 hover:text-brand-accent transition-colors"
                    >
                      (555) 574-4753
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-brand-accent/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-brand-accent" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="font-body text-brand-background/50 text-xs uppercase tracking-widest mb-1">Email</p>
                    <a
                      href="mailto:todd@thesitesmith.co"
                      className="font-body text-brand-background font-500 hover:text-brand-accent transition-colors text-sm"
                    >
                      todd@thesitesmith.co
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-brand-accent/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-brand-accent" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="font-body text-brand-background/50 text-xs uppercase tracking-widest mb-1">Hours</p>
                    <p className="font-body text-brand-background font-500 text-sm">Mon to Sat, 8am to 6pm</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-brand-accent/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-brand-accent" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="font-body text-brand-background/50 text-xs uppercase tracking-widest mb-1">Service Area</p>
                    <p className="font-body text-brand-background font-500 text-sm">Scottsdale, Tempe, Mesa,<br />Chandler, Greater Phoenix</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-brand-accent/10 border border-brand-accent/20 rounded-xl p-6">
              <p className="font-heading font-700 text-brand-primary text-base mb-2">
                Satisfaction Guaranteed
              </p>
              <p className="font-body text-brand-text/70 text-sm leading-relaxed">
                If the result isn't right, Marcus makes it right. No questions. No exceptions.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {submitted ? (
              <div className="bg-brand-primary rounded-xl p-12 text-center h-full flex flex-col items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-brand-accent/10 flex items-center justify-center mb-6">
                  <Send className="w-8 h-8 text-brand-accent" />
                </div>
                <h3 className="font-heading font-700 text-brand-background text-2xl mb-3">
                  Message Received
                </h3>
                <p className="font-body text-brand-background/70 text-base max-w-sm">
                  Thanks for reaching out. Marcus will follow up within one business day to discuss your vehicle and schedule your detail.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-brand-primary rounded-xl p-8 flex flex-col gap-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-body text-brand-background/60 text-xs uppercase tracking-widest mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full bg-brand-secondary/20 border border-brand-secondary/40 focus:border-brand-accent rounded-lg px-4 py-3 text-brand-background font-body text-sm placeholder-brand-background/30 outline-none transition-colors duration-200"
                    />
                  </div>
                  <div>
                    <label className="block font-body text-brand-background/60 text-xs uppercase tracking-widest mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      placeholder="(555) 000-0000"
                      className="w-full bg-brand-secondary/20 border border-brand-secondary/40 focus:border-brand-accent rounded-lg px-4 py-3 text-brand-background font-body text-sm placeholder-brand-background/30 outline-none transition-colors duration-200"
                    />
                  </div>
                </div>
                <div>
                  <label className="block font-body text-brand-background/60 text-xs uppercase tracking-widest mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full bg-brand-secondary/20 border border-brand-secondary/40 focus:border-brand-accent rounded-lg px-4 py-3 text-brand-background font-body text-sm placeholder-brand-background/30 outline-none transition-colors duration-200"
                  />
                </div>
                <div>
                  <label className="block font-body text-brand-background/60 text-xs uppercase tracking-widest mb-2">
                    Your Vehicle
                  </label>
                  <input
                    type="text"
                    name="vehicle"
                    value={formState.vehicle}
                    onChange={handleChange}
                    placeholder="Year, Make, Model"
                    className="w-full bg-brand-secondary/20 border border-brand-secondary/40 focus:border-brand-accent rounded-lg px-4 py-3 text-brand-background font-body text-sm placeholder-brand-background/30 outline-none transition-colors duration-200"
                  />
                </div>
                <div>
                  <label className="block font-body text-brand-background/60 text-xs uppercase tracking-widest mb-2">
                    Service Interested In
                  </label>
                  <select
                    name="service"
                    value={formState.service}
                    onChange={handleChange}
                    className="w-full bg-brand-secondary/20 border border-brand-secondary/40 focus:border-brand-accent rounded-lg px-4 py-3 text-brand-background font-body text-sm outline-none transition-colors duration-200"
                  >
                    <option value="" className="bg-brand-primary">Select a service</option>
                    <option value="Full Interior Detail" className="bg-brand-primary">Full Interior Detail</option>
                    <option value="Exterior Hand Wash & Clay Bar" className="bg-brand-primary">Exterior Hand Wash & Clay Bar</option>
                    <option value="Paint Correction & Polish" className="bg-brand-primary">Paint Correction & Polish</option>
                    <option value="Ceramic Coating Application" className="bg-brand-primary">Ceramic Coating Application</option>
                    <option value="Headlight Restoration" className="bg-brand-primary">Headlight Restoration</option>
                    <option value="Engine Bay Cleaning" className="bg-brand-primary">Engine Bay Cleaning</option>
                  </select>
                </div>
                <div>
                  <label className="block font-body text-brand-background/60 text-xs uppercase tracking-widest mb-2">
                    Message (Optional)
                  </label>
                  <textarea
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell Marcus about your vehicle and what you're hoping to achieve..."
                    className="w-full bg-brand-secondary/20 border border-brand-secondary/40 focus:border-brand-accent rounded-lg px-4 py-3 text-brand-background font-body text-sm placeholder-brand-background/30 outline-none transition-colors duration-200 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="group inline-flex items-center justify-center gap-3 bg-brand-accent hover:bg-brand-secondary text-brand-background font-body font-600 text-sm uppercase tracking-widest px-10 py-5 rounded transition-all duration-300 shadow-lg mt-2"
                >
                  Contact Us
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
