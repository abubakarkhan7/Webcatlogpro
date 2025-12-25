import React from 'react';
import { Check, ShieldCheck, Zap, Users, ArrowRight } from 'lucide-react';
import Button from '../components/Button';
import SignatureLine from '../components/SignatureLine';

const Pricing: React.FC = () => {
  return (
    <div className="pt-36 pb-20 px-6 max-w-7xl mx-auto animate-slide-up min-h-screen">
      <div className="text-center max-w-3xl mx-auto mb-16">
        {/* Info Pill -> Green (Primary) */}
        <div className="inline-block px-4 py-1.5 rounded-full border border-accent-primary/20 text-accent-primary text-sm font-semibold bg-accent-primary/5 mb-6">
          Simple Pricing
        </div>
        
        <div className="w-fit mx-auto flex flex-col items-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-textMain mb-2 tracking-tighter">
              Invest in shipping, not setup.
            </h1>
            {/* Constrained width */}
            <div className="w-1/2 min-w-[200px]">
                <SignatureLine />
            </div>
        </div>

        <p className="text-textSecondary text-lg leading-relaxed max-w-xl mx-auto mt-6">
          One-time payment. Lifetime access. Commercial license included.
          <br className="hidden md:block" /> No recurring fees for standard kits.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start relative">
        {/* Explorer Plan (Free) - QUIET */}
        <div className="p-8 rounded-2xl bg-surface border border-border transition-colors shadow-soft">
          <div className="flex items-center gap-3 mb-6">
             <div className="p-2 rounded-lg bg-surfaceHighlight text-textSecondary">
               <Zap size={20} />
             </div>
             <h3 className="text-lg font-bold text-textMain">Explorer</h3>
          </div>
          <p className="text-textSecondary text-sm mb-8 min-h-[40px] leading-relaxed">
            Perfect for reviewing code structure and testing compatibility.
          </p>
          <div className="mb-8">
             <span className="text-4xl font-display font-bold text-textMain">$0</span>
             <span className="text-textMuted font-medium text-sm ml-1">/ forever</span>
          </div>
          <Button variant="outline" className="w-full mb-6">Create Free Account</Button>
          <p className="text-xs text-center text-textMuted mb-6">No credit card required</p>
          
          <div className="space-y-4 pt-6">
             <p className="text-xs font-bold text-textMuted uppercase tracking-wider">What's included</p>
             <ul className="space-y-3">
               {[
                 'Browse full catalog', 
                 'View file structures', 
                 'Access open-source kits', 
                 'Community Discord access'
               ].map(feature => (
                 <li key={feature} className="flex items-start gap-3 text-sm text-textSecondary">
                   <Check size={16} className="text-textMuted mt-0.5 shrink-0" /> {feature}
                 </li>
               ))}
             </ul>
          </div>
        </div>

        {/* Pro Plan (Hero) - CALM CONFIDENCE */}
        {/* Uses bg-surfaceHighlight for contrast in both modes, rather than hardcoded hex */}
        <div className="relative p-8 rounded-2xl bg-surfaceHighlight border border-accent-secondary/30 ring-1 ring-accent-secondary/30 shadow-premium transform md:-translate-y-4 z-10 flex flex-col">
          {/* Badge -> Orange (Emphasis) */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent-secondary text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg whitespace-nowrap">
            Best Value
          </div>
          
          <div className="flex items-center gap-3 mb-6">
             <div className="p-2 rounded-lg bg-accent-primary/10 text-accent-primary">
               <ShieldCheck size={20} />
             </div>
             <h3 className="text-lg font-bold text-textMain">All-Access Pro</h3>
          </div>
          
          <p className="text-textMain text-sm mb-8 min-h-[40px] leading-relaxed font-medium">
            Everything you need to ship. Source code, databases, and auth ready to go.
          </p>
          
          <div className="mb-8">
             <div className="flex items-baseline gap-1">
                <span className="text-5xl font-display font-bold text-textMain">$29</span>
                <span className="text-textSecondary font-medium">/ month</span>
             </div>
             <p className="text-xs text-accent-primary mt-3 font-semibold flex items-center gap-1">
               <Check size={12} strokeWidth={3} /> Cancel anytime. No lock-in.
             </p>
          </div>
          
          <Button variant="primary" className="w-full mb-4 shadow-lg shadow-accent-primary/20 h-12 text-base">
            Get Instant Access <ArrowRight size={16} />
          </Button>
          <p className="text-xs text-center text-textMuted mb-8">
            30-day money-back guarantee
          </p>
          
          <div className="space-y-4 pt-6">
             <p className="text-xs font-bold text-accent-secondary uppercase tracking-wider flex justify-between">
                <span>Everything in Explorer, plus:</span>
             </p>
             <ul className="space-y-3">
               {[
                 'Unlimited downloads (50+ Kits)', 
                 'Commercial usage license', 
                 'Private GitHub Repo access', 
                 'Priority creator support',
                 'New kits added monthly'
               ].map(feature => (
                 <li key={feature} className="flex items-start gap-3 text-sm text-textMain font-medium">
                   <Check size={16} className="text-accent-primary mt-0.5 shrink-0" /> {feature}
                 </li>
               ))}
             </ul>
          </div>
        </div>

        {/* Agency Plan - PROFESSIONAL */}
        <div className="p-8 rounded-2xl bg-surface border border-border transition-colors shadow-soft">
          <div className="flex items-center gap-3 mb-6">
             <div className="p-2 rounded-lg bg-surfaceHighlight text-textSecondary">
               <Users size={20} />
             </div>
             <h3 className="text-lg font-bold text-textMain">Agency Partner</h3>
          </div>
          <p className="text-textSecondary text-sm mb-8 min-h-[40px] leading-relaxed">
            Scale your client operations with white-label rights and multi-seat access.
          </p>
          <div className="mb-8">
             <span className="text-4xl font-display font-bold text-textMain">$99</span>
             <span className="text-textMuted font-medium text-sm ml-1">/ month</span>
          </div>
          <Button variant="outline" className="w-full mb-6">Contact Sales</Button>
          <p className="text-xs text-center text-textMuted mb-6">Invoice billing available</p>
          
          <div className="space-y-4 pt-6">
             <p className="text-xs font-bold text-textMuted uppercase tracking-wider">Everything in Pro, plus:</p>
             <ul className="space-y-3">
               {[
                 '5 Team member seats', 
                 'White-label client rights', 
                 'Dedicated account manager', 
                 'Custom feature requests',
                 'SLA & Contract billing'
               ].map(feature => (
                 <li key={feature} className="flex items-start gap-3 text-sm text-textSecondary">
                   <Check size={16} className="text-textMuted mt-0.5 shrink-0" /> {feature}
                 </li>
               ))}
             </ul>
          </div>
        </div>
      </div>
      
      {/* Trust Footer */}
      <div className="mt-20 pt-10 border-t border-border text-center">
         <p className="text-textMuted text-sm mb-6">Trusted by engineering teams at</p>
         <div className="flex justify-center flex-wrap gap-8 opacity-40 grayscale mix-blend-multiply dark:mix-blend-screen">
             <span className="font-display font-bold text-xl text-textMain">ACME Corp</span>
             <span className="font-display font-bold text-xl text-textMain">HyperGrowth</span>
             <span className="font-display font-bold text-xl text-textMain">NextGen</span>
             <span className="font-display font-bold text-xl text-textMain">Stark Ind</span>
         </div>
      </div>
    </div>
  );
};

export default Pricing;