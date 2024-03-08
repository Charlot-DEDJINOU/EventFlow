const databaseConfig = require("./database");

function initializeDatabase() {
  const db = databaseConfig.createDb();
  databaseConfig.dbExist(db, (exist) => {
    if (!exist) {
      console.log("La base de données n'existe pas. Création en cours...");
      databaseConfig.createTableInvites(db);
      databaseConfig.insertInvites(db);
      console.log("Donnee insérer avec succes.");
    } else {
      console.log("Les tables existent déjà.");
    }
  });
}

module.exports = { initializeDatabase };
