/* jshint node:true */

module.exports = (grunt) => {
  grunt.initConfig({
    webfont: {
      icons: {
        src: './app/images/*.svg',
        dest: './app/fonts/ico',
        options: {
          font: 'tveicons',
          syntax: 'bootstrap',
          relativeFontPath: '../app/fonts/ico/',
          types: 'woff2,woff',
          destCss: './app/fonts/ico',
          htmlDemoTemplate: './service/iconPreviewTemplate.html',
          templateOptions: {
            classPrefix: 'tve_',
            mixinPrefix: 'tve_',
          },
          customOutputs: [
            {
              template: './service/tveicons.less',
              dest: 'app/styles/tveicons.less',
            },
          ],
        },
      },
    },
  });

  grunt.loadNpmTasks('grunt-webfont');

  grunt.registerTask('default', ['webfont']);
};
