# Começando com Gulp
Primeiro instale o Gulp versão 4.0.2+.
OBS: Se começar a instalar usando ```npm```, termine sempre usando ```npm```.
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
# Babel 7
$ npm install gulp-babel @babel/core @babel/preset-env
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
Você pode instalar tudo de uma vez.
```
npm install --save-dev gulp-sass gulp-cssnano gulp-concat gulp-uglify gulp-babel @babel/core @babel/preset-env
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
Nesse exemplo eu vou usar ```jQuery``` como meu vendor, carregando primeiro ele pra depois carregar meu ```view.js```.
Minha pasta ```app``` é onde eu vou guardar meus arquivos js e css, nunca editando os arquivos da pasta ```dist``` porque eles vão ser compilados sempre pra lá.

