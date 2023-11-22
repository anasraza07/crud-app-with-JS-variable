import express from "express";
let router = express.Router();

// GET /api/v1/post/:userId/:postId
router.get("/post/:userId/:postId", (req, res) => {
    res.send("one post is here v2")
})

// GET /api/v1/posts/:userId
router.get("/posts/:userId", (req, res) => {
    res.send("all posts are here v2")
})

// POST /api/v1/post/:userId
router.post("/post/:userId", (req, res) => {
    res.send("post created v2!")
})

// PUT /api/v1/post/:userId/:postId
router.put("/post/:userId/:postId", (req, res) => {
    res.send("post edited v2!")
})

// DELETE /api/v1/post/:userId/:postId
router.delete("/api/v2/post/:userId/:postId", (req, res) => {
    res.send("post deleted v2!")
})




export default router;