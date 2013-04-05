/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    meta: {
      version: '0.1.0',
      banner: '/*! AnnotatePG - v<%= meta.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
        '* http://annotatepg.com/\n' +
        '* Copyright (c) <%= grunt.template.today("yyyy") %> ' +
        'AnnotatePG */'
    },
    min: {
      dist: {
        src: [
          '<banner>',
          "js-src/jquery.min.js",
          "js-src/mustache.js",
          "js-src/moment.min.js",
          "js-src/jquery.cookie.js",
          "js-src/ba-linkify.js",
          "js-src/monocle.overlay.js",
          "js-src/reader.js",
        ],
        dest: 'reaaad.js'
      }
    },
    lint: {
      files: [
        "js-src/jquery.min.js",
        "js-src/mustache.js",
        "js-src/moment.min.js",
        "js-src/jquery.cookie.js",
        "js-src/ba-linkify.js",
        "js-src/monocle.overlay.js",
        "js-src/reader.js",
      ]
    }
  });

  // Default task.
  grunt.registerTask('default', 'min');

};

