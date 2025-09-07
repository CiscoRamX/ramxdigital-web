# ---------- 1) Build (Node) ----------
FROM node:20-alpine AS build
WORKDIR /app

# Copia dependencias y las instala
COPY package*.json ./
RUN npm ci --no-audit --no-fund

# Copia el resto del proyecto y construye
COPY . .
# IMPORTANTE: este script debe generar /app/dist (Vite) o ajusta la ruta más abajo
RUN npm run build

# ---------- 2) Runtime (Nginx) ----------
FROM nginx:alpine
# Reemplaza el vhost por defecto y activa fallback SPA
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Si tu build genera "dist", deja esta línea.
# Si usas CRA (que genera "build"), cambia a: /app/build
# Si usas Next export (que genera "out"), cambia a: /app/out
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80
