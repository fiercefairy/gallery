const axios = require("axios");
module.exports = async id => {
  const response = await axios.post(
    "https://51rknuvw76.execute-api.us-east-1.amazonaws.com/dev/objkt",
    {
      objkt_id: `${id}`
    }
  );
  return response.data.result;
};
