import Fastify from 'fastify'
import { Server as SocketIOServer } from 'socket.io'

const fastify = Fastify({
  logger: true
})

fastify.get('/v1/health', async () => {
  return { status: 'ok' }
})

const start = async () => {
  try {
    await fastify.listen({ port: Number(process.env.PORT) || 3333, host: '0.0.0.0' })

    const io = new SocketIOServer(fastify.server, {
      cors: {
        origin: '*'
      }
    })

    io.on('connection', (socket) => {
      fastify.log.info(`socket conectado: ${socket.id}`)
      socket.emit('ready', { message: 'socket ativo' })
    })
  } catch (error) {
    fastify.log.error(error)
    process.exit(1)
  }
}

start()
