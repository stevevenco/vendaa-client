import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthLayout from '../features/auth/components/AuthLayout';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '../components/ui/dialog';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [otp, setOtp] = useState('');
  const [isOtpModalOpen, setIsOtpModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      return;
    }
    setIsOtpModalOpen(true);
  };

  const handleOtpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, password, otp });
    setIsOtpModalOpen(false);
    navigate('/dashboard');
  };

  return (
    <AuthLayout>
      <div className="text-center mb-8">
        <h1 className="text-2xl font-semibold text-primary-blue">Vendaa</h1>
        <h2 className="text-3xl font-bold mt-2">Welcome Back!</h2>
        <p className="text-text-light mt-2">Login to manage your vending operations.</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-5">
          <Label htmlFor="loginEmail" className='text-left'>Email Address</Label>
          <Input
            type="email"
            id="loginEmail"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <Label htmlFor="loginPassword" className='text-left'>Password</Label>
          <Input
            type="password"
            id="loginPassword"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="text-right -mt-3 mb-5">
          <a href="#" className="text-sm text-primary-blue hover:underline">
            Forgot Password?
          </a>
        </div>
        <Button type="submit">Login</Button>
      </form>
      <div className="text-center mt-6">
        <p className="text-sm">
          Don't have an account?{' '}
          <Link to="/signup" className="font-medium text-primary-blue hover:underline">
            Sign Up
          </Link>
        </p>
      </div>

      <Dialog open={isOtpModalOpen} onOpenChange={setIsOtpModalOpen}>
        <DialogContent
          onInteractOutside={(e) => {
            e.preventDefault();
          }}
        >
          <DialogHeader>
            <DialogTitle>Enter Verification Code</DialogTitle>
            <DialogDescription>
              A 6-digit verification code has been sent to your email address.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleOtpSubmit}>
            <div className="py-4">
              <Label htmlFor="otp">Verification Code</Label>
              <Input
                id="otp"
                placeholder="Enter 6-digit code"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
            </div>
            <Button type="submit">Verify</Button>
          </form>
        </DialogContent>
      </Dialog>
    </AuthLayout>
  );
};

export default LoginPage;
