import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';

// 定义嘉宾数据类型
interface Member {
  id: number;
  name: string;
  age: number;
  height: number;
  education: string;
  occupation: string;
  income: string;
  location: string;
  gender: 'male' | 'female';
  description: string;
  imageUrl: string;
}

// 模拟嘉宾数据
const mockMembers: Member[] = [
  {
    id: 1,
    name: '小丽',
    age: 28,
    height: 165,
    education: '本科',
    occupation: 'UI设计师',
    income: '10000-20000元',
    location: '上海',
    gender: 'female',
    description: '性格开朗活泼，喜欢旅行和阅读，希望找到一位成熟稳重、有责任感的男士。',
    imageUrl: 'https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Beautiful%20young%20woman%2C%20smiling%2C%20portrait%2C%20natural%20beauty&sign=65145357cec9a3775d18accd02f8e6d6'
  },
  {
    id: 2,
    name: '小明',
    age: 32,
    height: 178,
    education: '硕士',
    occupation: '软件工程师',
    income: '20000-30000元',
    location: '北京',
    gender: 'male',
    description: '性格内敛沉稳，热爱技术，喜欢运动，希望找到一位善良、温柔的女士相伴一生。',
    imageUrl: 'https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Handsome%20young%20man%2C%20confident%2C%20portrait%2C%20professional%20appearance&sign=66aee31f577979d1731dc879792f7f4c'
  },
  {
    id: 3,
    name: '小美',
    age: 26,
    height: 162,
    education: '本科',
    occupation: '教师',
    income: '5000-10000元',
    location: '广州',
    gender: 'female',
    description: '温柔善良，喜欢孩子，热爱教育事业，希望找到一位有耐心、有爱心的男士。',
    imageUrl: 'https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Pretty%20young%20woman%2C%20kind%20smile%2C%20portrait%2C%20warm%20atmosphere&sign=90e32c25c4c8f9a925574f416194929b'
  },
  {
    id: 4,
    name: '小刚',
    age: 35,
    height: 183,
    education: '本科',
    occupation: '企业家',
    income: '50000元以上',
    location: '深圳',
    gender: 'male',
    description: '成熟稳重，事业有成，喜欢阅读和高尔夫，希望找到一位善解人意、独立自信的女士。',
    imageUrl: 'https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Successful%20man%2C%20confident%20expression%2C%20business%20attire%2C%20professional%20look&sign=1e5fbe6745ae8352d470237c2234c221'
  },
  {
    id: 5,
    name: '小红',
    age: 30,
    height: 168,
    education: '硕士',
    occupation: '医生',
    income: '20000-30000元',
    location: '成都',
    gender: 'female',
    description: '独立自信，热爱工作，喜欢瑜伽和音乐，希望找到一位成熟稳重、有上进心的男士。',
    imageUrl: 'https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Elegant%20young%20woman%2C%20professional%20appearance%2C%20confident%20smile&sign=87ca6c6f723ed536c9d95477e9d52e5d'
  },
  {
    id: 6,
    name: '小强',
    age: 29,
    height: 175,
    education: '本科',
    occupation: '市场经理',
    income: '10000-20000元',
    location: '杭州',
    gender: 'male',
    description: '开朗健谈，喜欢社交和运动，希望找到一位性格开朗、热爱生活的女士。',
    imageUrl: 'https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Charismatic%20young%20man%2C%20friendly%20smile%2C%20casual%20attire&sign=7d0f2386f5bfec65e8e7a5f3703b37d3'
  }
];

// 筛选选项
const filterOptions = {
  education: ['不限', '高中', '专科', '本科', '硕士', '博士及以上'],
  income: ['不限', '5000-10000元', '10000-20000元', '20000-30000元', '30000-50000元', '50000元以上'],
  location: ['不限', '北京', '上海', '广州', '深圳', '成都', '杭州']
};

