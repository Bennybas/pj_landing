import React from 'react';

export const Card = ({ className, children, ...props }) => (
  <div className={`rounded-lg shadow ${className}`} {...props}>
    {children}
  </div>
);
export const CardHeader = ({ children, className = '', ...props }) => (
  <div 
    className={`border-b px-4 py-3 ${className}`} 
    {...props}
  >
    {children}
  </div>
);

export const CardTitle = ({ children, className = '', ...props }) => (
  <h3 
    className={`text-lg font-semibold text-gray-900 ${className}`} 
    {...props}
  >
    {children}
  </h3>
);

export const CardContent = ({ children, className = '', ...props }) => (
  <div 
    className={`p-4 ${className}`} 
    {...props}
  >
    {children}
  </div>
);