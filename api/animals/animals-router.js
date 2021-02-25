const express = require("express");
const Animal = require("./animals-model");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const data = await Animal.getAll();
    res.json(data);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/", async (req, res) => {
  try {
    const data = await Animal.create(req.body);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const removed = await Animal.remove(id);
    if (removed) {
      res.status(202).json(removed);
    } else {
      res.json("Resource not found");
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
