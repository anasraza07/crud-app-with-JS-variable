import express from "express";
let router = express.Router();

import authRouter from "./routes/auth.mjs";
import postRouter from "./routes/post.mjs";

router.use(authRouter)

router.use((req, res, next) => {
    const token = "valid";
    if (token === "valid") {
        next();
    }
    else {
        res.send({ message: "Invalid token" });
    }
})

router.use(postRouter)

router.get("/api/v1/weather", (req, res, next) => {
    res.send({
        message: "weather is normal",
        apiVersion: "v1"
    })
})

export default router;