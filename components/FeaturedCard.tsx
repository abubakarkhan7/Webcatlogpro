import React from 'react';
import { Eye, Heart, ArrowUpRight } from 'lucide-react';
import { Listing } from '../types';

interface FeaturedCardProps {
  listing: Listing;
  onClick: (id: string) => void;
}

const FeaturedCard: React.FC<FeaturedCardProps> = ({ listing, onClick }) => {
  return (
    <div 
      onClick={() => onClick(listing.id)}
      className="group relative flex flex-col h-full cursor-pointer rounded-2xl bg-surface border border-border hover:border-accent-primary/30 transition-all duration-300 shadow-sm hover:shadow-premium hover:-translate-y-[2px]"
    >
      {/* Image Area */}
      <div className="p-3 pb-0">
        <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-surfaceHighlight border border-border/50 group-hover:border-border transition-colors">
          <img 
            src={listing.image} 
            alt={listing.title} 
            className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]" 
          />
          
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />

          {/* Top Badges */}
          <div className="absolute top-4 left-4 right-4 flex justify-between items-start pointer-events-none">
            {/* Category: Blue (Info) */}
            <span className="px-2.5 py-1 rounded-md bg-surface/95 backdrop-blur-md border border-border text-accent-tertiary text-[10px] font-semibold tracking-wide shadow-sm flex items-center gap-1.5">
               {listing.category}
            </span>
            
            {/* Price or Featured Badge */}
             {listing.featured ? (
                 // Featured: Orange (Emphasis)
                <span className="px-2.5 py-1 rounded-md bg-accent-secondary text-white text-[10px] font-bold tracking-wide shadow-sm">
                    FEATURED
                </span>
             ) : (
                 // Price: Neutral
                <span className="px-2.5 py-1 rounded-md bg-surface/95 backdrop-blur-md border border-border text-textMain text-[10px] font-bold tracking-wide shadow-sm">
                    {listing.price === 0 ? 'Free' : `$${listing.price}`}
                </span>
             )}
          </div>

          {/* Hover Action - Bottom Center */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 pointer-events-none">
             <div 
                className="bg-white/95 backdrop-blur text-accent-primary px-5 py-2.5 rounded-full text-xs font-bold flex items-center gap-2 shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 border border-accent-primary/10"
             >
                View Details <ArrowUpRight size={14} className="text-accent-primary transition-transform duration-300 group-hover:translate-x-1" />
             </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-5 py-5 flex flex-col flex-1">
        <div className="flex justify-between items-start mb-2">
            <h3 className="text-base font-bold text-textMain group-hover:text-accent-primary transition-colors leading-tight font-display tracking-tight">
              {listing.title}
            </h3>
        </div>
        
        <p className="text-[13px] text-textSecondary mb-4 line-clamp-2 leading-relaxed font-medium">
          {listing.description}
        </p>
        
        <div className="flex flex-wrap gap-1.5 mb-6">
          {listing.techStack.slice(0, 3).map(tech => (
             <span key={tech} className="px-2 py-0.5 rounded text-[10px] text-textMuted border border-border bg-surfaceHighlight flex items-center gap-1 font-mono">
                {tech}
             </span>
          ))}
        </div>

        <div className="mt-auto pt-4 border-t border-border flex items-center justify-between">
           <div className="flex items-center gap-2 group/creator">
              <img src={listing.creator.avatar} className="w-5 h-5 rounded-full ring-1 ring-border opacity-90 group-hover/creator:opacity-100 transition-opacity" alt="" />
              <div className="flex flex-col">
                  <span className="text-[11px] text-textSecondary font-medium group-hover/creator:text-textMain transition-colors leading-none">{listing.creator.name}</span>
              </div>
           </div>
           
           <div className="flex items-center gap-3 text-[10px] text-textMuted font-mono">
               <span className="flex items-center gap-1 group-hover:text-textMain transition-colors">
                 <Heart size={12} className="group-hover:text-accent-secondary transition-colors" /> {listing.likes}
               </span>
               <span className="flex items-center gap-1 group-hover:text-textMain transition-colors">
                 <Eye size={12} /> {listing.views > 1000 ? `${(listing.views / 1000).toFixed(1)}k` : listing.views}
               </span>
           </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;