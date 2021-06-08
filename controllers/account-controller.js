const mongoose = require('mongoose');
const GeneralConstants = require('../constants/general-constant');
const ConnectionsConfig = require('../config/database');
const connectionInstance = ConnectionsConfig.mongo.getInstance;
const COLLECTIONS = GeneralConstants.COLLECTIONS;

exports.listAllAccounts = async (req, res) => {
    connectionInstance().db.collection(COLLECTIONS.accounts).find({}).toArray((error, documents) => {
        if(error){
            return res.status(400).json('error');
        }
        res.json(documents);
    });
};

exports.listAllClients = async (req, res) => {
    connectionInstance().db.collection(COLLECTIONS.clients).find({}).toArray((error, documents) => {
        if(error){
            return res.status(400).json('error');
        }
        res.json(documents);
    });
};