import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaRobot, FaVolumeUp, FaCheckCircle, FaEdit } from 'react-icons/fa';
import patternImage from '../assets/pattern.png';

const featuresData = [
  {
    title: 'Virtual Character Interaction',
    description:
      'Engage in conversations with a virtual character powered by AI, making learning interactive and engaging.',
    icon: (
      <FaRobot className="text-5xl text-[#FFB526] group-hover:text-white transition-colors duration-300" />
    ),
  },
  {
    title: 'Pronunciation Assessment',
    description:
      'Improve your pronunciation with our advanced assessment tool that provides real-time feedback.',
    icon: (
      <FaVolumeUp className="text-5xl text-[#FFB526] group-hover:text-white transition-colors duration-300" />
    ),
  },
  {
    title: 'Grammar Checking',
    description:
      'Ensure your grammar is perfect with our comprehensive grammar checking feature.',
    icon: (
      <FaEdit className="text-5xl text-[#FFB526] group-hover:text-white transition-colors duration-300" />
    ),
  },
  {
    title: 'Word Count Accuracy',
    description:
      'Track and improve the accuracy of your word count with detailed analytics.',
    icon: (
      <FaCheckCircle className="text-5xl text-[#FFB526] group-hover:text-white transition-colors duration-300" />
    ),
  },
];

const Features = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div className="relative bg-gradient-to-b from-gray-50 to-[#FFB526] py-16 font-baloobhaijaan2 overflow-hidden" id='features'>
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10 z-0"
        style={{ backgroundImage: `url(${patternImage})` }}
      />
      <div className="relative z-10 container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-black">
          App Features
        </h2>
        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
        >
          {featuresData.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg flex flex-col items-center text-center transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-b hover:from-[#FFB526] hover:to-[#FF8E26] group"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={
                inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }
              }
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="mb-6">{feature.icon}</div>
              <h3 className="text-2xl font-bold mb-3 text-black group-hover:text-white">
                {feature.title}
              </h3>
              <p className="text-gray-700 group-hover:text-white">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Features;
