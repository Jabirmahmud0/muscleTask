import { useEffect, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { AUTH_MODE } from '../lib/authConfig';

const copyByVariant = {
  login: {
    eyebrow: 'Welcome Back',
    title: 'Login',
    description: 'Sign in to continue to the landing page experience.',
    primaryLabel: 'Login',
    secondaryText: "Don't have an account?",
    secondaryLinkLabel: 'Register',
    secondaryLinkTo: '/register',
    fields: [
      { name: 'email', label: 'Email', type: 'email', placeholder: 'Email' },
      { name: 'password', label: 'Password', type: 'password', placeholder: 'Password' },
      { name: 'remember_me', label: 'Remember Me', type: 'checkbox' },
    ],
  },
  register: {
    eyebrow: 'Join The Community',
    title: 'Register',
    description: 'Create your account using the same visual style as the landing page.',
    primaryLabel: 'Create Account',
    secondaryText: 'Already have an account?',
    secondaryLinkLabel: 'Login',
    secondaryLinkTo: '/login',
    fields: [
      { name: 'first_name', label: 'First Name', type: 'text', placeholder: 'First Name' },
      { name: 'last_name', label: 'Last Name', type: 'text', placeholder: 'Last Name' },
      { name: 'email', label: 'Email', type: 'email', placeholder: 'Email' },
      { name: 'password', label: 'Password', type: 'password', placeholder: 'Password' },
      {
        name: 'password_confirmation',
        label: 'Confirm Password',
        type: 'password',
        placeholder: 'Confirm Password',
      },
      { name: 'terms', label: 'Accept Terms', type: 'checkbox' },
    ],
  },
  verifyOtp: {
    eyebrow: 'Verification',
    title: 'Verify OTP',
    description: 'Enter the code from the API response to complete verification.',
    primaryLabel: 'Verify Code',
    secondaryText: 'Need another code?',
    secondaryLinkLabel: 'Forgot Password',
    secondaryLinkTo: '/forgot-password',
    fields: [
      { name: 'email', label: 'Email', type: 'email', placeholder: 'Email' },
      { name: 'otp', label: 'OTP', type: 'text', placeholder: 'OTP' },
    ],
  },
  forgotPassword: {
    eyebrow: 'Password Recovery',
    title: 'Forgot Password',
    description: 'Request a recovery code using your registered email address.',
    primaryLabel: 'Send OTP',
    secondaryText: 'Remembered your password?',
    secondaryLinkLabel: 'Login',
    secondaryLinkTo: '/login',
    fields: [{ name: 'email', label: 'Email', type: 'email', placeholder: 'Email' }],
  },
  resetPassword: {
    eyebrow: 'Reset Access',
    title: 'Reset Password',
    description: 'Set a new password after successful recovery verification.',
    primaryLabel: 'Reset Password',
    secondaryText: 'Back to',
    secondaryLinkLabel: 'Login',
    secondaryLinkTo: '/login',
    fields: [
      { name: 'password', label: 'New Password', type: 'password', placeholder: 'New Password' },
      {
        name: 'password_confirmation',
        label: 'Confirm Password',
        type: 'password',
        placeholder: 'Confirm Password',
      },
      { name: 'token', label: 'Reset Token', type: 'text', placeholder: 'Reset Token' },
    ],
  },
};

function AuthPage({ variant }) {
  const page = copyByVariant[variant];
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const [submitMessage, setSubmitMessage] = useState('');
  const [otpHint, setOtpHint] = useState(location.state?.otp ?? '');
  const flowMode = searchParams.get('mode') ?? 'register';
  const queryEmail = searchParams.get('email') ?? location.state?.email ?? '';
  const queryToken = searchParams.get('token') ?? location.state?.token ?? '';
  const loginEmail = searchParams.get('email') ?? '';

  const defaultValues = useMemo(() => {
    if (variant === 'login') {
      return {
        email: loginEmail,
        password: '',
        remember_me: true,
      };
    }

    if (variant === 'register') {
      return {
        first_name: '',
        last_name: '',
        email: queryEmail,
        password: '',
        password_confirmation: '',
        terms: false,
      };
    }

    if (variant === 'verifyOtp') {
      return {
        email: queryEmail,
        otp: otpHint,
      };
    }

    if (variant === 'forgotPassword') {
      return {
        email: queryEmail,
      };
    }

    if (variant === 'resetPassword') {
      return {
        password: '',
        password_confirmation: '',
        token: queryToken,
      };
    }

    return {};
  }, [variant, loginEmail, queryEmail, queryToken, otpHint]);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
    setValue,
  } = useForm({
    defaultValues,
  });

  useEffect(() => {
    if (variant === 'login') {
      setValue('email', loginEmail);
      return;
    }

    if (variant === 'verifyOtp') {
      setValue('email', queryEmail);
      setValue('otp', otpHint);
      return;
    }

    if (variant === 'forgotPassword') {
      setValue('email', queryEmail);
      return;
    }

    if (variant === 'resetPassword') {
      setValue('token', queryToken);
    }
  }, [variant, loginEmail, queryEmail, queryToken, otpHint, setValue]);

  const passwordValue = watch('password');

  const fieldRules = {
    first_name: { required: 'First name is required.' },
    last_name: { required: 'Last name is required.' },
    email: {
      required: 'Email is required.',
      pattern: {
        value: /^\S+@\S+\.\S+$/,
        message: 'Enter a valid email address.',
      },
    },
    password: {
      required: 'Password is required.',
      minLength: {
        value: 8,
        message: 'Password must be at least 8 characters.',
      },
    },
    password_confirmation: {
      required: 'Please confirm your password.',
      validate: (value) => value === passwordValue || 'Passwords do not match.',
    },
    otp: {
      required: 'OTP is required.',
      minLength: {
        value: 6,
        message: 'OTP must be at least 6 digits.',
      },
    },
    token: {
      required: 'Reset token is required.',
    },
    terms: {
      validate: (value) => value || 'You must accept the terms.',
    },
  };

  const onSubmit = async (values) => {
    setSubmitMessage('');

    if (variant === 'register') {
      const response = await auth.register({
        ...values,
        terms: values.terms ? 'true' : 'false',
      });

      setOtpHint(response.otp ?? '');
      navigate(
        `/verify-otp?email=${encodeURIComponent(values.email)}&mode=register`,
        {
          state: {
            email: values.email,
            otp: response.otp ?? '',
          },
        },
      );
      return;
    }

    if (variant === 'login') {
      await auth.login({
        email: values.email,
        password: values.password,
        remember_me: values.remember_me ? 'true' : 'false',
      });
      navigate('/');
      return;
    }

    if (variant === 'verifyOtp') {
      if (flowMode === 'forgot') {
        const response = await auth.forgotVerifyOtp(values);
        navigate(
          `/reset-password?token=${encodeURIComponent(response.token ?? '')}&email=${encodeURIComponent(values.email)}`,
          {
            state: {
              token: response.token ?? '',
              email: values.email,
            },
          },
        );
        return;
      }

      await auth.verifyOtp(values);
      navigate(`/login?email=${encodeURIComponent(values.email)}`);
      return;
    }

    if (variant === 'forgotPassword') {
      const response = await auth.forgotPassword(values);
      setOtpHint(response.otp ?? '');
      navigate(
        `/verify-otp?email=${encodeURIComponent(values.email)}&mode=forgot`,
        {
          state: {
            email: values.email,
            otp: response.otp ?? '',
          },
        },
      );
      return;
    }

    if (variant === 'resetPassword') {
      await auth.resetPassword(values);
      navigate(`/login?email=${encodeURIComponent(queryEmail)}`);
    }
  };

  const handleResendOtp = async () => {
    if (!queryEmail) {
      setSubmitMessage('Enter an email first so OTP can be resent.');
      return;
    }

    try {
      const response =
        flowMode === 'forgot'
          ? await auth.forgotPassword({ email: queryEmail })
          : await auth.resendOtp({ email: queryEmail });

      setOtpHint(response.otp ?? '');
      setValue('otp', response.otp ?? '');
      setSubmitMessage('A new OTP has been generated.');
    } catch (error) {
      setSubmitMessage(error.message ?? 'Unable to resend OTP right now.');
    }
  };

  return (
    <div className="min-h-screen bg-black px-4 py-6 md:px-10 lg:px-24 lg:py-10">
      <div className="mx-auto flex min-h-[calc(100vh-3rem)] max-w-[1440px] flex-col rounded-[28px] border border-white/15 bg-[url('/hero_bg.svg')] bg-top bg-no-repeat lg:min-h-[880px]">
        <header className="flex items-center justify-between px-6 py-6 md:px-8 lg:px-12">
          <Link
            to="/"
            className="flex h-[56px] w-[56px] items-center justify-center rounded-full bg-[#7AB641] lg:h-[70px] lg:w-[70px]"
          >
            <img
              src="/navLEFTLogo.png"
              alt="Logo"
              className="h-[36px] w-[36px] object-contain lg:h-[48px] lg:w-[48px]"
            />
          </Link>
          <Link
            to="/"
            className="rounded-full border border-white px-5 py-2 text-sm font-medium tracking-[0.18em] text-white uppercase"
            style={{ fontFamily: 'Satoshi, sans-serif' }}
          >
            Back To Home
          </Link>
        </header>

        <main className="flex flex-1 items-center justify-center px-4 pb-8 pt-2 md:px-8 lg:px-12">
          <section className="w-full max-w-[560px] rounded-[32px] border border-white/15 bg-black/75 px-6 py-8 backdrop-blur-sm md:px-10 md:py-12">
            <p
              className="mb-4 text-sm font-normal uppercase tracking-[0.24em] text-[#7AB641]"
              style={{ fontFamily: 'Tilt Warp, cursive' }}
            >
              {page.eyebrow}
            </p>
            <h1
              className="m-0 text-[38px] font-medium leading-none text-white md:text-[52px]"
              style={{ fontFamily: 'Satoshi, sans-serif' }}
            >
              {page.title}
            </h1>
            <p
              className="mb-8 mt-4 text-base leading-7 text-white/70 md:text-lg"
              style={{ fontFamily: 'Satoshi, sans-serif' }}
            >
              {page.description}
            </p>

            {variant === 'verifyOtp' && otpHint ? (
              <div
                className="mb-6 rounded-[24px] border border-white/15 bg-white/5 px-5 py-4 text-sm text-white/80"
                style={{ fontFamily: 'Satoshi, sans-serif' }}
              >
                {AUTH_MODE === 'mock' ? `Mock OTP: ${otpHint}` : `OTP received: ${otpHint}`}
              </div>
            ) : null}

            <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
              {page.fields.map((field) => (
                <div key={field.name} className="space-y-2">
                  <label
                    className="block text-sm font-medium uppercase tracking-[0.16em] text-white/70"
                    style={{ fontFamily: 'Satoshi, sans-serif' }}
                  >
                    {field.label}
                  </label>
                  {field.type === 'checkbox' ? (
                    <label
                      className="flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-5 py-4 text-sm text-white/80"
                      style={{ fontFamily: 'Satoshi, sans-serif' }}
                    >
                      <input type="checkbox" className="h-4 w-4" {...register(field.name, fieldRules[field.name])} />
                      <span>{field.label}</span>
                    </label>
                  ) : (
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      className="w-full rounded-full border border-white/20 bg-white/10 px-5 py-4 text-base text-white outline-none placeholder:text-white/35"
                      style={{ fontFamily: 'Satoshi, sans-serif' }}
                      {...register(field.name, fieldRules[field.name])}
                    />
                  )}
                  {errors[field.name] ? (
                    <p
                      className="mb-0 text-sm text-[#ffb4b4]"
                      style={{ fontFamily: 'Satoshi, sans-serif' }}
                    >
                      {errors[field.name]?.message}
                    </p>
                  ) : null}
                </div>
              ))}

              {variant === 'login' ? (
                <p
                  className="mb-0 text-right text-sm text-white/70"
                  style={{ fontFamily: 'Satoshi, sans-serif' }}
                >
                  <Link to="/forgot-password" className="text-white underline underline-offset-4">
                    Forgot Password?
                  </Link>
                </p>
              ) : null}

              {submitMessage || auth.error ? (
                <p
                  className="mb-0 rounded-[24px] border border-white/15 bg-white/5 px-5 py-4 text-sm text-white/80"
                  style={{ fontFamily: 'Satoshi, sans-serif' }}
                >
                  {submitMessage || auth.error}
                </p>
              ) : null}

              {variant === 'verifyOtp' ? (
                <button
                  type="button"
                  onClick={handleResendOtp}
                  className="w-full rounded-full border border-white px-6 py-4 text-base font-medium uppercase tracking-[0.16em] text-white"
                  style={{ fontFamily: 'Satoshi, sans-serif' }}
                >
                  Resend OTP
                </button>
              ) : null}

              <button
                type="submit"
                disabled={isSubmitting || auth.status === 'loading'}
                className="w-full rounded-full bg-[#7AB641] px-6 py-4 text-base font-bold uppercase tracking-[0.2em] text-white disabled:opacity-70"
                style={{ fontFamily: 'Satoshi, sans-serif' }}
              >
                {isSubmitting || auth.status === 'loading' ? 'Please Wait' : page.primaryLabel}
              </button>

              <p
                className="mb-0 mt-6 text-center text-sm text-white/70"
                style={{ fontFamily: 'Satoshi, sans-serif' }}
              >
                {page.secondaryText}{' '}
                <Link to={page.secondaryLinkTo} className="text-white underline underline-offset-4">
                  {page.secondaryLinkLabel}
                </Link>
              </p>
            </form>
          </section>
        </main>
      </div>
    </div>
  );
}

export default AuthPage;
