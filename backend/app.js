const databaseInit = require("./database/databaseInit");
const InviteController = require("./controller/InviteController");
const WebSocket = require('ws');

const port = process.env.PORT || 8080 ;
const server = new WebSocket.Server({ port: port });

databaseInit.initializeDatabase();

let clients = new Set();

server.on('connection', async (ws) => {

  clients.add(ws);
  console.log('Nouvelle connexion WebSocket établie.');

  ws.send(JSON.stringify(await InviteController.getInvites())) ;

  ws.on('message', async (message) => {
    const data = JSON.parse(message);
    switch (data.action) {
      case 'getinvites':
        ws.send(JSON.stringify(await InviteController.getInvites())) ;
        break;
      case 'addinvite':
        console.log('Invite reçu :', data.item);
        InviteController.addInvite(data.item);

        const newinvite = {
          action: 'add',
          item: data.item
        };

        clients.forEach((client) => {
          if (client.readyState === WebSocket.OPEN) {
            client.send(JSON.stringify(newinvite));
          }
        });
        break;
      case 'updateinvite':
        console.log('Invite reçu :', data.item);
        InviteController.update(data.item, data.item.id);

        const updateinvite = {
          action: 'update',
          item: data.item
        };

        clients.forEach((client) => {
          if (client.readyState === WebSocket.OPEN) {
            client.send(JSON.stringify(updateinvite));
          }
        });
        break;
    }
  });

  ws.on('close', () => {
    clients.delete(ws);
    console.log('Connexion WebSocket fermée.');
  });

});

console.log('Serveur WebSocket en cours d\'exécution sur le port ', port);