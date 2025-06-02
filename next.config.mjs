const nextConfig = {
  output: 'export', // 关键！启用静态导出
  distDir: '/root/cloudbase-workspace/app/output',
  images: {
    unoptimized: true // 禁用图片优化
  }
};
export default nextConfig;