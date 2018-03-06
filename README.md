# Deploy to Github Pages

## Step 1: Add homepage to package.json

The step below is important!
If you skip it, your app will not deploy correctly.

Open your package.json and add a homepage field for your project:
```
  "homepage": "https://github.com/stefaleon/deploy-guess-the-flag",
```

Create React App uses the homepage field to determine the root URL in the built HTML file.

## Step 2: Install gh-pages and add deploy to scripts in package.json

Now, whenever you run npm run build, you will see a cheat sheet with instructions on how to deploy to GitHub Pages.

To publish it at https://stefaleon.github.io/React-Guess-The-Flag/, run:
```
  npm install --save gh-pages
```


Add the following scripts in your package.json:
```
  "scripts": {
+   "predeploy": "npm run build",
+   "deploy": "gh-pages -d build",
    "start": "react-scripts start",
    "build": "react-scripts build",
```
The predeploy script will run automatically before deploy is run.

I
## Step 3: Deploy the site by running npm run deploy

Then run:

npm run deploy

## Step 4: Ensure your project’s settings use gh-pages

Finally, make sure GitHub Pages option in your GitHub project settings is set to use the gh-pages branch:

gh-pages branch setting
