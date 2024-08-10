var Albums = require("../models/Album");

exports.index = async function (req, res) {
  const albums = await Albums.getAlbums();
  console.log("Retrieved Albums2");
  res.json(albums);
};
