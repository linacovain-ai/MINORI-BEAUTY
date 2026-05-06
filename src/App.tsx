/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Menu, 
  ShoppingBag, 
  ShoppingCart, 
  Leaf, 
  PawPrint, 
  User, 
  Sparkle, 
  Quote,
  ChevronRight,
  Instagram,
  Facebook,
  Twitter
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Components ---

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-surface/90 backdrop-blur-md border-b border-outline-variant/20 shadow-sm">
      <div className="flex justify-between items-center px-6 md:px-12 py-4 max-w-7xl mx-auto w-full">
        <button className="text-primary hover:scale-110 transition-transform duration-200">
          <Menu className="w-6 h-6" />
        </button>
        <h1 className="font-serif text-2xl md:text-3xl tracking-[0.2em] text-on-surface font-medium">MINORI</h1>
        <button className="text-primary hover:scale-110 transition-transform duration-200 relative">
          <ShoppingBag className="w-6 h-6" />
          <span className="absolute -top-1 -right-1 bg-primary text-on-primary text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">0</span>
        </button>
      </div>
    </header>
  );
};

const Hero = () => {
  return (
    <section className="relative h-[85vh] flex flex-col justify-end items-center text-center pb-16 px-6 overflow-hidden">
      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 z-0"
      >
        <img 
          className="w-full h-full object-cover grayscale-[5%] brightness-95" 
          alt="Luxurious editorial product shot for Minori beauty" 
          src="https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&q=80&w=2000"
          referrerPolicy="no-referrer"
        />
      </motion.div>
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="relative z-10 space-y-6 bg-surface/40 backdrop-blur-xl p-8 md:p-12 w-full max-w-2xl border-t border-white/20"
      >
        <h2 className="font-serif text-3xl md:text-5xl text-on-surface italic leading-tight">
          Beauty simplified, <br/>naturally.
        </h2>
        <button className="bg-primary text-on-primary font-sans text-xs font-semibold px-10 py-4 rounded-none hover:bg-primary-container transition-all tracking-[0.15em] active:scale-95 duration-200 uppercase">
          Shop Now
        </button>
      </motion.div>
    </section>
  );
};

