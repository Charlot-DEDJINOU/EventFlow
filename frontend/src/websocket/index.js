export const socket = new WebSocket('wss://eventflowwebsocket.onrender.com')

socket.onopen = function () {
  console.log('Connexion WebSocket établie. ')
}

socket.onerror = function () {
  console.error('Erreur WebSocket : ')
}

socket.onclose = function () {
  console.log('Connexion WebSocket fermée')
}

export const updateState = (message, store, callback) => {
  switch (message.action) {
    case 'invites':
      store.dispatch('ResetInvites', message.items)
      break
    case 'add':
      store.dispatch('ToggleInvites', message.item)
      break
    case 'update':
      store.dispatch('ToggleInvite', message.item)
      break
  }

  callback()
}

export const sendMessage = (data) => {
  socket.send(JSON.stringify(data))
}
