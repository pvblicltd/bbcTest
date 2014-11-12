bbcTest - Profile Picture Changer
=======
## Supplied Brief

Please create a page (or a “widget” that we can embed into other pages) where a user can view their profile picture, upload a new picture to change it, or set their picture back to default.

## Demo

The distributed version can be [found here](http://pvblic.co/sandbox/bbctest/dist/).

The app-src version can be [found here](http://pvblic.co/sandbox/bbctest/app-src/).

#### Login Details

user: *bbc@pvblic.co*

pass: *Creative1*


## Solution

I decided to go with an angular js app, with the key functionality wrapped up in a dreictive. This would allow thye caode to be ported throughout the Angular app as well as beinga able to be ported into a singlular angular js app, compiled and served through an iframe/loading script as a site widget.

## Approach

I utilised bootstrap (sass build) and grunt to run a watch and bvuild process, all vendor scripts are loaded through bower and npm. All animations are css utilsiing the ng-class to fire.

All code is neatly named and orgainsed into modules as demonstrated in /app-src/*.

/dist/* is the compiled versionb of the app created by the gruntfile. The grunt build task cretes a new index.html with contacted and uglified scripts.


## Limitations

This app is IE10+ as it ustilises canvas for the image cropper, however with more time a backwards compatible solution would have to be added.


## Process

1. Created Github repo, set up the README.MD and .gitignore
2. Set up local virtual hosts for dev, one for app src and one for dist *same project root 
3. Set up node package.json, bower.json, .bowerc. I have added the packagaes and libs I know I will need however this will probabaly get added to, I will explain all the packages at the end of the test
4. Installed vendor packages via bower.json, doing a commit to show vendor packages
5. Set up initial gruntfile, added asset folders to app-src and dist *grunt gernerates the dist assets
6. Set up basic angular.js app-src structure and initial index.html
7. Ran npm install and grunt on the angular-ui-bootsrap vendor lib. Updated the git ignore to include the libs node_mdules - made a note to describe in set up process doc
8. Took Short Break (it is Sunday after all) :-)
9. Set Up custom user on userapp.io *Creates an easy login process and availablity to avatar image data field through an Angular.js service. 
10. Set up the news scss file structure creted relevant empty files
11. Created new angular.js directive for editing user image *Widgetizes the js within angular as is the supporting template.html and sass file.
12. Added some markup to the index.html to include a sidebar
13. Added internal comms branded message at login (this is taken from the biref that I would be working on an internal comms page)
14. Created a standard sidebar, topbar layout that animates in on login
15. Created the respective sass files
16. Created the edit_user_image directive
17. Tried a few AngularJS upload and crop directives, chose the HTML5 & CANVAS solutions as proof concept
18. Created the previous avatars 
19. Created the crop area 
20. Created the upload method
21. Did some touch work and fixed a problem with the crop plugin
22. Updated Gruntfile to concat the scripts
23. Tested the grunt build and adjusted the uglify setting to avoid errors
24. Tweaked some of the media queries
25. Deployed on the server
