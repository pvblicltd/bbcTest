bbcTest - Profile Picture Changer
=======
## Supplied Brief

Please create a page (or a “widget” that we can embed into other pages) where a user can view their profile picture, upload a new picture to change it, or set their picture back to default.

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
