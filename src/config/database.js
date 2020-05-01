const mongoose = require('mongoose')
const chalk = require('chalk')
const { db: db_url } = require('../../config');
// console.log(db)

const connected = chalk.bold.cyan;
const error = chalk.bold.yellow;
const disconnected = chalk.bold.red;
const termination = chalk.bold.magenta;

module.exports = () => {
    
    mongoose.connect(db_url,{ useNewUrlParser: true , useUnifiedTopology: true});

    mongoose.connection.on('connected', () => {
        console.log(connected(`Mongoose connected to mongodb url ${db_url}`))
    });

    mongoose.connection.on('error', function(err){
        console.log(error("Mongoose default connection has occured "+err+" error"));
    });

    mongoose.connection.on('disconnected', function(){
        console.log(disconnected("Mongoose default connection is disconnected"));
    });

    process.on('SIGINT', function(){
        mongoose.connection.close(function(){
            console.log(termination("Mongoose default connection is disconnected due to application termination"));
            process.exit(0)
        });
    });
}