# url-shortener

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Run your end-to-end tests
```
npm run test:e2e
```

### Run your unit tests
```
npm run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Improvements

* Urls redirect / clicks counter

### Docker Instructions

To build the image:

docker build -t caiquecastro/url-shortener .

docker run -it -p 3001:3001 --rm --name url-shortener caiquecastro/url-shortener
