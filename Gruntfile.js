module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    clean: ['dist/','_site'],

    useminPrepare: {
      html: '_site/*.html',
      options: {
        dest: 'dist/'
      }
    },

    usemin: {
      html: 'dist/*.html'
    },

    htmlmin: {
      dist: {
        options: {
          collapseBooleanAttributes: true,
          collapseWhitespace: true,
          removeAttributeQuotes: true,
          removeCommentsFromCDATA: true,
          removeEmptyAttributes: true,
          removeOptionalTags: true,
          removeRedundantAttributes: true,
          useShortDoctype: true
        },
        files: [{
          expand: true,
          cwd: 'dist/',
          src: '*.html',
          dest: 'dist/'
        }]
      }
    },
    jekyll: {
      task:{}
    },
    copy: {
      dist: {
        files: [{
          expand: true,
          cwd:'_site/',
          src: [
            '*.png',
            '*.ico',
            '*.html',
            'assets/img/*'
          ],
          dest: 'dist/'
        }]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-usemin');
  grunt.loadNpmTasks('grunt-jekyll');

  grunt.registerTask('default', ['clean', 'jekyll','useminPrepare', 'concat', 'cssmin', 'copy', 'usemin', 'htmlmin']);

};