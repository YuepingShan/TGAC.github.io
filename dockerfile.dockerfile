# 使用官方 Node.js 18 镜像
FROM node:18-alpine

# 设置工作目录
WORKDIR /app

# 复制项目文件
COPY package.json pnpm-lock.yaml ./
COPY . .

# 安装依赖并构建
RUN npm install -g pnpm
RUN pnpm install --frozen-lockfile
RUN pnpm run build
RUN pnpm run export

# 设置 CloudBase 部署命令
CMD ["sh", "-c", "tcb framework deploy --envId t-gac-pro-3gjd2xrsba812230 --verbose"]