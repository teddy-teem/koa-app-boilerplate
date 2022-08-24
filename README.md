# koa-app-boilerplate

To have a simple structure of a <b>Koa App</b> in your system just run
<p><b>For javascript</b></p>
<pre>npx koa-app-boilerplate yourAppName</pre>
<p><b>For typescript</b></p>
<pre>npx koa-app-boilerplate yourAppName ts</pre> 
<p>In the <b>AppName</b> Alphabates, Hyphen(-), underscore(_) are alloweds</p>

<p><b>File structure for javascript </b></p>
<pre>
        |src\
            |--controllers\             # Route controllers (controller layer)
                |--healthController.js  # A demo health controller file
            |--models\                  # Models (data layer)
            |--node_modules\            # Installed node modules
            |--variables\               # Environment variables and configuration related things
                |--index.js             # Some default configuration or related variables
            |--.env                     # Local Environment variables 
            |--index.js                 # Application/Node Js server
            |--.package-lock.json
            |--.package.json            # npm packages defiend here
            |--routes.js                # All the routes in this server
        |.gitignore                     # .gitignore file
</pre>

<p><b>File structure for typescript </b></p>
<pre>
        |src\
            |--controllers\             # Route controllers (controller layer)
                |--health.ts            # A demo health controller file
            |--dist\                    # Converted Javascript file
            |--models\                  # Models (data layer)
            |--node_modules\            # Installed node modules
            |--variables\               # Environment variables and configuration related things
                |--index.ts             # Some default configuration or related variables
            |--.env                     # Local Environment variables 
            |--index.ts                 # Application/Node Js server
            |--.package-lock.json
            |--.package.json            # npm packages defiend here
            |--routes.ts                # All the routes in this server
            |--tsconfig.json                # All the routes in this server
        |.gitignore                     # .gitignore file
</pre>

<b>NPM packages you will get with this boilerplate are</b>
<pre>
-axios
-dotenv
-koa
-koa-body
-koa-router
-memory-cach
-multer

</pre>

<i>And finally,  you can manage it is as how do you want.</i>

To learn koa js web framwork you can visit <a href="https://koajs.com/" target="_blank"> https://koajs.com/ </a>
