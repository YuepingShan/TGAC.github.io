const nextConfig = {
  output: 'export', // 关键！启用静态导出
  distDir: 'output',
  images: {
    unoptimized: true // 禁用图片优化
  }
};
export default nextConfig;