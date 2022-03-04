# React+typescript+hook staging

## usage
  ### load dependencies
    npm install or yarn 
### start
    npm run start or yarn start 
### build
    npm run build or yarn build 
## project tree
    ├─.babelrc ---------> babel config
    ├─.eslintrc.js -----> runtime eslint config
    ├─index.html -------> app container
    ├─index.tsx --------> app entry
    ├─package.json -----> project config
    ├─README.MD --------> project description
    ├─tsconfig.json ----> tsconfig
    ├─webpack.config.js-> basic config
    ├─webpack.dev.js ---> development
    ├─webpack.prod.js --> production
    ├─src
    |  ├─app.tsx -------> component entry
    |  ├─global.css  ---> global css
    |  ├─global.less ---> global less
    |  ├─utils ---------> utils
    |  |   └global.ts
    |  ├─services ------> request
    |  |    └request.ts
    |  ├─pages ---------> display page
    |  |   ├─home
    |  |   |  ├─index.tsx
    |  |   |  └other.tsx
    |  ├─models --------> global data manage
    |  |   ├─index.ts
    |  |   └store.tsx
    |  ├─assets --------> resource
    |  |   └image.png 