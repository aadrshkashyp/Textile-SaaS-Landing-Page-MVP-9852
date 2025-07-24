import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiUsers, FiGlobe, FiClock, FiAward, FiTrendingUp, FiHeart } = FiIcons;

const Features = () => {
  const features = [
    {
      icon: FiUsers,
      title: 'Vendor Network',
      description: 'Access to 200+ verified suppliers',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: FiGlobe,
      title: 'Global Reach',
      description: 'Serving brands in 50+ countries',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: FiClock,
      title: 'Fast Turnaround',
      description: '7-14 days delivery guarantee',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: FiAward,
      title: 'Quality Certified',
      description: 'ISO 9001 & OEKO-TEX standards',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: FiTrendingUp,
      title: 'Scalable Solutions',
      description: 'From startup to enterprise scale',
      color: 'from-pink-500 to-rose-600'
    },
    {
      icon: FiHeart,
      title: 'Sustainable',
      description: 'Eco-friendly & ethical sourcing',
      color: 'from-teal-500 to-cyan-600'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Thread & Textile India?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're more than just a supplier - we're your strategic partner in textile success.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <SafeIcon icon={feature.icon} className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;