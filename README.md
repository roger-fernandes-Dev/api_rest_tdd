## Initial configurations made

 #### Installation of ESLint in development environment
 * npm i eslint --save-dev

 #### Jest installation
 * npm i jest@23.6.0 --save-dev -E
 * I specified that I do not want any updates, but I want the specific version.

 #### configurations Eslint and Jest
 * I configured two commands in the package.json file, one for eslint and the other for jest, to make it easier to execute them in the terminal.
 * "test": "jest",
    "lint":"eslint src/** test/** --fix"
 * 

