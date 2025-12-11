'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { locales, Locale } from '../locales';

// 定义项目详情类型
interface ProjectDetail {
  id: string;
  title: string;
  image: string;
  description: string;
  situation: string;
  task: string;
  action: string;
  result: string;
  tags: string[];
}

// 客户端组件：处理电话号码显示逻辑
const PhoneDisplay = () => {
  const [phoneNumber, setPhoneNumber] = React.useState('153****8953');
  const [showFullPhone, setShowFullPhone] = React.useState(false);
  
  const handleShowPhone = () => {
    setShowFullPhone(true);
    setPhoneNumber('15327728953');
  };
  
  return (
    <div className="phone-number">
      <span>{phoneNumber}</span>
      {!showFullPhone && (
        <button 
          onClick={handleShowPhone}
          className="ml-2 text-blue-600 dark:text-blue-400 hover:underline text-sm"
        >
          显示完整号码
        </button>
      )}
    </div>
  );
};

// 客户端组件：处理语言切换逻辑
const LanguageSwitcher = ({ currentLang }: { currentLang: string }) => {
  const handleLanguageChange = () => {
    window.location.href = currentLang === 'zh' ? '/en' : '/zh';
  };
  
  return (
    <button 
      className="px-3 py-1 rounded-md bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
      onClick={handleLanguageChange}
    >
      {currentLang === 'zh' ? 'EN' : '中文'}
    </button>
  );
};

// 客户端组件：处理主题切换逻辑
const ThemeSwitcher = () => {
  const [isDark, setIsDark] = React.useState(false);
  
  // 只在客户端执行
  React.useEffect(() => {
    // 初始化主题状态 - 默认白天模式
    setIsDark(false);
    
    // 确保初始状态下没有dark类，使用白天模式
    const root = document.documentElement;
    if (root.classList.contains('dark')) {
      root.classList.remove('dark');
    }
  }, []);
  
  const handleThemeChange = () => {
    const root = document.documentElement;
    
    if (isDark) {
      // 切换到白天模式 - 移除dark类
      root.classList.remove('dark');
      setIsDark(false);
    } else {
      // 切换到黑夜模式 - 添加dark类
      root.classList.add('dark');
      setIsDark(true);
    }
  };
  
  return (
    <button 
      className="px-3 py-1 rounded-md bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
      onClick={handleThemeChange}
    >
      {isDark ? '☀️' : '🌙'}
    </button>
  );
};

