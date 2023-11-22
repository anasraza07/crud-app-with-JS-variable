import express from "express";
let router = express.Router();

import authRouter from "./routes/auth.mjs";
import feedRouter from "./routes/feed.mjs";
import postRouter from "./routes/post.mjs";
import commentRouter from "./routes/comment.mjs";

router.use(authRouter)

router.use((req, res, next) => {
    if (token === "valid") {
        next();
    }
    else {
        res.send({ message: "Invalid token" });
    }
})

router.use(feedRouter)
router.use(postRouter)
router.use(commentRouter)

router.get("/api/v2/weather", (req, res, next) => {
    res.send({
        message: "weather is normal",
        apiVersion: "v2"
    })
})
export default router;