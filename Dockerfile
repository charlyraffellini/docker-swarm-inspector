FROM debian

LABEL Description="This is my Node app for testing docker swarm" Vendor="Carlos Raffellini" Version="0.1"

RUN mkdir -p /opt/dockerrt
ADD * /opt/dockerrt/

RUN apt-get update && apt-get install -y curl && curl -sL https://deb.nodesource.com/setup_4.x | bash - && apt-get install -y nodejs && cd /opt/node-sample && npm install

CMD ["node", "/opt/dockerrt/index.js"]

EXPOSE 3000

