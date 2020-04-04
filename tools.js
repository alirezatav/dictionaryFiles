const fs = require("fs");

const datapath = "a";
const data = JSON.parse(fs.readFileSync("stats.json", { encoding: "utf8" }));
  fs.readdirSync(datapath).forEach(changeName);
 


// write(datapath)



function f(file) {
  data.a.push(file);
}

function write(file){
    fs.writeFileSync(
        `stats.json`,
        JSON.stringify(data)
      );
}


function changeName(file){
  fs.rename(`a/${file}/${file}.json`, `a/${file}/en.json`, function(err) {
    if ( err ) console.log('ERROR: ' + err);
});
}