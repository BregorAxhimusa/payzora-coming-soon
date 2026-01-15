'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function ThankYou() {
  const router = useRouter();

  useEffect(() => {
    // Redirect back to home after 5 seconds
    const timer = setTimeout(() => {
      router.push('/');
    }, 5000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div
      className="flex min-h-screen items-center justify-center font-sans relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 50%, #0f0f0f 100%)',
        backgroundSize: '200% 200%',
        animation: 'gradient-shift 15s ease infinite'
      }}
    >
      {/* Subtle glow orbs in background */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/3 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>

      <main className="flex flex-col items-center justify-center px-6 py-12 text-center relative z-10 max-w-2xl">
        {/* Logo */}
        <div className="mb-8 animate-fade-in animate-float">
          <Image
            src="/payzora-logo.png"
            alt="Payzora Logo"
            width={200}
            height={60}
            priority
            className="drop-shadow-2xl"
            style={{ borderRadius: '8px' }}
          />
        </div>

        {/* Success Icon */}
        <div className="mb-6 animate-fade-in-up">
          <div className="w-20 h-20 mx-auto rounded-full bg-green-500/20 flex items-center justify-center backdrop-blur-sm">
            <svg
              className="w-10 h-10 text-green-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>

        {/* Thank You Message */}
        <h1 className="mb-4 text-4xl font-bold text-white md:text-6xl animate-fade-in-up delay-100" style={{
          textShadow: '0 0 40px rgba(255, 255, 255, 0.1)'
        }}>
          Thank You!
        </h1>

        <p className="mb-6 text-xl text-gray-400 md:text-2xl animate-fade-in-up delay-200">
          You&apos;re on the waitlist!
        </p>

        <p className="mb-8 text-base text-gray-500 animate-fade-in-up delay-300">
          We&apos;ll notify you as soon as Payzora launches.<br />
          Get ready for the future of crypto finance.
        </p>

        {/* Redirect message */}
        <p className="text-sm text-gray-600 animate-fade-in-up delay-400">
          Redirecting you back in a moment...
        </p>
      </main>
    </div>
  );
}
