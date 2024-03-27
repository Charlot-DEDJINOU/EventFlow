const databaseConfig = require("./database");

function initializeDatabase() {
  const db = databaseConfig.createDb();
  databaseConfig.dbExist(db, (exist) => {
    if (!exist) {
      console.log("La base de données n'existe pas. Création en cours...");
      databaseConfig.createTableInvites(db);
    } else {
      console.log("Les tables existent déjà.");
    }
  });
}

module.exports = { initializeDatabase };
