const express = require('express');
const app = express();
const mongoose = require('./db/mongoose');
const userRoutes = require('./routes/user-routes');
const bodyParser = require('body-parser');
const private = require('./routes/private');

app.use(bodyParser.json());

 const bcrypt = require('bcrypt');

 bcrypt.hash("myPlaintextPassword", 12).then(function(hash) {
	console.log("Hashed",hash)
	bcrypt.compare("myPlaintextPassword", hash).then(function(res) {
		// res == true
		console.log("data",res)
	});	
});


// let password = 'myPassword';

// let salt = bcrypt.genSaltSync(12);

// let hashedPassword = bcrypt.hashSync(password, salt);

// console.log('My hashed password is equal to - ', hashedPassword);

// let compare = bcrypt.compareSync(password, hashedPassword);

// console.log('comparing passwords ', compare);

app.use('/user', userRoutes);
app.use('/private', private);

const PORT = 4000;

app.listen(PORT, () => {
	console.log(`server started on port ${PORT}`);
});