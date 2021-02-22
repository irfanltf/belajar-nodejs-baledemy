const express = require('express');
const userrouter = require('./router/user') 
const app = express();

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get('/', function(request, response){
		const kelas = {
		id:1,
		nama: 'Check'
	}
	response.json(kelas);
});

app.get('/about', function(request, response){
	response.redirect('/user')
});



app.use(userrouter)

app.listen(3000, function(){
	console.log('Okey');
})

//GET untuk meminta data


//post untuk push data , menyimpan data ke database


//put memberikan data ke server dan membawa id yang spesifik biasanya untuk  delete

//delete unutk menghapus data berdaasarkan id tertentu



