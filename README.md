# Hacker News PWA

This project is a Hacker News PWA that follows the specs from [tastejs/hacker-news-pwas](https://github.com/tastejs/hacker-news-pwas).

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/segmentationfaulter/hnpwa.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `dist` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

### `npm run analyze-bundle`

Analyzes the bundle size of the project.

## Project Structure

```
/Users/saqib/learning/hnpwa/
├───.gitignore
├───.postcssrc.json
├───package-lock.json
├───package.json
├───postcss.config.js
├───tailwind.config.ts
├───tsconfig.json
├───webpack.analyze.js
├───webpack.common.js
├───webpack.dev.js
├───webpack.prod.js
├───.git/...
└───src/
    ├───App.tsx
    ├───index.css
    ├───index.html
    ├───index.tsx
    ├───Schema.ts
    ├───shared/
    │   └───SubTitle.tsx
    ├───utils/
    │   ├───fetcher.ts
    │   └───urls.ts
    └───views/
        ├───AppLayout.tsx
        ├───Comments.tsx
        ├───FeedItems.tsx
        ├───Item.tsx
        ├───NotFound.tsx
        └───User.tsx
```
