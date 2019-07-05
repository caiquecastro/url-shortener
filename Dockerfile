# use node latest version as docker base image
FROM node:12

# set the app working directory
WORKDIR /app

# copy the dependencies manifest files
COPY package*.json ./

# install npm dependencies
RUN npm install

# copy the project files 
COPY . .

# build the frontend app
RUN npm run build

EXPOSE 80
CMD [ "node", "server" ]
