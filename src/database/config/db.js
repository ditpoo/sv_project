import mongoose from 'mongoose';

const uri = process.env.DB_URI || 'mongodb://localhost:27017/project';

mongoose
    .connect(uri, options)
    .then(() => {
        console.log('Mongoose connection done');
    })
    .catch((e) => {
        console.log('Mongoose connection error');
        console.log(e);
    });
