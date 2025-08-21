import React from 'react';
import { cn } from '../../lib/utils';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          'w-full py-3 px-4 border border-border-color rounded-xl text-base transition-colors focus:outline-none focus:ring-2 focus:ring-primary-blue/30 focus:border-primary-blue',
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = 'Input';

export { Input };
