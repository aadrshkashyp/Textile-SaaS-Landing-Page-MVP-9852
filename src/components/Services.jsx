import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiPackage, FiTool, FiShield, FiTruck } = FiIcons;

const Services = () => {
  const services = [
    {
      icon: FiPackage,
      title: 'Raw Materials',
      description: 'Premium quality cotton, silk, wool, and synthetic fibers sourced from certified suppliers worldwide.',
      features: ['Organic Options', 'Bulk Quantities', 'Custom Blends', 'Quality Certificates']
    },
    {
      icon: FiTool,
      title: 'Finished Products',
      description: 'Complete manufacturing solutions from design to delivery, tailored to your brand specifications.',
      features: ['Custom Design', 'Private Label', 'Packaging', 'Brand Integration']
    },
    {
      icon: FiShield,
      title: 'Quality Assurance',
      description: 'Rigorous testing and quality control processes to ensure every product meets international standards.',
      features: ['Lab Testing', 'Compliance Check', 'Sustainability', 'Traceability']
    },
    {
      icon: FiTruck,
      title: 'Logistics & Delivery',
      description: 'End-to-end supply chain management with real-time tracking and flexible delivery options.',
      features: ['Global Shipping', 'Real-time Tracking', 'Flexible Terms', 'Inventory Management']
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Complete Textile Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Whether you need raw materials or finished products, we provide comprehensive 
            solutions through our trusted vendor network.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <SafeIcon icon={service.icon} className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm text-gray-500">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;