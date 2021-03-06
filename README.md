# QuantiModo Ionic App

A generic app that can be easily configured to help the user track and optimize any given outcome variable.
-------

- [MoodiModo for iOS](https://itunes.apple.com/us/app/moodimodo/id1046797567?ls=1&mt=8)
- [QuantiModo for iOS](https://itunes.apple.com/us/app/quantimodo-life-tracker/id1115037060?mt=8)
- [MoodiModo Chrome Extension](https://Chrome.google.com/webstore/detail/moodimodo-mood-tracking-e/lncgjbhijecjdbdgeigfodmiimpmlelg)
- [QuantiModo Chrome Extension ](https://Chrome.google.com/webstore/detail/quantimodo-life-tracking/jioloifallegdkgjklafkkbniianjbgi)
- [QuantiModo for Android](https://play.google.com/store/apps/details?id=com.quantimodo.quantimodo)
- [MoodiModo for Android](https://play.google.com/store/apps/details?id=com.moodimodo)


# 5-Minute Quick Start
1. Fork this repository.
1. Install [Node.js](http://nodejs.org/).  (Windows Developers: We recommend [Visual Studio Community](https://taco.visualstudio.com/), which automatically installs everything you need!)
1. Install the latest Cordova and Ionic command-line tools in your terminal with `npm install -g cordova ionic`.  
(Mac Users:  Avoid using `sudo` with your npm commands if possible as it tends to cause problems.)
1. Install Bower (to auto-download all the libraries listed in bower.json) globally with `npm install -g bower`.  
1. Run `npm install` in the root of this repository.
1. Run `gulp configureDefaultApp` in the root of this repository.
1. Create a test user at [app.quantimo.do](https://app.quantimo.do) with the word `testuser` in the email like mike@testuser.com.
1. Add the test user username (email) and password to `www/private_configs/default.config.js` in the username and password fields.
1. Run `ionic serve` in the root of this repository and you should see your app at 
[http://localhost:8100/#/](http://localhost:8100/#/) or similar.
1. Need help?  Please [create an issue](https://github.com/QuantiModo/quantimodo-android-chrome-ios-web-app/issues) 
or contact us at [help.quantimo.do](http://help.quantimo.do). 

## QuantiModo API
For more info about the types of data you can store and get from the QuantiModo API, try out our 
[Interactive API Explorer](https://app.quantimo.do/api/v2/account/api-explorer)

## One Click Deploy
When you're ready to share your app with the world, you can deploy your app to Heroku. 

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/QuantiModo/quantimodo-android-chrome-ios-web-app/)

After creating your Heroku app with the above button, go to the "Deploy" section for your app in the Heroku dashboard.
There, you can link the Heroku app to your Github repository.  Then, it will automatically update when you push changes
to Github.

## Chrome Development Tips
1. Install [Chrome Apps & Extensions Developer Tool](https://Chrome.google.com/webstore/detail/Chrome-apps-extensions-de/ohmmkhmmmpcnpikjeljgnaoabkaalbgc?utm_source=Chrome-ntp-icon)
1. You can load the whole repo as an unpacked extension
1. [Add the www folder to your workspace](https://developer.Chrome.com/devtools/docs/workspaces)
1. To be able to edit and save files within the Chrome dev console, map the browser's index.html file to the workspace www/index.html
1. To avoid debugging libraries, go to Chrome Dev Console -> Settings -> Blackboxing and add `\.min\.js$`, `/backbone\.js$`, `jquery.js` and `/angular\.js$`

## File Structure
The main contents of the App are in the `www` folder. The structure is:
```
|---platforms
|---plugins
|---resources
|---www
     |----callback
            |---index.html
     |----css
     |----customlib
     |----img
     |----js
           |---controllers
           |---services
           |---filters
           |---app.js
           |---config.js
     |----lib
     |----templates
     |----index.html
```

## Controllers
  Controllers are located in `www/js/controllers` directory. Each View has a separate controller or some views share 
  the same controller if the functionality is same.
  The main controller for the app is `appCtrl.js` whereas all the other controllers run when their views come to focus.
  
## Services
  Services are the data layer, which store and obtain data from the `QuantiModo API`.  Services are also used to provide chart configurations and utility functions. 

## App-Specific Config Files
1. config.xml
2. www/configs/{{appname}}.js
3. www/private_configs/{{appname}}.config.js

## [Contribute](docs/contributing.md)

## Screenshots 

<p align="center">
<img src="https://raw.githubusercontent.com/QuantiModo/quantimodo-android-chrome-ios-web-app/develop/resources-shared/screenshots/5.5-inch%20(iPhone%206%2B)%20-%20History%20Screenshot%201.jpg" width="300">
&nbsp
<img src="https://raw.githubusercontent.com/QuantiModo/quantimodo-android-chrome-ios-web-app/develop/resources-shared/screenshots/5.5-inch%20(iPhone%206+)%20-%20import%20data%20Screenshot%201.jpg" width="300">
<br><br>
<img src="https://raw.githubusercontent.com/QuantiModo/quantimodo-android-chrome-ios-web-app/develop/resources-shared/screenshots/5.5-inch%20(iPhone%206+)%20-%20bar%20chart%20Screenshot%201.jpg" width="300">
&nbsp
<img src="https://raw.githubusercontent.com/QuantiModo/quantimodo-android-chrome-ios-web-app/develop/resources-shared/screenshots/5.5-inch%20(iPhone%206+)%20-%20predictors%20Screenshot%201.jpg" width="300">
<br><br>
<img src="https://raw.githubusercontent.com/QuantiModo/quantimodo-android-chrome-ios-web-app/develop/resources-shared/screenshots/5.5-inch%20(iPhone%206+)%20-%20reminder%20inbox%20Screenshot%201.jpg?" width="300">
</p>
