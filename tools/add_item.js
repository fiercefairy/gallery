/**
 * fetch data for an object add add it to a named gallery
 *
 * node tools/add_item.js prosopagnosia 25896
 */

const fs = require("fs");
const galleryData = require("../src/data/gallery_data.json");

const galleryName = process.argv[2];
const object_id = process.argv[3];

console.log(`adding ${object_id} to ${galleryName}`);

const getData = require("./lib/getData");

(async () => {
  if (!galleryData[galleryName]) galleryData[galleryName] = [];
  const data = await getData(object_id);
  galleryData[galleryName].push(data);

  fs.writeFileSync(
    `${__dirname}/../src/data/gallery_data.json`,
    JSON.stringify(galleryData)
  );
  console.log("data file written!");
})();
