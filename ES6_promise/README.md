GENERAL ALCAZAR


    Promises (how, why, and what)
    How to use the then, resolve, catch methods
    How to use every method of the Promise object
    Throw / Try
    The await operator
    How to use an async function

REQUIREMENTS


    All your files will be interpreted/compiled on Ubuntu 20.04 LTS using node 20.x.x and npm 9.x.x
    Allowed editors: vi, vim, emacs, Visual Studio Code
    All your files should end with a new line
    A README.md file, at the root of the folder of the project, is mandatory
    Your code should use the js extension
    Your code will be tested using Jest and the command npm run test
    Your code will be verified against lint using ESLint
    All of your functions must be exported

INSTALLATION

Install NodeJS 20.x.x (in the home directory)

curl -sL https://deb.nodesource.com/setup_20.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y

Install Jest, Babel, and ESLint (in the project directory)


    Install Jest using: npm install --save-dev jest
    Install Babel using: npm install --save-dev babel-jest @babel/core @babel/preset-env @babel/cli
    Install ESLint using: npm install --save-dev eslint

FILES TO ADD

package.json script:

{
  "scripts": {
    "lint": "./node_modules/.bin/eslint",
    "check-lint": "lint [0-9]*.js",
    "dev": "npx babel-node",
    "test": "jest",
    "full-test": "./node_modules/.bin/eslint [0-9]*.js && jest"
  },
  "devDependencies": {
    "@babel/core": "^7.6.0",
    "@babel/node": "^7.8.0",
    "@babel/preset-env": "^7.6.0",
    "eslint": "^6.8.0",
    "eslint-config-airbnb-base": "^14.0.0",
    "eslint-plugin-import": "^2.18.2",
    "eslint-plugin-jest": "^22.17.0",
    "jest": "^24.9.0"
  }
}

babel.config.js script:

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
};

utils.js script (to use with scripts requiring uploadPhoto and createUser:

export function uploadPhoto() {
  return Promise.resolve({
    status: 200,
    body: 'photo-profile-1',
  });
}



export function createUser() {
  return Promise.resolve({
    firstName: 'Guillaume',
    lastName: 'Salva',
  });
}

.eslintrc.js script:

module.exports = {
  env: {
    browser: false,
    es6: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
    'plugin:jest/all',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['jest'],
  rules: {
    'no-console': 'off',
    'no-shadow': 'off',
    'no-restricted-syntax': [
      'error',
      'LabeledStatement',
      'WithStatement',
    ],
  },
  overrides:[
    {
      files: ['*.js'],
      excludedFiles: 'babel.config.js',
    }
  ]
};

/!\ DON'T FORGET TO npm install after adding the script package.json /!\

Task 0. Keep every promise you make and only make promises you can keep 

Return a Promise using this prototype function getResponseFromAPI()
bob@dylan:~$ cat 0-main.js
import getResponseFromAPI from "./0-promise.js";

const response = getResponseFromAPI();
console.log(response instanceof Promise);

bob@dylan:~$ 
bob@dylan:~$ npm run dev 0-main.js 
true
bob@dylan:~$ 

filename: 0-promise.js

Task 1. Don't make a promise...if you know you can't keep it

Using the prototype below, return a promise. The parameter is a boolean.

getFullResponseFromAPI(success)

When the argument is:

    true
        resolve the promise by passing an object with 2 attributes:
            status: 200
            body: 'Success'
    false
        reject the promise with an error object with the message The fake API is not working currently

bob@dylan:~$ cat 1-main.js
import getFullResponseFromAPI from './1-promise';

console.log(getFullResponseFromAPI(true));
console.log(getFullResponseFromAPI(false));

bob@dylan:~$ 
bob@dylan:~$ npm run dev 1-main.js 
Promise { { status: 200, body: 'Success' } }
Promise {
  <rejected> Error: The fake API is not working currently
    ...
    ...
bob@dylan:~$ 

filename: 1-promise.js
