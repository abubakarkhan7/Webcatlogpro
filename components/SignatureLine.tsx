import React from 'react';

interface SignatureLineProps {
  className?: string;
  color?: string; // Optional override, defaults to secondary accent (Orange)
}

const SignatureLine: React.FC<SignatureLineProps> = ({ className = "", color = "stroke-accent-secondary" }) => {
  return (
    <div className={`w-full h-3 md:h-4 ${className}`} aria-hidden="true">
        <svg 
            width="100%" 
            height="100%" 
            viewBox="0 0 120 12" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            className={`${color} opacity-70`} 
            style={{ overflow: 'visible' }}
        >
            <path 
                d="M2 7.5C25 -1 45 14 118 4.5" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                vectorEffect="non-scaling-stroke"
                className="animate-draw-line"
                style={{ strokeDasharray: 130, strokeDashoffset: 130 }}
            />
        </svg>
    </div>
  );
};

export default SignatureLine;