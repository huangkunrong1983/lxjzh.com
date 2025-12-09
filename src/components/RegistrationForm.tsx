import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import { z } from 'zod';

// 定义表单验证模式
const registrationSchema = z.object({
  name: z.string().min(2, "姓名至少需要2个字符"),
  gender: z.string().nonempty("请选择性别"),
  age: z.number().min(18, "年龄必须满18岁").max(60, "年龄不能超过60岁"),
  height: z.number().min(150, "身高不能低于150cm").max(200, "身高不能超过200cm"),
  education: z.string().nonempty("请选择学历"),
  occupation: z.string().nonempty("请输入职业"),
  income: z.string().nonempty("请选择收入范围"),
  description: z.string().max(500, "个人简介不能超过500字符"),
  requirements: z.string().max(500, "择偶要求不能超过500字符"),
  contact: z.string().nonempty("请输入联系方式"),
});

interface RegistrationFormProps {
  gender: 'male' | 'female';
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({ gender }) => {
  const [formData, setFormData] = useState({
    name: '',
    gender,
    age: 0,
    height: 0,
    education: '',
    occupation: '',
    income: '',
    description: '',
    requirements: '',
    contact: '',
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'age' || name === 'height' ? Number(value) : value
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
      await registrationSchema.parseAsync(formData);
      
      // 模拟提交数据
      setTimeout(() => {
        toast.success(`${gender === 'male' ? '男士' : '女士'}资料提交成功！我们将尽快与您联系。`);
        setFormData({
          name: '',
          gender,
          age: 0,
          height: 0,
          education: '',
          occupation: '',
          income: '',
          description: '',
          requirements: '',
          contact: '',
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

  const educationOptions = [
    { value: '', label: '请选择学历' },
    { value: 'highSchool', label: '高中' },
    { value: 'college', label: '专科' },
    { value: 'bachelor', label: '本科' },
    { value: 'master', label: '硕士' },
    { value: 'phd', label: '博士及以上' },
  ];

  const incomeOptions = [
    { value: '', label: '请选择收入范围' },
    { value: '5000-10000', label: '5000-10000元' },
    { value: '10000-20000', label: '10000-20000元' },
    { value: '20000-30000', label: '20000-30000元' },
    { value: '30000-50000', label: '30000-50000元' },
    { value: '50000+', label: '50000元以上' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl shadow-lg p-6 md:p-8"
    >
      <h3 className="text-2xl font-bold mb-6 text-gray-800">{gender === 'male' ? '男士' : '女士'}信息登记</h3>
      
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* 姓名 */}
        <div>
          <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
            姓名 <span className="text-rose-500">*</span>
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

        {/* 年龄 */}
        <div>
          <label className="block text-gray-700 font-medium mb-2" htmlFor="age">
            年龄 <span className="text-rose-500">*</span>
          </label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age || ''}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:outline-none transition-all ${
              errors.age ? 'border-rose-500 focus:ring-rose-500/20' : 'border-gray-300 focus:border-rose-400 focus:ring-rose-400/20'
            }`}
            placeholder="请输入您的年龄"
            min="18"
            max="60"
          />
          {errors.age && <p className="text-rose-500 text-sm mt-1">{errors.age}</p>}
        </div>

        {/* 身高 */}
        <div>
          <label className="block text-gray-700 font-medium mb-2" htmlFor="height">
            身高 (cm) <span className="text-rose-500">*</span>
          </label>
          <input
            type="number"
            id="height"
            name="height"
            value={formData.height || ''}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:outline-none transition-all ${
              errors.height ? 'border-rose-500 focus:ring-rose-500/20' : 'border-gray-300 focus:border-rose-400 focus:ring-rose-400/20'
            }`}
            placeholder="请输入您的身高"
            min="150"
            max="200"
          />
          {errors.height && <p className="text-rose-500 text-sm mt-1">{errors.height}</p>}
        </div>

        {/* 学历 */}
        <div>
          <label className="block text-gray-700 font-medium mb-2" htmlFor="education">
            学历 <span className="text-rose-500">*</span>
          </label>
          <select
            id="education"
            name="education"
            value={formData.education}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:outline-none transition-all ${
              errors.education ? 'border-rose-500 focus:ring-rose-500/20' : 'border-gray-300 focus:border-rose-400 focus:ring-rose-400/20'
            }`}
          >
            {educationOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {errors.education && <p className="text-rose-500 text-sm mt-1">{errors.education}</p>}
        </div>

        {/* 职业 */}
        <div>
          <label className="block text-gray-700 font-medium mb-2" htmlFor="occupation">
            职业 <span className="text-rose-500">*</span>
          </label>
          <input
            type="text"
            id="occupation"
            name="occupation"
            value={formData.occupation}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:outline-none transition-all ${
              errors.occupation ? 'border-rose-500 focus:ring-rose-500/20' : 'border-gray-300 focus:border-rose-400 focus:ring-rose-400/20'
            }`}
            placeholder="请输入您的职业"
          />
          {errors.occupation && <p className="text-rose-500 text-sm mt-1">{errors.occupation}</p>}
        </div>

        {/* 收入 */}
        <div>
          <label className="block text-gray-700 font-medium mb-2" htmlFor="income">
            收入范围 <span className="text-rose-500">*</span>
          </label>
          <select
            id="income"
            name="income"
            value={formData.income}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:outline-none transition-all ${
              errors.income ? 'border-rose-500 focus:ring-rose-500/20' : 'border-gray-300 focus:border-rose-400 focus:ring-rose-400/20'
            }`}
          >
            {incomeOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {errors.income && <p className="text-rose-500 text-sm mt-1">{errors.income}</p>}
        </div>

        {/* 个人简介 */}
        <div>
          <label className="block text-gray-700 font-medium mb-2" htmlFor="description">
            个人简介
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:outline-none transition-all ${
              errors.description ? 'border-rose-500 focus:ring-rose-500/20' : 'border-gray-300 focus:border-rose-400 focus:ring-rose-400/20'
            }`}
            placeholder="请简要介绍一下自己的性格、爱好、生活习惯等"
            rows={4}
            maxLength={500}
          />
          <div className="flex justify-between items-center">
            {errors.description && <p className="text-rose-500 text-sm mt-1">{errors.description}</p>}
            <p className="text-gray-400 text-sm mt-1">{formData.description.length}/500</p>
          </div>
        </div>

        {/* 择偶要求 */}
        <div>
          <label className="block text-gray-700 font-medium mb-2" htmlFor="requirements">
            择偶要求
          </label>
          <textarea
            id="requirements"
            name="requirements"
            value={formData.requirements}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:outline-none transition-all ${
              errors.requirements ? 'border-rose-500 focus:ring-rose-500/20' : 'border-gray-300 focus:border-rose-400 focus:ring-rose-400/20'
            }`}
            placeholder="请描述您理想伴侣的条件"
            rows={4}
            maxLength={500}
          />
          <div className="flex justify-between items-center">
            {errors.requirements && <p className="text-rose-500 text-sm mt-1">{errors.requirements}</p>}
            <p className="text-gray-400 text-sm mt-1">{formData.requirements.length}/500</p>
          </div>
        </div>

        {/* 联系方式 */}
        <div>
          <label className="block text-gray-700 font-medium mb-2" htmlFor="contact">
            联系方式 <span className="text-rose-500">*</span>
          </label>
          <input
            type="text"
            id="contact"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:outline-none transition-all ${
              errors.contact ? 'border-rose-500 focus:ring-rose-500/20' : 'border-gray-300 focus:border-rose-400 focus:ring-rose-400/20'
            }`}
            placeholder="请输入您的手机号码或微信号"
          />
          {errors.contact && <p className="text-rose-500 text-sm mt-1">{errors.contact}</p>}
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
            '提交资料'
          )}
        </motion.button>
      </form>
    </motion.div>
  );
};

export default RegistrationForm;