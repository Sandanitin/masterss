import React from 'react';
import { motion } from 'framer-motion';

const Stats = () => {
    const stats = [
        {
            number: '100,000+',
            label: 'Participants Mastered',
            description: 'the process of Remembering and Recalling faster',
            icon: '👥',
            gradient: 'from-purple-600 to-indigo-600',
            bgGradient: 'from-purple-50 to-indigo-50',
            shadow: 'shadow-purple-200'
        },
        {
            number: '47%',
            label: "Increase in Student's",
            description: 'Concentration, Focus & Speed',
            icon: '📈',
            gradient: 'from-blue-600 to-cyan-500',
            bgGradient: 'from-blue-50 to-cyan-50',
            shadow: 'shadow-blue-200'
        },
        {
            number: '100+',
            label: 'Top Rank Holders',
            description: 'at various Universities & Competitive Exams',
            icon: '🏆',
            gradient: 'from-orange-500 to-yellow-500',
            bgGradient: 'from-orange-50 to-yellow-50',
            shadow: 'shadow-orange-200'
        }
    ];

    return (
        <section className="relative py-20 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white" />

            {/* Decorative Circles */}
            <div className="absolute top-10 left-10 w-72 h-72 bg-purple-200/30 rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-100/30 rounded-full blur-3xl" />

            <div className="container relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <motion.span
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6"
                    >
                        🌟 JOIN THE CHAMPIONS
                    </motion.span>
                    <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                        Be a part of the World&apos;s{' '}
                        <span className="relative inline-block">
                            <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                                Longest-running
                            </span>
                            <motion.span
                                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                            />
                        </span>
                        <br />
                        Online Memory Workshop
                    </h2>
                    <p className="text-xl text-gray-600 font-medium">
                        and become a <span className="text-orange-500 font-bold">Memory Champion!</span>
                    </p>
                </motion.div>

                {/* Stats Cards */}
                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            whileHover={{ y: -15, scale: 1.02 }}
                            className={`relative group`}
                        >
                            {/* Glowing Background */}
                            <div className={`absolute -inset-1 bg-gradient-to-r ${stat.gradient} rounded-3xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity`} />

                            {/* Card */}
                            <div className={`relative bg-gradient-to-br ${stat.bgGradient} rounded-3xl p-8 ${stat.shadow} shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/50`}>
                                {/* Animated Icon */}
                                <motion.div
                                    className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center text-5xl shadow-lg`}
                                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    {stat.icon}
                                </motion.div>

                                {/* Number with Animation */}
                                <motion.h3
                                    className={`text-5xl font-heading font-black mb-3 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}
                                    initial={{ scale: 0.5 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
                                >
                                    {stat.number}
                                </motion.h3>

                                {/* Label */}
                                <h4 className="text-xl font-bold text-gray-800 mb-2">
                                    {stat.label}
                                </h4>

                                {/* Description */}
                                <p className="text-gray-600 leading-relaxed">
                                    {stat.description}
                                </p>

                                {/* Decorative Corner */}
                                <div className="absolute top-4 right-4 w-8 h-8">
                                    <div className={`w-full h-full bg-gradient-to-br ${stat.gradient} rounded-full opacity-20`} />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="text-center mt-12"
                >
                    <p className="text-lg text-gray-600 mb-4">
                        🎓 Students from <span className="font-semibold text-purple-600">3rd Standard to PG</span> have transformed their learning
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md">
                            <span className="text-green-500">✓</span>
                            <span className="text-gray-700 font-medium">Practical Tools</span>
                        </div>
                        <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md">
                            <span className="text-green-500">✓</span>
                            <span className="text-gray-700 font-medium">Proven Techniques</span>
                        </div>
                        <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md">
                            <span className="text-green-500">✓</span>
                            <span className="text-gray-700 font-medium">Instant Results</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Stats;
