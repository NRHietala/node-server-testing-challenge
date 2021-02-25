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

router.post("/", (req, res) => {});

router.delete("/", (req, res) => {});

module.exports = router;
