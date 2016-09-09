module.exports = function(grunt) {

  // Load modules
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.initConfig({

    sass: {
      dist: {
      	// options: {
      	// 	outputStyle: 'compressed'
      	// },
        files: {
          'resources/css/style.css': 'resources/scss/main.scss'
        }
      },
      dev: {
        options: {
          sourceMap: true, //use for dev tools
          //outputStyle: 'compressed'
        },
        files: {
         'resources/css/style.css': 'resources/scss/main.scss'
        }
      }
    }, //sass


    uglify: {
      my_target: {
        files: {
          'resources/js/main.js': ['components/js/**/*.js']
        }
      }
    }, //uglify

    // Task - Server
    connect: {
      server: {
        options: {
          port: 8888,
          keepalive: true
          // port: 9001,
          // base: 'www-root'
        }
      }
    },

    watch: {
      options: {
        livereload: true, // Turn on live reload. Set to 'true'
        spawn: false // Adding 'spawn: false' is suppose to increase realod speed... I dunno
      }
      ,
      html: {
        files: ['*.html'] // watch changes to all files ending in .php or .css
      }
      ,
      sassy: {
        files: ['resources/scss/**/*.scss'],
        tasks: ['sass']
      }
      // ,
      // js: {
      //   files: ['**/*.js'],
      //   tasks: ['uglify']
      // }
    } //watch

  }); //initConfig

  grunt.registerTask('default', 'watch'); // Define default. Used instead of Terminal command  grunt watch

}; // exports
