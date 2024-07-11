import { analyseController } from '~/src/api/analyse/controller.js'

const analyse = {
  plugin: {
    name: 'analyse',
    register: async (server) => {
      server.route({
        method: 'POST',
        path: '/analyse',
        options: {
          payload: {
            output: 'stream',
            parse: false,
            maxBytes: 5 * 1000 * 1000,
            allow: ['image/png', 'image/jpeg']
          }
        },
        ...analyseController
      })
    }
  }
}

export { analyse }
