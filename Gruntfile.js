module.exports = function(grunt) {
	jsFiles = [
		"js-src/jquery.min.js",
		"js-src/mustache.js",
		"js-src/moment.min.js",
		"js-src/jquery.cookie.js",
		"js-src/ba-linkify.js",
		"js-src/monocle.overlay.js",
		"js-src/jquery.mousewheel.js",
		"js-src/reader.js",
	];
	cssFiles = [
		"monocle/styles/monocore.css",
		"monocle/styles/monoctrl.css",
		"css-src/monocle.overrides.css",
		"css-src/media.less",
		"css-src/style.css",
		"css-src/responsive.css",
	];
	banner = '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
			' <%= grunt.template.today("yyyy-mm-dd") %>\n' +
			' * <%= pkg.url %>\n' +
			' * Copyright (c) <%= grunt.template.today("yyyy") %> ' +
			' <%= pkg.name %> */\n';
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
			options: {
				banner: banner,
				report: false, // not working :(
			},
			reaaad: {
				files: {'reaaad.js': jsFiles},
			},
		},
		recess: {
			reaaad: {
				options: {
					compile: true,
					compress: true,
				},
				files: {'reaaad.css': cssFiles},
			},
		},
		sass: {
			reaaad: {
				files: {'css-src/responsive.css': 'css-src/responsive.scss'},
			}
		},
		watch: {
			js: {
				files: jsFiles,
				tasks: ['uglify:reaaad'],
			},
			css: {
				files: cssFiles,
				tasks: ['recess:reaaad'],
			},
			scss: {
				files: ['css-src/responsive.scss'],
				tasks: ['sass:reaaad'],
			},
		},
	});
	
	grunt.loadNpmTasks('grunt-recess');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.registerTask('default', ['uglify', 'sass', 'recess']);
};

