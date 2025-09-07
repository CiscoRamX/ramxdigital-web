FROM nginx:alpine

# Copiar build al directorio estático de Nginx
COPY build/ /usr/share/nginx/html

# Reemplazar config por defecto de Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
