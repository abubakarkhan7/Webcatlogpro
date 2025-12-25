import React from 'react';
import { ArrowRight } from 'lucide-react';
import SignatureLine from '../components/SignatureLine';
import { ViewState } from '../types';

interface CategoriesProps {
  onNavigate?: (view: ViewState) => void;
}

const CATEGORIES = [
  {
    id: 'saas',
    title: 'SaaS',
    count: 847,
    description: 'Dashboards, landing pages, and admin panels for software products.',
    image: 'https://picsum.photos/800/600?random=1',
  },
  {
    id: 'ecommerce',
    title: 'E-commerce',
    count: 623,
    description: 'Online stores, product showcases, and checkout experiences.',
    image: 'https://picsum.photos/800/600?random=3',
  },
  {
    id: 'portfolio',
    title: 'Portfolio',
    count: 412,
    description: 'Personal sites, creative portfolios, and resume pages.',
    image: 'https://picsum.photos/800/600?random=2',
  },
  {
    id: 'fintech',
    title: 'Fintech',
    count: 186,
    description: 'Modern banking interfaces, crypto wallets, and trading dashboards.',
    image: 'https://picsum.photos/800/600?random=4',
  },
  {
    id: 'ai',
    title: 'AI Startup',
    count: 245,
    description: 'Futuristic landing pages for LLMs, agents, and machine learning tools.',
    image: 'https://picsum.photos/800/600?random=5',
  },
  {
    id: 'health',
    title: 'Health',
    count: 142,
    description: 'Medical practice websites, health tracking, and wellness apps.',
    image: 'https://picsum.photos/800/600?random=6',
  }
];

const Categories: React.FC<CategoriesProps> = ({ onNavigate }) => {
  return (
    <div className="pt-36 pb-20 px-6 max-w-[1400px] mx-auto min-h-screen">
      {/* Header */}
      <div className="text-center mb-16 animate-slide-up">
        {/* Info Pill -> Green (Primary) */}
        <div className="inline-block px-4 py-1.5 rounded-full border border-accent-primary/20 text-accent-primary text-sm font-medium bg-accent-primary/5 mb-6">
          Categories
        </div>
        
        <div className="w-fit mx-auto flex flex-col items-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-textMain mb-2 tracking-tighter">
              Browse by Category
            </h1>
            {/* Constrain to ~50% width */}
            <div className="w-1/2 min-w-[160px]">
                <SignatureLine />
            </div>
        </div>
        
        <p className="text-textMuted max-w-xl mx-auto mt-6">
          Find the perfect website design for your industry or use case.
        </p>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
        {CATEGORIES.map((cat, i) => (
          <div 
            key={cat.id}
            className="group relative rounded-2xl overflow-hidden bg-surface border border-border transition-all duration-300 flex flex-col cursor-pointer hover:border-accent-primary/30 hover:shadow-premium hover:-translate-y-[2px]"
            style={{ animationDelay: `${i * 0.1}s` }}
            onClick={() => onNavigate?.(ViewState.EXPLORE)}
          >
            {/* Image Section - Full Color by Default */}
            <div className="relative aspect-[16/10] overflow-hidden bg-surfaceHighlight">
               <img 
                 src={cat.image} 
                 alt={cat.title} 
                 className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent opacity-80 group-hover:opacity-70 transition-opacity" />
            </div>

            {/* Content Section */}
            <div className="p-8 pt-0 flex flex-col flex-1 relative -mt-8">
               <div className="flex justify-between items-end mb-4">
                  <h2 className="text-2xl font-bold font-display text-textMain group-hover:text-accent-primary transition-colors">
                    {cat.title}
                  </h2>
                  <span className="px-2 py-1 bg-surfaceHighlight rounded text-xs text-textMuted font-mono border border-border group-hover:border-accent-primary/20 group-hover:text-accent-primary transition-colors">
                    {cat.count}
                  </span>
               </div>
               
               <p className="text-textMuted text-sm leading-relaxed mb-6 flex-1">
                 {cat.description}
               </p>

               {/* Browse Link - Visible by default, Green, Medium Weight */}
               <div className="flex items-center gap-2 text-accent-primary text-sm font-medium mt-auto pt-2 group-hover:text-accent-primary-dim transition-colors">
                  Browse {cat.title} 
                  <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
               </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;