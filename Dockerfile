FROM nginx:alpine

# Copiar dist al directorio estático de Nginx
COPY dist/ /usr/share/nginx/html

# Reemplazar config por defecto de Nginx (si tienes tu propio nginx.conf)
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
