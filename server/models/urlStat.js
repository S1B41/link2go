import { Schema, model } from "mongoose"

const urlSchema = new Schema({
  shortUrlId: {
    type: String,
    required: true,
  },
  accessDate: {
    type: String,
    required: true,
  },
  browser: {
    type: String,
    required: true,
  },
  os: {
    type: String,
    required: true,
  },
})

export default model("URLSTAT", urlSchema)
