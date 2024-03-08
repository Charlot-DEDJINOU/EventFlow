const express = require('express');
const databaseConfig = require("../database/database");

const router = express.Router();

// Route pour mettre à jour les informations d'un invité par son ID
router.put("/:id", (req, res) => {
  const id = req.params.id;
  const { appelation, place, vip, present } = req.body;
  const db = databaseConfig.createDb();
  db.run(
    "UPDATE Invites SET appelation = ?, place = ?, vip = ?, present = ? WHERE id = ?",
    [appelation, place, vip, present, id],
    (err) => {
      if (err) {
        console.error(err);
        res.status(500).send("Erreur du serveur");
        return;
      }
      res.send("Informations de l'invité mises à jour avec succès");
    }
  );
});

module.exports = router;
