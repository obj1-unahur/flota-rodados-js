# Flota de rodados (versión Javascript)

Para ejecutar este proyecto es necesario tener instalado [npm](https://www.npmjs.com/) o [yarn](https://yarnpkg.com). Recomendamos también utilizar algún editor de texto que se integre bien con Javascript, como [Visual Studio Code](https://code.visualstudio.com/).

El enunciado original está hecho para Wollok, y puede leerse en https://github.com/wollok/flotasDeRodados.

## Instalación de NodeJS y Yarn (Linux)

Asumiendo que ya estamos como `sudo`, ejecutar lo siguiente:

```
curl -sL https://deb.nodesource.com/setup_10.x | bash -
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
apt-get update && apt-get install yarn
```

Luego, para comprobar que haya quedado andando:

```
$ node --version
v10.16.0

$ yarn --version
1.16.0
```

Por último, descargar el deb de https://code.visualstudio.com/ e instalarlo. Para chequear que funcione se puede ejecutar `code` desde una terminal y debería abrirse el programa.

## Instalación del proyecto

El proyecto tiene dos dependencias, [jest](https://jestjs.io/) para correr los tests y [node-repl](https://github.com/maxogden/node-repl) para poder jugar con el código.

Para instalar ambas dependencias, basta con ejecutar `yarn` o `npm install`.

## Uso

Como dijimos anteriormente, se puede ejecutar el código de dos maneras:

* los tests, ejecutando `yarn test` o `npm test`;
* un REPL, ejecutando `yarn start` o `npm start`.

