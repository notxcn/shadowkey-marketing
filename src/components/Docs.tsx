import { motion } from 'framer-motion';

const docsSections = [
    {
        id: 'zero-knowledge',
        title: 'Zero-Knowledge Architecture',
        description: 'ShadowKey uses a zero-knowledge architecture where your encryption keys are generated and stored exclusively in your browser. Our servers store only encrypted blobs that we physically cannot decrypt.',
        details: [
            'Keys generated using browser\'s Web Crypto API',
            'AES-256-GCM encryption before upload',
            'Decryption key is part of the URL fragment (never sent to server)',
            'Server stores only ciphertext',
        ],
    },
    {
        id: 'one-time-use',
        title: 'One-Time Use & Expiring Links',
        description: 'Session links can be configured to expire after a single use or after a set duration. This ensures credentials are never accessible longer than necessary.',
        details: [
            'Single-use tokens that self-destruct after first access',
            'Time-based expiration: 30 min to 1 week',
            'Automatic cleanup of expired sessions',
            'Option to extend expiration for active sessions',
        ],
    },
    {
        id: 'granular-control',
        title: 'Granular Access Control',
        description: 'Maintain full control over shared sessions. Revoke access instantly, view complete audit logs, and monitor all contractor activities in real-time.',
        details: [
            'One-click remote session revocation',
            'Complete audit trail with timestamps and IPs',
            'Activity logs for compliance requirements',
            'Webhook notifications for security events',
        ],
    },
    {
        id: 'real-time-monitoring',
        title: 'Real-Time Monitoring',
        description: 'Monitor contractor activity as it happens. Get instant alerts when sessions are accessed, and automatically terminate suspicious activity.',
        details: [
            'Live session activity dashboard',
            'Instant email/Slack alerts on access',
            'Automatic revocation on anomaly detection',
            'Geographic access logging',
        ],
    },
    {
        id: 'device-fingerprinting',
        title: 'Device Fingerprinting',
        description: 'Sessions are cryptographically bound to the recipient\'s device. If someone attempts to use the session from a different device, access is automatically revoked.',
        details: [
            'Browser fingerprint validation',
            'Hardware ID verification',
            'Automatic revocation on device mismatch',
            'Trust scoring based on device history',
        ],
    },
    {
        id: 'works-everywhere',
        title: 'Universal Compatibility',
        description: 'ShadowKey works with any website or web application. No integrations or code changes required — just install the Chrome extension and start sharing.',
        details: [
            'Works with any website (SaaS, internal tools, etc.)',
            'Chrome extension with one-click capture',
            'No vendor lock-in or API integrations needed',
            'Supports cookies, local storage, and session tokens',
        ],
    },
];

export function Docs() {
    return (
        <section id="docs" className="relative py-32 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
                <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-glow/5 rounded-full blur-[150px]" />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block text-sm text-purple-glow font-semibold uppercase tracking-widest mb-4"
                    >
                        Documentation
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
                    >
                        How It All Works
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-text-muted max-w-2xl mx-auto"
                    >
                        Deep dive into the features that make ShadowKey the most secure session sharing platform.
                    </motion.p>
                </div>

                {/* System Architecture */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <h3 className="text-2xl font-bold text-white mb-8 text-center">System Architecture</h3>
                    <div className="glass rounded-2xl p-8">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                            {/* Admin */}
                            <div className="text-center flex-1">
                                <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-purple-glow to-violet-600 flex items-center justify-center">
                                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                </div>
                                <h4 className="font-bold text-white mb-2">Admin</h4>
                                <p className="text-text-muted text-sm">Captures session & encrypts locally</p>
                            </div>

                            {/* Arrow 1 */}
                            <div className="flex flex-col items-center">
                                <div className="hidden md:block w-24 h-0.5 bg-gradient-to-r from-purple-glow to-blue-500" />
                                <div className="md:hidden h-12 w-0.5 bg-gradient-to-b from-purple-glow to-blue-500" />
                                <span className="text-xs text-text-muted mt-2 bg-space-900 px-2">Encrypted Blob</span>
                            </div>

                            {/* Cloud */}
                            <div className="text-center flex-1">
                                <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-glow flex items-center justify-center">
                                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                                    </svg>
                                </div>
                                <h4 className="font-bold text-white mb-2">ShadowKey Cloud</h4>
                                <p className="text-text-muted text-sm">Stores encrypted blob (zero-knowledge)</p>
                            </div>

                            {/* Arrow 2 */}
                            <div className="flex flex-col items-center">
                                <div className="hidden md:block w-24 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-glow" />
                                <div className="md:hidden h-12 w-0.5 bg-gradient-to-b from-blue-500 to-cyan-glow" />
                                <span className="text-xs text-text-muted mt-2 bg-space-900 px-2">Magic Link + Key</span>
                            </div>

                            {/* Contractor */}
                            <div className="text-center flex-1">
                                <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-cyan-glow to-emerald-500 flex items-center justify-center">
                                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <h4 className="font-bold text-white mb-2">Contractor</h4>
                                <p className="text-text-muted text-sm">Decrypts & uses session (temporary)</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Feature Details */}
                <div className="space-y-8">
                    {docsSections.map((section, index) => (
                        <motion.div
                            key={section.id}
                            id={`docs-${section.id}`}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="glass rounded-2xl p-8 scroll-mt-24"
                        >
                            <h3 className="text-xl font-bold text-white mb-4">{section.title}</h3>
                            <p className="text-text-muted mb-6 leading-relaxed">{section.description}</p>
                            <ul className="space-y-3">
                                {section.details.map((detail, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <svg className="w-5 h-5 text-purple-glow flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-text-muted text-sm">{detail}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
