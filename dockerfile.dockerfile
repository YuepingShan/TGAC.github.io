FROM node:20-alpine

# 设置工作目录
WORKDIR /app

# 安装依赖
COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm && pnpm install --frozen-lockfile

# 复制源码并构建
COPY . .
RUN pnpm run build

# 验证输出（关键调试步骤）
RUN ls -la /app/output  # 确认输出目录存在



# 验证输出（关键调试步骤）
RUN pnpm run verify  # 执行验证命令
