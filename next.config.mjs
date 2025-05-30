// next.config.mjs
const nextConfig = {
  output: 'export',
  distDir: 'build',
  // 添加基础路径（关键！）
  basePath: '/build',
  images: {
    unoptimized: true
  }
}

export default nextConfig;