# EJERCICIOS

## ENTREGA 1: HTML

La entrega debe ser compartida en un repositorio personal en la plataforma de GitHub (o GitLab si así lo preferís). El respositorio en cuestión debe llamarse entregas-hab. En dicho repositorio debe existir a su vez una carpeta llamada html. Dentro deberéis incluír el archivo index.html con la solución del ejercicio.

## ENTREGA 2: JS I

En el mismo repositorio que habéis creado para la primera entrega deberéis crear la carpeta JS a la misma altura que la carpeta HTML. Dentro de la carpeta creada (JS), debéis crear otra carpeta más llamada entrega-2. Ahí debéis compartir la solución (index.js) con el ejercicio resuelto. La entrega constará de varios ejercicios que se irán entregando según vaya avanzando la semana, comienzo proponiendo el primero de ellos:

Crea una calculadora por medio de if... ...else y switch (de las dos formas) que opere con dos números. Debe ser capaz de sumar, restar, multiplicar, dividir y elevar el número uno a la potencia de número dos. En caso de que el usuario introduzca un tipo de operación no contemplada por el programa deberá mostrarse un mensaje indicando que no se ha seleccionado un tipo de operación correcta.
Calcula la media de puntos en los últimos tres partidos de estos tres equipos y muestra por consola el que tenga una media más alta:
Equipo María: 62, 34, 55.
Equipo Paula: 35, 60, 59.
Equipo Rebeca: 40, 39, 63.
Crea un programa que simule el comportamiento de un dado. El programa debe ir almacenando los valores de cada tirada en una variable, y cuando llegue a 50 puntos o más, debe finalizar su ejecución mostrando un mensaje tal que:
¡Enhorabuena, ha salido un Y! ¡Has ganado con un total de Z puntos!.
A su vez, debe mostrarse el siguiente mensaje tras cada tirada:

Tirada X: ha salido un Y. Tienes un total de Z puntos.
(X: número de la tirada, Y: número aleatorio del 1 al 6, Z: total de puntos acumulados).

P.D: X, Y, Z son nombres que he dado para explicar lo que pido, no quiere decir que debáis llamar de esa manera a las variables correspondientes.

## ENTREGA 3: JS I

Dada la función LetterCount(str) toma el parámetro str que se está pasando y devuelve la primera palabra de mayor longitud. Por ejemplo: Hoy es un día estupendo y fantástico. debe devolver fantástico porque es la primera palabra que más letras tiene.

Haz que la función BinaryConverter(str) devuelva la forma decimal del valor binario. Por ejemplo: si se pasa 101 el programa debe retornar un 5, si se pasa 1000 debe retornar un 8, etc. Si no sabes como convertir un número binario a decimal puedes echar un ojo a este vídeo: https://www.youtube.com/watch?v=bBMhiSy1Grc

Haz que la función PalindromeTwo(str) tome el parámetro str que se le pasa y devuelva true si el parámetro es un palíndromo, (la cadena se lee igual hacia adelante que hacia atrás) de lo contrario devuelve false. Por ejemplo: Arriba la birra debería devolver true, se lee igual del derecho que del revés.

## ENTREGA 4: JS I

Ejercicio de la cesta de la compra propuesto por Iván en clase.

Accede con fetch a la información de la siguiente API: https://api.exchangerate-api.com/v4/latest/EUR. Dado un valor en euros (EUR), convierte dicha cantidad a dólares (USD). Por último convierte esta cantidad en dólares a yenes (JPY).

## ENTREGA 5: CSS

Debéis entregar el ejercicio de html propuesto en la entrega 1 junto a su respectivo CSS.

## ENTREGA 6: JS II

Diseñar una página con HTML, CSS y JS que permita convertir un valor en € o \$ a cualquier otro tipo de moneda empleando el API: https://api.exchangerate-api.com/v4/latest/EUR

## ENTREGA 7: SQL

Crear base de datos de un videoclub con las caracteristicas dadas en el enunciado.


## ENTREGA 8: BACK

node todo.js Comprar pan //Añadiria "comprar pan" al principio de la lista de tareas
node todo.js Ir al dentista --priority //Añadiria con prioridad alta
node todo.js --list //Listaría todas las tareas
node todo.js --done=1 //Marcaría la tarea 1 como hecha
node todo.js --undone=1 //Desmarcaría la tarea 1 como hecha
node todo.js --clean //Borraria las tareas ya hechas

Cada tarea debe guardar el texto de la tarea, el estado y fecha añadida
Cuando se listen debe mostrar toda esa información

La lista de tareas debe guardarse en un archivo .tasks.json en el directorio personal del usuario.

Modules:
//minimist
//fs-extra
//date-fns

PARA NOTA:
La aplicación debería leer un archivo .env que tuviera una variable de entorno LANG=es/gl en base a esa variable mostrar los textos de la aplicación


## ENTREGA 9: BACK


### Ejercicio 1
Show me the files!!
Crear un programa de node que muestre en la consola el contenido de los ficheros que se pasen por línea de comandos pero sólo si son menos de 10Kb. node showfiles.js fichero1.txt ../files/fichero2.css

### Ejercicio 2

Medidor de memoria
Hacer un programa en node que cuando lo ejecutes te ponga el % de memoria RAM libre que tienes disponible en el ordenador.

### Ejercicio 3

Servidor web regular
Hacer un servidor web que responda a la url / con un texto que ponga "Hola" pero sólo por la mañana, el resto del día debería devolver una página de error 404.




## ENTREGA 10: BACK

Crea el backend para un diario de viajes

Rutas:

/entries - GET - devolverá un JSON con la lista de últimos posts de la base de datos
/entries - POST - creará un nuevo post y devolverá un JSON con los datos del post
/entries/(ID) - DELETE - borrará el post con la (ID)
Definición de post:

id (autonumérico)
date (datetime)
description (text)
place (text)
image (text)
Funcionamiento frontend: http://localhost:3000

Mostrará un formulario de creación de nuevo post
Lista de posts
Cada post con un botón de borrar



## ENTREGA 11: FRONT

Crea una webb usando la appi de rick&morty con los siguientes requisitos:

- Titulo de navegador personalizado
- Código optimizado
- Logo de Rick&Morty	
- Página de About con contenido real
- Buscador funcional de personajes (id,nombre,estado y género)
- Comentar el código

OPCIONALES:

- Responsive
- Clases dinamicas para mostrar estado en rojo(muerto),verde(vivo) o naranja(desconocido)
- Favicon 


































