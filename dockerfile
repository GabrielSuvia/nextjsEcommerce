# Dockerfile (frontend)
FROM node:20

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia el package.json e instala dependencias
COPY package*.json ./
RUN npm install

# Copia el código fuente
COPY . .

# Construye la aplicación para producción
RUN npm run build

# Usa un servidor nginx para servir los archivos estáticos
FROM nginx:alpine
COPY --from=0 /app/build /usr/share/nginx/html

# Expone el puerto
EXPOSE 80

# Inicia nginx
CMD ["nginx", "-g", "daemon off;"]
