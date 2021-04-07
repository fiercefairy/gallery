/**
 * fetch data for each object in src/data/galleries.json
 */

const axios = require("axios");
const fs = require("fs");
const galleries = require("../src/data/galleries.json");

const galleryData = require("../src/data/gallery_data.json");

const getData = async id => {
  const response = await axios.post(
    "https://51rknuvw76.execute-api.us-east-1.amazonaws.com/dev/objkt",
    {
      objkt_id: `${id}`
    }
  );
  return response.data.result;
};

(async () => {
  for (let galleryName in galleries) {
    const items = galleries[galleryName].items;
    if (!galleryData[galleryName]) galleryData[galleryName] = [];
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
    JSON.stringify(galleryData)
  );
  console.log("data file written!");
})();
