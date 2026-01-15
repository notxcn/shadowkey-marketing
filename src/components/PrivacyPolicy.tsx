import { Navigation } from './Navigation';
import { Footer } from './Footer';

export function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-space-gradient">
            <Navigation />
            <main className="py-24 px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-8 md:p-12">
                        <h1 className="text-4xl font-bold text-white mb-2">Privacy Policy</h1>
                        <p className="text-slate-400 mb-8">Last Updated: January 15, 2026</p>

                        <div className="prose prose-invert prose-slate max-w-none">
                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-cyan-400 mb-4">Introduction</h2>
                                <p className="text-slate-300 leading-relaxed">
                                    ShadowKey ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy
                                    explains how we collect, use, and protect your information when you use the ShadowKey browser
                                    extension and associated services.
                                </p>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-cyan-400 mb-4">Data Collection and Usage</h2>
                                <p className="text-slate-300 leading-relaxed mb-4">
                                    We collect and process the minimum amount of data necessary to provide our services.
                                </p>

                                <h3 className="text-xl font-medium text-white mb-3">1. Session Data (Core Functionality)</h3>
                                <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
                                    <li><strong>Cookies:</strong> When you explicitly choose to "Capture" a session, the extension
                                        captures the cookies for the current active tab.</li>
                                    <li><strong>Zero-Knowledge Encryption:</strong> All session data is encrypted client-side using
                                        AES-256-GCM before being transmitted. We never have access to your decryption keys.</li>
                                    <li><strong>Usage:</strong> Encrypted session data is stored temporarily to enable the "Claim"
                                        functionality. Data is automatically deleted after the session duration expires.</li>
                                </ul>

                                <h3 className="text-xl font-medium text-white mb-3 mt-6">2. User Information</h3>
                                <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
                                    <li><strong>Email Addresses:</strong> We collect your email address for account authentication
                                        and session management.</li>
                                    <li><strong>IP Addresses:</strong> We log IP addresses for security purposes (e.g., "Kill Switch"
                                        functionality, Geo-Fencing) and audit logging.</li>
                                </ul>

                                <h3 className="text-xl font-medium text-white mb-3 mt-6">3. Browser Extension Permissions</h3>
                                <p className="text-slate-300 mb-3">The extension requires specific permissions to function:</p>
                                <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
                                    <li><code className="bg-slate-800 px-2 py-0.5 rounded">cookies</code>: To capture session state for sharing.</li>
                                    <li><code className="bg-slate-800 px-2 py-0.5 rounded">activeTab</code>: To identify the current site you wish to share.</li>
                                    <li><code className="bg-slate-800 px-2 py-0.5 rounded">storage</code>: To save your authentication token and preferences.</li>
                                    <li><code className="bg-slate-800 px-2 py-0.5 rounded">tabs</code>: To manage browser tab navigation during session injection.</li>
                                </ul>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-cyan-400 mb-4">Data Sharing</h2>
                                <p className="text-slate-300 leading-relaxed">
                                    <strong>We do NOT sell, trade, or share your personal data with third parties.</strong> Session
                                    data is only shared with the specific recipient you provide an access link to, and only for the
                                    duration you specify.
                                </p>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-cyan-400 mb-4">Data Retention</h2>
                                <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
                                    <li><strong>Session Data:</strong> Automatically deleted from our servers upon session expiration
                                        or when manually revoked.</li>
                                    <li><strong>Audit Logs:</strong> Retained for 30 days for security troubleshooting, then permanently
                                        deleted.</li>
                                    <li><strong>Account Data:</strong> Retained until you request account deletion.</li>
                                </ul>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-cyan-400 mb-4">Security</h2>
                                <p className="text-slate-300 leading-relaxed mb-4">
                                    We implement industry-standard security measures:
                                </p>
                                <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
                                    <li>All data in transit is encrypted via HTTPS (TLS 1.3).</li>
                                    <li>Session data is encrypted using AES-256-GCM with client-side key management (Zero-Knowledge).</li>
                                    <li>Direct database access is restricted to essential operations only.</li>
                                    <li>Regular security audits and monitoring.</li>
                                </ul>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-cyan-400 mb-4">Your Rights</h2>
                                <p className="text-slate-300 leading-relaxed mb-4">You have the right to:</p>
                                <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
                                    <li>Revoke any active session immediately via the dashboard ("Kill Switch").</li>
                                    <li>Request deletion of your account and associated data.</li>
                                    <li>Export your usage data upon request.</li>
                                    <li>Access and review your audit logs.</li>
                                </ul>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-cyan-400 mb-4">Contact Us</h2>
                                <p className="text-slate-300 leading-relaxed">
                                    If you have questions about this policy, please contact us at:<br />
                                    <a href="mailto:support@shadowkey.org" className="text-cyan-400 hover:text-cyan-300">
                                        support@shadowkey.org
                                    </a>
                                </p>
                            </section>

                            <section className="pt-8 border-t border-slate-700">
                                <p className="text-slate-500 text-sm">
                                    This privacy policy is effective as of January 15, 2026. We may update this policy from time to
                                    time. Any changes will be posted on this page with an updated revision date.
                                </p>
                            </section>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
