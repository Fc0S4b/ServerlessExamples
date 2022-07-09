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
