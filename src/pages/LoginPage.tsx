import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthLayout from '../features/auth/components/AuthLayout';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [otp, setOtp] = useState('');
  const [showOtp, setShowOtp] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      alert('Please enter email and password.');
      return;
    }
    if (!showOtp) {
      setShowOtp(true);
      alert('Login successful! Please enter your 2FA OTP to continue.');
    } else {
      console.log({ email, password, otp });
      alert('OTP Verified! Redirecting to dashboard...');
      navigate('/dashboard');
    }
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
        {showOtp && (
          <div className="mb-5">
            <Label htmlFor="loginOtp">Email OTP</Label>
            <Input
              type="text"
              id="loginOtp"
              placeholder="Enter 6-digit code"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
          </div>
        )}
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
    </AuthLayout>
  );
};

export default LoginPage;
