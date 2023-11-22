import express from "express";
let router = express.Router();

// GET /api/v1/comments/:postId
router.post("/comments/:userId/:postId", (req, res) => {
    res.send("all comments")
})

// POST /api/v1/commnet/:userId
router.post("/comment/:userId", (req, res) => {
    res.send("comment posted!")
})

// PUT /api/v1/comment/:userId/:postId
router.put("/comment/:userId/:postId", (req, res) => {
    res.send("comment edited!")
})

// DELETE /api/v1/commnet/:userId/:postId
router.delete("/comments/:userId/:postId", (req, res) => {
    res.send("comment deleted!")
})

export default router;