/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#00A99D',
                    light: '#1BBFB3',
                    dark: '#008C82',
                },
                navy: '#1A4D6D',
                sky: '#4A9FBF',
                'bg-dark': '#0A1929',
                'bg-card': '#14293A',
            },
            fontFamily: {
                sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
                display: ['Space Grotesk', 'sans-serif'],
            },
            animation: {
                'gradient-shift': 'gradientShift 20s ease infinite',
                'float': 'float 20s ease-in-out infinite',
                'float-6': 'float 6s ease-in-out infinite',
                'pulse-dot': 'pulseDot 2s ease-in-out infinite',
                'pulse-ring': 'pulseRing 2s ease-out infinite',
                'glow-pulse': 'glowPulse 4s ease-in-out infinite',
                'gradient-move': 'gradientMove 3s ease infinite',
                'progress-grow': 'progressGrow 3s ease-in-out infinite',
                'card-float': 'cardFloat 6s ease-in-out infinite',
                'fade-in': 'fadeIn 1s ease-out 0.3s both',
                'fade-in-up': 'fadeInUp 1s ease-out forwards',
                'fade-in-scale': 'fadeInScale 0.8s ease-out forwards',
            },
            keyframes: {
                gradientShift: {
                    '0%, 100%': { opacity: '1', transform: 'scale(1) rotate(0deg)' },
                    '50%': { opacity: '0.8', transform: 'scale(1.1) rotate(5deg)' },
                },
                float: {
                    '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
                    '33%': { transform: 'translate(30px, -30px) scale(1.1)' },
                    '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
                },
                pulseDot: {
                    '0%, 100%': { opacity: '1', transform: 'scale(1)' },
                    '50%': { opacity: '0.5', transform: 'scale(1.2)' },
                },
                pulseRing: {
                    '0%': { opacity: '0.6', transform: 'translate(-50%, -50%) scale(0.95)' },
                    '100%': { opacity: '0', transform: 'translate(-50%, -50%) scale(1.1)' },
                },
                glowPulse: {
                    '0%, 100%': { opacity: '0.5', transform: 'translate(-50%, -50%) scale(1)' },
                    '50%': { opacity: '0.8', transform: 'translate(-50%, -50%) scale(1.2)' },
                },
                gradientMove: {
                    '0%, 100%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                },
                progressGrow: {
                    '0%': { width: '0%' },
                    '100%': { width: '65%' },
                },
                cardFloat: {
                    '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
                    '50%': { transform: 'translateY(-20px) rotate(2deg)' },
                },
                fadeIn: {
                    from: { opacity: '0' },
                    to: { opacity: '1' },
                },
                fadeInUp: {
                    from: { opacity: '0', transform: 'translateY(40px)' },
                    to: { opacity: '1', transform: 'translateY(0)' },
                },
                fadeInScale: {
                    from: { opacity: '0', transform: 'scale(0.9)' },
                    to: { opacity: '1', transform: 'scale(1)' },
                },
            },
            backdropBlur: {
                xs: '2px',
            },
        },
    },
    plugins: [],
};
