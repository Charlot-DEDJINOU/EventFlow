const { connectDB } = require("../database/database");
const { ObjectId } = require('mongodb');

const addInvite = async (item) => {
    try {
        const db = await connectDB()
        const collection = db.collection(process.env.COLLECTION);
        const result = await collection.insertOne(item);
        console.log('Document inséré avec succès:', result.insertedId);
        return result.insertedId;
    } catch (error) {
        console.error("Erreur lors de l'insertion :", error);
        throw error;
    }
};

const getInvites = async () => {
    try {
        const db = await connectDB()
        const collection = db.collection(process.env.COLLECTION);
        const result = await collection.find({}).toArray();
        return result;
    } catch (error) {
        console.error('Erreur lors de la récupération des invites :', error);
        throw error;
    }
};

const updateInvite = async (item, id) => {
    try {
        const db = await connectDB()
        const collection = db.collection(process.env.COLLECTION);
        const result = await collection.updateOne({ _id: new ObjectId(id) }, { $set: item });
        console.log('Document mis à jour avec succès');
    } catch (error) {
        console.error("Erreur lors de la mise à jour :", error);
        throw error;
    }
};

const deleteInvite = async (id) => {
    try {
        const db = await connectDB()
        const collection = db.collection(process.env.COLLECTION);
        const result = await collection.deleteOne({ _id: id });
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