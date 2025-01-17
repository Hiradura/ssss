const express = require("express");
const router = express.Router();
const dataService = require("../services/data");  

router.get("/", async (req, res, next) => {
    try {
        const rows = await dataService.getDatas(); 
        res.json(rows);
    } catch (err) {
        next(err);
    }
});

router.get("/:id", async (req, res, next) => {
    const { id } = req.params; 
    try {
        const row = await dataService.getDataById(id); 
        if (!row) {
            return res.status(404).json({ error: "Elem nem található." }); 
        }
        res.json(row); 
    } catch (err) {
        next(err); 
    }
});

module.exports = router; 
