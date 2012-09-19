/* global module:false */

module.exports = function(grunt) {

    // Less plugin
    grunt.loadNpmTasks('grunt-recess');

    // Project configuration.
    grunt.initConfig({
        pkg: '<json:grunt.json>',
        meta: {
            banner: '/* RCM, Yo! */'
        },
        
        // Watch
        watch: {
            recess: {
                files: '<config:recess.dist.src>',
                tasks: ['recess']
            }
        },
        recess: {
            dist:{
                src: 'public/less/*.less',
                dest: 'public/c/style.css',
                options: {
                    compile: true
                }
            }
        },
        uglify: {}
    });

    // Default task.
//    grunt.registerTask('default', 'concat lint');

};
