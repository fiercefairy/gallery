/**
 * reset / setup project for a new user
 */

const fs = require("fs");
const config = require("../config.json");

console.log(`setting up gallery project...`);

const prompts = require("prompts");

(async () => {
  const response = await prompts([
    {
      type: "text",
      name: "title",
      message: `Title of the Gallery (e.g. ${config.title})?`
    },
    {
      type: "text",
      name: "logoAlt",
      message: `Alternative Text for Site Logo (e.g. ${config.logoAlt})?`
    },
    {
      type: "text",
      name: "twitter",
      message: `Twitter handle (e.g. ${config.twitter})?`
    },
    {
      type: "text",
      name: "instagram",
      message: `Instagram handle (e.g. ${config.instagram})?`
    },
    {
      type: "confirm",
      initial: true,
      name: "replacedLogo",
      message: `Did you replace ./src/assets/logo.png with a new logo image?`
    },
    {
      type: "confirm",
      initial: true,
      name: "replacedBG",
      message: `(optional) Did you replace ./src/assets/bg.png with a new background image?`
    }
  ]);
  config.title = response.title;
  config.logoAlt = response.logoAlt;
  config.instagram = response.instagram;
  config.twitter = response.twitter;

  fs.writeFileSync(`${__dirname}/../src/data/gallery_data.json`, "{}");
  fs.writeFileSync(`${__dirname}/../src/data/galleries.json`, "{}");
  fs.writeFileSync(
    `${__dirname}/../config.json`,
    JSON.stringify(config, null, 2)
  );
  console.log(
    "Ready to go. Now commit and push this and run: `npm run deploy`"
  );
})();
