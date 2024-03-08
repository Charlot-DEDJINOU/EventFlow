const express = require('express');
const databaseConfig = require("../database/database");

const router = express.Router();

// Route pour obtenir tous les invités
router.get("/", (req, res) => {
  const db = databaseConfig.createDb();
  db.all("SELECT * FROM Invites", (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).send("Erreur du serveur");
      return;
    }
    res.json(rows);
  });
});

module.exports = router;
