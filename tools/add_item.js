/**
 * fetch data for an object add add it to a named gallery
 *
 * node tools/add_item.js prosopagnosia 25896
 */

const fs = require("fs");
const galleries = require("../src/data/galleries.json");
const galleryData = require("../src/data/gallery_data.json");

const galleryName = process.argv[2];
const object_id = process.argv[3];

console.log(`adding ${object_id} to ${galleryName}`);

const getData = require("./lib/getData");

(async () => {
  if (!galleryData[galleryName]) galleryData[galleryName] = [];
  if (!galleries[galleryName])
    galleries[galleryName] = {
      main: Number(object_id),
      items: [Number(object_id)]
    };
  else if (galleries[galleryName].items.includes(Number(object_id)))
    return console.log("already added");
  const data = await getData(object_id);
  galleryData[galleryName].push(data);
  if (!galleries[galleryName].items.includes(Number(object_id)))
    galleries[galleryName].items.push(Number(object_id));

  fs.writeFileSync(
    `${__dirname}/../src/data/gallery_data.json`,
    JSON.stringify(galleryData, null, 2)
  );
  fs.writeFileSync(
    `${__dirname}/../src/data/galleries.json`,
    JSON.stringify(galleries, null, 2)
  );

  console.log("data files written!");
})();
