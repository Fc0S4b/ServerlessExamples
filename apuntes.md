### first function

1. setup: un archivo netflify.toml en la raíz principal y una carpeta functions con las funciones escritas en archivos js
2. al crear un exports.handler, el contenido del body se accede a través de la url actual en el navegador añadiendo /.netflify/functions/1-hello

### Syntax Details

1. estamos en terreno de node. En node hay diferente síntaxis para importar y exportar.
2. En node se usa exports para exportar módulos. netlify busca que se exporte el método handler de exports.
3. se usa async porque se necesita retornar una promise por default.
4. la función también recibe como tercer parámetro una callback
5. otro enfoque para evitar el async es escribir el callback en el cuerpo de la función, con primer parámetro el error y el segundo un objeto con el statusCode con el body. Se podrá acceder a la función en el navegador de la misma forma que antes.
6. el enfoque async es mas limpio
7. el parámetro event tiene info sobre la request
8. context tiene info sobre donde la función está corriendo (autenticación setup, info sobre el acceso del user )
9. un console.log se verá en el server (en la terminal de vs code)
10. se necesita retornar un statusCode y un body, siempre se debe retornar un string en el body. Si quieres un objeto usa JSON.stringify

### status code

1. todos los navegadores por default hacen get request
2. los status code indican la respuesta del servidor a la request que le hiciste, en resumen:

- 100-199: respuestas informativas
- 200-299: respuestas cumplidas (200 ok, 201 created)
- 300-399: redirecciones
- 400 - 499: errores de cliente
- 500 -599: errores de servidor

3. uno configura el código de status en la función. Procura usar el código correcto.

### first example

1. para visualizar la respuesta del servidor, se configura un archivo con su respectivo index.css y app.js con la librería axios en este caso de preferencia.
2. axios tomará la respuesta del servidor y se mostrará en un elemento html obtenido con un querySelector de Javascript
3. si tienes un statusCode de 404, entonces el catch en javascript se hará cargo de manejarlo