[![Build Status](https://travis-ci.org/charlyraffellini/docker-swarm-inspector.svg?branch=master)](https://travis-ci.org/charlyraffellini/docker-swarm-inspector)

# docker-swarm-inspector

### what it is?

It is an application that retrieves the connection information of the request.

### why it is important?

It is used in docker swarm to show whether this application is behind a load balancer.

### what to do next?

Create a service in the swarm for instance `docker service create --name inspector -p 5000:3000 charlieraffellini/inspector`. Then send requests a few times and analyze the results `curl http://192.168.1.201:5000`.
