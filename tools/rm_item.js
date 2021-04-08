/**
 * fetch data for an object add add it to a named gallery
 *
 * node tools/rm_item.js prosopagnosia 25901
 */

const fs = require("fs");
const galleryData = require("../src/data/gallery_data.json");

const galleryName = process.argv[2];
const object_id = process.argv[3];

console.log(`removing ${object_id} from ${galleryName}`);

galleryData[galleryName] = galleryData[galleryName].filter(
  obj => obj.objectId !== object_id
);

fs.writeFileSync(
  `${__dirname}/../src/data/gallery_data.json`,
  JSON.stringify(galleryData)
);
console.log("data file written!");
