FROM node:18-bullseye-slim

RUN mkdir -p /app
RUN chown -R 1000:1000 /app

RUN mkdir -p /app/node_modules
RUN chown -R 1000:1000 /app/node_modules


WORKDIR /app

USER 1000:1000


# RUN apk add --no-cache git bash && mkdir -p /todo-server

# WORKDIR /todo-server

# COPY ./todo-application/todo-server/package.json /todo-server
# #RUN ls -a
# RUN npm install
# COPY ./todo-application/todo-server /todo-server
# COPY ./wait-for-it/wait-for-it.sh /todo-server
# EXPOSE 1350
# CMD ["npm", "start"]
