const databaseConfig = require("../database/database");

const addInvite = async (item) => {
  try {
    const { appelation, numero, status, sexe, email, is_boursier, is_entry } = item;
    const db = databaseConfig.createDb();

    await new Promise((resolve, reject) => {
      db.run(
        "INSERT INTO Invites (appelation, numero, status, sexe, email, is_boursier, is_entry) VALUES (?, ?, ?, ?, ?, ?, ?)",
        [appelation, numero, status, sexe, email, is_boursier, is_entry],
        function (err) {
          if (err) {
            console.error(err);
            reject(err);
            return;
          }
          resolve();
        }
      );
    });

    const lastInsertID = await new Promise((resolve, reject) => {
      db.get("SELECT last_insert_rowid() as lastID", (err, row) => {
        if (err) {
          console.error(err);
          reject(err);
          return;
        }
        resolve(row.lastID);
      });
    });

    db.close();

    return lastInsertID;
  } catch (error) {
    console.error("Erreur lors de l'insertion :", error);
    throw error;
  }
};

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
  const { appelation, numero, status, sexe, email, is_boursier, is_entry } = item;
  const db = databaseConfig.createDb();
  db.run(
    "UPDATE Invites SET appelation = ?, numero = ?, status = ?, sexe = ?, email = ?, is_boursier = ?, is_entry = ? WHERE id = ?",
    [appelation, numero, status, sexe, email, is_boursier, is_entry, id],

    (err) => {
      if (err) {
        console.error(err);
        return;
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