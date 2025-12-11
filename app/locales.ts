export const locales = {
  zh: {
    hero: {
      slogan: '有志者，事竟成。',
      subtitle: '欢迎来到我的个人空间'
    },
    about: '关于我',
    education: '教育背景',
    experience: '工作经历',
    skills: '核心技能',
    projects: '项目作品集',
    contact: '联系方式',
    download: '下载简历',
    toggleLanguage: '切换语言',
    toggleTheme: '切换主题'
  },
  en: {
    hero: {
      slogan: 'Where there is a will, there is a way.',
      subtitle: 'Welcome to my personal space'
    },
    about: 'About Me',
    education: 'Education',
    experience: 'Experience',
    skills: 'Skills',
    projects: 'Projects',
    contact: 'Contact',
    download: 'Download Resume',
    toggleLanguage: 'Toggle Language',
    toggleTheme: 'Toggle Theme'
  }
};

export type Locale = keyof typeof locales;