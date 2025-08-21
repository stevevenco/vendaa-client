import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';

const loginSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  password: z.string().min(1, { message: 'Password is required' }),
});

type LoginFormValues = z.infer<typeof loginSchema>;

interface LoginFormProps {
  onSwitchMode: () => void;
}

export function LoginForm({ onSwitchMode }: LoginFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    }
  });

  const onSubmit = (data: LoginFormValues) => {
    console.log('Login data:', data);
    alert('Login form submitted! Check the console for data.');
  };

  return (
    <div>
      <div className="text-center mb-8">
        <h1 className="text-2xl font-semibold text-primary-blue">Vendaa</h1>
        <h2 className="text-3xl font-bold mt-1 text-text-dark">Welcome Back!</h2>
        <p className="text-text-light mt-2">Login to manage your vending operations.</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div>
          <Label htmlFor="loginEmail">Email Address</Label>
          <Input
            id="loginEmail"
            type="email"
            {...register('email')}
            placeholder="you@example.com"
          />
          {errors.email && <p className="text-danger text-xs mt-1">{errors.email.message}</p>}
        </div>
        <div>
          <Label htmlFor="loginPassword">Password</Label>
          <Input
            id="loginPassword"
            type="password"
            {...register('password')}
            placeholder="••••••••"
          />
          {errors.password && <p className="text-danger text-xs mt-1">{errors.password.message}</p>}
        </div>
        <div className="text-right -mt-3">
            <a href="#" className="text-sm text-primary-blue hover:underline font-medium">Forgot Password?</a>
        </div>
        <Button type="submit">Login</Button>
      </form>
      <div className="text-center mt-6 text-sm">
        <p className="text-text-light">
          Don't have an account?{' '}
          <button onClick={onSwitchMode} className="font-medium text-primary-blue hover:underline">
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
}
