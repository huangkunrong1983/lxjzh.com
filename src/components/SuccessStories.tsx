import React, { useState } from 'react';
import { motion } from 'framer-motion';

// 定义成功案例数据类型
interface SuccessStory {
  id: number;
  coupleName: string;
  matchDate: string;
  story: string;
  imageUrl: string;
  status: string;
}

// 模拟成功案例数据 - 婚介服务
const mockSuccessStories: SuccessStory[] = [
  {
    id: 1,
    coupleName: '李先生 & 张女士',
    matchDate: '2023年10月',
    story: '通过亮星服务的专业匹配，我认识了生命中的另一半。感谢顾问团队的耐心指导和精准匹配，让我们在茫茫人海中找到了彼此。现在我们已经订婚，计划明年春天举办婚礼。',
    imageUrl: 'https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Happy%20couple%20in%20love%2C%20holding%20hands%2C%20romantic%20date%2C%20park%20setting&sign=009669fdcb96e7ad5d277ef17882f5f0',
    status: '已订婚'
  },
  {
    id: 2,
    coupleName: '王先生 & 刘女士',
    matchDate: '2023年7月',
    story: '我是抱着试一试的心态注册了亮星服务，没想到真的找到了理想中的伴侣。我们有共同的兴趣爱好和价值观，相处非常默契。感谢亮星服务团队的专业服务和真诚帮助。',
    imageUrl: 'https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Romantic%20couple%20kissing%20on%20beach%20at%20sunset%2C%20love%20and%20happiness&sign=8d80530efb1b364e8a89a35f3ff25222',
    status: '恋爱中'
  },
  {
    id: 3,
    coupleName: '赵先生 & 陈女士',
    matchDate: '2022年12月',
    story: '在亮星服务相识一年后，我们决定走进婚姻的殿堂。从最初的见面到确定关系，再到现在的幸福生活，亮星服务的顾问一直陪伴着我们，给予了很多宝贵的建议。',
    imageUrl: 'https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Wedding%20couple%20smiling%20happily%2C%20newlyweds%20celebration&sign=be97f30d66995beca3c97335e8f7ad51',
    status: '已婚'
  }
];

const SuccessStories: React.FC = () => {
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // 切换到下一个故事
  const nextStory = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentStoryIndex((prevIndex) => 
          prevIndex === mockSuccessStories.length - 1 ? 0 : prevIndex + 1
        );
        setIsTransitioning(false);
      }, 300);
    }
  };

  // 切换到上一个故事
  const prevStory = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentStoryIndex((prevIndex) => 
          prevIndex === 0 ? mockSuccessStories.length - 1 : prevIndex - 1
        );
        setIsTransitioning(false);
      }, 300);
    }
  };

  // 切换到指定故事
  const goToStory = (index: number) => {
    if (!isTransitioning && index !== currentStoryIndex) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentStoryIndex(index);
        setIsTransitioning(false);
      }, 300);
    }
  };

  const currentStory = mockSuccessStories[currentStoryIndex];

  return (
    <section id="success-stories" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">成功案例</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            每一段美好的爱情都值得被见证。这些真实的成功案例展示了我们如何帮助有缘人相遇、相知、相爱。
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* 轮播容器 */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            {/* 图片部分 */}
            <motion.div
              className="h-64 md:h-96 relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.img
                key={currentStory.id}
                src={currentStory.imageUrl}
                alt={currentStory.coupleName}
                className="w-full h-full object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            </motion.div>

            {/* 故事内容部分 */}
            <motion.div
              key={currentStory.id}
              className="p-6 md:p-8 bg-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{currentStory.coupleName}</h3>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <i className="fa-solid fa-heart text-rose-500"></i>
                      相识于：{currentStory.matchDate}
                    </span>
                    <span className="flex items-center gap-1">
                      <i className="fa-solid fa-ring text-rose-500"></i>
                      目前状态：{currentStory.status}
                    </span>
                  </div>
                </div>
                <div className="mt-4 md:mt-0">
                  <span className="inline-block bg-rose-100 text-rose-500 font-medium px-4 py-1 rounded-full">
                    成功案例 #{currentStory.id}
                  </span>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed italic border-l-4 border-rose-400 pl-4">
                "{currentStory.story}"
              </p>
            </motion.div>

            {/* 导航按钮 */}
            <button
              onClick={prevStory}
              disabled={isTransitioning}
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm text-rose-500 w-10 h-10 rounded-full flex items-center justify-center shadow-md hover:bg-white transition-all z-10"
              aria-label="上一个案例"
            >
              <i className="fa-solid fa-chevron-left"></i>
            </button>
            <button
              onClick={nextStory}
              disabled={isTransitioning}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm text-rose-500 w-10 h-10 rounded-full flex items-center justify-center shadow-md hover:bg-white transition-all z-10"
              aria-label="下一个案例"
            >
              <i className="fa-solid fa-chevron-right"></i>
            </button>
          </div>

          {/* 指示器 */}
          <div className="flex justify-center mt-8 space-x-2">
            {mockSuccessStories.map((_, index) => (
              <button
                key={index}
                onClick={() => goToStory(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentStoryIndex === index 
                    ? 'bg-rose-500 w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`查看第 ${index + 1} 个案例`}
              />
            ))}
          </div>
        </div>

        {/* 统计数据 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 text-center"
        >
          <div className="bg-rose-50 p-6 rounded-xl shadow-sm">
            <div className="text-3xl md:text-4xl font-bold text-rose-500 mb-2">1000+</div>
            <div className="text-gray-600">成功匹配</div>
          </div>
          <div className="bg-rose-50 p-6 rounded-xl shadow-sm">
            <div className="text-3xl md:text-4xl font-bold text-rose-500 mb-2">300+</div>
            <div className="text-gray-600">喜结连理</div>
          </div>
          <div className="bg-rose-50 p-6 rounded-xl shadow-sm">
            <div className="text-3xl md:text-4xl font-bold text-rose-500 mb-2">98%</div>
            <div className="text-gray-600">客户满意度</div>
          </div>
          <div className="bg-rose-50 p-6 rounded-xl shadow-sm">
            <div className="text-3xl md:text-4xl font-bold text-rose-500 mb-2">5年+</div>
            <div className="text-gray-600">专业经验</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SuccessStories;