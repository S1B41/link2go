import { Schema, model } from "mongoose"

const urlSchema = new Schema({
  longURL: {
    type: String,
    required: true,
  },
  shortURL: {
    type: String,
    required: true,
  },
  shortUrlId: {
    type: String,
    required: true,
    unique: true,
  },
})

export default model("URL", urlSchema)
