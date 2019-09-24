# Burger Queen - Backend con Node.js

## 1. Preámbulo

Tu equipo del Open House necesita un Back-end para almacenar y manejar la data de la aplicación.

En este caso el cliente quiere que se trabaje un API y como equipo han decidido trabajar en un _Restful API_ que será compatible con los _requests_ del Front-end.

## 2. Resumen del proyecto

Con un backend en este caso nos referimos a un _servidor web_, que es
básicamente un programa que _escucha_ en un puerto de red, a través del cual
podemos enviarle _consultas_ (_request_) y obtener _respuestas_ (_response_).

Un servidor web debe _manejar_ consultas entrantes y producir respuestas a esas
consultas que serán enviadas de vuelta al _cliente_. Cuando hablamos de
_aplicaciones de servidor_, esto implica una arquitectura de _cliente/servidor_,
donde el cliente es un programa que hace consultas a través de una red (por
ejemplo el navegador, cURL, ...), y el _servidor_ es el programa que recibe
estas consultas y las responde.

[Node.js](https://nodejs.org/) nos permite crear servidores web super eficientes
de manera relativamente simple y todo esto usando JavaScript!

En este proyecto partimos de un _boilerplate_ que ya contiene una serie de
_endpoints_ (puntos de conexión o URLs) y nos piden completar la aplicación.
Esto implica que tendremos que partir por leer la implementación existente, y
familiarizarnos con el _stack_ elegido: [Node.js](https://nodejs.org/),
[Express](https://expressjs.com/), [MongoDB](https://www.mongodb.com/),
[mongoose](https://mongoosejs.com/), etc.

## 3. Objetivos de aprendizaje

El objetivo principal de aprendizaje es adquirir experiencia con **Node.js**
como herramienta para desarrollar _aplicaciones de servidor_, junto con una
serie de herramientas comunes usadas en este tipo de contexto (Express como
framework, MongoDB como base datos, ...).

En este proyecto tendrás que construir un servidor web que debe _servir_ `JSON`
sobre `HTTP`.

Para completar el proyecto tendrás que familiarizarte con conceptos como
**rutas** (_routes_), **URLs**, **HTTP** (verbs, request, response, headers,
body, status codes...), **JSON**, **conexión con
una base datos** (MongoDB), **variables de entorno**, ...

## 4. Consideraciones generales

En este proyecto está permitido usar librerías o frameworks.

Los tests unitarios deben indicar el porcentaje de _coverage_.

## 5. Criterios de aceptación mínimos del proyecto

### CLI

La aplicación debe poder arrancarse usando el comando `npm start` dentro de la
carpeta del proyecto. Este es el comportamiento estándar con Node.js y NPM.

Además de esto, la aplicación debe poder recibir información de configuración,
como el puerto en el que escuchar, a qué base datos conectarse, etc. Estos datos
de configuración serán distintos entre diferentes entornos (desarrollo,
producción, ...).

#### Argumentos de línea de comando

Podemos especificar el puerto en el que debe arrancar la aplicación pasando un
argumento a la hora de invocar nuestro programa:

```sh
# Arranca la aplicación el puerto 8888 usando npm
npm start 8888
```

#### Variables de entorno

Nuestra aplicación usa las siguientes variables de entorno:

* `PORT`: Si no se ha especificado un puerto como argumento de lína de comando,
  podemos usar la variable de entorno `PORT` para especificar el puerto. Valor
  por defecto `8080`.
* `MONGO_URL`: El _string_ de conexión de _MongoDB_. Cuando ejecutemos la
  aplicación en nuestra computadora (en entorno de desarrollo), podemos usar el
  valor por defecto (`mongodb://localhost:27017/default`), pero en producción es
  muy importante que usemos el string de conexión que nos indica
  [Mongo Cloud](https://cloud.mongodb.com/), dentro de "Connect" > "Connect your
  application" > "Standard conection string". Este _string_ debería ser algo
  así: `mongodb://system:<PASSWORD>@bq-shard-00-00-ust2z.gcp.mongodb.net:27017,bq-shard-00-01-ust2z.gcp.mongodb.net:27017,bq-shard-00-02-ust2z.gcp.mongodb.net:27017/test?ssl=true&replicaSet=bq-shard-0&authSource=admin&retryWrites=true`.
  Este string depende de tu cluster y el usuario que hayas creado en MongoDB
  Cloud.

### Conexión con el Front-End

Este proyecto no manejará Autenticación de usuarios pero la comunicación entre el Front-end y el Back-end será protegida a través de un _Token_ que en el equipo van a definir en forma. Este _Token_ validará que la información que llega al Back-end es la correspondiente a la de su Front-end. Esta estrategia hace que la aplicación sea más segura de usar.

Es indispensable que el Token llegué por un [Header](https://developer.mozilla.org/es/docs/Web/HTTP/Headers) de [Authorization](https://developer.mozilla.org/es/docs/Web/HTTP/Headers/Authorization).

El Token al ser una variable que solo debe ser conocida por lxs usuarixs no puede escribirse en texto plano, tendremos que investigar sobre [Variables de Entorno](https://en.wikipedia.org/wiki/Environment_variable) para poder protegerlos.

Es muy importante mantener activa la comunicación entre las parejas Front-end y Back-end, esto ayudará a prevenir inconsistencias al momento de mostrar los 2 proyectos funcionando.

## 6. Entrega

El proyecto será _entregado_ subiendo tu código a GitHub (`commit`/`push`) y la
aplicación será desplegada en [zeit.co](https://zeit.co/) y
[cloud.mongodb.com](https://cloud.mongodb.com/), o servicios equivalentes.

## 7. Pistas, tips y lecturas complementarias

### Primeros pasos

#### Dependencias

1. Instala [MongoDB](https://www.mongodb.com/) localmente.
2. Crea un cluster gratuito en [cloud.mongodb.com](https://cloud.mongodb.com/).
3. Creo un usuario en la base datos (MongoDB Users).
4. Crea un cuenta en [zeit.co](https://zeit.co/).
5. Instala herramienta de línea de comando `now`: `npm i -g now`

#### Copia local del proyecto

1. Haz un fork de este repo.
2. Clona el repo en tu computadora.
3. Instala dependencias (`npm i` o `npm install`).
4. Arranca la aplicación `npm start`.

#### Despliegue

Antes de desplegar nuestra aplicación por primera vez tenemos que crear unos
_secretos_ en el servidor, que usaremos después para configurar nuestra
aplicación a través de _variables de entorno_.

La herramienta de `now` nos permite crear secretos con el comando `now secrets
add <key> <value>`. Por ejemplo:

```sh
$ now secrets add mongo-url "mongodb://system:<PASSWORD>@foo-shard-00-00-ust2z.gcp.mongodb.net:27017,foo-shard-00-01-ust2z.gcp.mongodb.net:27017,foo-shard-00-02-ust2z.gcp.mongodb.net:27017/test?ssl=true&replicaSet=bq-shard-0&authSource=admin&retryWrites=true"
> Success! Secret mongo-url added (lupomontero) [1s]
$ now secrets add token "this is actually supposed to be a secret"
> Success! Secret token added (lupomontero) [1s]
```

Recurda que sólo necesitas _crear_ los secretos una vez. No es necesario
crearlos cada vez que vayas a desplegar cambios.

Una vez configurados los _secretos_ en el servidor, podemos proceder con el
despliegue:

```sh
now \
  -e MONGO_URL=@mongo-url \
  -e TOKEN=@token
```

Este comando está configurado como tarea `deploy` en el `package.json`, así que
puedes ejecutarlo con `npm run deploy`.

### Otros recursos

* [Express](https://expressjs.com/)
* [MongoDB](https://www.mongodb.com/)
* [mongoose](https://mongoosejs.com/)
* [MongoDB Cloud](https://cloud.mongodb.com/)
* [Zeit](http://zeit.co/)
* [Postman](https://www.getpostman.com)
* [Variable de entorno - Wikipedia](https://es.wikipedia.org/wiki/Variable_de_entorno)
* [`process.env` - Node.js docs](https://nodejs.org/api/process.html#process_process_env)

***

## 8. Checklist

### HTTP API

#### `/products`

* [ ] `GET /products`
* [ ] `GET /products/:productid`
* [ ] `POST /products`
* [ ] `PUT /products/:productid`
* [ ] `DELETE /products/:productid`

#### `/orders`

* [ ] `GET /orders`
* [ ] `GET /orders/:orderid`
* [ ] `POST /orders`
* [ ] `PUT /orders/:orderid`
* [ ] `DELETE /orders/:orderid`
