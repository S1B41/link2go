import validate from "validate.js";
import { generate } from "shortid";

const validateUrl = (url = "") => {
    return validate({ website: url }, {
        website: {
            url: {
                allowLocal: true
            }
        }
    });
}
const generateUrlKey = () => generate();

export default { validateUrl, generateUrlKey: generateUrlKey };