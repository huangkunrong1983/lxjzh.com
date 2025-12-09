import React from 'react';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ scrollToSection }) => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center" style={{ 
        backgroundImage: "url('https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Happy%20couple%20holding%20hands%2C%20romantic%20sunset%2C%20love%20and%20affection%2C%20warm%20atmosphere&sign=dc6c86a55b83d3e4847da4d0955720d5')",
        filter: 'brightness(0.7)'
      }}></div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-rose-900/70 to-pink-800/50"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            专业婚介服务，成就美满姻缘
          </h1>
          <p className="text-xl text-white/90 mb-10 leading-relaxed">
            亮星服务致力于为您提供高品质的婚恋介绍服务，帮助您找到生命中的另一半，开启幸福人生。
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.button
              onClick={() => scrollToSection('members')}
              className="bg-gradient-to-r from-rose-500 to-pink-400 hover:from-rose-600 hover:to-pink-500 text-white font-medium py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              查看优质嘉宾
            </motion.button>
            <motion.button
              onClick={() => scrollToSection('registration')}
              className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border border-white/30 font-medium py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              免费注册
            </motion.button>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/80 animate-bounce"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <i className="fa-solid fa-angle-down text-3xl"></i>
      </motion.div>
    </section>
  );
};

export default HeroSection;