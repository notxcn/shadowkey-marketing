import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const CHROME_EXTENSION_URL = 'https://chromewebstore.google.com/detail/shadowkey-zero-trust-acce/cojkdchpofekpjmdmehdbidggpcpnplf';

export function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end start'],
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

    // Parallax for floating orbs
    const orb1Y = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const orb2Y = useTransform(scrollYProgress, [0, 1], [0, -150]);
    const orb3Y = useTransform(scrollYProgress, [0, 1], [0, -80]);

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
        >
            {/* Background Gradient Orbs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    style={{ y: orb1Y }}
                    className="absolute top-1/4 -left-32 w-96 h-96 bg-purple-glow/20 rounded-full blur-[100px]"
                />
                <motion.div
                    style={{ y: orb2Y }}
                    className="absolute top-1/3 -right-32 w-80 h-80 bg-cyan-glow/15 rounded-full blur-[100px]"
                />
                <motion.div
                    style={{ y: orb3Y }}
                    className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-purple-glow/10 rounded-full blur-[80px]"
                />
            </div>

            {/* Grid Pattern Overlay */}
            <div
                className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage: `linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)`,
                    backgroundSize: '50px 50px',
                }}
            />

            {/* Content */}
            <motion.div
                style={{ y, opacity, scale }}
                className="relative z-10 max-w-5xl mx-auto px-6 text-center"
            >
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
                >
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-sm text-text-muted">Zero-Trust Session Manager</span>
                </motion.div>

                {/* Main Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-[1.1]"
                >
                    <span className="text-gradient">Share Access,</span>
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-glow via-blue-400 to-cyan-glow">Not Passwords</span>
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="text-lg md:text-xl text-text-muted max-w-2xl mx-auto mb-10 leading-relaxed"
                >
                    The zero-knowledge session manager for secure teams. Share active sessions
                    with contractors and third-party vendors without ever revealing your credentials.
                </motion.p>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <a
                        href={CHROME_EXTENSION_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group px-8 py-4 rounded-full bg-gradient-to-r from-purple-glow to-cyan-glow text-white font-semibold text-lg hover:scale-105 hover:shadow-[0_0_40px_rgba(139,92,246,0.5)] transition-all duration-300 flex items-center gap-3"
                    >
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0C8.21 0 4.831 1.757 2.632 4.501l3.953 6.848A5.454 5.454 0 0112 6.545h10.691A12 12 0 0012 0zM1.931 5.47A11.943 11.943 0 000 12c0 6.012 4.42 10.991 10.189 11.864l3.953-6.847a5.45 5.45 0 01-6.865-2.29zm13.342 2.166a5.446 5.446 0 011.45 7.09l.002.001h-.002l-3.953 6.848c.062.004.124.006.187.006 6.627 0 12-5.373 12-12 0-.807-.08-1.595-.232-2.356zM12 16.364a4.364 4.364 0 110-8.728 4.364 4.364 0 010 8.728z" />
                        </svg>
                        Add to Chrome — It's Free
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                    <a href="#how-it-works" className="px-8 py-4 rounded-full border border-white/20 text-white font-semibold text-lg hover:bg-white/5 hover:border-white/30 transition-all duration-300 flex items-center gap-2">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                        </svg>
                        See How It Works
                    </a>
                </motion.div>

                {/* Trust Badges */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="mt-16 inline-flex items-center gap-6 px-8 py-4 rounded-2xl glass"
                >
                    <div className="flex items-center gap-2 text-sm text-text-muted">
                        <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                        <span>End-to-End Encrypted</span>
                    </div>
                    <div className="w-px h-4 bg-white/10" />
                    <div className="flex items-center gap-2 text-sm text-text-muted">
                        <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                        <span>Zero-Knowledge Architecture</span>
                    </div>
                    <div className="w-px h-4 bg-white/10" />
                    <div className="flex items-center gap-2 text-sm text-text-muted">
                        <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Self-Destructing Links</span>
                    </div>
                </motion.div>
            </motion.div>

            {/* Floating Device Mockups */}
            <motion.div
                style={{ y: useTransform(scrollYProgress, [0, 1], [0, 100]) }}
                className="absolute bottom-10 left-10 hidden lg:block"
            >
                <div className="w-32 h-48 rounded-2xl glass border border-white/10 p-2 rotate-12">
                    <div className="w-full h-full rounded-xl bg-gradient-to-b from-purple-glow/20 to-cyan-glow/20 flex items-center justify-center">
                        <svg className="w-8 h-8 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                    </div>
                </div>
            </motion.div>
            <motion.div
                style={{ y: useTransform(scrollYProgress, [0, 1], [0, 80]) }}
                className="absolute bottom-20 right-10 hidden lg:block"
            >
                <div className="w-40 h-28 rounded-2xl glass border border-white/10 p-2 -rotate-6">
                    <div className="w-full h-full rounded-xl bg-gradient-to-r from-cyan-glow/20 to-purple-glow/20 flex items-center justify-center">
                        <svg className="w-8 h-8 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                        </svg>
                    </div>
                </div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-1.5"
                >
                    <div className="w-1.5 h-3 rounded-full bg-white/50" />
                </motion.div>
            </motion.div>
        </section>
    );
}

export { CHROME_EXTENSION_URL };
