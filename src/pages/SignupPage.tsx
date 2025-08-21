import { useState, ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
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

const SignupPage = () => {
  const [formData, setFormData] = useState({
    orgName: '',
    email: '',
    password: '',
  });
  const [passwordError, setPasswordError] = useState('');
  const [isOtpModalOpen, setIsOtpModalOpen] = useState(false);
  const [otp, setOtp] = useState('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password.length < 8) {
      setPasswordError('Password must be at least 8 characters long.');
      return;
    }
    setPasswordError('');
    setIsOtpModalOpen(true);
  };

  const handleOtpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('OTP submitted:', otp);
    alert('OTP Verified! You can now log in.');
    setIsOtpModalOpen(false);
    // In a real app, you would redirect to the login page or dashboard
  };

  return (
    <AuthLayout>
      <div className="text-center mb-8">
        <h1 className="text-2xl font-semibold text-primary-blue">Vendaa</h1>
        <h2 className="text-3xl font-bold mt-2">Create your Account</h2>
        <p className="text-text-light mt-2">Start your journey with a modern vending platform.</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-5">
          <Label htmlFor="orgName" className='text-left'>Organization Name</Label>
          <Input type="text" id="orgName" required onChange={handleInputChange} />
        </div>
        <div className="mb-5">
          <Label htmlFor="email" className='text-left'>Email Address</Label>
          <Input type="email" id="email" required onChange={handleInputChange} />
        </div>
        <div className="mb-5">
          <Label htmlFor="password" className='text-left'>Password</Label>
          <Input type="password" id="password" required onChange={handleInputChange} />
          {passwordError && <p className="text-danger text-xs mt-1">{passwordError}</p>}
        </div>
        <Button type="submit">Create Account</Button>
      </form>
      <div className="text-center mt-6">
        <p className="text-sm">
          Already have an account?{' '}
          <Link to="/login" className="font-medium text-primary-blue hover:underline">
            Login
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

export default SignupPage;
