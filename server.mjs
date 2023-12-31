import express from "express";
import path from "path";

const __dirname = path.resolve();

import apiv1Router from "./apiv1/index.mjs"
import apiv2Router from "./apiv2/index.mjs"

const app = express();
app.use(express.json())

app.use("/api/v1", apiv1Router)
app.use("/api/v2", apiv2Router)

app.use("/static", express.static(path.join(__dirname, "static")))
app.use("/", express.static(path.join(__dirname, "public")))

const PORT = process.env.PORT || 3002
app.listen(PORT, () => {
    console.log("Example server listening on port " + PORT)
})