# Step 1 - setup our container
FROM node:18-alpine as dev

WORKDIR /usr/src/app

COPY --chown=node:node package*.json ./

RUN npm ci

COPY --chown=node:node ./ ./

RUN npm run build

USER node
# Step 2- Copy only the files from 'dev' that we need for prod and start the server
FROM node:18-alpine

WORKDIR /usr/src/app

COPY --chown=node:node --from=dev /usr/src/app/package*.json ./

COPY --chown=node:node --from=dev /usr/src/app/dist ./dist

RUN npm install --production

EXPOSE 3001

USER node

CMD ["node", "dist/main"]
