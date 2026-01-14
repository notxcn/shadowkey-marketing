import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const CHROME_EXTENSION_URL = 'https://chromewebstore.google.com/detail/shadowkey-zero-trust-acce/cojkdchpofekpjmdmehdbidggpcpnplf';

export function Navigation() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { scrollYProgress } = useScroll();
    const progressWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'How It Works', href: '#how-it-works' },
        { name: 'Features', href: '#features' },
        { name: 'Security', href: '#security' },
        { name: 'Docs', href: '#docs' },
    ];

    return (
        <>
            {/* Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-glow to-cyan-glow z-[60] origin-left"
                style={{ width: progressWidth }}
            />

            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-strong py-3' : 'bg-transparent py-5'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                    {/* Logo */}
                    <a href="#" className="flex items-center gap-3 group">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-glow to-cyan-glow p-0.5">
                            <div className="w-full h-full rounded-xl bg-space-900 flex items-center justify-center">
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                        </div>
                        <span className="text-xl font-bold text-white group-hover:text-gradient-purple transition-all duration-300">
                            ShadowKey
                        </span>
                    </a>

                    {/* Desktop Nav Links */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-text-muted hover:text-white text-sm font-medium relative group transition-colors duration-300"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-glow to-cyan-glow group-hover:w-full transition-all duration-300" />
                            </a>
                        ))}
                    </div>

                    {/* Desktop CTA */}
                    <div className="hidden md:flex items-center gap-4">
                        <a
                            href="https://app.shadowkey.org/login"
                            className="text-text-muted hover:text-white text-sm font-medium transition-colors duration-300"
                        >
                            Log In
                        </a>
                        <a
                            href={CHROME_EXTENSION_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-5 py-2.5 rounded-full bg-gradient-to-r from-purple-glow to-cyan-glow text-white text-sm font-semibold hover:scale-105 hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] transition-all duration-300 flex items-center gap-2"
                        >
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0C8.21 0 4.831 1.757 2.632 4.501l3.953 6.848A5.454 5.454 0 0112 6.545h10.691A12 12 0 0012 0zM1.931 5.47A11.943 11.943 0 000 12c0 6.012 4.42 10.991 10.189 11.864l3.953-6.847a5.45 5.45 0 01-6.865-2.29zm13.342 2.166a5.446 5.446 0 011.45 7.09l.002.001h-.002l-3.953 6.848c.062.004.124.006.187.006 6.627 0 12-5.373 12-12 0-.807-.08-1.595-.232-2.356zM12 16.364a4.364 4.364 0 110-8.728 4.364 4.364 0 010 8.728z" />
                            </svg>
                            Add to Chrome
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-white p-2"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {mobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                <motion.div
                    initial={false}
                    animate={mobileMenuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
                    className="md:hidden overflow-hidden glass-strong"
                >
                    <div className="px-6 py-4 flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-text-muted hover:text-white text-base font-medium transition-colors duration-300"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                        <hr className="border-glass-border" />
                        <a href="https://app.shadowkey.org/login" className="text-text-muted hover:text-white text-base font-medium">
                            Log In
                        </a>
                        <a
                            href={CHROME_EXTENSION_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full py-3 rounded-full bg-gradient-to-r from-purple-glow to-cyan-glow text-white font-semibold text-center flex items-center justify-center gap-2"
                        >
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0C8.21 0 4.831 1.757 2.632 4.501l3.953 6.848A5.454 5.454 0 0112 6.545h10.691A12 12 0 0012 0zM1.931 5.47A11.943 11.943 0 000 12c0 6.012 4.42 10.991 10.189 11.864l3.953-6.847a5.45 5.45 0 01-6.865-2.29zm13.342 2.166a5.446 5.446 0 011.45 7.09l.002.001h-.002l-3.953 6.848c.062.004.124.006.187.006 6.627 0 12-5.373 12-12 0-.807-.08-1.595-.232-2.356zM12 16.364a4.364 4.364 0 110-8.728 4.364 4.364 0 010 8.728z" />
                            </svg>
                            Add to Chrome
                        </a>
                    </div>
                </motion.div>
            </motion.nav>
        </>
    );
}

export { CHROME_EXTENSION_URL };
