import React, { useState } from 'react';
import { motion } from 'framer-motion';
import RegistrationForm from './RegistrationForm';

const RegistrationSection: React.FC = () => {
  const [selectedGender, setSelectedGender] = useState<'male' | 'female'>('female');

  return (
    <section id="registration" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">嘉宾资料登记</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            填写您的详细资料，我们将根据您的条件为您精准匹配最合适的伴侣。所有信息严格保密，请放心填写。
          </p>
        </motion.div>

        {/* 表单选择器 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-8"
        >
          <div className="bg-gray-50 rounded-xl p-4 flex justify-center">
            <div className="inline-flex bg-white p-1 rounded-lg shadow-sm">
              <button
                onClick={() => setSelectedGender('female')}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  selectedGender === 'female' 
                    ? 'bg-gradient-to-r from-rose-500 to-pink-400 text-white shadow-md' 
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                女士登记
              </button>
              <button
                onClick={() => setSelectedGender('male')}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  selectedGender === 'male' 
                    ? 'bg-gradient-to-r from-rose-500 to-pink-400 text-white shadow-md' 
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                男士登记
              </button>
            </div>
          </div>
        </motion.div>

        {/* 表单区域 */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            key={selectedGender}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <RegistrationForm gender={selectedGender} />
          </motion.div>
        </div>

        {/* 隐私提示 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mt-8 text-center text-gray-500 text-sm"
        >
          <p>
            <i className="fa-solid fa-shield-alt text-rose-500 mr-2"></i>
            我们承诺严格保护您的个人隐私，您的信息仅用于匹配和联系，不会泄露给任何第三方。
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default RegistrationSection;