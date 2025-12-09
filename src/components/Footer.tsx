import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* 公司介绍 */}
          <div>
            <motion.div 
              className="flex items-center space-x-2 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="text-rose-400 text-3xl">
                <i className="fa-solid fa-heart"></i>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-rose-400 to-pink-300 bg-clip-text text-transparent">
                亮星服务
              </span>
            </motion.div>
            
            <motion.p 
              className="text-gray-400 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              亮星服务秉承"诚信经营，顾客至上"的服务理念，致力于为您提供专业的婚恋介绍服务，帮助您找到生命中的另一半。
            </motion.p>
            
            <motion.div 
              className="flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {['facebook', 'twitter', 'instagram', 'weixin', 'weibo'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 bg-gray-800 text-gray-300 rounded-full flex items-center justify-center hover:bg-rose-500 hover:text-white transition-colors"
                  aria-label={`访问我们的${social}页面`}
                >
                  <i className={`fa-brands fa-${social}`}></i>
                </a>
              ))}
            </motion.div>
          </div>
          
          {/* 快速链接 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-bold mb-6">快速链接</h4>
            <ul className="space-y-3">
              {[
                { name: '首页', href: '#home' },
                { name: '关于我们', href: '#about' },
                { name: '优质嘉宾', href: '#members' },
                { name: '成功案例', href: '#success-stories' },
                { name: '联系我们', href: '#contact' },
              ].map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-rose-400 transition-colors flex items-center gap-2"
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    <i className="fa-solid fa-chevron-right text-xs"></i>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
          
          {/* 服务项目 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-bold mb-6">服务项目</h4>
            <ul className="space-y-3">
              {[
                { name: '个人征婚服务' },
                { name: '高端婚恋匹配' },
                { name: '情感咨询指导' },
                { name: '约会策划服务' },
                { name: '婚姻家庭辅导' },
                { name: '恋爱技巧培训' },
              ].map((service, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-rose-400 transition-colors flex items-center gap-2"
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    <i className="fa-solid fa-chevron-right text-xs"></i>
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
          
          {/* 联系我们 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-bold mb-6">联系我们</h4>
            <ul className="space-y-4">
              {[
                { title: '客服热线', value: '0597-2299662', icon: 'fa-phone' },
                { title: '工作时间', value: '周一至周日 8:00-20:00', icon: 'fa-clock' },
                { title: '公司地址', value: '福建省龙岩市新罗区', icon: 'fa-map-marker-alt' },
                { title: '官方邮箱', value: 'contact@liangxingservice.com', icon: 'fa-envelope' },
              ].map((info, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="text-rose-400 mt-1">
                    <i className={`fa-solid ${info.icon}`}></i>
                  </div>
                  <div>
                    <div className="text-gray-500 text-sm">{info.title}</div>
                    <div className="text-gray-300">{info.value}</div>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
        
        {/* 预约表单 */}
        <motion.div 
          className="bg-gray-800 rounded-xl p-6 md:p-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-2">
              <h4 className="text-xl font-bold mb-2">立即注册，寻找理想伴侣</h4>
              <p className="text-gray-400">填写您的资料，我们将为您匹配最合适的对象</p>
            </div>
            <div>
              <button 
                className="w-full bg-gradient-to-r from-rose-500 to-pink-400 hover:from-rose-600 hover:to-pink-500 text-white font-medium py-3 px-6 rounded-full shadow-md hover:shadow-lg transition-all"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#registration')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                免费注册
              </button>
            </div>
          </div>
        </motion.div>
        
        {/* 版权信息 */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-500 text-sm mb-4 md:mb-0">
              © 2025 亮星服务. 保留所有权利.
            </div>
            <div className="flex gap-6">
              {['隐私政策', '服务条款', '退款政策', '关于我们'].map((item, index) => (
                <a 
                  key={index} 
                  href="#" 
                  className="text-gray-500 hover:text-rose-400 text-sm transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;