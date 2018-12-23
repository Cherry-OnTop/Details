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
    - npm install webpack webpack-cli babel-loader @babel/core @babel/preset-env @babel/preset-react react react-dom --save-dev

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
-                presets: ['@babel/preset-react', '@babel/preset-env']
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

#GIT WORKFLOW

Note: These are for a very generic workflow, and not a catch all set of instructions. Be familiar with these commands and what they do, but don’t follow blindly without considering your own current codebase.

Feature Branch Git Workflow
Ensure your master is up to date with the origin (git pull origin master).
To start working on a new feature create a new branch (git checkout -b [name])
Work on your feature in this branch
Add and commit changes to feature branch

!When ready to add your feature to master!

Ensure your master is up to date with the origin (git pull origin master).
Checkout your feature branch (git checkout [name])
Rebase your feature branch git rebase master
This updates your feature branch to compare changes against latest commit on master, as opposed to the commit from which the branch was created.
Resolve conflicts! Use your code editor to do this. Git will print out the list of files with conflicts and add a marker in line where the conflict exists.
git add your changes to resolve conflicts
Finish rebasing git rebase --continue
Push your rebased branch up to the origin. This will need to be forced due to the rebasing. git push origin [name] -f
Create pull request from your branch to master

Other handy commands:
Check uncommitted/untracked changes since last commit: git status
Check branches: git branch
Check differences in commits: git diff
Look up the many options for git diff. You can specify what it should compare
