/*
 * grunt-angular-build
 * https://github.com/mdarlea/grunt-angular-build
 *
 * Copyright (c) 2015 Michelle Darlea
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
    grunt.initConfig({
      debug: {
            options: {
                open: false // do not open node-inspector in Chrome automatically 
            }
        },
        html2js: {
            dist: {
                options: {
                    module: null, // no bundle module for all the html2js templates
                    base: '.'
                },
                files: [{
                        expand: true,
                        src: ['template/**/*.html'], ext: '.html.js'
                    }]
            }
        },
        jshint: {
          all: [
            'Gruntfile.js',
            'tasks/*.js',
            '<%= nodeunit.tests %>'
          ],
          options: {
            jshintrc: '.jshintrc'
          }
        },

        // Before generating any new files, remove any previously-created files.
        clean: {
          tests: ['tmp']
        },

        // Configuration to be run (and then tested).
        build: {
            options: {
                filename: 'sw-common',
                prefix: 'sw',
                modulePrefix: 'sw',
                moduleName: 'sw.common'
            }      
        },

        // Unit tests.
        nodeunit: {
          tests: ['test/*_test.js']
        }

  });
    
 grunt.loadNpmTasks('grunt-html2js');

 // Actually load this plugin's task(s).
 grunt.loadTasks('tasks');
    
  grunt.loadNpmTasks('grunt-debug-task');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
    
  grunt.registerTask('before-test', ['jshint', 'html2js', 'clean']);

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['before-test', 'build', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['before-test', 'build']);

};
