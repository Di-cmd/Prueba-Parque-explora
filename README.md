## Prueba Front
Presentado por: Diana Catalina Salazar G.
Email: dianac.salazarg@gmai.com

## Descargar del repositorio:
Para descargar el proyecto del repositorio.
- Se crea una carpeta en el escritorio.
- Se abre la terminal de git Bash.
- Se clona el repositorio con el comando:
- git clone --branch developer https://github.com/Di-cmd/Prueba-Parque-explora.git
- Una vez clonado el repositorio: se abre el proyecto en visual studio code
- se instalan los node_modules con: npm i
- Una vez se instalan los node_modules se ejecuta el aplicativo con el comando:  npm run dev.
- La aplicación se ejecuta en el puerto 3000  localhost:3000.

## Importante:

Para que se muestre de forma correcta los datos optenidos de la prueba backend, es necesario ejecutar los dos proyectos 
al mismo tiempo. Para que la API funcione.
Ejecutar los dos proyectos al mismo tiempo no trate ningun tipo de conflicto, ya que funcionan en puertos diferentes.



## Estructura General:
La aplicacion fue creada en React, implementando el framework Next.js
La estructura de carpetas se compone de: 
- components:
Donde se encuentra el header, footer y layout que permiten que todas las vistas cuenten con estos componentes.

- Pages:
Se encuentran las diferentes vistas de la aplicación: en donde about.js corresponde a la vista de Quienes somos?
El archivo navigation.js corresponde a la vista de Explora.
El archivo de index.js corresponde a la vista de Inicio.
El archivo datosApi.js corresponde a la vista donde se visualizan los datos optenidos de la prueba Backend.
Se encuentra la carpeta api, la cual contiene el archivo de la api, con la cual se intento hacer el servicio de enviar un correo electronico.

- public: 
En esta carpeta se encuentra la carpeta de img, la cual contiene todas las imagenes utilizadas en el aplicativo.

- carpeta de styles:
En esta carpeta se encuentran las hojas de estilo, la mas utilizada se llama layout.module.css.

Nota: Para el formulario fue posible capturar los datos registrados. pero una falla al unirno a la api no permite el envio del correo electronico. 




