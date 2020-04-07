const fs = require("fs");
var current;
const maindatapath = "./";
const data = JSON.parse(fs.readFileSync("stats.json", { encoding: "utf8" }));
fs.readdirSync(maindatapath).forEach(scanCount);

// write(datapath)
//copy();
write()
function f(file) {
  data.a.push(file);
}

function scanCount(i) {
  current = i;
  if (i.length < 4) {
    fs.readdirSync(i).forEach(count);
  }
  function count(a) {
    if (data.hasOwnProperty(current)) {
      data[current].push(a);
    } else {
      data[current] = [];
      data[current].push(a);
    }
  }
  console.log("data", data);
}
function write(file) {
  fs.writeFileSync(`stats.json`, JSON.stringify(data));
}

function changeName(file) {
  fs.rename(`a/${file}/${file}.json`, `a/${file}/en.json`, function (err) {
    if (err) console.log("ERROR: " + err);
  });
}

function copy() {
  const pp = "../projects/DictionaryModules/src/resources/untranslated";
  fs.readdirSync(pp).forEach(f);


  function f(i) {
    var dir = `${i}`.charAt(0);
    if (isNaN(dir)) {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
        fs.mkdirSync(dir+"/"+i);
        fs.copyFile(
          pp + "/" + i + "/" + i + ".json",
          dir + "/" + i + "/" + "en.json",
          (err) => {
            if (err) throw err;
            console.log("copied");
          }
        );
      } else {
         fs.mkdirSync(dir+"/"+i);
        fs.copyFile(
          pp + "/" + i + "/" + i + ".json",
          dir + "/" + i + "/" + "en.json",
          (err) => {
            if (err) throw err;
            console.log(" - copied");
          }
        );
      }
    } else {
      let t = "0-9";
      if (!fs.existsSync(t)) {
        fs.mkdirSync(t);
         fs.mkdirSync(t+"/"+i);
        fs.copyFile(
          pp + "/" + i + "/" + i + ".json",
          t + "/" + i + "/" + "en.json",
          (err) => {
            if (err) throw err;
            console.log("copied num");
          }
        );
      } else {
         fs.mkdirSync(t+"/"+i);
        fs.copyFile(
          pp + "/" + i + "/" + i + ".json",
          t + "/" + i + "/" + "en.json",
          (err) => {
            if (err) throw err;
            console.log(" - copied num");
          }
        );
      }
    }
  }
}
