import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import { z } from 'zod';

// 定义联系表单验证模式
const contactSchema = z.object({
  name: z.string().min(2, "姓名至少需要2个字符"),
  phone: z.string().regex(/^1[3-9]\d{9}$/, "请输入有效的手机号码"),
  message: z.string().min(10, "留言内容至少需要10个字符").max(500, "留言内容不能超过500字符"),
});

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // 清除对应字段的错误
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // 验证表单数据
      await contactSchema.parseAsync(formData);
      
      // 模拟提交数据
      setTimeout(() => {
        toast.success('感谢您的咨询！我们的婚恋顾问将尽快与您联系。');
        setFormData({
          name: '',
          phone: '',
          message: '',
        });
        setIsSubmitting(false);
      }, 1500);
      
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.errors.forEach(err => {
          newErrors[err.path[0] as string] = err.message;
        });
        setErrors(newErrors);
      } else {
        toast.error('提交失败，请稍后重试');
      }
      setIsSubmitting(false);
    }
  };

  // 联系方式数据
  const contactInfo = [
    {
      title: '婚恋顾问热线',
      value: '0597-2299662',
      icon: 'fa-phone'
    },
    {
      title: '工作时间',
      value: '周一至周日 8:00-20:00',
      icon: 'fa-clock'
    },
    {
      title: '公司地址',
      value: '福建省龙岩市新罗区',
      icon: 'fa-map-marker-alt'
    },
    {
      title: '官方邮箱',
      value: 'contact@liangxingservice.com',
      icon: 'fa-envelope'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">联系我们</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            如果您对我们的婚恋服务有任何疑问或需要咨询，请随时通过以下方式联系我们，我们的专业婚恋顾问将竭诚为您服务。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* 联系表单 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg p-6 md:p-8"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6">在线咨询</h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* 姓名 */}
              <div>
                <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
                  您的姓名 <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:outline-none transition-all ${
                    errors.name ? 'border-rose-500 focus:ring-rose-500/20' : 'border-gray-300 focus:border-rose-400 focus:ring-rose-400/20'
                  }`}
                  placeholder="请输入您的姓名"
                />
                {errors.name && <p className="text-rose-500 text-sm mt-1">{errors.name}</p>}
              </div>

              {/* 电话 */}
              <div>
                <label className="block text-gray-700 font-medium mb-2" htmlFor="phone">
                  手机号码 <span className="text-rose-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:outline-none transition-all ${
                    errors.phone ? 'border-rose-500 focus:ring-rose-500/20' : 'border-gray-300 focus:border-rose-400 focus:ring-rose-400/20'
                  }`}
                  placeholder="请输入您的手机号码"
                />
                {errors.phone && <p className="text-rose-500 text-sm mt-1">{errors.phone}</p>}
              </div>

              {/* 留言 */}
              <div>
                <label className="block text-gray-700 font-medium mb-2" htmlFor="message">
                  咨询内容 <span className="text-rose-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:outline-none transition-all ${
                    errors.message ? 'border-rose-500 focus:ring-rose-500/20' : 'border-gray-300 focus:border-rose-400 focus:ring-rose-400/20'
                  }`}
                  placeholder="请详细描述您的咨询内容或需求"
                  rows={5}
                  maxLength={500}
                />
                <div className="flex justify-between items-center">
                  {errors.message && <p className="text-rose-500 text-sm mt-1">{errors.message}</p>}
                  <p className="text-gray-400 text-sm mt-1">{formData.message.length}/500</p>
                </div>
              </div>

              {/* 提交按钮 */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-rose-500 to-pink-400 hover:from-rose-600 hover:to-pink-500 text-white font-medium py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all"
                whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center gap-2">
                    <i className="fa-solid fa-circle-notch fa-spin"></i>
                    <span>提交中...</span>
                  </div>
                ) : (
                  '提交咨询'
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* 联系方式和地图 */}
          <div className="space-y-8">
            {/* 联系信息 */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-6 md:p-8"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6">联系方式</h3>
              
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-rose-100 text-rose-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <i className={`fa-solid ${info.icon} text-xl`}></i>
                    </div>
                    <div>
                      <div className="text-gray-500 text-sm">{info.title}</div>
                      <div className="font-medium text-gray-800">{info.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* 社交媒体 */}
              <div className="mt-8">
                <div className="text-gray-500 text-sm mb-3">关注我们</div>
                <div className="flex gap-4">
                  {['facebook', 'twitter', 'instagram', 'weixin', 'weibo'].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="w-10 h-10 bg-rose-100 text-rose-500 rounded-full flex items-center justify-center hover:bg-rose-200 transition-colors"
                      aria-label={`访问我们的${social}页面`}
                    >
                      <i className={`fa-brands fa-${social}`}></i>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* 地图 */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="rounded-xl overflow-hidden shadow-lg h-64 md:h-80 relative"
            >
              {/* 这里使用图片模拟地图 */}
              <img
                src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Modern%20matchmaking%20office%20exterior%2C%20elegant%20building%2C%20romantic%20atmosphere%2C%20daytime&sign=2c5ab5c9e5ed58f72bf269a1d3176947"
                alt="公司地址地图"
                className="w-full h-full object-cover"
              />
              
              {/* 地图标记 */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl text-rose-500 animate-pulse">
                <i className="fa-solid fa-location-dot"></i>
              </div>
              
              {/* 地图信息浮层 */}
               <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-md max-w-[250px]">
                  <h4 className="font-bold text-gray-800 mb-1">亮星服务总部</h4>
                  <p className="text-gray-600 text-sm">福建省龙岩市新罗区</p>
                  <button className="mt-2 bg-rose-500 text-white text-xs font-medium py-1 px-3 rounded-full hover:bg-rose-600 transition-colors">
                    获取路线
                  </button>
                </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;