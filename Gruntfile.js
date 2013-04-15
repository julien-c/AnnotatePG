module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
						'<%= grunt.template.today("yyyy-mm-dd") %>\n' +
						'* <%= pkg.url %>\n' +
						'* Copyright (c) <%= grunt.template.today("yyyy") %> ' +
						'<%= pkg.name %> */\n'
			},
			reaaad: {
				files: {
					'reaaad.js': [
						"js-src/jquery.min.js",
						"js-src/mustache.js",
						"js-src/moment.min.js",
						"js-src/jquery.cookie.js",
						"js-src/ba-linkify.js",
						"js-src/monocle.overlay.js",
						"js-src/jquery.mousewheel.js",
						"js-src/reader.js",
					]
				}
			}
		},
		watch: {
			reaaad: {
				files: [
					"js-src/jquery.min.js",
					"js-src/mustache.js",
					"js-src/moment.min.js",
					"js-src/jquery.cookie.js",
					"js-src/ba-linkify.js",
					"js-src/monocle.overlay.js",
					"js-src/jquery.mousewheel.js",
					"js-src/reader.js",
				],
				tasks: ['uglify:reaaad']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default', 'uglify');
};

