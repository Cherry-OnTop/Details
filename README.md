# Details

Times, Info, Cast, Photos

# STARTING THE SERVER

1. Ensure Nodemon is istalled globally
2. From the root directory in the console enter \$npm run server-start

# POPULATE THE DATABASE

1. \$ cd into the initDb directory
2. Ensure mongod in running in the background
3. Run the command \$node seed.js
4. You should have recieved a log saying the DB has been seeded

# GIT WORKFLOW

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
