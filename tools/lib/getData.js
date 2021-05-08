const axios = require("axios");
const sleep = require("./sleep");
module.exports = async id => {
  let retries = 0;
  const attempt = async () => {
    const res = await axios
      .post(
        "https://51rknuvw76.execute-api.us-east-1.amazonaws.com/dev/objkt",
        {
          objkt_id: `${id}`
        }
      )
      .then(response => response)
      .catch(async e => {
        console.error(e.message);
      });
    if (!res && retries < 10) {
      retries++;
      await sleep(1000);
      return attempt();
    }

    return res ? res.data.result : null;
  };
  return attempt();
};
