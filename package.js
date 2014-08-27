Package.describe({
  summary: "jquery.panzoom"
});

Package.on_use(function (api, where) {
  api.add_files('lib/dist/jquery.panzoom.min.js', ['client']);
});