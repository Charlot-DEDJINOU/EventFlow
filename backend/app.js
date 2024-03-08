const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser");
const databaseInit = require("./database/databaseInit");  // Importez le module

const app = express();
app.use(bodyParser.json());
app.use(cors());

const port = 3000;

databaseInit.initializeDatabase();

const getInvitesRoute = require("./routes/getInvites");
const addInviteRoute = require("./routes/addInvite");
const updateInviteRoute = require("./routes/updateInvite");

app.use("/invites", getInvitesRoute);
app.use("/invites", addInviteRoute);
app.use("/invites", updateInviteRoute);

app.get("/", (req, res) => {
  res.send("Mon Backend !");
});

app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});

module.exports = app;