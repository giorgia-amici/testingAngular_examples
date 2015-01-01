#**The importance of TDD: Testing Angular**

The app is one of my previous project. The main aim of this exercise is to learn how to:

- Test with Karma;
- Unit test Controllers;
- Unit test Services;
- Unit test Filters;
- Unit test Directives;
- E2E testing.


===============================================

##**Test with Karma**

**Karma** is a testing automation tool, before known as __Testacular__ (keep this in mind when looking for documentation in the web).

To use Karma you need to install three modules locally :

- karma itself
```javascript
npm install karma
```

- karma chrome launcher
```javascript 
npm karma-chrome-launcher
``` 

- karma-jasmine
```javascript
npm karma-jasmine
```

and one module globally that will allow us to run karma from the command line.

- karma command-line-interface

```javascript
npm install karma-cli -g
```

 After having installed all these packages, you need a configuration file. Just type:

 ```javascript 
karma init
 ```

 Then, just run Karma specifying the folder in which the config file is:

 ```javascript

 karma start test/karma.conf.js
 ```

 Be aware that the config file has to be accurate or your tests won't run. See [this](http://karma-runner.github.io/0.8/config/configuration-file.html) link for more information.
 