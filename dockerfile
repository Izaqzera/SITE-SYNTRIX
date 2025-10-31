FROM node:22-alpine

WORKDIR /app

# Instalar pnpm
RUN npm install -g pnpm

# Copiar arquivos de dependências
COPY package.json pnpm-lock.yaml ./

# Instalar dependências
RUN pnpm install --frozen-lockfile

# Copiar o resto do código
COPY . .

# Build
RUN pnpm build

# Expor porta
EXPOSE 3000

# Comando para iniciar
CMD ["node", "dist/index.js"]
