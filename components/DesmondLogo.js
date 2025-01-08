import React from 'react';

const DesmondLogo = ({ className = "", size = "large" }) => {
  // Size configurations
  const sizes = {
    small: { width: 40, height: 40 },
    medium: { width: 60, height: 60 },
    large: { width: 80, height: 80 }
  };

  const { width, height } = sizes[size] || sizes.medium;

  return (
    <div className={`flex items-center ${className}`}>
      <svg 
        width={width} 
        height={height} 
        viewBox="0 0 400 200" 
        className="mr-3"
      >
        {/* Background */}
        <rect width="400" height="200" fill="transparent"/>
        
        {/* Interconnected D hexagon shape */}
        <path 
          d="M100 40 L140 20 L180 40 L180 80 L140 100 L100 80 Z" 
          fill="#2563eb" 
          stroke="#1e40af" 
          strokeWidth="3"
        />
        
        {/* Connected nodes */}
        <circle cx="190" cy="60" r="8" fill="#f97316"/>
        <circle cx="210" cy="90" r="8" fill="#06b6d4"/>
        <circle cx="170" cy="110" r="8" fill="#8b5cf6"/>
        
        {/* Connecting lines */}
        <line x1="180" y1="60" x2="182" y2="60" stroke="#2563eb" strokeWidth="2"/>
        <line x1="180" y1="80" x2="205" y2="88" stroke="#2563eb" strokeWidth="2"/>
        <line x1="175" y1="95" x2="172" y2="102" stroke="#2563eb" strokeWidth="2"/>
      </svg>
      <div className="flex flex-col">
        <span className="text-xl font-bold text-gray-800">DESMOND</span>
        <span className="text-sm text-gray-600">LABS</span>
      </div>
    </div>
  );
};

export default DesmondLogo;