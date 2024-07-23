const express = require('express');
const router = express.Router();
const MenuItem = require('../models/menu');
const upload = require('../confic/multerConfig'); 

// Get all menu items
router.get('/', async (req, res) => {
  try {
    const menuItems = await MenuItem.find();
    if (!menuItems) {
      return res.status(404).json({ message: 'No menu items found' });
    }
    res.json(menuItems);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a single menu item
router.get('/:id', getMenuitem, (req, res) => {
  res.json(res.menuItem);
});

// Create a new menu item
router.post('/', async (req, res) => {
  const menuItem = new MenuItem({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    image: req.body.image
  });

  try {
    const newMenuItem = await menuItem.save();
    res.status(201).json(newMenuItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update a menu item
router.patch('/:id', getMenuitem, async (req, res) => {
  // Update menu item fields
  try {
    const updatedMenuItem = await MenuItem.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    res.json(updatedMenuItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a menu item
router.delete('/:id', getMenuitem, async (req, res) => {
  try {
    await res.menuItem.remove();
    res.json({ message: 'Menu item deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Middleware function to get a single menu item by ID
async function getMenuitem(req, res, next) {
  let menuItem;
  try {
    menuItem = await MenuItem.findById(req.params.id);
    if (menuItem == null) {
      return res.status(404).json({ message: 'Menu item not found' });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }

  res.menuItem = menuItem;
  next();
}

module.exports = router;
