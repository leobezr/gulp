# Começando com Gulp
Primeiro instale o Gulp versão 4.0.2+
```
$ npm install gulp-cli -g
```
```
$ npm install gulp -D
```
```
$ npx -p touch nodetouch gulpfile.js
```
```
$ gulp --help
```

## Dependências

Você pode usar `npm` ou `yarn`, tanto faz, eu recomendo usar Yarn porque é mais rápido.
```
$ npm install gulp-sass
```
```
$ npm install --save-dev gulp-babel@7 babel-core babel-preset-env
```
```
$ npm install gulp-cssnano
```
```
$ npm install gulp-concat
```
```
$ npm install gulp-uglify
```

## Métodos

```js 
.task() // Cria uma task
```
```js
.src() // Arquivos para serem compilados
```
```js 
.pipe() // Funções para serem adicionadas
```
```js 
.dest() // Destino
```
```js 
.watch() // Listener
```
```js 
.series() // Ler em sequência
```
```js 
.parallel() // Ler em paralelo
```

## Exemplo
Nesse exemplo eu vou usar ```jQuery``` como meu vendor, carregando primeiro ele pra depois carregar meu ```view.js```

