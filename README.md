# Details

Times, Info, Cast, Photos

# STARTING THE SERVER

1. Ensure Nodemon is istalled globally
2. From the root directory in the console enter \$npm run server-start

#POPULATE THE DATABASE

1. \$ cd into the initDb directory
2. Ensure mongod in running in the background
3. Run the command \$node seed.js
4. You should have recieved a log saying the DB has been seeded

#SET UP WEBPACK

1. Ensure your file directory has this setup

- rootFile
- ->client
- ##->dist
-       ->index.html
- ##->src
-       ->components
-           ->component1.jsx
-           ->component2.jsx
-       ->index.jsx

2. list of dependencies

- webpack
- webpack-cli
- babel-loader
- @babel/core
- @babel/preset-env
- @babel/preset-react
  - single command
    - npm install webpack webpack-cli babel-loader @babel/core @babel/preset-env @babel/preset-react --save-dev

3. add this script to the package.json

- "react-dev": "webpack -d --watch"
- this will auto compile our code after changes are saved

4. setup webpack config file

_What it will look like_

- module.exports = {
-      entry: __dirname + '/client/src/index.jsx',
-      module: {
-        rules: [
-          {
-            test: [/\.jsx$/],
-            exclude: /node_modules/,
-            use: {
-              loader: 'babel-loader',
-              options: {
-                presets: ['@babel/preset-react',   -                          '@babel/preset-env']
-              }
-            }
-          }
-        ]
-      },
-       output: {
-        filename: 'bundle.js',
-        path: __dirname + '/client/dist'
-      }
- };

_what is does_

This file tells webpack where to start compiling our code with the entry property. We can see it begins on the src index.jsx file we put in earlier. It then tells it to look for jsx files. We have a few presets to tell webpack what it can expects and how to react. We then give it an output to produce such as the bundle.js file. We also tell it where to put it
