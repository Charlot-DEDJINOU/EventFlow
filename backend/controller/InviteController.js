const databaseConfig = require("../database/database");

const addInvite = (item) => {
  const { appelation, numero, status , is_entry } = item;
  const db = databaseConfig.createDb();
  db.run(
    "INSERT INTO Invites (appelation, numero, status, is_entry) VALUES (?, ?, ?, ?)",
    [appelation, numero, status, is_entry , is_entry],

    function (err) {
      if (err) {
        console.error(err)
      }
      
      console.log("Nouvel invité ajouté avec succès");
    }
  );

  db.close()
}

const getInvites = () => {
  const db = databaseConfig.createDb();
  return new Promise((resolve, reject) => {
    db.all("SELECT * FROM Invites", (err, rows) => {
      if (err) {
        console.error(err);
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });

  db.close()
};

const update = (item, id) => {
  const { appelation, numero, status, is_entry } = item;
  const db = databaseConfig.createDb();
  db.run(
    "UPDATE Invites SET appelation = ?, numero = ?, status = ?, is_entry = ?, WHERE id = ?",
    [appelation, numero, status, is_entry, id],

    (err) => {
      if (err) {
        console.error(err);
      }
      console.log("Informations de l'invité mises à jour avec succès");
    }
  );
  db.close()
};

module.exports = {
  addInvite,
  getInvites,
  update
};