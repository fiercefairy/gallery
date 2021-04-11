/**
 * fetch data for each object in src/data/galleries.json
 *
 * node tools/build_gallery.js
 */
const fs = require("fs");
const galleries = require("../src/data/galleries.json");

const galleryData = require("../src/data/gallery_data.json");

const getData = require("./lib/getData");

(async () => {
  for (let galleryName in galleries) {
    const items = galleries[galleryName].items;
    // clear out the current gallery data
    galleryData[galleryName] = [];
    console.log(
      `fetching data for gallery ${galleryName} (${items.length} items)`
    );
    for (let i = 0; i < items.length; i++) {
      const data = await getData(items[i]);
      galleryData[galleryName].push(data);
      console.log(`fetched ${items[i]}`);
    }
    galleryData[galleryName] = galleryData[galleryName].filter(i => i);
  }

  fs.writeFileSync(
    `${__dirname}/../src/data/gallery_data.json`,
    JSON.stringify(galleryData, null, 2)
  );
  console.log("data file written!");
})();
