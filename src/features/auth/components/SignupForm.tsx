import * as React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { IconPhoto } from '@tabler/icons-react';

const signupSchema = z.object({
  orgName: z.string().min(1, { message: 'Organization name is required' }),
  logo: z.any().optional(),
  phone: z.string().min(10, { message: 'Please enter a valid phone number' }),
  email: z.string().email({ message: 'Invalid email address' }),
  password: z.string().min(8, { message: 'Password must be at least 8 characters' }),
  otp: z.string().length(6, { message: 'OTP must be 6 digits' }),
});

type SignupFormValues = z.infer<typeof signupSchema>;

interface SignupFormProps {
  onSwitchMode: () => void;
}

export function SignupForm({ onSwitchMode }: SignupFormProps) {
  const [logoPreview, setLogoPreview] = React.useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormValues>({
    resolver: zodResolver(signupSchema),
  });

  const handleLogoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogoPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = (data: SignupFormValues) => {
    const submissionData = {
      ...data,
      logo: data.logo?.[0]?.name || 'No logo uploaded',
    }
    console.log('Signup data:', submissionData);
    alert('Signup form submitted! Check the console for data.');
  };

  return (
    <div>
      <div className="text-center mb-8">
        <h1 className="text-2xl font-semibold text-primary-blue">Vendaa</h1>
        <h2 className="text-3xl font-bold mt-1 text-text-dark">Create your Account</h2>
        <p className="text-text-light mt-2">Start your journey with a modern vending platform.</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div>
          <Label htmlFor="orgName">Organization Name</Label>
          <Input id="orgName" {...register('orgName')} />
          {errors.orgName && <p className="text-danger text-xs mt-1">{errors.orgName.message}</p>}
        </div>

        <div>
          <Label>Organization Logo</Label>
          <div className="flex items-center gap-4">
            <div
              className="w-[60px] h-[60px] rounded-full bg-secondary-gray flex items-center justify-center border-2 border-dashed border-border-color bg-cover bg-center shrink-0"
              style={{ backgroundImage: logoPreview ? `url(${logoPreview})` : 'none' }}
            >
              {!logoPreview && <IconPhoto className="text-text-light" size={30} />}
            </div>
            <input
              type="file"
              id="logoUpload"
              className="hidden"
              {...register('logo')}
              onChange={handleLogoChange}
              accept="image/*"
            />
            <label htmlFor="logoUpload" className="cursor-pointer text-primary-blue font-medium text-sm hover:underline">
              Click to upload
            </label>
          </div>
        </div>

        <div>
          <Label htmlFor="signupPhone">Phone Number</Label>
          <Input id="signupPhone" type="tel" {...register('phone')} />
          {errors.phone && <p className="text-danger text-xs mt-1">{errors.phone.message}</p>}
        </div>

        <div>
          <Label htmlFor="signupEmail">Email Address</Label>
          <Input id="signupEmail" type="email" {...register('email')} />
          {errors.email && <p className="text-danger text-xs mt-1">{errors.email.message}</p>}
        </div>

        <div>
          <Label htmlFor="signupPassword">Password</Label>
          <Input id="signupPassword" type="password" {...register('password')} />
          {errors.password && <p className="text-danger text-xs mt-1">{errors.password.message}</p>}
        </div>

        <div>
          <Label htmlFor="signupOtp">Email Verification OTP</Label>
          <Input id="signupOtp" placeholder="Enter 6-digit code" {...register('otp')} />
          {errors.otp && <p className="text-danger text-xs mt-1">{errors.otp.message}</p>}
        </div>

        <Button type="submit">Create Account</Button>
      </form>
      <div className="text-center mt-6 text-sm">
        <p className="text-text-light">
          Already have an account?{' '}
          <button onClick={onSwitchMode} className="font-medium text-primary-blue hover:underline">
            Login
          </button>
        </p>
      </div>
    </div>
  );
}
