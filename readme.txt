//Install command for tailwindcss
npm install -D tailwindcss autoprefixer postcss-import postcss-loader postcss-scss @angular-builders/custom-webpack

//Import file in style.scss
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';

npx tailwindcss init

touch webpack.config.js 
//Paste this under webpack.config.js
module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        loader: "postcss-loader",
        options: {
          postcssOptions: {
            ident: "postcss",
            syntax: "postcss-scss",
            plugins: [
              require("postcss-import"),
              require("tailwindcss"),
              require("autoprefixer"),
            ],
          },
        },
      },
    ],
  },
};

Command to config angular.json (change angular-app to your app name)
ng config projects.angular-app.architect.build.builder @angular-builders/custom-webpack:browser
ng config projects.angular-app.architect.build.options.customWebpackConfig.path webpack.config.js
ng config projects.angular-app.architect.serve.builder @angular-builders/custom-webpack:dev-server

//For test classes
<div class="w-full h-screen flex justify-center items-center">
  <h1 class="text-5xl text-blue-600 text-bold">Hello Tailwind CSS</h1>
</div>