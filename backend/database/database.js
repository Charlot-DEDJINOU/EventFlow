const sqlite3 = require("sqlite3").verbose();
const fs = require("fs");

function createDb() {
  const db = new sqlite3.Database("./database/data.db");
  console.log("Connexion à la base de donnée");
  return db;
}

function dbExist(db, callback) {
  db.get("SELECT name FROM sqlite_master WHERE type='table'", (err, row) => {
    if (err) {
      console.error(err);
      callback(true);
    } else if (row) {
      console.log("La base de données existe déjà.");
      callback(true);
    } else {
      callback(false);
    }
  });
}
function createTableInvites(db) {
    db.run(
      `CREATE TABLE IF NOT EXISTS Invites (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        appelation TEXT,
        place TEXT,
        vip BOOLEAN DEFAULT 0,
        present BOOLEAN DEFAULT 0
      )`,
      (err) => {
        if (err) {
          console.error(err);
        } else {
          console.log("Table 'Invites' créée ou mise à jour avec succès.");
        }
      }
    );
  }
  

function insertInvites(db) {
  try {
    const fileName = './database/invites.txt'
    const fileContent = fs.readFileSync(fileName, "utf-8");
    const lines = fileContent.split("\n");
    const data = lines.map((line) => line.split(","));

    db.serialize(() => {
      db.run(`BEGIN TRANSACTION`);

      const stmt = db.prepare(
        `INSERT INTO Invites (appelation, place , vip) VALUES (?, ?, ?)`
      );

      for (const [appelation, table , vip] of data) {
        stmt.run(appelation.trim(), table.trim() , vip.trim());
      }

      stmt.finalize();

      db.run(`COMMIT`, (err) => {
        if (err) {
          console.error(err);
        } else {
          console.log("Données insérées avec succès.");

          db.close((err) => {
            if (err) {
              console.error(err);
            } else {
              console.log("Connexion à la base de données fermée.");
            }
          });
        }
      });
    });
  } catch (err) {
    console.error(err);
  }
}

module.exports = {
  createDb,
  createTableInvites,
  insertInvites,
  dbExist,
};