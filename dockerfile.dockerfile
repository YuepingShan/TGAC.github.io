FROM node:20-alpine

WORKDIR /app
COPY . .

# 运行构建脚本
RUN chmod +x build.sh && ./build.sh

# 将输出复制到容器根目录
RUN cp -r output /output