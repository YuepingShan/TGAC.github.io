const nextConfig = {
  output: 'export', // 关键！启用静态导出
  distDir: 'build', // 明确指定输出目录
  images: {
    unoptimized: true // 禁用图片优化
  }
};
export default nextConfig;