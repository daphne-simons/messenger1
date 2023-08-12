# Notes about socket.io / websockets

- You need two packages to communicate between client and server

- `socket.on` is what clients will receive from the server.

- `socket.emit` is about the front end sending messages to the server.

- `socket` means one individual,
  `io` means everyone.

- `socket.broadcast.emit` sends to all clients except the sender.

- `.join(some string)` - socket joins a "room" with other sockets if they use the same string.
- `.to(socket.id)` - sends to a specific client
- `.to(room)` - sends to all in a room
