/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}
module.exports = {
  output: 'export', // 启用静态导出
  // 其他配置...
}
export default nextConfig
