import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"
import bodyParser from "body-parser"
import { validateUrl, generateUrlKey } from "./services/urlService.js"
import urlController from "./controllers/urlController"

const app = express()
const host = "localhost:3000"
dotenv.config()

app.use(cors()) // to allow cross origin requests
app.use(bodyParser.json()) // to convert the request into JSON
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/xwww-
app.get("/", (req, res) => {
  res.send("Hello")
})

app.post("/url", async (req, res) => {
  try {
    if (!!validateUrl(req.body.url))
      return res.status(400).send({ msg: "Invalid URL." })
    const urlKey = generateUrlKey()
    const shortUrl = `http://${host}/${urlKey}`
    await urlController.save(req.body.url, shortUrl, urlKey)
    return res.status(200).send({ shortUrl })
  } catch (error) {
    return res.status(500).send({ msg: "Error. Please try again." })
  }
})

app.get("/:shortUrlId", async (req, res) => {
  try {
    const url = await urlController.find(req.params.shortUrlId)
    return !url
      ? res.status(404).send("Not found")
      : res.redirect(301, url.longURL)
  } catch (error) {
    return res.status(500).send("Error")
  }
})

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB database Connected..."))
  .catch((err) => console.log(err))

app.listen(process.env.PORT, () =>
  console.log(`App listening at http://localhost:${process.env.PORT}`)
)
