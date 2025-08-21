import * as React from 'react';
import { LoginForm } from '@/features/auth/components/LoginForm';
import { SignupForm } from '@/features/auth/components/SignupForm';

export default function AuthPage() {
  const [isLoginView, setIsLoginView] = React.useState(true);

  const toggleView = () => setIsLoginView(!isLoginView);

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-secondary-gray p-5 font-sans">
      <div className="w-full max-w-[450px] rounded-[12px] bg-white p-10 shadow-lg">
        {isLoginView ? (
          <LoginForm onSwitchMode={toggleView} />
        ) : (
          <SignupForm onSwitchMode={toggleView} />
        )}
      </div>
    </div>
  );
}
