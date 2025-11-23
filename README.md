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
├── data/           # 数据文件 (products.ts 等)
├── App.tsx         # 主应用组件和路由配置
├── main.tsx        # 入口文件
└── index.css       # 全局样式 (Tailwind 指令)
```

## 页面导航

项目包含以下主要页面：
- **Home**: 首页
- **Product**: 商品展示 (支持多图、分类浏览、详情页)
- **Solutions**: 解决方案
- **News**: 公司新闻
- **About Us**: 关于我们
- **Contact Us**: 联系方式

## 构建部署

### 1. 构建静态文件

运行以下命令将项目构建为生产环境的静态文件：

```bash
npm run build
```

构建完成后，所有静态资源（HTML, CSS, JS, 图片引用等）都会生成在项目根目录下的 `dist` 文件夹中。

### 2. 部署说明

你可以将 `dist` 文件夹中的所有内容直接上传到任何静态网站托管服务，例如：
- **Nginx / Apache 服务器**: 将 `dist` 内容复制到 web root 目录。
- **GitHub Pages**: 推送 `dist` 内容到 `gh-pages` 分支。
- **Vercel / Netlify**: 连接你的 Git 仓库，设置 Build command 为 `npm run build`，Output directory 为 `dist`。
- **阿里云 OSS / AWS S3**: 将 `dist` 内容上传至开启了静态网站托管功能的存储桶。

### 3. 本地预览构建结果

在部署前，你可以在本地预览构建后的效果：

```bash
npm run preview
```
