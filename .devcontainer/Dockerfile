ARG VERSION="20"
FROM mcr.microsoft.com/devcontainers/javascript-node:1-${VERSION}

RUN apt-get update && \
  export DEBIAN_FRONTEND=noninteractive && \
  apt-get install -y --no-install-recommends

# List all the folders that my container has
RUN ls -la