import React from 'react';
import { motion } from 'framer-motion';

// 定义服务项目类型
interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

// 服务数据 - 婚介服务
const services: Service[] = [
  {
    id: 1,
    title: '个人征婚服务',
    description: '提供专业的个人征婚服务，帮助您找到理想的伴侣，开启幸福人生。',
    icon: 'fa-heart'
  },
  {
    id: 2,
    title: '高端婚恋匹配',
    description: '为有特定需求的客户提供高端婚恋匹配服务，精准匹配，提高成功率。',
    icon: 'fa-user-tie'
  },
  {
    id: 3,
    title: '情感咨询指导',
    description: '专业情感顾问提供一对一咨询指导，帮助您解决情感困惑，提升恋爱能力。',
    icon: 'fa-comments'
  },
  {
    id: 4,
    title: '约会策划服务',
    description: '专业团队为您策划浪漫约会，创造难忘的见面体验，增加相互了解的机会。',
    icon: 'fa-calendar-alt'
  },
  {
    id: 5,
    title: '婚姻家庭辅导',
    description: '提供婚前辅导和婚姻家庭咨询，帮助您建立和维护健康美满的婚姻关系。',
    icon: 'fa-users'
  },
  {
    id: 6,
    title: '恋爱技巧培训',
    description: '举办恋爱技巧培训课程，提升您的沟通能力和情感表达能力，增强吸引力。',
    icon: 'fa-graduation-cap'
  }
];

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-rose-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">我们的服务</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            亮星服务提供全方位的婚恋服务，从个人征婚到情感咨询，从约会策划到婚姻辅导，满足您的多样化需求。
          </p>
        </motion.div>

        {/* 服务卡片 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: service.id * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -5, 
                boxShadow: '0 20px 25px -5px rgba(244, 114, 182, 0.1), 0 10px 10px -5px rgba(244, 114, 182, 0.04)'
              }}
              className="bg-white rounded-xl shadow-lg p-6 transition-all"
            >
              <div className="w-14 h-14 bg-rose-100 text-rose-500 rounded-lg flex items-center justify-center text-2xl mb-6">
                <i className={`fa-solid ${service.icon}`}></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>

        {/* 服务流程 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">服务流程</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              亮星服务标准化流程，确保每一次服务都专业、高效、贴心
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: '免费注册',
                description: '在网站或小程序上免费注册，填写基本个人信息'
              },
              {
                step: '02',
                title: '需求沟通',
                description: '专业顾问与您沟通，了解您的择偶需求和期望'
              },
              {
                step: '03',
                title: '精准匹配',
                description: '根据您的条件和需求，为您匹配最合适的对象'
              },
              {
                step: '04',
                title: '牵手成功',
                description: '在顾问的指导下，逐步发展感情，最终找到幸福'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-white rounded-xl shadow-lg p-6 mb-8 z-10 relative">
                  <div className="text-3xl font-bold text-rose-500 mb-4">{item.step}</div>
                  <h4 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h4>
                  <p className="text-gray-600">{item.description}</p>
                </div>
                
                {/* 连接线 */}
                {index < 3 && (
                  <div className="hidden md:block absolute top-12 left-full w-full h-1 bg-rose-200 -z-10"></div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 服务保障 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h3 className="text-3xl font-bold text-gray-800 mb-6">服务保障</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-rose-100 text-rose-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="fa-solid fa-check"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">严格实名认证</h4>
                    <p className="text-gray-600">所有会员均经过严格的实名认证，确保信息真实可靠，保障交友安全。</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-rose-100 text-rose-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="fa-solid fa-check"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">隐私保护</h4>
                    <p className="text-gray-600">严格保护您的个人隐私，所有信息仅用于匹配和联系，不会泄露给任何第三方。</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-rose-100 text-rose-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="fa-solid fa-check"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">专业顾问团队</h4>
                    <p className="text-gray-600">我们拥有经验丰富的专业婚恋顾问团队，为您提供一对一的贴心服务。</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-rose-100 text-rose-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="fa-solid fa-check"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">成功保障</h4>
                    <p className="text-gray-600">我们承诺，为您提供最优质的服务，帮助您找到理想的伴侣，开启幸福人生。</p>
                  </div>
                </div>
              </div>
              
              <motion.button
                className="mt-8 bg-gradient-to-r from-rose-500 to-pink-400 hover:from-rose-600 hover:to-pink-500 text-white font-medium py-3 px-8 rounded-full shadow-md hover:shadow-lg transition-all self-start"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                立即注册
              </motion.button>
            </div>
            
            <div className="hidden lg:block relative min-h-[400px]">
              <img
                src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Professional%20matchmaker%20consulting%20with%20client%2C%20happy%20couple%20in%20background&sign=96c6ba4585d3c6d40a6e8b9db2c5da79"
                alt="服务保障"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-rose-900/40 to-transparent"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;