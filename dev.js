var fs = require('fs');
var { exec } = require('child_process');

fs.watch('./sass', function(event, filename) {
  if (filename) {
    if (filename.match(/\.scss$/)) {
      console.log('Running SASS CLI command');
      exec('sass sass/main.scss assets/css/main.css', function(err, stdout, stderr) {
        if (err) {
          console.log('error:' + err.message);
          return;
        }
        if (stderr) {
          console.log('stderr:' + stderr);
          return;
        }
        console.log(stdout);
      });
    }
  }
});
