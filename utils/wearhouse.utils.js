const Warehouse = require("../models/wearhouse.model");

const isWarehouseExists = async (warehouseId) => {
  const warehouse = await Warehouse.findById(warehouseId);
  return !!warehouse;
};

const isProductExistsInWarehouse = async (warehouseId, productId) => {
  const warehouse = await Warehouse.findById(warehouseId);
  if (!warehouse) return false;
  
  const product = warehouse.products.find(p => p._id.toString() === productId);
  return !!product;
};

module.exports = {
  isWarehouseExists,
  isProductExistsInWarehouse,
};
