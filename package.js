Package.describe({
  summary: "A jQuery plugin for panning and zooming elements using CSS3",
  version: '1.0.1',
  git: "http://github.com/hitchcott/meteor-panzoom",
  name: 'hitchcott:panzoom'
});

Package.on_use(function (api) {
  if(api.versionsFrom) {
    api.versionsFrom('METEOR@0.9.0');
  }
  api.use('jquery','client');

  api.add_files('lib/dist/jquery.panzoom.min.js', ['client']);
});