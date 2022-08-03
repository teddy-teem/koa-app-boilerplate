# koa-app-boilerplate

To have a simple structure of a <b>Koa App</b> in your system just run
<pre>npx koa-app-boilerplate yourAppName</pre>
<p>File structure </p>
<pre>
        |src\
            |--controllers\             # Route controllers (controller layer)
                |--healthController.js  # A demo health controller file
            |--models\                  # Models (data layer)
            |--node_modules\            # Environment variables and configuration related things
            |--variables\               # Environment variables and configuration related things
                |--index.js             # some default configuration or related variables
            |--.env                     # Local Environment variables 
            |--index.js                 # Application/Node Js server
            |--.package-lock.json
            |--.package.json            # npm packages defiend here
            |--routes.js                # All the routes in this server
        |.gitignore                     # gitignore file
</pre>
