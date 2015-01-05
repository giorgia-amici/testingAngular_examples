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
 

##**Routing**

 In this really trivial project I have included also routing and how to test $route in Angular.

- ```index.html``` will be your SPA
- In ```index.html``` you will need to include ```ng-view```.
- ```template``` folder in home route (hint: remember difference between templates and views).
- Refactor your html in the __template__ folder.
- You don not need to specify your controller anymore.
- **IMPORTANT STEP**: you need to change your __module__ .You need to insert the ```.config``` and keep in mind that will still return a  module hence, you can still concatenate your factory methods.
- Inject all the new dependencies (check the version of angular you are actually using).

##**Using MongoDB**
This is the most difficult part of the project. The aim is to save the user's input from the 'Create a New Event' form and save the input in a db.

You first need to have mongo db installed on your machine. Then you need to install mongoose by typing ```npm install mongoose```. Add this to your server:
```javascript
var mongoose = require('mongoose');
```
with this command you are actually setting the connection. After that you need to tell to your mongoose object where to look for a connection. You do that by typing:

```javascript
mongoose.connect('mongodb://localhost/my_database');

```

where ```my_database```is the name of the database you want to be connected to. You can check if you are actually connected to the db by adding this to your server:

```javascript

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
  // yay the database is connected!
});

```

After those steps need to create your Schema document and with Mongoose everything is derived from a Schema. The Schema is the document that contains the caracteristics of your database entries. An example might be:

```javascript
var mySchema = mongoose.Schema({
    name: String
})
```

Remember then to export your schema with ```module.exports = mongoose.model('PartyEvent', partySchema);```.