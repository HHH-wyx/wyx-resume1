# 个人简历网站

一个基于 Next.js 16 开发的现代化个人简历网站，支持中英文切换和主题切换功能。

## 技术栈

- **框架**: Next.js 16 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS v4
- **动画**: Framer Motion
- **国际化**: 内置中英文支持
- **部署**: Vercel 或 GitHub Pages

## 项目结构

```
.
├── app/                  # Next.js App Router 目录
│   ├── [lang]/           # 多语言支持
│   │   ├── page.tsx      # 简历主页面
│   │   └── not-found.tsx # 404页面
│   ├── globals.css       # 全局样式
│   ├── layout.tsx        # 根布局
│   ├── locales.ts        # 多语言配置
│   └── page.tsx          # 首页重定向
├── public/               # 静态资源
│   └── images/           # 图片资源
├── .gitignore            # Git 忽略文件
├── eslint.config.mjs     # ESLint 配置
├── next.config.ts        # Next.js 配置
├── package-lock.json     # 依赖锁定文件
├── package.json          # 项目配置
├── postcss.config.mjs    # PostCSS 配置
└── tsconfig.json         # TypeScript 配置
```

## 快速开始

### 1. 安装依赖

```bash
npm install
```

### 2. 开发模式

```bash
npm run dev
```

访问 http://localhost:3000

### 3. 构建生产版本

```bash
npm run build
```

### 4. 预览生产版本

```bash
npm run start
```

## 功能特性

- ✅ 响应式设计，适配各种设备
- ✅ 中英文双语支持
- ✅ 白天/黑夜主题切换
- ✅ 平滑滚动和动画效果
- ✅ 项目详情模态框
- ✅ 技能评分展示
- ✅ 联系方式表单

## 自定义内容

### 修改简历内容

编辑 `app/[lang]/page.tsx` 文件，修改个人信息、项目、技能等内容。

### 添加新语言

在 `app/locales.ts` 文件中添加新的语言配置。

### 修改主题颜色

编辑 `app/globals.css` 文件，修改 CSS 变量即可。

## 部署到 GitHub Pages

### 1. 构建静态站点

```bash
npm run build
```

### 2. 部署到 GitHub Pages

使用 GitHub Actions 或手动部署到 `gh-pages` 分支。

## 部署到 Vercel

1. 登录 [Vercel](https://vercel.com)
2. 导入你的 GitHub 仓库
3. 保持默认配置，点击 "Deploy"
4. 部署完成后，Vercel 会提供一个访问 URL

## 许可证

MIT License
