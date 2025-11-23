# EasyPiping Frontend

这是一个基于 React + TypeScript + Vite + Tailwind CSS 构建的外贸商品展示网站前端项目。

## 快速开始

### 1. 环境准备

确保你的电脑上安装了 [Node.js](https://nodejs.org/) (建议 v18 或更高版本)。

你可以通过以下命令检查是否已安装：
```bash
node -v
npm -v
```

### 2. 安装依赖

在项目根目录下运行：

```bash
npm install
```

### 3. 启动开发服务器

运行以下命令启动本地开发环境：

```bash
npm run dev
```

启动后，终端会显示访问地址（通常是 `http://localhost:5173`），在浏览器中打开该地址即可查看效果。

## 项目结构

```
src/
├── components/     # 公共组件 (Navbar, Layout 等)
├── pages/          # 页面组件 (Home, Product, Solutions 等)
├── App.tsx         # 主应用组件和路由配置
├── main.tsx        # 入口文件
└── index.css       # 全局样式 (Tailwind 指令)
```

## 页面导航

项目包含以下主要页面：
- **Home**: 首页
- **Product**: 商品展示
- **Solutions**: 解决方案
- **News**: 公司新闻
- **About Us**: 关于我们
- **Contact Us**: 联系方式

## 构建部署

构建生产环境版本：

```bash
npm run build
```

构建完成后，生成的文件位于 `dist` 目录下。

本地预览构建后的版本：

```bash
npm run preview
```

