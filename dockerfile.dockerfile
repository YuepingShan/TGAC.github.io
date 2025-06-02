FROM node:18-alpine

WORKDIR /app

# 先安装依赖（利用Docker缓存层）
COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm && pnpm install --frozen-lockfile

# 再复制源码并构建
COPY . .
RUN pnpm run build  # next.config.mjs 已配置自动导出静态文件

# 验证输出目录存在
RUN ls -la /root/cloudbase-workspace/app/output  # 调试用，确保目录存在

CMD ["sh", "-c", "tcb framework deploy --envId t-gac-pro-3gjd2xrsba812230 --verbose"]
# 将输出目录移动到容器根目录（关键修改！）
RUN mv /app/output /output
RUN echo "当前目录:" && pwd
RUN echo "输出目录内容:" && ls -la /app/output