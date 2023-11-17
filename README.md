# JavaScript-Total-Dia-14
En esta ocasión subo el ejercicio del día 14 del curso "JavaScript Total" que estoy tomando en Udemy. Esta primera vez solo satisfago los requisitos para la resolución del ejercicio, pienso retomarlo al terminar el curso para brindar una solución más estética y/o elaborada nun/✨

### Consigna
Entonces, el proyecto de hoy consiste en programar una aplicación web que consiste en un juego desarrollado con React. 
Vas a programar un juego que consiste en adivinar el número que ha pensado la máquina. 
La idea es que el jugador ingrese un número del 1 al 10, y que por detrás nuestra aplicación genere un número aleatorio entre 
ese rango y lo compare con la "apuesta" del jugador. Si el jugador acierta, gana. Y sino, ha fallado, y vuelve a jugar otra vez, 
pero en cada intento que haga el jugador, nuestro juego va a generar un nuevo número.

Como consigna, tu aplicación debe estar compuesta por al menos dos componentes: 
uno para el título o encabezado del juego, y otro para el funcionamiento del juego propiamente dicho.

El componente título, deberá contar en su código HTML con una etiqueta h1, una imagen
y todo lo que tú creas necesario para encabezar la aplicación. 
Me encantaría que te pongas creativo y agregues aquí todo lo que quieras.

El otro componente, que va a contener el funcionamiento del juego, va a ser mas complejo. 
Por un lado debe contar con un input para que el usuario ingrese su apuesta, y un botón para 
confirmas su apuesta e iniciar la comparación entre ambos números. Pero en la codificación de este componente, 
además deberá contener dos hooks que van a hacer posible el funcionamiento del juego.

El primer hook, hará referencia a la entrada del usuario en el campo input. Inicialmente lo 
pondremos en cero y con su correspondiente función de actualización modificaremos el valor 
actual según lo que el jugador ingrese. Para eso utilizaremos el evento onChange del input.

El segundo hook, va ser quien contenga el valor aleatorio generado por la máquina. Para inicializarlo, 
generaremos un número aleatorio entre un rango de valores (tal cual como hemos visto con la función random allá por el día 4 del curso). 
El límite inferior será 1 y el mayor estará dado por una propiedad (props) que el componente va a recibir cuando se lo llame. 

Por último, mediante el evento onClick del botón vamos a realizar la comprobación de la respuesta. 
Vamos a llamar a una función, que va a comparar la variable del primer hook (el ingreso del jugador) 
con la variable del segundo hook (el número aleatorio) y mostrara en un alert si hubo coincidencia o no.

### Pantalla de la aplicación
![5123](https://github.com/Alejandro-Az/JavaScript-Total-Dia-14/assets/105530752/045438ff-f767-4f12-bf2e-e086780b5292)


Luego de esto, no olvides de llamar a la función de actualización del segundo hook para generar un nuevo número aleatorio.

Cuando tus componentes estén listos, en tu archivo App.js deberás importar y llamar a cada uno de ellos. 
Recuerda que el segundo componente tiene que recibir una propiedad con el límite superior del número aleatorio, que dijimos que va a ser 10.
