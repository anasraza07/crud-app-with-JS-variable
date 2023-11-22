import express from "express";
let router = express.Router();

// GET /api/v1/feed
router.get("/feed", (req, res) => {
    res.send("feed is here v2");
})

export default router;