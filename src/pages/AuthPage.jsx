import { Link } from 'react-router-dom';

const copyByVariant = {
  login: {
    eyebrow: 'Welcome Back',
    title: 'Login',
    description: 'Sign in to continue to the landing page experience.',
    primaryLabel: 'Login',
    secondaryText: "Don't have an account?",
    secondaryLinkLabel: 'Register',
    secondaryLinkTo: '/register',
    fields: ['Email', 'Password'],
  },
  register: {
    eyebrow: 'Join The Community',
    title: 'Register',
    description: 'Create your account using the same visual style as the landing page.',
    primaryLabel: 'Create Account',
    secondaryText: 'Already have an account?',
    secondaryLinkLabel: 'Login',
    secondaryLinkTo: '/login',
    fields: ['First Name', 'Last Name', 'Email', 'Password', 'Confirm Password'],
  },
  verifyOtp: {
    eyebrow: 'Verification',
    title: 'Verify OTP',
    description: 'Enter the code from the API response to complete verification.',
    primaryLabel: 'Verify Code',
    secondaryText: 'Need another code?',
    secondaryLinkLabel: 'Back to Register',
    secondaryLinkTo: '/register',
    fields: ['Email', 'OTP'],
  },
  forgotPassword: {
    eyebrow: 'Password Recovery',
    title: 'Forgot Password',
    description: 'Request a recovery code using your registered email address.',
    primaryLabel: 'Send OTP',
    secondaryText: 'Remembered your password?',
    secondaryLinkLabel: 'Login',
    secondaryLinkTo: '/login',
    fields: ['Email'],
  },
  resetPassword: {
    eyebrow: 'Reset Access',
    title: 'Reset Password',
    description: 'Set a new password after successful recovery verification.',
    primaryLabel: 'Reset Password',
    secondaryText: 'Back to',
    secondaryLinkLabel: 'Login',
    secondaryLinkTo: '/login',
    fields: ['New Password', 'Confirm Password', 'Reset Token'],
  },
};

function AuthPage({ variant }) {
  const page = copyByVariant[variant];

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

            <div className="space-y-4">
              {page.fields.map((field) => (
                <div key={field} className="space-y-2">
                  <label
                    className="block text-sm font-medium uppercase tracking-[0.16em] text-white/70"
                    style={{ fontFamily: 'Satoshi, sans-serif' }}
                  >
                    {field}
                  </label>
                  <input
                    type="text"
                    placeholder={field}
                    className="w-full rounded-full border border-white/20 bg-white/10 px-5 py-4 text-base text-white outline-none placeholder:text-white/35"
                    style={{ fontFamily: 'Satoshi, sans-serif' }}
                    readOnly
                  />
                </div>
              ))}
            </div>

            <button
              type="button"
              className="mt-8 w-full rounded-full bg-[#7AB641] px-6 py-4 text-base font-bold uppercase tracking-[0.2em] text-white"
              style={{ fontFamily: 'Satoshi, sans-serif' }}
            >
              {page.primaryLabel}
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
          </section>
        </main>
      </div>
    </div>
  );
}

export default AuthPage;
