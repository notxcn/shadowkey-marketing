import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true });
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (isInView) {
            let start = 0;
            const duration = 2000;
            const increment = target / (duration / 16);

            const counter = setInterval(() => {
                start += increment;
                if (start >= target) {
                    setCount(target);
                    clearInterval(counter);
                } else {
                    setCount(Math.floor(start));
                }
            }, 16);

            return () => clearInterval(counter);
        }
    }, [isInView, target]);

    return (
        <span ref={ref}>
            {count.toLocaleString()}{suffix}
        </span>
    );
}

const securityFeatures = [
    {
        title: 'AES-256 Encryption',
        description: 'All session data is encrypted with military-grade AES-256 before leaving your device.',
    },
    {
        title: 'Client-Side Decryption',
        description: 'Keys never touch our servers. Decryption happens entirely in your browser.',
    },
    {
        title: 'Auto-Expiring Links',
        description: 'Set session links to expire after a specific time or number of uses.',
    },
    {
        title: 'Remote Revocation',
        description: 'Instantly revoke access to any shared session with a single click.',
    },
];

const stats = [
    { value: 50, suffix: 'K+', label: 'Active Users' },
    { value: 2, suffix: 'M+', label: 'Sessions Secured' },
    { value: 99.99, suffix: '%', label: 'Uptime' },
    { value: 0, suffix: '', label: 'Data Breaches' },
];

export function Security() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start'],
    });

    const imageY = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const contentX = useTransform(scrollYProgress, [0.2, 0.5], [-50, 0]);
    const contentOpacity = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);

    return (
        <section id="security" ref={containerRef} className="relative py-32 overflow-hidden">
            {/* Stats Section */}
            <div className="max-w-7xl mx-auto px-6 mb-32">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="text-center"
                        >
                            <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                                {stat.value === 0 ? (
                                    <span className="text-green-400">Zero</span>
                                ) : (
                                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                                )}
                            </div>
                            <div className="text-text-muted text-sm uppercase tracking-widest">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Security Visualization */}
                    <motion.div style={{ y: imageY }} className="relative">
                        <div className="relative">
                            {/* Shield Icon */}
                            <div className="w-64 h-64 md:w-80 md:h-80 mx-auto relative">
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-glow to-cyan-glow rounded-full opacity-20 blur-3xl animate-pulse" />
                                <div className="absolute inset-4 glass rounded-full flex items-center justify-center">
                                    <svg className="w-24 h-24 md:w-32 md:h-32 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                </div>

                                {/* Orbiting Elements */}
                                <div className="absolute inset-0 animate-spin" style={{ animationDuration: '20s' }}>
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-purple-glow rounded-full" />
                                </div>
                                <div className="absolute inset-0 animate-spin" style={{ animationDuration: '25s', animationDirection: 'reverse' }}>
                                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-cyan-glow rounded-full" />
                                </div>
                                <div className="absolute inset-0 animate-spin" style={{ animationDuration: '30s' }}>
                                    <div className="absolute top-1/2 right-0 -translate-y-1/2 w-5 h-5 bg-purple-glow/60 rounded-full" />
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Content */}
                    <motion.div style={{ x: contentX, opacity: contentOpacity }}>
                        <span className="text-sm text-cyan-glow font-semibold uppercase tracking-widest mb-4 block">
                            Enterprise Security
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Your sessions are
                            <br />
                            <span className="text-gradient-purple">always protected</span>
                        </h2>
                        <p className="text-lg text-text-muted mb-10 leading-relaxed">
                            ShadowKey uses a zero-knowledge architecture. We physically cannot access your session data — only you and your authorized recipients can decrypt it.
                        </p>

                        {/* Security Features List */}
                        <div className="space-y-6">
                            {securityFeatures.map((feature, index) => (
                                <motion.div
                                    key={feature.title}
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.15 }}
                                    className="flex gap-4"
                                >
                                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-purple-glow to-cyan-glow flex items-center justify-center">
                                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-white mb-1">{feature.title}</h4>
                                        <p className="text-text-muted text-sm">{feature.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
