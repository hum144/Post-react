#Prueba tecnica TCIT

Esta aplicacion se construyo en base a lo solicitado para el proceso de seleccion de  TCIT "Challenge de desarrollo de aplicación en React con backend en Ruby on Rails o NodeJS, Base de datos SQL"

Se utilizo Node.js para el servidor backend de la API y React redux para el front

#Requisitos
- Node.js (versión 14 o superior)
- npm (versión 6 o superior)
- Base de datos postgreSQL

#Dependencias

- async
- cors
- express
- pg
- pg-hstore
- sequelize

#Instalacion 

1. 
Ubicar las carpetas, junto a .git, .gitignore y este readme, es una carpeta a eleccion.

2. 
En su terminal de preferencia, moverse a la carpeta back.
    ```bash
    cd .../back
    ```
En otra ventana terminal, moverse a la carpeta front
    ```bash
    cd .../front
    ```

3.
En ambas ventanas usa el siguiente comando.
    ```bash
    npm install
    ```

4. En la carpeta back, cree un archivo .env e ingrese los datos que corresponda:
DB_NAME=Nombre de la base de datos
DB_USER=Base de datos a usar, en el ejercicio se requeria postgreSQL
DB_PASS=contraseña de la base de datos
HOST=host a usar, por defecto sera "localhost"
PORT=puerto a usar, por defect 3000

#Uso

1. Ya con los archivos necesarios instalados, en ambas ventanas ingrese este comando
    ```bash
    npm run dev
    ```
2. En la ventana "back" dira "Servidor iniciado", junto a la url de acceso, seguido de la migracion de la base de datos.

3. En la ventana "front" dira "Vite v###", junto al tiempo de inicio, seguido de la url de acceso, la red y la instruccion de ayuda.

4. Cree un post por el administrador de su base de datos preferida, insertando "name" y "description"

#Estructura de archivos
-/app
    -/back
        -/config
            -db.config.js
        -/controllers
            -post.controller.js
        -/models
            -post.model.js
        -/node_modules*
        -/routes
        -.env
        -app.js
        -package-lock.json
        -package.json
    -/front
        -/node_modules*
        -/public
        -/src
            -/assets
                -react.svg
            -/components
                -PostFilter.jsx
                -PostForm.jsx
                -PostList.jsx
            -/redux
                -postsSlice.js
                -store.js
            -App.css
            -App.css
            -index.css
            -main.jsx
        -.gitignore
        -eslint.config.js
        -index.html
        -package-lock.json
        -package.json
        -tailwind.config.js
        -vite.config.js
    -.gitignore
    -readme.md


#Endpoints Backend
-`GET /getPost`: obtiene y entrega una lista de todos los posts en la base de datos, con "id", "name" y "description"
-`DELETE /deletePost/:id`: Borra un registro POST de la base de datos segun la "id" entregada, devolviendo la accion realizada en formato texto
-`GET /createPost?name=:name&description=:description`: Crea un POST obteniendo los datos por get de los parametros "name" y "description"

#Licencias
Licencia no registrada, libre de intercambio, comercializacion y uso.