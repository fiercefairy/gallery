/**
 * fetch data for an object add add it to a named gallery
 *
 * node tools/rm_item.js prosopagnosia 25901
 */

const fs = require("fs");
const galleries = require("../src/data/galleries.json");
const galleryData = require("../src/data/gallery_data.json");

const galleryName = process.argv[2];
const object_id = process.argv[3];

console.log(`removing ${object_id} from ${galleryName}`);

galleryData[galleryName] = galleryData[galleryName].filter(
  obj => obj.objectId !== object_id
);
galleries[galleryName].items = galleries[galleryName].items.filter(
  id => id !== Number(object_id)
);

fs.writeFileSync(
  `${__dirname}/../src/data/gallery_data.json`,
  JSON.stringify(galleryData, null, 2)
);

fs.writeFileSync(
  `${__dirname}/../src/data/galleries.json`,
  JSON.stringify(galleries, null, 2)
);
console.log("data files written!");
