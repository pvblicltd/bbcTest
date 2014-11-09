module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // SCSS compressor
    sass: {
      options: {
        includePaths: ['app-src/vendor/bootstrap-sass-official/assets/stylesheets/']
      },
      dist: {
        options: {
          outputStyle: 'compressed'
        },
        files: {
          'app-src/assets/css/style.css': 'app-src/assets/sass/global.scss'
        }        
      }
    },
    //concat the js
    concat: {
      dist: {
        src: [
          'app-src/vendor/jquery/dist/jquery.min.js',
          'app-src/vendor/jquery-migrate/jquery-migrate.min.js',
          'app-src/vendor/modernizr/modernizr.js',
          'app-src/vendor/angular/angular.js',
          'app-src/vendor/angular-ui-bootstrap/ui-bootstrap-tpls-0.11.2.js',
          'app-src/app.js'
        ],

        dest: 'dist/assets/js/<%= pkg.name %>.js'
      }

    },
    // copy the css files over public
    copy: {
      main: {
        src: 'app-src/assets/css/style.css',
        dest: 'dist/assets/css/<%= pkg.name %>.css'
      }
    },
    // Uglify and compress the js
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'dist/assets/js/<%= pkg.name %>.js',
        dest: 'dist/assets/js/<%= pkg.name %>.js'
      }
    },
    // Compress the images
    imagemin: {
      dynamic: {
          files: [{
              expand: true,
              cwd: 'app-src/assets/img/',
              src: ['**/*.{png,jpg,gif}'],
              dest: 'dist/assets/img/'
          }]
      }
    },
    // build the html (index in this case) and replace the dev scripts & css with compressed
    htmlbuild: {
      dist: {
        src: 'app-src/index.html',
        dest: 'dist/',
        options: {
          beautify: true,
          scripts: {
            app: 'dist/assets/js/<%= pkg.name %>.js'
          },  
          styles: {
            main: 'dist/assets/css/<%= pkg.name %>.css'
          }
        }
      }
    },
    // Watch the scss
    watch: {
      grunt: { files: ['Gruntfile.js'] },

      sass: {
        files: 'app-src/assets/sass/**/*.scss',
        tasks: ['sass']
      }
    },
    // config generation
    ngconstant: {
      options: {
        name: 'envConfig',
        wrap: '"use strict";\n\n{%= __ngModule %}',
        space: '  '
      },
      development: {
        options: {
          dest: 'app-src/configs/envConfig.js',
        },
        constants: {
          ENV: {
            name: 'development',
            userApp: 'ReZ4cdl1SK26FzKZbkrOXQ'
          }
        }
      },
      staging: {
        options: {
          dest: 'app-src/configs/envConfig.js',
        },
        constants: {
          ENV: {
            name: 'staging',
            userApp: 'ReZ4cdl1SK26FzKZbkrOXQ'
          }
        }
      },
      production: {
        options: {
          dest: 'app-src/configs/envConfig.js',
        },
        constants: {
          ENV: {
            name: 'production',
            userApp: 'ReZ4cdl1SK26FzKZbkrOXQ'
          }
        }
      }
    }

  });
  
  grunt.loadNpmTasks('grunt-ng-constant');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-html-build');

  // run build to build in the public folder
  grunt.registerTask('build', ['sass', 'copy', 'imagemin', 'concat', 'uglify', 'htmlbuild']);
  // run grunt just for the watch
  grunt.registerTask('default', ['ngconstant:development', 'watch']);

}