const FeaturedCollection = () => {
  const products = [
    {
      id: 1,
      name: "Lip Gloss",
      price: "$22",
      description: "Nourishing hydration with a sheer tint.",
      image: "https://images.unsplash.com/photo-1599733589046-10c005739ef0?auto=format&fit=crop&q=80&w=1000",
      bestSeller: true,
      shades: ["#8f482c", "#d7c3b0", "#ad6042"]
    },
    {
      id: 2,
      name: "Cream Blush",
      price: "$28",
      description: "Build-able, skin-like radiance.",
      image: "https://images.unsplash.com/photo-1596462502278-27bfad450526?auto=format&fit=crop&q=80&w=1000",
      bestSeller: false,
      shades: ["#ad6042", "#8f482c"]
    }
  ];

  return (
    <section className="py-20 bg-surface">
      <div className="px-6 md:px-12 max-w-7xl mx-auto">
        <div className="mb-12 flex justify-between items-end">
          <div>
            <span className="font-sans text-[10px] text-primary font-bold tracking-[0.2em] uppercase mb-2 block">Curated for you</span>
            <h2 className="font-serif text-3xl text-on-surface font-light">The Collection</h2>
          </div>
          <a className="font-sans text-xs font-semibold text-primary border-b border-primary/30 pb-1 hover:border-primary transition-colors" href="#">View All</a>
        </div>
        
        <div className="flex snap-x overflow-x-auto gap-6 pb-8 md:grid md:grid-cols-2 md:snap-none">
          {products.map((product) => (
            <motion.div 
              key={product.id}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
              className="snap-center shrink-0 w-[85%] md:w-full group"
            >
              <div className="aspect-[4/5] bg-surface-container-high overflow-hidden mb-6 relative shadow-lg">
                <img 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                  alt={product.name} 
                  src={product.image}
                  referrerPolicy="no-referrer"
                />
                {product.bestSeller && (
                  <div className="absolute top-0 left-0 bg-primary text-on-primary px-4 py-2 font-sans text-[10px] tracking-widest shadow-md">BEST SELLER</div>
                )}
                <button className="absolute bottom-4 right-4 bg-surface/90 backdrop-blur-sm p-3 rounded-full text-primary border border-outline-variant/30 hover:bg-primary hover:text-on-primary transition-colors duration-300">
                  <ShoppingCart className="w-5 h-5" />
                </button>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <h3 className="font-serif text-2xl text-on-surface">{product.name}</h3>
                  <span className="font-sans text-on-surface-variant font-medium">{product.price}</span>
                </div>
                <p className="font-sans text-on-surface-variant text-sm italic italic leading-relaxed">{product.description}</p>
                <div className="flex gap-3">
                  {product.shades.map((shade, idx) => (
                    <div 
                      key={idx}
                      style={{ backgroundColor: shade }}
                      className="w-5 h-5 rounded-full border-2 border-surface ring-1 ring-outline/20 cursor-pointer hover:scale-125 transition-transform"
                    ></div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const BrandValues = () => {
  const values = [
    { icon: Leaf, label: "Vegan" },
    { icon: PawPrint, label: "Cruelty Free" },
    { icon: User, label: "Woman Owned" },
    { icon: Sparkle, label: "Clean" }
  ];

  return (
    <section className="py-12 px-6 bg-surface-container-low border-y border-outline-variant/20">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-y-8 gap-x-12 md:gap-x-24">
        {values.map((value, idx) => (
          <div key={idx} className="flex flex-col items-center gap-2">
            <value.icon className="text-primary w-8 h-8 font-light" />
            <span className="font-sans text-[10px] text-on-surface-variant uppercase tracking-widest font-bold">{value.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

const StorySection = () => {
  return (
    <section className="bg-surface-container-highest py-24 px-6 text-center">
      <div className="max-w-xl mx-auto space-y-8">
        <motion.div
           whileInView={{ opacity: 1, scale: 1 }}
           initial={{ opacity: 0, scale: 0.95 }}
           transition={{ duration: 0.8 }}
        >
          <img 
            className="w-full h-[500px] object-cover mb-8 shadow-2xl" 
            alt="Portrait of diverse models" 
            src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=1000"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        <h2 className="font-serif text-3xl md:text-4xl text-on-surface italic">Discover mindful, timeless beauty</h2>
        <p className="font-sans text-on-surface-variant leading-relaxed text-lg">
          We believe in a "skin-first" approach, creating products that enhance your natural features without hiding them. 
          Minori is built on the philosophy of essentialism.
        </p>
        <button className="border border-outline text-on-surface font-sans text-xs font-semibold px-12 py-4 tracking-[0.1em] hover:bg-on-surface hover:text-surface transition-all duration-300 uppercase">
          Our Story
        </button>
      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section className="py-24 px-6 text-center bg-surface">
      <div className="max-w-4xl mx-auto relative">
        <h2 className="font-sans text-[10px] text-primary font-bold tracking-[0.2em] mb-12 uppercase">Reviews of Real People</h2>
        <div className="space-y-6">
          <Quote className="text-primary/20 w-16 h-16 mx-auto mb-4" />
          <p className="font-serif text-2xl md:text-3xl text-on-surface leading-tight px-4 max-w-2xl mx-auto">
            "The lip gloss is exactly what I've been looking for. It's hydrating, not sticky, and the shade is so intentional."
          </p>
          <div className="pt-6">
            <p className="font-sans text-xs text-on-surface font-bold uppercase tracking-widest">Sarah M.</p>
            <p className="font-sans text-on-surface-variant text-[11px] mt-1">Los Angeles, CA</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const FounderSection = () => {
  return (
    <section className="py-24 px-6 bg-surface-bright border-t border-outline-variant/20">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="relative overflow-hidden group">
          <img 
            className="w-full aspect-[4/5] object-cover shadow-2xl transition-transform duration-700 group-hover:scale-105" 
            alt="Portrait of the founder" 
            src="https://images.unsplash.com/photo-1594465919760-441fe5908ab0?auto=format&fit=crop&q=80&w=1000"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="space-y-6">
          <h2 className="font-serif text-3xl md:text-4xl text-on-surface">Meet the Founder</h2>
          <p className="font-sans text-lg text-on-surface-variant italic leading-relaxed">
            "I created Minori to simplify the morning ritual. For the woman who wants to look like herself, only more rested and radiant."
          </p>
          <p className="font-sans text-on-surface-variant leading-relaxed">
            Minori was born out of a desire for intentional consumption and high-performance minimalist formulas. We strip away the unnecessary, leaving only the essential.
          </p>
          <button className="flex items-center gap-2 group font-sans text-xs font-bold uppercase tracking-widest text-primary">
            Read the Interview <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-surface-container-highest border-t border-outline-variant/30 pt-20 pb-32 md:pb-20">
      <div className="px-6 md:px-12 max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="lg:col-span-2">
          <h3 className="font-serif text-2xl tracking-[0.2em] text-on-surface mb-4">MINORI</h3>
          <p className="font-sans text-on-surface-variant mb-8 max-w-sm">
            Join our community for mindful beauty updates, exclusive launches, and essential rituals.
          </p>
          <form className="space-y-4 max-w-sm">
            <div className="relative">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-transparent border-b border-outline focus:border-primary focus:ring-0 px-0 py-3 font-sans text-on-surface placeholder:text-on-surface-variant/50 transition-all outline-none"
              />
            </div>
            <button className="w-full bg-on-surface text-surface py-4 font-sans text-[10px] font-bold tracking-widest uppercase hover:bg-on-surface-variant transition-colors duration-300">
              SUBSCRIBE
            </button>
          </form>
        </div>
        
        <div className="space-y-4">
          <h4 className="font-sans text-[10px] font-bold uppercase tracking-widest text-on-surface mb-6">Explore</h4>
          <ul className="space-y-3">
            {['Shop All', 'Face', 'Lips', 'Rituals', 'Our Story'].map((item) => (
              <li key={item}><a href="#" className="font-sans text-xs text-on-surface-variant hover:text-primary transition-colors uppercase tracking-tight">{item}</a></li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="font-sans text-[10px] font-bold uppercase tracking-widest text-on-surface mb-6">Support</h4>
          <ul className="space-y-3">
            {['Shipping', 'Returns', 'Contact', 'Terms', 'Privacy'].map((item) => (
              <li key={item}><a href="#" className="font-sans text-xs text-on-surface-variant hover:text-primary transition-colors uppercase tracking-tight">{item}</a></li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="px-6 md:px-12 max-w-7xl mx-auto mt-16 pt-8 border-t border-outline-variant/10 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="font-sans text-[10px] text-on-surface-variant/60 uppercase tracking-widest">
          © 2024 Minori Beauty. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a href="#" className="text-on-surface-variant/60 hover:text-primary transition-colors"><Instagram className="w-4 h-4" /></a>
          <a href="#" className="text-on-surface-variant/60 hover:text-primary transition-colors"><Facebook className="w-4 h-4" /></a>
          <a href="#" className="text-on-surface-variant/60 hover:text-primary transition-colors"><Twitter className="w-4 h-4" /></a>
        </div>
      </div>
    </footer>
  );
};

const BottomNav = () => {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 w-full bg-surface/90 backdrop-blur-md border-t border-outline-variant/20 z-50">
      <div className="flex justify-around items-center py-4 px-2">
        {[
          { icon: Sparkle, label: "Shop" },
          { icon: User, label: "Face" },
          { icon: Sparkle, label: "Lips" },
          { icon: User, label: "Account" }
        ].map((item, idx) => (
          <a key={idx} href="#" className={`flex flex-col items-center gap-1 ${idx === 0 ? 'text-primary' : 'text-on-surface-variant'}`}>
            <item.icon className="w-5 h-5" />
            <span className="font-sans text-[8px] font-bold uppercase tracking-widest">{item.label}</span>
          </a>
        ))}
      </div>
    </nav>
  );
};

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <Hero />
        <FeaturedCollection />
        <BrandValues />
        <StorySection />
        <Testimonials />
        <FounderSection />
      </main>
      <Footer />
      <BottomNav />
    </div>
  );
}
