const WebSocket = require('ws');
const { connectDB } = require('./database/database');
const InviteController = require('./controller/InviteController');

const port = process.env.PORT || 8080;
const server = new WebSocket.Server({ port: port });

let clients = new Set();

const broadcast = (data) => {
  clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify(data));
    }
  });
};

const sendInvites = async (ws) => {
  ws.send(
    JSON.stringify({
      action: 'invites',
      items: await InviteController.getInvites()
    })
  );
};

connectDB().then(() => {
  server.on('connection', async (ws) => {
    clients.add(ws);
    console.log('Nouvelle connexion WebSocket établie.');

    sendInvites(ws);

    ws.on('message', async (message) => {
      let data = JSON.parse(message);
      switch (data.action) {
        case 'getinvites':
          sendInvites(ws);
          break;
        case 'addInvite':
          const id = await InviteController.addInvite(data.item);
          data.item.id = id;
          console.log(data.item);
          const newinvite = {
            action: 'add',
            item: data.item
          };

          broadcast(newinvite);

          break;
        case 'updateInvite':
          const _id = data.item._id
          delete data.item._id
          await InviteController.updateInvite(data.item, _id);
          data.item._id = _id
          const updateinvite = {
            action: 'update',
            item: data.item
          };

          broadcast(updateinvite);

          break;
      }
    });

    ws.on('close', () => {
      clients.delete(ws);
      console.log('Connexion WebSocket fermée.');
    });
  });

  console.log("Serveur WebSocket en cours d'exécution sur le port ", port);
});