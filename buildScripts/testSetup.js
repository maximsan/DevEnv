//this file isn't transpiled, o must use CommonJS and es5

//Register babel to transpile before out tests run
require('babel-register')();

//disable webpack festures thAT mOCAH DOESN'T understand
require.extensions['.css'] = function () { };

