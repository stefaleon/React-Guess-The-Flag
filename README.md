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

To publish it at https://myusername.github.io/my-app, run:
```
npm install --save gh-pages
```
Alternatively you may use yarn:

yarn add gh-pages

Add the following scripts in your package.json:

  "scripts": {
+   "predeploy": "npm run build",
+   "deploy": "gh-pages -d build",
    "start": "react-scripts start",
    "build": "react-scripts build",

The predeploy script will run automatically before deploy is run.

If you are deploying to a GitHub user page instead of a project page you'll need to make two additional modifications:

    First, change your repository's source branch to be any branch other than master.
    Additionally, tweak your package.json scripts to push deployments to master:

  "scripts": {
    "predeploy": "npm run build",
-   "deploy": "gh-pages -d build",
+   "deploy": "gh-pages -b master -d build",

Step 3: Deploy the site by running npm run deploy

Then run:

npm run deploy

Step 4: Ensure your project’s settings use gh-pages

Finally, make sure GitHub Pages option in your GitHub project settings is set to use the gh-pages branch:

gh-pages branch setting
