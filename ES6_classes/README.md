# ES6 classes
## Details
Amateur By: Johann Kerbrat, Engineering Manager at Uber Works Weight: 1 Migrated to checker v2: Your score will be updated as you progress. ![](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2019/12/817248fb77fb5c2cef3f.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20240719%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20240719T191154Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=ed9f41c8168d966398ba45298f3e07bddee532635f913edffca054880000446e) 

## Resources
Read or watch :
* [Classes](https://intranet.hbtn.io/rltoken/AJdJxuoO8o3hwpybQaFSDQ) 

* [Metaprogramming](https://intranet.hbtn.io/rltoken/jF42Fw5HNIPnFWKmDzVg1g) 

## Learning Objectives
At the end of this project, you are expected to be able to  [explain to anyone](https://intranet.hbtn.io/rltoken/njFFGENoXPXVPrxCyuHqMg) 
 ,  without the help of Google :
* How to define a Class
* How to add methods to a class
* Why and how to add a static method to a class
* How to extend a class from another
* Metaprogramming and symbols
## Requirements
* All your files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x
* Allowed editors:  ` vi ` ,  ` vim ` ,  ` emacs ` ,  ` Visual Studio Code ` 
* All your files should end with a new line
* A  ` README.md `  file, at the root of the folder of the project, is mandatory
* Your code should use the  ` js `  extension
* Your code will be tested using  ` Jest `  and the command  ` npm run test ` 
* Your code will be verified against lint using ESLint
* Your code needs to pass all the tests and lint. You can verify the entire project running  ` npm run full-test ` 
## Setup
### Install NodeJS 20.x.x
(in your home directory): 
```bash
curl -sL https://deb.nodesource.com/setup_20.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y

```
 ` $ nodejs -v
v20.15.1
$ npm -v
10.7.0
 ` ### Install Jest, Babel, and ESLint
in your project directory: 
* Install Jest using:  ` npm install --save-dev jest ` 
* Install Babel using:  ` npm install --save-dev babel-jest @babel/core @babel/preset-env ` 
* Install ESLint using:  ` npm install --save-dev eslint ` 
## Configuration files
### package.json
Click to show/hide file contents `  ` ### babel.config.js
Click to show/hide file contents `  ` ### .eslintrc.js
Click to show/hide file contents `  ` ### and…
Don’t forget to run   ` $ npm install `   when you have the   ` package.json ` 