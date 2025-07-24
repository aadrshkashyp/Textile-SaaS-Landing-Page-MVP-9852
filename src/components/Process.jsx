import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMessageSquare, FiSearch, FiTool, FiTruck } = FiIcons;

const Process = () => {
  const steps = [
    {
      icon: FiMessageSquare,
      title: 'Consultation',
      description: 'Tell us your requirements, specifications, and timeline. Our experts will understand your needs.',
      details: ['Requirement Analysis', 'Timeline Planning', 'Budget Discussion']
    },
    {
      icon: FiSearch,
      title: 'Vendor Matching',
      description: 'We match you with the best vendors from our network based on your specific needs.',
      details: ['Vendor Selection', 'Quality Verification', 'Cost Optimization']
    },
    {
      icon: FiTool,
      title: 'Production',
      description: 'Your order goes into production with regular updates and quality checkpoints.',
      details: ['Production Monitoring', 'Quality Control', 'Progress Updates']
    },
    {
      icon: FiTruck,
      title: 'Delivery',
      description: 'Final quality check and delivery to your location with tracking and support.',
      details: ['Final Inspection', 'Packaging', 'Global Shipping']
    }
  ];

  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How We Work
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our streamlined process ensures your textile needs are met efficiently and professionally.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-purple-200 to-blue-200 transform -translate-y-1/2"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm lg:relative lg:top-0 lg:left-0 lg:transform-none lg:mb-6 lg:mx-auto">
                  {index + 1}
                </div>

                <div className="bg-gray-50 p-8 rounded-2xl text-center lg:mt-0 mt-6 hover:shadow-lg transition-all duration-300 group">
                  <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-6 mx-auto shadow-md group-hover:scale-110 transition-transform duration-300">
                    <SafeIcon icon={step.icon} className="w-8 h-8 text-blue-600" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{step.description}</p>

                  <ul className="space-y-2 text-sm">
                    {step.details.map((detail) => (
                      <li key={detail} className="flex items-center justify-center text-gray-500">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;