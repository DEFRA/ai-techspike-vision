import { processPayloadFile } from "~/src/lib/file.js"
import { analyseImage } from "~/src/services/ai/inference.js"

const analyseController = {
  handler: async (request, h) => {
    const buffer = await processPayloadFile(request.payload)
    const type = request.headers['content-type']

    const result = await analyseImage(buffer, type)

    return h.response(result).code(200)
  }
}

export { analyseController }
