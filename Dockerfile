FROM debian

LABEL Description="This is my Node app for testing docker swarm" Vendor="Carlos Raffellini" Version="0.1"

RUN mkdir -p /opt/swarmrt
ADD * /opt/swarmrt/

RUN apt-get update && apt-get install -y curl && curl -sL https://deb.nodesource.com/setup_4.x | bash - && apt-get install -y nodejs && cd /opt/swarmrt && npm install

CMD ["node", "/opt/swarmrt/index.js"]

EXPOSE 3000

