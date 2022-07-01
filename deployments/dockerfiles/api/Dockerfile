FROM node:18.4.0

ARG VITE_APP_SARDINE_ENV
ARG VITE_APP_FRONTEND_HOST
ARG NODE_OPTIONS
ENV VITE_APP_SARDINE_ENV=${VITE_APP_SARDINE_ENV}
ENV VITE_APP_FRONTEND_HOST=${VITE_APP_FRONTEND_HOST}
ENV NODE_OPTIONS=${NODE_OPTIONS}
ENV INLINE_RUNTIME_CHUNK=false

WORKDIR /usr/src/app
RUN mkdir server
RUN mkdir frontend
RUN mkdir shared

WORKDIR /usr/src/app/shared
ADD shared ./
RUN npm ci
RUN npm run build
WORKDIR /usr/src/app
ADD server/package.json ./server/package.json
ADD server/package-lock.json ./server/package-lock.json
ADD frontend/package.json ./frontend/package.json
ADD frontend/package-lock.json  ./frontend/package-lock.json
WORKDIR /usr/src/app/server
RUN npm ci
WORKDIR /usr/src/app/frontend
RUN npm ci

ENV NODE_ENV=production
WORKDIR /usr/src/app/server
RUN npm link ../shared
COPY server/src ./src
COPY server/config ./config
COPY server/migrations ./migrations
COPY server/database.json ./database.json
COPY server/start.sh ./start.sh
COPY server/tsconfig.json ./tsconfig.json 
RUN npm run build
WORKDIR /usr/src/app/frontend
RUN npm link ../shared
ADD frontend /usr/src/app/frontend
RUN npm run build
COPY server/config config
WORKDIR /usr/src/app/server
CMD ["./start.sh"]
