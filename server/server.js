import { createServer } from 'http'
import { Server } from 'socket.io'

const httpServer = createServer()

const io = new Server(httpServer, {
	cors: {
		origin: 'http://localhost:3000',
	},
})

httpServer.listen(3000)

io.on('connection', (socket) => {
	console.log(socket.id, 'io in server is connected')

	const id = socket.handshake.query.id
	socket.join(id)
	console.log('socketjoin id: ', id)

	socket.on('send-message', ({ recipients, text }) => {
		recipients.forEach((recipient) => {
			const newRecipients = recipients.filter((r) => r !== recipient)
			newRecipients.push(id)
			socket.broadcast.to(recipient).emit('receive-message', {
				recipients: newRecipients,
				sender: id,
				text,
			})
		})
	})
})
