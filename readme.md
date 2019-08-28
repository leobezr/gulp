# Começando com Gulp
Primeiro instale o Gulp versão 4+.
* ```$ npm install gulp-cli -g```
* ```$ npm install gulp -D```
* ```$ npx -p touch nodetouch gulpfile.js```
* ```$ gulp --help```

# Dependências
Você pode usar `npm` ou `yarn`, tanto faz, eu recomendo usar Yarn porque é mais rápido.
* ```$ npm install gulp-sass```
* ```$ npm install --save-dev gulp-babel@7 babel-core babel-preset-env```
* ```$ npm install gulp-cssnano```
* ```$ npm install gulp-concat```
* ```$ npm install gulp-uglify```

# Métodos
* ```javascript .task()``` Cria uma task
* ```javascript .src()``` Arquivos para serem compilados
* ```javascript .pipe()``` Funções para serem adicionadas
* ```javascript .dest()``` Destino
* ```javascript .watch()``` Listener
* ```javascript .series()``` Ler em sequência
* ```javascript .parallel()``` Ler em paralelo



