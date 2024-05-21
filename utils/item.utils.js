const Item = require("../models/item.model");

exports.isItemNameTaken = async (itemname, itemId = null) => {
  const query = { itemname };
  if (itemId) {
    query._id = { $ne: itemId };
  }
  const existingItem = await Item.findOne(query);
  return !!existingItem;
};
