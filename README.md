# url-shortener

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Run your end-to-end tests
```
yarn run test:e2e
```

### Run your unit tests
```
yarn run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Improvements

* Urls redirect / clicks counter

### Docker Instructions

To build the image:

docker build -t caiquecastro/url-shortener .

docker run -it -p 3001:3001 --rm --name url-shortener caiquecastro/url-shortener
