const express = require('express');
const databaseConfig = require("../database/database");

const router = express.Router();

// Route pour ajouter un nouvel invité
router.post("/", (req, res) => {
  const { appelation, place, vip, present } = req.body;
  const db = databaseConfig.createDb();
  db.run(
    "INSERT INTO Invites (appelation, place, vip, present) VALUES (?, ?, ?, ?)",
    [appelation, place, vip, present],
    function (err) {
      if (err) {
        console.error(err);
        res.status(500).send("Erreur du serveur");
        return;
      }
      res.send(`Nouvel invité ajouté avec succès. ID: ${this.lastID}`);
    }
  );
});

module.exports = router;
