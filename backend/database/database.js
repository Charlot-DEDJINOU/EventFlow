const { Pool } = require('pg');

const pool = new Pool({
    user: 'charlot',
    host: 'dpg-co214go21fec73d4kphg-a',
    database: 'gestion_p99u',
    password: 'ZOsz669dzuCFo5GgjGj6qi66C0KTyoqc',
    port: 5432, 
});

let client;

async function connectToDatabase() {
    try {
        if (!client) {
            client = await pool.connect();
            console.log('Connecté à PostgreSQL');
        }
        return client;
    } catch (error) {
        console.error('Erreur de connexion à PostgreSQL :', error);
        throw error;
    }
}

function closeConnection() {
    if (client) {
        client.release();
        client = null;
        console.log('Connexion à PostgreSQL fermée');
    }
}

async function createInvitesTable() {
    const client = await connectToDatabase();
    try {
        await client.query(`
            CREATE TABLE IF NOT EXISTS invites (
                id SERIAL PRIMARY KEY,
                appelation VARCHAR(255),
                numero VARCHAR(50),
                status VARCHAR(50),
                sexe VARCHAR(10),
                email VARCHAR(255),
                is_boursier BOOLEAN,
                is_entry BOOLEAN
            )
        `);
        console.log('Table "invites" créée avec succès ou déjà existante');
    } catch (error) {
        console.error('Erreur lors de la création de la table "invites" :', error);
        throw error;
    } finally {
        client.release(); // Libérer le client de la pool de connexions
    }
}

module.exports = { connectToDatabase, createInvitesTable, closeConnection };