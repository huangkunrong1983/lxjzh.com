import React from 'react';
import { motion } from 'framer-motion';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-rose-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-6">关于亮星服务</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              龙岩亮星家政服务有限公司成立于2019年12月5日，注册资本100万元人民币，秉承"诚信经营，顾客至上"的服务理念，致力于打造家政行业标准化标杆企业。公司以"家政服务大有可为"为愿景，通过创新管理模式与技术赋能，为龙岩居民提供高效、优质的家政服务解决方案。
            </p>
            
            {/* 经营特色 */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-rose-100 text-rose-500 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                  <i className="fa-solid fa-graduation-cap"></i>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">产教融合，人才为本</h4>
                  <p className="text-gray-600">积极推动校企合作，联合龙岩本地职业培训学校开展家政技能培训，全面提升从业人员专业素质。</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-rose-100 text-rose-500 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                  <i className="fa-solid fa-file-alt"></i>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">标准化服务与管理体系</h4>
                  <p className="text-gray-600">实行"准员工制"管理模式，制定标准化服务流程，覆盖保洁、保姆、家庭综合维修等全场景服务。</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-rose-100 text-rose-500 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                  <i className="fa-solid fa-mobile-alt"></i>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">互联网+智慧家政平台</h4>
                  <p className="text-gray-600">自主开发"亮星家政"微信小程序，实现在线预约、智能派单、实时支付、服务评价等功能。</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-rose-100 text-rose-500 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                  <i className="fa-solid fa-shield-alt"></i>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">诚信服务保障</h4>
                  <p className="text-gray-600">建立家政档案信息库，严格从业人员背景核查，完善服务追溯机制，为消费者提供安全、可靠的家政服务。</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-rose-100 text-rose-500 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                  <i className="fa-solid fa-home"></i>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">社区化便民服务网络</h4>
                  <p className="text-gray-600">深入社区联合物业布局服务网点，提供"家门口"的便捷服务，涵盖日常保洁、家电维修等多元化需求。</p>
                </div>
              </div>
            </div>

            <motion.button
              className="bg-gradient-to-r from-rose-500 to-pink-400 hover:from-rose-600 hover:to-pink-500 text-white font-medium py-3 px-8 rounded-full shadow-md hover:shadow-lg transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              了解更多
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Professional%20matchmaking%20service%20team%2C%20happy%20couple%20celebration%2C%20modern%20office&sign=1cf96186e37920b4b2839711b9165cd4"
                  alt="亮星服务团队"
                  className="w-full h-auto"
                />
              </div>
              
              {/* 装饰元素 */}
              <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-rose-200 rounded-lg -z-10"></div>
              <div className="absolute -top-6 -right-6 w-40 h-40 bg-rose-100 rounded-lg -z-10"></div>
              
              {/* 数据卡片 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="absolute -bottom-8 -right-8 bg-white rounded-xl shadow-lg p-5 max-w-[200px]"
              >
                <div className="text-3xl font-bold text-rose-500 mb-2">98%</div>
                <div className="text-gray-600">客户满意度</div>
                <div className="mt-3 pt-3 border-t border-gray-100">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <i className="fa-solid fa-star text-yellow-400"></i>
                    <i className="fa-solid fa-star text-yellow-400"></i>
                    <i className="fa-solid fa-star text-yellow-400"></i>
                    <i className="fa-solid fa-star text-yellow-400"></i>
                    <i className="fa-solid fa-star-half-alt text-yellow-400"></i>
                    <span className="ml-1">4.8/5</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* 经营范围 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">经营范围</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              亮星服务提供全方位的服务，满足您的各种需求
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <p className="text-gray-600 leading-relaxed">
              公司经营范围：家政服务；专业保洁服务；专业清洗、消毒服务；物业管理；物业服务；害虫防治服务；公司礼仪服务；建筑物清洁服务；绿化管理服务；婚姻服务(不含涉外婚姻介绍）；单位后勤管理服务；日用杂货批发；其他家庭用品批发；对居民服务、修理和其他服务业的投资；家具和相关物品维修；日用电器修理；家用电子产品修理。
            </p>
          </div>
        </motion.div>

        {/* 未来愿景 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-rose-500 to-pink-400 rounded-2xl shadow-lg overflow-hidden text-white"
        >
          <div className="p-8 md:p-12">
            <h3 className="text-3xl font-bold mb-6">社会责任与未来愿景</h3>
            <p className="leading-relaxed mb-6">
              作为龙岩市商贸业联合会会员单位，亮星家政始终以推动行业高质量发展为己任，积极参与家政行业提升行动，为龙岩人民提供更优质的家政服务。
            </p>
            <p className="leading-relaxed">
              未来，公司将持续优化服务生态，探索智慧家政新模式，为居民生活创造更多便利与价值。通过整合行业资源，构建信息化家政服务体系，连接用户、服务者与社区资源，实现服务全流程数字化管理。
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;