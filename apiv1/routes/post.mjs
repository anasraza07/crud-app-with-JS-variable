import express from "express";
import { nanoid } from "nanoid";
let router = express.Router();

const posts = [
    // id: nanoid(),
    // title: "Hello!",
    // text: "some text"
]

// GET /api/v1/post/:userId/:postId
router.get("/posts", (req, res) => {
    res.send(posts)
})

// GET /api/v1/posts/:userId
router.get("/post/:postId", (req, res) => {
    if (!req.params.postId) {
        res.status(403).send({ message: "postId must be a valid id" })
        return;
    }
    for (let i = 0; i < posts.length; i++) {
        if (posts[i].id === req.params.postId) {
            res.send(posts[i]);
            return;
        }
    }
    res.send({ message: "post not found with this id " + req.params.postId })
})

// POST /api/v1/post/:userId
router.post("/post", (req, res) => {
    if (!req.body.title
        || !req.body.text) {
        res.status(403).send({
            message: `required parameter missing, example body:
        {
            id: must be a valid id
            title: "Hello!",
            text: "some text"
        }` })
        return;
    }

    posts.unshift({
        id: nanoid(),
        title: req.body.title,
        text: req.body.text
    })

    res.send("post created!")
})

// PUT /api/v1/post/:userId/:postId
router.put("/post/:postId", (req, res) => {
    if (!req.params.postId
        || !req.body.title
        || !req.body.text) {
        res.send({
            message: `required parameter missing, example body:
        {
            id: must be a valid id
            title: "Hello!",
            text: "some text"
        }` })
        return;
    }
    for (let i = 0; i < posts.length; i++) {
        if (posts[i].id === req.params.postId) {
            posts[i] = {
                id: req.params.postId,
                title: req.body.title,
                text: req.body.text
            }
            res.send({ message: "post updated!" })
            return;
        }
    }
    res.send("post id not found with this id " + req.params.id)
})

// DELETE /api/v1/post/:userId/:postId
router.delete("/post/:postId", (req, res) => {
    if (!req.params.postId) {
        res.status(403).send({ message: "postId must be a valid id" })
        return;
    }
    for (let i = 0; i < posts.length; i++) {
        if (posts[i].id === req.params.postId) {
            posts.splice(i, 1);
            res.send({ message: "post deleted!" })
            return;
        }
    }
    res.send({ message: "post not found with this id " + req.params.postId })
})

export default router;