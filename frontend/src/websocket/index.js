// websocket.js

const socket = new WebSocket('ws://localhost:8080');

socket.onopen = function () {
  console.log('Connexion WebSocket établie. ');
};

socket.onmessage = function (event) {
  const message = event.data;
  console.log('Message reçu du serveur : ', message);
};

socket.onerror = function () {
  console.error('Erreur WebSocket : ');
};

socket.onclose = function () {
  console.log('Connexion WebSocket fermée ');
};

export default socket;
