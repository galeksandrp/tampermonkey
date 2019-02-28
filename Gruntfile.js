module.exports = function(grunt) {

  // Project configuration.
    grunt.initConfig({
      crx: {
        mySignedExtension: {
          src: "rel/**/*",
          dest: "dist/tampermonkey.crx",
          options: {
            privateKey: "~/chrome-extension-key.pem"
          }
        }
      }
    });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-crx');

  // Default task(s).
  grunt.registerTask('default', ['crx']);

};
