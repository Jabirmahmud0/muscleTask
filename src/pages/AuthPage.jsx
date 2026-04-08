import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
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
  const [toastMessage, setToastMessage] = useState('');
  const flowMode = searchParams.get('mode') ?? 'register';
  const queryEmail = searchParams.get('email') ?? location.state?.email ?? '';
  const queryToken = searchParams.get('token') ?? location.state?.token ?? '';
  const loginEmail = searchParams.get('email') ?? '';
  const isSplitAuthLayout = variant === 'login' || variant === 'register';
  const isRegisterVariant = variant === 'register';

  const defaultValues = useMemo(() => {
    if (variant === 'login') {
      return {
        email: loginEmail,
        password: '',
      };
    }

    if (variant === 'register') {
      return {
        first_name: '',
        last_name: '',
        email: queryEmail,
        password: '',
        password_confirmation: '',
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

  useEffect(() => {
    if (!toastMessage) {
      return undefined;
    }

    const timeoutId = window.setTimeout(() => {
      setToastMessage('');
    }, 3200);

    return () => window.clearTimeout(timeoutId);
  }, [toastMessage]);

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
  };

  const onSubmit = async (values) => {
    setSubmitMessage('');

    if (variant === 'register') {
      try {
        const response = await auth.register({
          ...values,
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
      } catch (error) {
        setToastMessage(error.message ?? 'Unable to create the account right now.');
      }
      return;
    }

    if (variant === 'login') {
      try {
        await auth.login({
          email: values.email,
          password: values.password,
        });
        navigate('/');
      } catch (error) {
        setToastMessage(error.message ?? 'Login failed. Please try again.');
      }
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

  const sidePanelCopy = isRegisterVariant
      ? {
        title: 'Welcome Back',
        description: 'Already have an account? Sign in and continue your training journey.',
        ctaLabel: 'Sign In',
        ctaTo: '/login',
      }
    : {
        title: 'New Here?',
        description: 'Create your account and unlock the full Muscle experience in a few steps.',
        ctaLabel: 'Sign Up',
        ctaTo: '/register',
      };

  const renderField = (field) => (
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
  );

  const formContent = (
    <>
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
        {isRegisterVariant ? (
          <div className="grid gap-4 md:grid-cols-2">
            {page.fields.slice(0, 2).map(renderField)}
          </div>
        ) : null}

        <div className="space-y-4">
          {(isRegisterVariant ? page.fields.slice(2) : page.fields).map(renderField)}
        </div>

        {variant === 'login' ? (
          <p
            className="mb-4 text-right text-sm text-white/70 md:mb-6"
            style={{ fontFamily: 'Satoshi, sans-serif' }}
          >
            <Link to="/forgot-password" className="text-[#7AB641] underline underline-offset-4">
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
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#7AB641] px-6 py-4 text-base font-bold uppercase tracking-[0.2em] text-black shadow-[0_16px_40px_rgba(122,182,65,0.28)] disabled:opacity-70"
          style={{ fontFamily: 'Satoshi, sans-serif' }}
        >
          {isSubmitting || auth.status === 'loading' ? 'Please Wait' : page.primaryLabel}
          {isSubmitting || auth.status === 'loading' ? null : <ArrowRight size={18} strokeWidth={2.2} />}
        </button>

        {isSplitAuthLayout ? null : (
          <p
            className="mb-0 mt-6 text-center text-sm text-white/70"
            style={{ fontFamily: 'Satoshi, sans-serif' }}
          >
            {page.secondaryText}{' '}
            <Link to={page.secondaryLinkTo} className="text-[#7AB641] underline underline-offset-4">
              {page.secondaryLinkLabel}
            </Link>
          </p>
        )}
      </form>
    </>
  );

  return (
    <div className="min-h-screen bg-black px-4 py-6 md:px-10 lg:px-24 lg:py-10">
      {toastMessage ? (
        <motion.div
          initial={{ opacity: 0, y: -14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="fixed left-4 right-4 top-4 z-[80] mx-auto max-w-[460px] rounded-[22px] border border-[#ff7b7b]/40 bg-[#2c1111]/95 px-5 py-4 text-sm text-[#ffd0d0] shadow-[0_18px_50px_rgba(0,0,0,0.35)]"
          style={{ fontFamily: 'Satoshi, sans-serif' }}
        >
          {toastMessage}
        </motion.div>
      ) : null}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.28, ease: 'easeOut' }}
        className="mx-auto flex min-h-[calc(100vh-3rem)] max-w-[1440px] flex-col rounded-[28px] border border-white/15 bg-[url('/hero_bg.svg')] bg-top bg-no-repeat lg:min-h-[880px]"
      >
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
            className="inline-flex items-center gap-2 rounded-full border border-white px-5 py-2 text-sm font-medium tracking-[0.18em] text-white uppercase"
            style={{ fontFamily: 'Satoshi, sans-serif' }}
          >
            <ArrowLeft size={16} strokeWidth={2.2} />
            Back To Home
          </Link>
        </header>

        <main className="flex flex-1 items-center justify-center px-4 pb-8 pt-2 md:px-8 lg:px-12">
          {isSplitAuthLayout ? (
            <motion.section
              layout
              transition={{ duration: 0.34, ease: 'easeInOut' }}
              className="grid w-full max-w-[1180px] overflow-hidden rounded-[34px] border border-white/15 bg-black/70 shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-sm lg:min-h-[680px] lg:grid-cols-[0.92fr_1.35fr]"
            >
              {isRegisterVariant ? (
                <>
                  <motion.aside
                    layout
                    initial={{ opacity: 0, x: -32 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    className="relative flex min-h-[260px] flex-col justify-between overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(122,182,65,0.32),transparent_24%),linear-gradient(180deg,#18290F_0%,#0B0B0B_100%)] px-8 py-10 md:px-10 lg:px-12 lg:py-12"
                  >
                    <div className="absolute left-8 top-10 h-24 w-24 rounded-full bg-[#7AB641]/12 blur-2xl" />
                    <div className="absolute bottom-14 left-12 h-28 w-28 rounded-full bg-white/6 blur-2xl" />
                    <div className="relative">
                      <div className="mb-8 flex h-[72px] w-[72px] items-center justify-center rounded-[22px] border border-white/15 bg-white/8 text-[28px] font-bold text-white">
                        M
                      </div>
                      <h2
                        className="max-w-[260px] text-[34px] leading-none text-white md:text-[42px]"
                        style={{ fontFamily: 'Satoshi, sans-serif' }}
                      >
                        {sidePanelCopy.title}
                      </h2>
                      <p
                        className="mt-5 max-w-[280px] text-base leading-7 text-white/70"
                        style={{ fontFamily: 'Satoshi, sans-serif' }}
                      >
                        {sidePanelCopy.description}
                      </p>
                    </div>
                    <div className="relative">
                      <Link
                        to={sidePanelCopy.ctaTo}
                        className="inline-flex rounded-full border border-white/35 px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] text-white transition-colors hover:bg-white hover:text-black"
                        style={{ fontFamily: 'Satoshi, sans-serif' }}
                      >
                        {sidePanelCopy.ctaLabel}
                      </Link>
                      <p
                        className="mt-10 text-sm text-white/55"
                        style={{ fontFamily: 'Satoshi, sans-serif' }}
                      >
                        Trusted by athletes building consistency every day
                      </p>
                    </div>
                  </motion.aside>

                  <motion.div
                    layout
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    className="px-6 py-8 md:px-10 md:py-12 lg:px-16 lg:py-14"
                  >
                    <div className="mb-8 flex items-center justify-center gap-2 lg:justify-start">
                      {[0, 1, 2].map((step) => (
                        <span
                          key={step}
                          className={`h-[4px] w-20 rounded-full ${step === 0 ? 'bg-[#7AB641]' : 'bg-white/12'}`}
                        />
                      ))}
                    </div>
                    {formContent}
                  </motion.div>
                </>
              ) : (
                <>
                  <motion.div
                    layout
                    initial={{ opacity: 0, x: -24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    className="px-6 py-8 md:px-10 md:py-12 lg:px-16 lg:py-14"
                  >
                    {formContent}
                  </motion.div>

                  <motion.aside
                    layout
                    initial={{ opacity: 0, x: 32 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    className="relative flex min-h-[260px] flex-col justify-between overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(122,182,65,0.32),transparent_24%),linear-gradient(180deg,#18290F_0%,#0B0B0B_100%)] px-8 py-10 md:px-10 lg:px-12 lg:py-12"
                  >
                    <div className="absolute right-8 top-10 h-24 w-24 rounded-full bg-[#7AB641]/12 blur-2xl" />
                    <div className="absolute bottom-14 left-12 h-28 w-28 rounded-full bg-white/6 blur-2xl" />
                    <div className="relative lg:text-right">
                      <div className="mb-8 flex h-[72px] w-[72px] items-center justify-center rounded-[22px] border border-white/15 bg-white/8 text-[28px] font-bold text-white lg:ml-auto">
                        M
                      </div>
                      <h2
                        className="ml-auto max-w-[260px] text-[34px] leading-none text-white md:text-[42px]"
                        style={{ fontFamily: 'Satoshi, sans-serif' }}
                      >
                        {sidePanelCopy.title}
                      </h2>
                      <p
                        className="ml-auto mt-5 max-w-[280px] text-base leading-7 text-white/70"
                        style={{ fontFamily: 'Satoshi, sans-serif' }}
                      >
                        {sidePanelCopy.description}
                      </p>
                    </div>
                    <div className="relative lg:text-right">
                      <Link
                        to={sidePanelCopy.ctaTo}
                        className="inline-flex rounded-full border border-white/35 px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] text-white transition-colors hover:bg-white hover:text-black"
                        style={{ fontFamily: 'Satoshi, sans-serif' }}
                      >
                        {sidePanelCopy.ctaLabel}
                      </Link>
                      <p
                        className="mt-10 text-sm text-white/55"
                        style={{ fontFamily: 'Satoshi, sans-serif' }}
                      >
                        Trusted by athletes building consistency every day
                      </p>
                    </div>
                  </motion.aside>
                </>
              )}
            </motion.section>
          ) : (
            <section className="w-full max-w-[560px] rounded-[32px] border border-white/15 bg-black/75 px-6 py-8 backdrop-blur-sm md:px-10 md:py-12">
              {formContent}
            </section>
          )}
        </main>
      </motion.div>
    </div>
  );
}

export default AuthPage;
