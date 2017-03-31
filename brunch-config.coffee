exports.config =
  npm:
    enabled: false
  conventions:
    ignored: [
      /.+\.spec\.js/,
    ]
  paths:
    public: 'www'
  files:
    javascripts:
      joinTo:
        'js/app.js': /^app/
        'js/vendor.js': /^(vendor|bower_components)/
      order:
        before: [/.+\.module\.js/]
    stylesheets:
      joinTo:
        'css/common.css': /^(app|bower_components)/
    templates:
      joinTo:
        'js/templates.js': /^app/
  modules:
    wrapper: false
    definition: false
  plugins:
    jshint:
      options:
        bitwise: true
        curly: true
        unused: true
      warnOnly: true
