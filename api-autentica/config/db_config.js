const mongoose = require('mongoose')

const urlString = 'mongodb://alessandro:hitman789@ds229373.mlab.com:29373/db_produtos'

mongoose.connect(urlString)
    .then(() => {
    console.log("Connectado ao banco!");
    }).catch((err) => {
        console.log("Erro ao conectar com o banco ERROR! ", err);
    });
