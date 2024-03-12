export const socket = new WebSocket('ws://localhost:8080')

socket.onopen = function () {
  console.log('Connexion WebSocket établie. ')
}

socket.onerror = function () {
  console.error('Erreur WebSocket : ')
}

socket.onclose = function () {
  console.log('Connexion WebSocket fermée')
}

export const updateState = (message, store) => {
  switch (message.action) {
    case 'invites':
      store.dispatch('ResetInvites', message.items);
      break
    case 'add' : 
      store.dispatch('ToggleInvites', message.item); 
      break 
    case 'update':
      store.dispatch('ToggleInvite', message.item)
      break 
  }
}

export const sendMessage = (data) => {
    socket.send(JSON.stringify(data));
}