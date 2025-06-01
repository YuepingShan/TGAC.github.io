const nextConfig = {
  output: "export",  // 启用静态导出
  // 添加兼容性设置
  experimental: {
    serverActions: false,
    optimizeCss: true
  },
  // 确保正确路由
  trailingSlash: true,
  // 禁用不必要功能
  poweredByHeader: false
};

export default nextConfig;