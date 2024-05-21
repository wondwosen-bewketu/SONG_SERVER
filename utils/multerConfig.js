const multer = require("multer");

const storage = multer.diskStorage({});

const upload = multer({
  storage: storage,
});

module.exports = upload.fields([
  { name: "img", maxCount: 1 },
  { name: "files", maxCount: 10 },
]);
