import validate from "validate.js"
import { nanoid } from "nanoid"

const validateUrl = (url = "") => {
  return validate(
    { website: url },
    {
      website: {
        url: {
          allowLocal: true,
        },
      },
    }
  )
}
const generateUrlKey = () => nanoid(10)

export { validateUrl, generateUrlKey }