const MembersSection: React.FC = () => {
  const [members, setMembers] = useState<Member[]>(mockMembers);
  const [filteredMembers, setFilteredMembers] = useState<Member[]>(mockMembers);
  const [selectedGender, setSelectedGender] = useState<'all' | 'male' | 'female'>('all');
  const [filters, setFilters] = useState({
    ageRange: [18, 60],
    heightRange: [150, 200],
    education: '不限',
    income: '不限',
    location: '不限',
    searchTerm: ''
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);

  // 当筛选条件变化时，更新筛选结果
  useEffect(() => {
    let result = [...members];
    
    // 性别筛选
    if (selectedGender !== 'all') {
      result = result.filter(member => member.gender === selectedGender);
    }
    
    // 年龄范围筛选
    result = result.filter(member => 
      member.age >= filters.ageRange[0] && member.age <= filters.ageRange[1]
    );
    
    // 身高范围筛选
    result = result.filter(member => 
      member.height >= filters.heightRange[0] && member.height <= filters.heightRange[1]
    );
    
    // 学历筛选
    if (filters.education !== '不限') {
      result = result.filter(member => member.education === filters.education);
    }
    
    // 收入筛选
    if (filters.income !== '不限') {
      result = result.filter(member => member.income === filters.income);
    }
    
    // 地区筛选
    if (filters.location !== '不限') {
      result = result.filter(member => member.location === filters.location);
    }
    
    // 关键词搜索
    if (filters.searchTerm) {
      const term = filters.searchTerm.toLowerCase();
      result = result.filter(member => 
        member.name.toLowerCase().includes(term) || 
        member.occupation.toLowerCase().includes(term) || 
        member.description.toLowerCase().includes(term)
      );
    }
    
    setFilteredMembers(result);
    setCurrentPage(1); // 重置到第一页
  }, [members, selectedGender, filters]);

  // 处理筛选条件变化
  const handleFilterChange = (filterType: string, value: any) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  // 处理搜索
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters(prev => ({
      ...prev,
      searchTerm: e.target.value
    }));
  };

  // 分页逻辑
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredMembers.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredMembers.length / itemsPerPage);

  // 处理翻页
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  // 处理查看详情
  const handleViewDetails = (memberId: number) => {
    // 在实际应用中，这里可以打开详情模态框或者跳转到详情页
    toast.info('查看嘉宾详情功能开发中...');
  };

  // 重置所有筛选条件
  const resetFilters = () => {
    setSelectedGender('all');
    setFilters({
      ageRange: [18, 60],
      heightRange: [150, 200],
      education: '不限',
      income: '不限',
      location: '不限',
      searchTerm: ''
    });
  };

  return (
    <section id="members" className="py-20 bg-gradient-to-b from-white to-rose-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">优质嘉宾展示</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            我们精心挑选了众多优质单身嘉宾，他们真诚寻找生命中的另一半。通过下方的筛选功能，找到符合您期望的理想伴侣。
          </p>
        </motion.div>

        {/* 筛选区域 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl shadow-lg p-6 mb-10"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {/* 性别筛选 */}
            <div className="lg:col-span-5 md:col-span-2">
              <label className="block text-gray-700 font-medium mb-2">性别筛选</label>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => setSelectedGender('all')}
                  className={`px-4 py-2 rounded-full transition-all ${
                    selectedGender === 'all' 
                      ? 'bg-gradient-to-r from-rose-500 to-pink-400 text-white shadow-md' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  全部
                </button>
                <button
                  onClick={() => setSelectedGender('female')}
                  className={`px-4 py-2 rounded-full transition-all ${
                    selectedGender === 'female' 
                      ? 'bg-gradient-to-r from-rose-500 to-pink-400 text-white shadow-md' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  女士
                </button>
                <button
                  onClick={() => setSelectedGender('male')}
                  className={`px-4 py-2 rounded-full transition-all ${
                    selectedGender === 'male' 
                      ? 'bg-gradient-to-r from-rose-500 to-pink-400 text-white shadow-md' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  男士
                </button>
              </div>
            </div>

            {/* 搜索框 */}
            <div className="lg:col-span-5 md:col-span-2 mb-4">
              <label className="block text-gray-700 font-medium mb-2">关键词搜索</label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="搜索姓名、职业或简介关键词..."
                  value={filters.searchTerm}
                  onChange={handleSearch}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-400/20 focus:border-rose-400 outline-none transition-all"
                />
                <i className="fa-solid fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
              </div>
            </div>

            {/* 年龄范围 */}
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">年龄范围</label>
              <div className="flex items-center gap-2">
                <span className="text-gray-600">{filters.ageRange[0]}岁 - {filters.ageRange[1]}岁</span>
              </div>
            </div>

            {/* 身高范围 */}
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">身高范围</label>
              <div className="flex items-center gap-2">
                <span className="text-gray-600">{filters.heightRange[0]}cm - {filters.heightRange[1]}cm</span>
              </div>
            </div>

            {/* 学历筛选 */}
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">学历</label>
              <select
                value={filters.education}
                onChange={(e) => handleFilterChange('education', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-400/20 focus:border-rose-400 outline-none transition-all"
              >
                {filterOptions.education.map(edu => (
                  <option key={edu} value={edu}>{edu}</option>
                ))}
              </select>
            </div>

            {/* 收入筛选 */}
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">收入范围</label>
              <select
                value={filters.income}
                onChange={(e) => handleFilterChange('income', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-400/20 focus:border-rose-400 outline-none transition-all"
              >
                {filterOptions.income.map(income => (
                  <option key={income} value={income}>{income}</option>
                ))}
              </select>
            </div>

            {/* 地区筛选 */}
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">所在城市</label>
              <select
                value={filters.location}
                onChange={(e) => handleFilterChange('location', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-400/20 focus:border-rose-400 outline-none transition-all"
              >
                {filterOptions.location.map(location => (
                  <option key={location} value={location}>{location}</option>
                ))}
              </select>
            </div>
          </div>

          {/* 重置按钮 */}
          <button
            onClick={resetFilters}
            className="mt-4 text-rose-500 hover:text-rose-600 flex items-center gap-1 transition-colors"
          >
            <i className="fa-solid fa-rotate-left"></i>
            <span>重置所有筛选条件</span>
          </button>
        </motion.div>

        {/* 嘉宾卡片列表 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentItems.length > 0 ? (
            currentItems.map((member) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                {/* 嘉宾照片 */}
                <div className="h-64 overflow-hidden relative">
                  <img
                    src={member.imageUrl}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm text-rose-500 px-3 py-1 rounded-full text-sm font-medium">
                    {member.gender === 'male' ? '男士' : '女士'}
                  </div>
                </div>
                
                {/* 嘉宾信息 */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
                    <div className="text-gray-600 font-medium">{member.age}岁 | {member.height}cm</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    <div className="bg-gray-50 p-2 rounded-lg text-sm">
                      <span className="text-gray-500">学历：</span>
                      <span className="font-medium text-gray-700">{member.education}</span>
                    </div>
                    <div className="bg-gray-50 p-2 rounded-lg text-sm">
                      <span className="text-gray-500">职业：</span>
                      <span className="font-medium text-gray-700">{member.occupation}</span>
                    </div>
                    <div className="bg-gray-50 p-2 rounded-lg text-sm">
                      <span className="text-gray-500">收入：</span>
                      <span className="font-medium text-gray-700">{member.income}</span>
                    </div>
                    <div className="bg-gray-50 p-2 rounded-lg text-sm">
                      <span className="text-gray-500">地区：</span>
                      <span className="font-medium text-gray-700">{member.location}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm line-clamp-3 mb-4">{member.description}</p>
                  
                  <motion.button
                    onClick={() => handleViewDetails(member.id)}
                    className="w-full bg-gradient-to-r from-rose-500 to-pink-400 hover:from-rose-600 hover:to-pink-500 text-white font-medium py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition-all"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    查看详情
                  </motion.button>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full flex flex-col items-center justify-center py-16 text-center">
              <div className="text-gray-400 text-6xl mb-4">
                <i className="fa-solid fa-user-slash"></i>
              </div>
              <h3 className="text-xl font-medium text-gray-700 mb-2">未找到符合条件的嘉宾</h3>
              <p className="text-gray-500 mb-6">请尝试调整筛选条件，或稍后再来查看</p>
              <button
                onClick={resetFilters}
                className="bg-rose-50 text-rose-500 hover:bg-rose-100 font-medium py-2 px-6 rounded-full shadow-sm hover:shadow transition-all"
              >
                重置筛选条件
              </button>
            </div>
          )}
        </div>

        {/* 分页控件 */}
        {filteredMembers.length > itemsPerPage && (
          <div className="mt-12 flex justify-center">
            <nav className="flex items-center space-x-1">
              <button
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
                className={`px-3 py-1 rounded-lg transition-all ${
                  currentPage === 1 
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                    : 'bg-white text-gray-700 hover:bg-rose-50 hover:text-rose-500 shadow-sm hover:shadow'
                }`}
              >
                <i className="fa-solid fa-chevron-left"></i>
              </button>
              
              {[...Array(totalPages)].map((_, index) => (
                // 只显示当前页及前后各2页，以及第一页和最后一页
                ((index + 1 === 1) || 
                 (index + 1 === totalPages) || 
                 (index + 1 >= currentPage - 2 && index + 1 <= currentPage + 2)) && (
                  <button
                    key={index}
                    onClick={() => paginate(index + 1)}
                    className={`w-8 h-8 flex items-center justify-center rounded-lg transition-all ${
                      currentPage === index + 1 
                        ? 'bg-gradient-to-r from-rose-500 to-pink-400 text-white shadow-md' 
                        : 'bg-white text-gray-700 hover:bg-rose-50 hover:text-rose-500 shadow-sm hover:shadow'
                    }`}
                  >
                    {index + 1}
                  </button>
                )
              ))}
              
              <button
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`px-3 py-1 rounded-lg transition-all ${
                  currentPage === totalPages 
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                    : 'bg-white text-gray-700 hover:bg-rose-50 hover:text-rose-500 shadow-sm hover:shadow'
                }`}
              >
                <i className="fa-solid fa-chevron-right"></i>
              </button>
            </nav>
          </div>
        )}

        {/* 查看更多提示 */}
        <div className="text-center mt-12">
          <p className="text-gray-500 mb-4">还想查看更多优质嘉宾？</p>
          <motion.button
            className="bg-gradient-to-r from-rose-500 to-pink-400 hover:from-rose-600 hover:to-pink-500 text-white font-medium py-3 px-8 rounded-full shadow-md hover:shadow-lg transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            注册成为会员
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default MembersSection;