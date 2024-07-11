import { AnthropicBedrock } from '@anthropic-ai/bedrock-sdk'
import { config } from '~/src/config/index.js'

const bedrockClient = new AnthropicBedrock({
  awsAccessKey: config.get('aws.accessKey'),
  awsSecretKey: config.get('aws.secretKey'),
  region: config.get('aws.region')
})

export { bedrockClient }
