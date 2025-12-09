# 亮星服务 - 婚介服务网站搭建指南

## 欢迎使用亮星服务网站！

这是一个完整的婚介服务单页网站，使用 React、TypeScript、Tailwind CSS 和 Vite 构建。本指南将帮助您从零开始搭建这个网站，即使您是编程新手也能轻松完成。

## 准备工作

在开始之前，您需要准备以下工具：

### 1. 安装 Node.js

Node.js 是运行这个网站的基础环境。

- 访问 [Node.js 官网](https://nodejs.org/zh-cn/)
- 下载并安装最新的 LTS 版本（长期支持版本）
- 安装完成后，打开命令提示符（Windows）或终端（Mac），输入 `node -v` 和 `npm -v` 检查是否安装成功

### 2. 安装代码编辑器

推荐使用 Visual Studio Code（VS Code）：

- 访问 [VS Code 官网](https://code.visualstudio.com/)
- 下载并安装适合您操作系统的版本
- 安装完成后，打开 VS Code

## 搭建步骤

### 步骤 1：创建项目文件夹

1. 在您的电脑上创建一个新文件夹，命名为 `liangxing-service`
2. 打开这个文件夹

### 步骤 2：复制代码文件

将所有代码文件复制到您创建的 `liangxing-service` 文件夹中。确保文件结构如下：

```
liangxing-service/
├── .gitignore
├── README.md
├── index.html
├── package.json
├── pnpm-lock.yaml
├── postcss.config.js
├── src/
│   ├── App.tsx
│   ├── components/
│   │   ├── AboutSection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── Empty.tsx
│   │   ├── Footer.tsx
│   │   ├── HeroSection.tsx
│   │   ├── MembersSection.tsx
│   │   ├── Navbar.tsx
│   │   ├── RegistrationForm.tsx
│   │   ├── RegistrationSection.tsx
│   │   ├── ScrollToTop.tsx
│   │   ├── ServicesSection.tsx
│   │   └── SuccessStories.tsx
│   ├── contexts/
│   │   └── authContext.ts
│   ├── hooks/
│   │   └── useTheme.ts
│   ├── index.css
│   ├── lib/
│   │   └── utils.ts
│   ├── main.tsx
│   ├── pages/
│   │   └── Home.tsx
│   └── vite-env.d.ts
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

### 步骤 3：安装依赖

1. 在 VS Code 中打开 `liangxing-service` 文件夹
2. 点击顶部菜单的 `终端` -> `新建终端`
3. 在终端中输入以下命令并按回车键：

```bash
npm install
```

4. 等待依赖安装完成（可能需要几分钟时间）

### 步骤 4：本地运行网站

1. 依赖安装完成后，在终端中输入以下命令：

```bash
npm run dev
```

2. 等待网站启动，终端中会显示一个本地访问地址（通常是 http://localhost:3000）
3. 打开浏览器，访问这个地址，您就能看到亮星服务网站的效果了！

### 步骤 5：构建生产版本

当您准备好将网站部署到互联网上时：

1. 在终端中按 `Ctrl + C` 停止本地运行
2. 输入以下命令构建生产版本：

```bash
npm run build
```

3. 构建完成后，会在项目文件夹中生成一个 `dist` 文件夹，里面包含了所有可以直接部署的文件

## 部署网站

您可以将构建好的网站部署到以下平台：

### 推荐的免费部署平台：

1. **Vercel**：
   - 访问 [Vercel 官网](https://vercel.com/) 并注册账号
   - 点击 "New Project"，选择 "Import Git Repository"
   - 按照指引连接您的代码仓库（如果您已将代码上传到 GitHub、GitLab 或 Bitbucket）
   - 等待部署完成，Vercel 会提供一个免费的域名

2. **Netlify**：
   - 访问 [Netlify 官网](https://www.netlify.com/) 并注册账号
   - 点击 "New site from Git"
   - 连接您的代码仓库并按照指引部署
   - 部署完成后，Netlify 会提供一个免费的域名

3. **GitHub Pages**（如果您使用 GitHub）：
   - 将代码上传到 GitHub 仓库
   - 在仓库的 "Settings" 中找到 "Pages" 选项
   - 选择部署分支和文件夹（通常是 `gh-pages` 分支和 `/dist` 文件夹）
   - 保存设置，GitHub 会自动为您部署网站

## 常见问题解答

**问题 1：安装依赖时出错怎么办？**
- 尝试使用管理员权限运行命令提示符/终端
- 检查您的网络连接是否稳定
- 可以尝试使用 `npm cache clean --force` 清除缓存后重新安装

**问题 2：网站运行后看不到图片怎么办？**
- 请检查您的网络连接是否正常
- 图片链接可能需要一点时间加载

**问题 3：如何修改网站内容？**
- 您可以在 `src/components` 文件夹中找到各个页面部分的代码
- 使用 VS Code 打开相应的 `.tsx` 文件进行编辑
- 修改后保存文件，网站会自动刷新显示更改

## 结束语

恭喜您成功搭建了亮星服务网站！如果您在过程中遇到任何问题，可以随时在网上搜索相关解决方案，或者向有经验的开发者寻求帮助。祝您使用愉快！