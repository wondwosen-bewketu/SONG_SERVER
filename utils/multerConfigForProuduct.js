const multer = require("multer");

const storage = multer.diskStorage({});

const upload = multer({
  storage: storage,
});

module.exports = upload.fields([
  { name: "file", maxCount: 1 },
  { name: "farmerfile", maxCount: 10 },
]);
