import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const CHROME_EXTENSION_URL = 'https://chromewebstore.google.com/detail/shadowkey-zero-trust-acce/cojkdchpofekpjmdmehdbidggpcpnplf';

const testimonials = [
    {
        quote: "ShadowKey has completely changed how we work with contractors. No more password spreadsheets or risky screen shares. It's incredible.",
        author: "Sarah Chen",
        role: "CTO, TechStartup Inc.",
        avatar: "SC",
        rating: 5,
    },
    {
        quote: "We onboard freelancers in minutes now, not days. The self-destructing links give us peace of mind that access is truly temporary.",
        author: "Marcus Johnson",
        role: "IT Director, FinanceHub",
        avatar: "MJ",
        rating: 5,
    },
    {
        quote: "The zero-knowledge architecture means even if ShadowKey were compromised, our credentials would be safe. That's the security model we need.",
        author: "Emily Rodriguez",
        role: "CISO, SecureCorp",
        avatar: "ER",
        rating: 5,
    },
    {
        quote: "I've tried every password manager and session sharing tool out there. ShadowKey is the only one that actually works without compromising security.",
        author: "David Kim",
        role: "DevOps Lead, CloudScale",
        avatar: "DK",
        rating: 5,
    },
    {
        quote: "Our audit team loves the complete visibility into contractor access. Every login, every action, fully tracked and time-limited.",
        author: "Lisa Thompson",
        role: "Compliance Manager, HealthTech",
        avatar: "LT",
        rating: 5,
    },
    {
        quote: "The Chrome extension works flawlessly with our internal tools. Setup took 5 minutes, and our contractors were productive immediately.",
        author: "James Wilson",
        role: "Engineering Manager, SaaSCo",
        avatar: "JW",
        rating: 5,
    },
];

const partners = [
    'TechCrunch', 'Product Hunt', 'Hacker News', 'Y Combinator', 'BetaList'
];

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
    return (
        <div className="glass rounded-2xl p-8 h-full flex flex-col">
            {/* Stars */}
            <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                ))}
            </div>

            {/* Quote */}
            <p className="text-lg text-white mb-8 leading-relaxed flex-grow">"{testimonial.quote}"</p>

            {/* Author */}
            <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-glow to-cyan-glow flex items-center justify-center text-white font-semibold">
                    {testimonial.avatar}
                </div>
                <div>
                    <div className="font-semibold text-white">{testimonial.author}</div>
                    <div className="text-sm text-text-muted">{testimonial.role}</div>
                </div>
            </div>
        </div>
    );
}

export function Testimonials() {
    const [currentPage, setCurrentPage] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef, { once: true, margin: '-100px' });

    const testimonialsPerPage = 3;
    const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);

    const nextPage = () => {
        setCurrentPage((prev) => (prev + 1) % totalPages);
    };

    const prevPage = () => {
        setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
    };

    const visibleTestimonials = testimonials.slice(
        currentPage * testimonialsPerPage,
        currentPage * testimonialsPerPage + testimonialsPerPage
    );

    return (
        <section id="testimonials" ref={containerRef} className="relative py-32 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-glow/5 rounded-full blur-[150px]" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-glow/5 rounded-full blur-[150px]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Partners Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-24"
                >
                    <p className="text-sm text-text-subtle uppercase tracking-widest mb-8">Featured on</p>
                    <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
                        {partners.map((partner, index) => (
                            <motion.span
                                key={partner}
                                initial={{ opacity: 0 }}
                                animate={isInView ? { opacity: 0.4 } : {}}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ opacity: 1 }}
                                className="text-xl font-semibold tracking-wider text-white transition-opacity cursor-default"
                            >
                                {partner}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>

                {/* Section Header */}
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block text-sm text-cyan-glow font-semibold uppercase tracking-widest mb-4"
                    >
                        Testimonials
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold text-white mb-6"
                    >
                        Trusted by security teams
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-text-muted max-w-2xl mx-auto"
                    >
                        See why IT leaders and security professionals choose ShadowKey.
                    </motion.p>
                </div>

                {/* Testimonials Carousel */}
                <div className="relative">
                    {/* Left Arrow */}
                    <button
                        onClick={prevPage}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 w-12 h-12 rounded-full glass flex items-center justify-center text-white hover:bg-glass-hover hover:scale-110 transition-all duration-300"
                        aria-label="Previous testimonials"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    {/* Testimonials Grid */}
                    <div className="grid md:grid-cols-3 gap-6">
                        {visibleTestimonials.map((testimonial) => (
                            <TestimonialCard key={testimonial.author} testimonial={testimonial} />
                        ))}
                    </div>

                    {/* Right Arrow */}
                    <button
                        onClick={nextPage}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 w-12 h-12 rounded-full glass flex items-center justify-center text-white hover:bg-glass-hover hover:scale-110 transition-all duration-300"
                        aria-label="Next testimonials"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>

                {/* Navigation Dots */}
                <div className="flex justify-center gap-2 mt-10">
                    {[...Array(totalPages)].map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentPage(index)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentPage
                                    ? 'w-8 bg-gradient-to-r from-purple-glow to-cyan-glow'
                                    : 'bg-white/20 hover:bg-white/40'
                                }`}
                            aria-label={`Go to page ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export { CHROME_EXTENSION_URL };
