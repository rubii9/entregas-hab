# hackamusic

Here you can see the web: [web](https://hackamusic-rubii.netlify.app/#/)


## ENTREGA 12: FRONT

Crea una web usando la api de last.fm con los siguientes requisitos:

- Crea 2 funciones más en el archivo index.js de la api, una para coger
los toptracks getTopTracks() (
https://www.last.fm/api/show/geo.getTopTracks ) y otra para coger los
toptags getTopTags() ( https://www.last.fm/api/show/chart.getTopTags
).
- Las vistas obligatorias del proyecto son: Home.vue, About.vue, TopArtists.vue y TopTracks.vue .
- En Home.vue deben mostrarse los Top tags de Lastfm, recuerda utilizar un componente para mostrarlos, y que los datos los conseguirás a través de la llamada a la API de getTopTags() .
- En About.vue debes mostrar información sobre ti y sobre con qué has hecho el proyecto (la API de Lastfm, librería AXIOS, SweetAlert, Vue-Headful...), en definitiva todo lo que uses.
- En TopArtists.vue debes mostrar los artistas top de LastFm pero utilizando un componente adecuado (debes crearlo...). Utiliza lasprops necesarias. La lógica debe estar en la vista, no en el componente.
- En TopTracks.vue debes mostrar los tracks top de LastFm, pero utilizando un componente adecuado (debes crearlo...). Utiliza las props necesarias. La lógica debe estar en la vista, no en el componente.
- Comenta y documenta tu código.
- Configura de manera correcta el Router y los links (router-links) del proyecto para que funcionen correctamente y de forma dinámica.
- Configura una página de error 404 en tu proyecto para recoger todas las rutas que no están creadas en el router.

OPCIONALES: 

- Uso de SweetAlet2, Vue-Headful, CSS Loader Spiner...
- Implementa alguna función para buscar por artista a través de una barra debúsqueda (input) y devolver la información por pantalla. Puedes colocar esta función en la vista TopArtists.vue .


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
