const mongoose = require('mongoose');

mongoose.connect(' mongodb://localhost/bit-cenisoft-bookstore', {
    useNewUrlParser:true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

const db = mongoose.connection;

db.once('open', () => {
    console.log('Database is connected');
})

db.on('error', console.error.bind(console, 'connection error'));