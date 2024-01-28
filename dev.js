var fs = require("fs");
const sass = require("sass");

fs.watch("./sass", function (event, filename) {
  if (filename) {
    if (filename.match(/\.scss$/)) {
      const result = sass.compile("./sass/main.scss");
      fs.writeFile("./assets/css/main.css", result.css, (err) => {
        if (err) {
          console.error(err);
        }
        console.log("CSS file updated successfully");
      });
    }
  }
});
