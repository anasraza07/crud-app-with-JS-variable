import express from "express";
let router = express.Router();

// GET /api/v2/comments/:postId
router.post("/comments/:userId/:postId", (req, res) => {
    res.send("all comments")
})

// POST /api/v2/commnet/:userId
router.post("/comment/:userId", (req, res) => {
    res.send("comment posted!")
})

// PUT /api/v2/comment/:userId/:postId
router.put("/comment/:userId/:postId", (req, res) => {
    res.send("comment edited!")
})

// DELETE /api/v2/commnet/:userId/:postId
router.delete("/comments/:userId/:postId", (req, res) => {
    res.send("comment deleted!")
})

export default router;