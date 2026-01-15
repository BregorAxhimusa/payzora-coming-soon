'use client';

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/maqqnpwz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        router.push('/thank-you');
      }
    } catch (error) {
      console.error('Error submitting email:', error);
      setIsSubmitting(false);
    }
  };

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

      <main className="flex flex-col items-center justify-center px-6 py-12 text-center relative z-10">
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

        {/* Headline */}
        <h1 className="mb-4 text-5xl font-bold text-white md:text-7xl" style={{
          textShadow: '0 0 40px rgba(255, 255, 255, 0.1)'
        }}>
          {'Coming Soon'.split('').map((char, index) => (
            <span
              key={index}
              className="inline-block animate-fade-in-up"
              style={{
                animationDelay: `${index * 0.05}s`,
                opacity: 0,
                animationFillMode: 'forwards'
              }}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </h1>

        {/* Tagline */}
        <p className="mb-12 text-xl text-gray-400 md:text-2xl animate-fade-in-up delay-100">
          Your Crypto Financial Hub
        </p>

        {/* Email Form */}
        <form onSubmit={handleSubmit} className="w-full max-w-md mb-8 animate-fade-in-up delay-200">
          <div className="flex flex-col gap-4 sm:flex-row">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-6 py-4 text-gray-900 bg-white rounded-full focus:outline-none shadow-lg transition-all hover:shadow-xl"
              style={{
                backdropFilter: 'blur(10px)',
              }}
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-8 py-4 font-semibold text-white rounded-full transition-all shadow-lg hover:shadow-2xl hover:scale-105 cursor-pointer relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              style={{ backgroundColor: '#1a1a1a' }}
              onMouseEnter={(e) => {
                if (!isSubmitting) {
                  e.currentTarget.style.backgroundColor = '#252525';
                  e.currentTarget.style.boxShadow = '0 0 30px rgba(255, 255, 255, 0.2)';
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#1a1a1a';
                e.currentTarget.style.boxShadow = '';
              }}
            >
              <span className="relative z-10">{isSubmitting ? 'Submitting...' : 'Join Waitlist'}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            </button>
          </div>
        </form>

        {/* Social Links */}
        <div className="flex gap-6 mb-8 animate-fade-in-up delay-300">
          <a
            href="https://twitter.com/payzora"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-14 h-14 text-white transition-all bg-white/10 rounded-full hover:bg-white/20 hover:scale-110 backdrop-blur-sm relative group"
            aria-label="Twitter"
            style={{
              boxShadow: '0 0 20px rgba(255, 255, 255, 0.05)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 0 30px rgba(255, 255, 255, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 0 20px rgba(255, 255, 255, 0.05)';
            }}
          >
            <svg
              className="w-6 h-6 transition-transform group-hover:rotate-12"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
        </div>

        {/* Footer Text */}
        <p className="text-sm text-gray-500 animate-fade-in-up delay-400" style={{
          textShadow: '0 0 10px rgba(255, 255, 255, 0.05)'
        }}>
          Building the future of crypto finance
        </p>
      </main>
    </div>
  );
}
