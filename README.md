# Loader

## Descripción
Este proyecto es una aplicación de Ionic con Angular que incluye un carrusel de imágenes con un loader integrado. El carrusel muestra una serie de imágenes junto con textos descriptivos y se activa después de que el loader haya completado su tarea.

## Instalación
Para ejecutar este proyecto localmente, sigue estos pasos:

1. Clona este repositorio en tu máquina local.
2. Abre una terminal en la carpeta raíz del proyecto.
3. Ejecuta `npm install` para instalar todas las dependencias.
4. Ejecuta `ionic serve` para iniciar el servidor de desarrollo.
5. Abre tu navegador web y navega a `http://localhost:8100`.

## Uso
Una vez que el servidor esté en funcionamiento, podrás acceder a la aplicación en tu navegador. La página de inicio mostrará un botón para activar el carrusel. Haz clic en el botón para comenzar a ver las imágenes en el carrusel. El loader se mostrará mientras se cargan los datos, y una vez que se complete, aparecerá el carrusel de imágenes.

## Características
- Carrusel de imágenes con transiciones suaves y animaciones.
- Integración de un loader que muestra un spinner mientras se carga el contenido.
- Configuración del tiempo entre imágenes en el carrusel.

## Funcionamiento del Observable
El servicio de loader utiliza un Observable para emitir el estado de carga. Este Observable está suscrito por el componente del carrusel para activar el carrusel una vez que se completa la carga de datos.

## Servicio de Loader
El servicio de loader (`LoaderService`) proporciona métodos para mostrar y ocultar el loader. Utiliza un BehaviorSubject para emitir el estado de carga a todos los componentes que estén suscritos a él. El loader es un componente independiente y funcionable en cuaquier partes de la aplicación donde se requiera.

## Contribución
¡Estamos abiertos a contribuciones! Si deseas contribuir a este proyecto, sigue estos pasos:

1. Haz un fork del repositorio.
2. Clona tu fork en tu máquina local.
3. Crea una nueva rama para tu contribución (`git checkout -b feature/nueva-funcionalidad`).
4. Realiza tus cambios y haz commits con mensajes descriptivos.
5. Sube tus cambios a tu fork (`git push origin feature/nueva-funcionalidad`).
6. Crea una solicitud de extracción en GitHub desde tu fork a este repositorio.

## Autor
Este proyecto fue creado por [Manuel Hurtado](https://github.com/hurtadomx). Puedes contactarme en [manuelhurtadodesarrolloweb@gmail.com](manuelhurtadodesarrolloweb@gmail.com).

## Licencia
Este proyecto está bajo la Licencia MIT. Puedes ver el archivo de licencia [aquí](LICENSE).

## Estado del Proyecto
Este proyecto está en desarrollo y se considera estable para su uso. Se mantendrá actualizado y se agregarán nuevas características periódicamente.
