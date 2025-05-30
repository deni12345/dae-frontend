ARG VERSION='20'
FROM mcr.microsoft.com/devcontainers/javascript-node1-${VERSION}

RUN apt-get update && \
  export DEBIAN_FRONTEND=noninteractive && \
  apt-get install -y --no-install-recommends \

COPY package.json package-lock.json ./
RUN yarn install 