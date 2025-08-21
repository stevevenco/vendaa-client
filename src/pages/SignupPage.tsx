import { useState, ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import AuthLayout from '../features/auth/components/AuthLayout';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';

const SignupPage = () => {
  const [formData, setFormData] = useState({
    orgName: '',
    phone: '',
    email: '',
    password: '',
    otp: '',
  });
  const [logoPreview, setLogoPreview] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleLogoChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogoPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password.length < 8) {
      setPasswordError('Password must be at least 8 characters long.');
      return;
    }
    setPasswordError('');
    console.log({ ...formData, logo: logoPreview ? 'logo-uploaded' : 'no-logo' });
    alert('Account creation request received! Check console for details.');
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
          <Label htmlFor="orgName">Organization Name</Label>
          <Input type="text" id="orgName" required onChange={handleInputChange} />
        </div>
        <div className="mb-5">
          <Label>Organization Logo</Label>
          <div className="flex items-center gap-4">
            <div
              className="w-16 h-16 rounded-full bg-secondary-gray bg-cover bg-center border-2 border-dashed border-border-color"
              style={{ backgroundImage: `url(${logoPreview})` }}
            ></div>
            <Label htmlFor="logoUpload" className="cursor-pointer text-primary-blue font-medium hover:underline">
              Click to upload
            </Label>
            <Input type="file" id="logoUpload" accept="image/*" className="hidden" onChange={handleLogoChange} />
          </div>
        </div>
        <div className="mb-5">
          <Label htmlFor="phone">Phone Number</Label>
          <Input type="tel" id="phone" required onChange={handleInputChange} />
        </div>
        <div className="mb-5">
          <Label htmlFor="email">Email Address</Label>
          <Input type="email" id="email" required onChange={handleInputChange} />
        </div>
        <div className="mb-5">
          <Label htmlFor="password">Password</Label>
          <Input type="password" id="password" required onChange={handleInputChange} />
          {passwordError && <p className="text-danger text-xs mt-1">{passwordError}</p>}
        </div>
        <div className="mb-5">
          <Label htmlFor="otp">Email Verification OTP</Label>
          <Input type="text" id="otp" placeholder="Enter 6-digit code" required onChange={handleInputChange} />
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
    </AuthLayout>
  );
};

export default SignupPage;
