 ![Project badge](https://intranet.hbtn.io/assets/pathway/002_color-261c5d8dcd9df7930ced5c51da7ac8a20266ad8b3861fea9ce55fbc3a4df3fd7.png) 
# ES6 Basics
## Details
Novice By: Johann Kerbrat, Engineering Manager at Uber Works Weight: 1 Migrated to checker v2: Your score will be updated as you progress.### Concepts
For this project, we expect you to look at this concept:
* [Software Linter](https://intranet.hbtn.io/concepts/952) 

 ![](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2019/12/08806026ef621f900121.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20240717%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20240717T073629Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=94bf280778b7d0e6f3a8555be767b776d6e7ac5d77a9cf4d9b61f8f6975b0195) 

## Resources
Read or watch :
* [ECMAScript 6 - ECMAScript 2015](https://intranet.hbtn.io/rltoken/Q20cy-_XFufANSBCW0hvog) 

* [Statements and declarations](https://intranet.hbtn.io/rltoken/OHkTGVz-DLmzmrpDuWDYBw) 

* [Arrow functions](https://intranet.hbtn.io/rltoken/5FxmFLP2qwTEo0puWUVHsQ) 

* [Default parameters](https://intranet.hbtn.io/rltoken/qZm6g37BqHVD9G96MLsnsg) 

* [Rest parameter](https://intranet.hbtn.io/rltoken/qD9tUS00akyWTDU7MKUAuA) 

* [Javascript ES6 — Iterables and Iterators](https://intranet.hbtn.io/rltoken/Sth7jAFiAuiYE2Qy_XKi3A) 

## Learning Objectives
At the end of this project, you are expected to be able to  [explain to anyone](https://intranet.hbtn.io/rltoken/GT7hK6Qly9Rrureewp_arA) 
 ,  without the help of Google :
* What ES6 is
* New features introduced in ES6
* The difference between a constant and a variable
* Block-scoped variables
* Arrow functions and function parameters default to them
* Rest and spread function parameters
* String templating in ES6
* Object creation and their properties in ES6
* Iterators and for-of loops
## Requirements
### General
* All your files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x
* Allowed editors:  ` vi ` ,  ` vim ` ,  ` emacs ` ,  ` Visual Studio Code ` 
* All your files should end with a new line
* A  ` README.md `  file, at the root of the folder of the project, is mandatory
* Your code should use the  ` js `  extension
* Your code will be tested using the [Jest Testing Framework](https://intranet.hbtn.io/rltoken/k18kRmC2WpcC_85dA44gBA) 

* Your code will be analyzed using the linter [ESLint](https://intranet.hbtn.io/rltoken/awTYlxNaMZw7HShPeC9D5w) 
 along with specific rules that we’ll provide
* All of your functions must be exported
## Setup
### Install NodeJS 12.11.x
(in your home directory): 
```bash
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y

```
 ` $ nodejs -v
v12.11.1
$ npm -v
6.11.3
 ` ### Install Jest, Babel, and ESLint
in your project directory: 
* Install Jest using:  ` npm install --save-dev jest ` 
* Install Babel using:  ` npm install --save-dev babel-jest @babel/core @babel/preset-env ` 
* Install ESLint using:  ` npm install --save-dev eslint ` 
## Configuration files
Please create the following 3 files (with the provided contents) in the project directory:
### package.json
Click to show/hide file contents `  ` ### babel.config.js
Click to show/hide file contents `  ` ### .eslintrc.js
Click to show/hide file contents `  ` ### Finally…
Don’t forget to run   ` npm install `   from the terminal of your project folder to install all necessary project dependencies.