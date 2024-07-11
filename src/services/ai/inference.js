import { bedrockClient } from "./clients/claude-bedrock.js"

async function analyseImage(buffer, type) {
  try {
    const encodedImage = buffer.toString('base64')

    const result = await bedrockClient.messages.create({
      model: 'anthropic.claude-3-sonnet-20240229-v1:0',
      messages: [
        {
          role: 'user',
          content: [
            {
              "type": "image",
              "source": {
                "type": "base64",
                "media_type": type,
                "data": encodedImage
              }
            },
            {
              "type": "text",
              "text": "Extract the data from this image into JSON"
            }
          ]
        }
      ],
      max_tokens: 1024
    })

    const { content } = result

    return JSON.parse(content[0].text)
  } catch (err) {
    console.error('Error: ', err)
    throw new Error('Failed to analyse image')
  }
}

export { analyseImage }