// 主页面组件
const HomeContent = ({ lang }: { lang: string }) => {
  // 确保lang是有效的Locale值，默认为'zh'
  const validLang = (lang as Locale) in locales ? (lang as Locale) : 'zh';
  const t = locales[validLang];
  
  // 项目详情数据
  const projects: ProjectDetail[] = [
    {
      id: 'project1',
      title: '兼职经历：数据标注与分析助理（某人工智能科技公司）',
      image: '/images/projects/图片1.png',
      description: '负责5万条用户行为数据的清洗与标注工作，通过Python脚本提升效率30%。',
      situation: '公司优化电商推荐算法时，需对用户行为数据进行基础标注与筛选，团队面临数据量大、标注流程繁琐的问题。我凭借课堂学到的 Excel 技能和基础消费经济知识，加入项目提供支持。',
      task: '负责用户浏览、下单等行为数据的分类标注，按消费频率、价格区间筛选有效数据；用 Excel 和 Python（Pandas 库）做简单数据清洗，每周输出数据质量小结，协助团队整理基础趋势。',
      action: '先熟悉标注规范，按要求完成日常标注任务；遇到数据异常时，结合微观经济学基础分析可能原因并记录；用 Python 编写简单脚本简化数据整理步骤，提升个人标注效率。',
      result: '兼职期间累计完成 5 万条有效数据标注，准确率达 96%，符合团队标准；协助输出 6 份基础数据小结，为算法优化提供原始素材；脚本提升个人工作效率 30%，获得团队同事认可，顺利完成兼职任务。',
      tags: ['Python', 'Pandas', 'Excel']
    },
    {
      id: 'project2',
      title: '课程项目：校园二手交易智能推荐系统设计',
      image: '/images/projects/图片1 (1).png',
      description: '设计智能推荐系统，通过问卷收集120份用户数据，采用协同过滤算法实现精准匹配。',
      situation: '校园二手平台信息杂乱，供需匹配效率低，课程要求结合智能经济基础技术设计解决方案，锻炼理论落地能力。我和 3 名同学组成小组参与项目。',
      task: '作为组员，负责收集用户需求数据、构建基础用户画像，协助完成推荐算法初步选型和系统简单原型搭建，确保项目顺利推进。',
      action: '通过问卷收集 120 份校园用户需求数据，用 Python（Scikit-learn 库）做简单数据预处理，提取物品偏好、价格接受度等 3 个核心维度；对比基础推荐算法后，选择协同过滤算法做简单应用；用 Figma 搭建包含推荐列表、用户信息录入的基础原型。',
      result: '项目顺利通过课程答辩，获课程成绩 B+；模拟测试中推荐匹配准确率达 70%，较传统搜索模式有明显提升；通过项目掌握了基础数据处理和原型设计技能，提升了团队协作与沟通能力。',
      tags: ['Python', 'Scikit-learn', 'Figma']
    },
    {
      id: 'project3',
      title: '科研实践：区域数字经济发展基础调研（校级科研项目）',
      image: '/images/projects/图片2.png',
      description: '参与校级科研项目，收集10+项经济指标，设计并回收150+份企业问卷。',
      situation: '数字经济与实体经济融合是专业重点方向，学校组织学生参与区域经济基础调研，将理论与实践结合。我作为小组普通成员加入调研。',
      task: '协助收集区域数字经济相关数据，参与设计简单调研问卷，走访本地小型企业，整理调研资料并做基础数据可视化。',
      action: '从统计局官网、行业报告收集目标区域数字产业营收、企业数字化投入等 10 余项基础数据；协助设计问卷，发放并回收 150 + 份有效问卷；跟随导师走访 8 家本地小微企业，记录数字化转型现状；用 Excel 做简单数据整理和图表绘制。',
      result: '顺利完成调研任务，协助整理的基础数据和图表被纳入项目报告；通过调研了解了区域数字经济发展现状，初步掌握了数据收集和简单可视化方法，提升了实践调研能力。',
      tags: ['Excel', 'SPSS', '数据可视化']
    }
  ];
  
  // 模态框状态管理
  const [selectedProject, setSelectedProject] = React.useState<ProjectDetail | null>(null);
  const [showModal, setShowModal] = React.useState(false);
  
  // 打开模态框
  const openModal = (project: ProjectDetail) => {
    setSelectedProject(project);
    setShowModal(true);
    document.body.style.overflow = 'hidden';
  };
  
  // 关闭模态框
  const closeModal = () => {
    setShowModal(false);
    setTimeout(() => {
      setSelectedProject(null);
      document.body.style.overflow = 'auto';
    }, 300);
  };
  
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* 导航栏 */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="text-xl font-bold">WYX</div>
          <div className="flex items-center gap-4">
            {/* 语言切换 */}
            <LanguageSwitcher currentLang={lang} />
            {/* 主题切换 */}
            <ThemeSwitcher />
          </div>
        </div>
      </nav>

      {/* Hero区域 */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
        {/* 背景渐变 - 使用CSS变量 */}
        <div className="absolute inset-0 z-0" style={{ background: 'var(--hero-bg)' }}></div>
        <div className="container mx-auto px-4 z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* 证件照 */}
            <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-green-500 shadow-lg">
              <div className="w-full h-full bg-gradient-to-br from-green-100 to-orange-100 flex items-center justify-center">
                <span className="text-green-600 text-2xl font-bold">WYX</span>
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-green-600 to-orange-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">{t.hero.slogan}</h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">{t.hero.subtitle}</p>
            <div className="flex justify-center gap-4">
              <motion.a 
                href="#about" 
                className="px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t.about}
              </motion.a>
              <motion.a 
                href="#projects" 
                className="px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t.projects}
              </motion.a>
              <motion.a 
                href="#contact" 
                className="px-6 py-3 bg-orange-600 text-white rounded-full hover:bg-orange-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t.contact}
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 关于我区域 */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">{t.about}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative w-64 h-64 mx-auto rounded-full overflow-hidden border-4 border-green-500 shadow-lg">
              <div className="w-full h-full bg-gradient-to-br from-green-100 to-orange-100 flex items-center justify-center">
                <span className="text-green-600 text-4xl font-bold">WYX</span>
              </div>
            </div>
            <div>
              <p className="text-lg mb-4">
                我是一名智能经济专业的学生，具有扎实的数据分析能力和全栈开发技能。
                致力于将经济理论与技术实践相结合，为企业和社会创造价值。
              </p>
              <p className="text-lg mb-4">
                性格较为内敛，但做事沉稳认真，具有责任感。兴趣爱好是看书和手工。
              </p>
              <p className="text-lg mb-4">
                我热爱学习新技术，善于解决复杂问题，具有良好的团队合作精神和沟通能力。
              </p>
              <div className="flex gap-4 mt-6">
                <a href="#contact" className="text-blue-600 dark:text-blue-400 hover:underline">{t.contact}</a>
                <a href="#skills" className="text-blue-600 dark:text-blue-400 hover:underline">{t.skills}</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 教育背景 */}
      <section id="education" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">{t.education}</h2>
          <div className="max-w-3xl mx-auto">
            {/* 教育卡片 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8">
              <h3 className="text-2xl font-semibold mb-2">武汉理工大学</h3>
              <p className="text-blue-600 dark:text-blue-400 mb-4">智能经济专业</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 rounded-full text-sm">本科</span>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-300 rounded-full text-sm">优秀学生</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 工作经历 */}
      <section id="experience" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">{t.experience}</h2>
          <div className="max-w-3xl mx-auto">
            {/* 工作经历卡片 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8">
              <h3 className="text-2xl font-semibold mb-2">数据标注与分析助理</h3>
              <p className="text-blue-600 dark:text-blue-400 mb-4">某AI科技公司</p>
              <p className="mb-4">
                负责用户行为数据的清洗与标注工作，编写Python自动化脚本提升效率，
                输出数据质量分析报告，协助算法团队优化特征工程。
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-sm">2025.06 - 2025.09</p>
            </div>
          </div>
        </div>
      </section>

      {/* 核心技能 */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">{t.skills}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* 专业技能 - 五颗星 */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">专业技能</h3>
                <div className="flex items-center">
                  <span className="text-yellow-500 dark:text-yellow-400 text-lg">★★★★★</span>
                  <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">5.0</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-green-100 dark:bg-blue-900/50 text-green-800 dark:text-blue-300 rounded-lg text-sm font-medium">SQL Server(熟练)</span>
                <span className="px-4 py-2 bg-green-100 dark:bg-blue-900/50 text-green-800 dark:text-blue-300 rounded-lg text-sm font-medium">SPSS(熟练)</span>
                <span className="px-4 py-2 bg-green-100 dark:bg-blue-900/50 text-green-800 dark:text-blue-300 rounded-lg text-sm font-medium">Python数据分析</span>
              </div>
            </div>
            
            {/* 语言能力 - 四颗星 */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">语言能力</h3>
                <div className="flex items-center">
                  <span className="text-yellow-500 dark:text-yellow-400 text-lg">★★★★☆</span>
                  <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">4.0</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-orange-100 dark:bg-green-900/50 text-orange-800 dark:text-green-300 rounded-lg text-sm font-medium">CET-6(高分)</span>
                <span className="px-4 py-2 bg-orange-100 dark:bg-green-900/50 text-orange-800 dark:text-green-300 rounded-lg text-sm font-medium">英语读写(流利)</span>
              </div>
            </div>
            
            {/* 经济理论 - 四颗半 */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">经济理论</h3>
                <div className="flex items-center">
                  <span className="text-yellow-500 dark:text-yellow-400 text-lg">★★★★✦</span>
                  <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">4.5</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-green-100 dark:bg-purple-900/50 text-green-800 dark:text-purple-300 rounded-lg text-sm font-medium">微观经济学</span>
                <span className="px-4 py-2 bg-green-100 dark:bg-purple-900/50 text-green-800 dark:text-purple-300 rounded-lg text-sm font-medium">计量经济学</span>
                <span className="px-4 py-2 bg-green-100 dark:bg-purple-900/50 text-green-800 dark:text-purple-300 rounded-lg text-sm font-medium">消费行为分析</span>
              </div>
            </div>
            
            {/* 技术栈 - 三颗半 */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">技术栈</h3>
                <div className="flex items-center">
                  <span className="text-yellow-500 dark:text-yellow-400 text-lg">★★★✦☆</span>
                  <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">3.5</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-orange-100 dark:bg-yellow-900/50 text-orange-800 dark:text-yellow-300 rounded-lg text-sm font-medium">Python</span>
                <span className="px-4 py-2 bg-orange-100 dark:bg-yellow-900/50 text-orange-800 dark:text-yellow-300 rounded-lg text-sm font-medium">Scikit-learn</span>
                <span className="px-4 py-2 bg-orange-100 dark:bg-yellow-900/50 text-orange-800 dark:text-yellow-300 rounded-lg text-sm font-medium">Figma</span>
                <span className="px-4 py-2 bg-orange-100 dark:bg-yellow-900/50 text-orange-800 dark:text-yellow-300 rounded-lg text-sm font-medium">Excel</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 项目作品集 */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">{t.projects}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 项目卡片列表 */}
            {projects.map((project) => (
              <motion.div 
                key={project.id}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
                whileHover={{ y: -5 }}
                onClick={() => openModal(project)}
              >
                <div className="h-48 relative">
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill 
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                    <h4 className="text-white text-lg font-semibold p-4">{project.title}</h4>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 rounded-full text-xs">{tag}</span>
                    ))}
                  </div>
                  <div className="inline-block text-blue-600 dark:text-blue-400 hover:underline font-medium">
                    查看详情 →
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* 项目详情模态框 */}
      {selectedProject && (
        <motion.div 
          className={`fixed inset-0 z-50 flex items-center justify-center p-4 ${showModal ? 'block' : 'hidden'}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* 背景遮罩 */}
          <div 
            className="absolute inset-0 bg-black/70" 
            onClick={closeModal}
          ></div>
          
          {/* 模态框内容 */}
          <motion.div 
            className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* 关闭按钮 */}
            <button 
              className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors z-10"
              onClick={closeModal}
            >
              <span className="text-gray-600 dark:text-gray-300 text-xl">×</span>
            </button>
            
            {/* 项目图片 */}
            <div className="h-64 md:h-80 relative">
              <Image 
                src={selectedProject.image} 
                alt={selectedProject.title} 
                fill 
                className="object-cover rounded-t-2xl"
              />
            </div>
            
            {/* 项目详情内容 */}
            <div className="p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">{selectedProject.title}</h2>
              
              {/* 标签 */}
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tags.map((tag, index) => (
                  <span key={index} className="px-4 py-2 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 rounded-lg text-sm">{tag}</span>
                ))}
              </div>
              
              {/* STAR方法详细描述 */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-blue-600 dark:text-blue-400">Situation (背景)</h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{selectedProject.situation}</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-blue-600 dark:text-blue-400">Task (任务)</h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{selectedProject.task}</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-blue-600 dark:text-blue-400">Action (行动)</h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{selectedProject.action}</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-blue-600 dark:text-blue-400">Result (结果)</h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{selectedProject.result}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* 联系方式 */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">{t.contact}</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-semibold mb-6">{t.contact}</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 dark:text-blue-400">📧</span>
                    </div>
                    <span>2512492141@qq.com</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-green-100 dark:bg-green-900/50 rounded-full flex items-center justify-center">
                      <span className="text-green-600 dark:text-green-400">📱</span>
                    </div>
                    <PhoneDisplay />
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center">
                      <span className="text-gray-600 dark:text-gray-400">💻</span>
                    </div>
                    <a 
                      href="https://github.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-6">发送消息</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">姓名</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">邮箱</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">留言</label>
                    <textarea 
                      rows={5} 
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    发送
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 页脚 */}
      <footer className="py-8 bg-gray-100 dark:bg-gray-800 text-center">
        <div className="container mx-auto px-4">
          <p className="text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} WYX. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

// 主页面默认导出 - 使用Next.js 14 App Router语法
export default function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  // 使用React.use()解包params Promise
  const resolvedParams = React.use(params);
  return <HomeContent lang={resolvedParams.lang} />;
};
