const { connectToDatabase } = require("../database/database");

const addInvite = async (item) => {
    const client = await connectToDatabase();
    try {
        const { appelation, numero, status, sexe, email, is_boursier, is_entry } = item;
        const queryText = `
            INSERT INTO invites (appelation, numero, status, sexe, email, is_boursier, is_entry)
            VALUES ($1, $2, $3, $4, $5, $6, $7)
            RETURNING id
        `;
        const values = [appelation, numero, status, sexe, email, is_boursier, is_entry];
        const result = await client.query(queryText, values);
        console.log('Document inséré avec succès:', result.rows[0].id);
        return result.rows[0].id;
    } catch (error) {
        console.error("Erreur lors de l'insertion :", error);
        throw error;
    }
};

const getInvites = async () => {
    const client = await connectToDatabase();
    try {
        const queryText = `SELECT * FROM invites`;
        const result = await client.query(queryText);
        return result.rows;
    } catch (error) {
        console.error('Erreur lors de la récupération des invites :', error);
        throw error;
    }
};

const updateInvite = async (item, id) => {
    const client = await connectToDatabase();
    try {
        const { appelation, numero, status, sexe, email, is_boursier, is_entry } = item;
        const queryText = `
            UPDATE invites 
            SET appelation = $1, numero = $2, status = $3, sexe = $4, email = $5, is_boursier = $6, is_entry = $7
            WHERE id = $8
        `;
        const values = [appelation, numero, status, sexe, email, is_boursier, is_entry, id];
        const result = await client.query(queryText, values);
        console.log('Document mis à jour avec succès');
    } catch (error) {
        console.error("Erreur lors de la mise à jour :", error);
        throw error;
    }
};

const deleteInvite = async (id) => {
    const client = await connectToDatabase();
    try {
        const queryText = `DELETE FROM invites WHERE id = $1`;
        const values = [id];
        const result = await client.query(queryText, values);
        console.log('Document supprimé avec succès');
    } catch (error) {
        console.error("Erreur lors de la suppression :", error);
        throw error;
    }
};

module.exports = {
    addInvite,
    getInvites,
    updateInvite,
    deleteInvite
};