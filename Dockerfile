# stage 1
FROM nginx:1.17.1-alpine
COPY /dist/jogodavelha /usr/share/nginx/html
