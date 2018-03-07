## React Guess The Flag
### A React App from [The Advanced Web Developer Bootcamp](https://www.udemy.com/the-advanced-web-developer-bootcamp/)

### Uses the [REST Countries](https://restcountries.eu/) API to create a flag guessing game.


&nbsp;
## How To Deploy to Github Pages


## Step 1: Add homepage to package.json

Open package.json and add a homepage field for the project:

```
  "homepage": "https://stefaleon.github.io/React-Guess-The-Flag/",
```

Create React App uses the homepage field to determine the root URL in the built HTML file.


## Step 2: Install gh-pages and add deploy to scripts in package.json

```
$ npm install --save gh-pages
```

Add the following scripts in  package.json:

```
  "scripts": {
+   "predeploy": "npm run build",
+   "deploy": "gh-pages -d build",
    "start": "react-scripts start",
    "build": "react-scripts build",
```

The predeploy script will run automatically before deploy is run.


## Step 3: Deploy the site by running npm run deploy

Run:

```
$ npm run deploy
```

## Step 4: Ensure your project’s settings use gh-pages


Finally, make sure GitHub Pages option in your GitHub project settings is set to use the gh-pages branch:

![](gh-pages-branch.png?raw=true)


## Step 5: Commit and Push

Commit changes and push to origin.
