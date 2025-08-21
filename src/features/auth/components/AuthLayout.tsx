import React from 'react';

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className="flex items-center justify-center min-h-screen p-5 bg-secondary-gray">
      <div className="w-full max-w-[450px] bg-white p-10 rounded-xl shadow-md">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
