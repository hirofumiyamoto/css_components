module.exports = function (grunt) {
 
    'use strict';
 
    [
        'grunt-styleguide',
        'grunt-contrib-clean',
        'grunt-contrib-watch'
    ].forEach(function (name) {
            if (!/template/.test(name)) {
                grunt.loadNpmTasks(name);
            }
        });
 
    grunt.initConfig({
 
        watch: {
            styleguide: {
                //css配下のcssファイルを監視
                files: ['css/**/*.css'],
                //cleanタスク、styleguideタスクを実行
                tasks: ['clean' , 'styleguide']
            }
        },
 
        clean: ['docs/styledocco'],
 
        styleguide: {
            dist: {
                name: 'Style Guide',
                options: {
                    framework: {
                        name: 'styledocco'
                    }
                },
                files: {
                    'docs/styledocco': 'css/**/*.css'
                }
            }
        }
 
    });
 
    grunt.registerTask('default', ['watch']);
    grunt.registerTask('build', ['styleguide']);
};