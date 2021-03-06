### Release iOS Apps

#### Build Them
- Go to [BuddyBuild](https://dashboard.buddybuild.com/apps/58545ef69a6d70010030ff46) (credentials [here](https://docs.google.com/spreadsheets/d/1v_u6g6YHWxyrLqNeHMVg-C20MxOc7n1NepB3X6plVAY/edit?userstoinvite=quantimodo.chrome@gmail.com&ts=58ac6d3a#gid=2130660029))
- Sign in with the credentials in this [spreadsheet](https://docs.google.com/spreadsheets/d/1v_u6g6YHWxyrLqNeHMVg-C20MxOc7n1NepB3X6plVAY/edit?userstoinvite=quantimodo.chrome@gmail.com&ts=58ac6d3a#gid=2130660029) (not your own)
- Make sure it says `IOS` at the top. If it says `ANDROID`, click and switch to `IOS`
- Click `App Settings`
- Click `BUILD SETTINGS -> Environment Variables`
- Scroll down and delete the existing `LOWERCASE_APP_NAME` variable by clicking the trash can icon to its right
- Create a new variable with `LOWERCASE_APP_NAME` in the `Name:` field
- Set the `Value:` field of the new `LOWERCASE_APP_NAME` variable to the lowercase app name of the app that you want to release (i.e. `medimodo`, `quantimodo`, or `moodimodo`, etc.)
- Go back to [main page](https://dashboard.buddybuild.com/apps/58545ef69a6d70010030ff46)
- Click `Build Now` on the `develop` branch.
- Go get a cup of coffee.  Builds take about 30 minutes.

#### Upload Them
- Go to the [BuddyBuild](https://dashboard.buddybuild.com/apps/58545ef69a6d70010030ff46) (make sure it says IOS at the top)
- Once your build is green, click on the specific build
- Click the `iTunes Connect` tab
- Click to upload

#### Test Them
- Go to [iTunes Connect](https://itunesconnect.apple.com/WebObjects/iTunesConnect.woa/ra/ng/app)
- Select the app
- Click the `TestFlight` tab
- Click `Internal Testing`
- Click `Select Version to Test`
- Select the most recent build
- Install on device via the TestFlight app
- Make sure you can log in by each login method and that the basic functionality works

#### Release Them
- If everything works, go to [iTunes Connect](https://itunesconnect.apple.com/WebObjects/iTunesConnect.woa/ra/ng/app)
- Select the app
- Click `+ VERSION OR PLATFORM`
- Select `iOS`
- Copy the description into Release Notes
- Add the most recent version in the `Build` section
- Click to save and submit for review
- Check `No` when it asks if you use an advertising identifier or special encryption
- Great job!  :D
