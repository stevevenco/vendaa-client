import * as React from 'react';
import { cn } from '@/lib/utils';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'w-full p-3 border border-border-color rounded-lg text-base transition-colors duration-200',
          'focus:outline-none focus:border-primary-blue focus:ring-[3px] focus:ring-primary-blue/20',
          'placeholder:text-text-light/50',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';

export { Input };
