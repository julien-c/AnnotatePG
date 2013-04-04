/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    meta: {
      version: '0.1.0',
      banner: '/*! Reaaad - v<%= meta.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
        '* http://reaaad.com/\n' +
        '* Copyright (c) <%= grunt.template.today("yyyy") %> ' +
        'Reaaad */'
    },
    min: {
      dist: {
        src: [
          '<banner>',
          "js-src/jquery.min.js",
          "js-src/mustache.js",
          "js-src/moment.min.js",
          "js-src/md5.js",
          "sentences.js",
          "js-src/reader.new.js",
        ],
        dest: 'reaaad.js'
      }
    },
    lint: {
      files: [
        "js-src/jquery.min.js",
        "js-src/mustache.js",
        "js-src/moment.min.js",
        "js-src/md5.js",
        "sentences.js",
        "js-src/reader.new.js",
      ]
    }
  });

  // Default task.
  grunt.registerTask('default', 'min');

};

