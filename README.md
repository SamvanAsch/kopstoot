The Setup
=============

Heroku Staging Environment - http://kopstoot.herokuapp.com/

Github
----------

This is where the files are stored as a repository. Think of it like an archive and also where you will push changes from development on your local computer.

Heroku
----------

This is where the files are stored for use online. Eventually, when you have a "phone number" (IP ADDRESS) or (Domain name ie samswebsite.nl), the phone number will point to the app address (http://kopstoot.herokuapp.com/) to access the website. Heroku also uses Node.js to run the index.js file you have in the root directory of your website. Heroku is listening for changes on Github on the Master branch.

Installation & Workflow
============

Installation
----------

- After pulling the repository for the first time, you would need to clone the repository which can be done by browsing in your browser to https://github/samvanasch/{repo name}
- In git bash, cd to the directory whre you want the repo to be stored locally, and then run the following command - git clone {past clone url here} ie; git clone git@github.com:SamvanAsch/repo-name-thingy.git
- In bash, cd to the directory then run the following command to install dependencies - npm install
- Make coffee
- Go to work flow

Work Flow
----------

- Open up Atom, Bash and your browser
- Start the Livereload (this instantly applies changes made in js or scss files)
- Once Bash is open, then cd to the directory (cd Documents/development/{your repo name})
- Once in the root directory, then run the following; npm run start:dev - which can be found in package.json file under the scripts tag.
- Back in your browser, check localhost:5000 and the website will be visible.

Deployment
============

Once your happy with the work you've done and you can see the changes on localhost:5000, it's time to send it all to the internet.

- In bash, in the root directory, type the following commands
- git status (This will show you the changed files)
- git add --all (This will tell git that you want to add these files now to the new version you've just made)
- Git commit -m 'Commit message' (This is a friendly message to yourself to say what this changed this version for the new package)
- Git push (This sends it to Github)

Remember that when it's pushed to github, then Heroku will detect the change and then deploy it to the staging environment.
