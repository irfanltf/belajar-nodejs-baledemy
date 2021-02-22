const express = require('express');



const app = express();


app.get('/', function(request, response){
	response.send('HOme');
});

app.get('/about', function(request, response){
	response.send('About')
});

app.get('/user', function(request, response){
	response.send('Get user')
});


app.post('/user', function(request, response){
	response.send('Post User');
})

app.put('/user/:id', function(request, response){
	const id = request.params;
	response.send(id);
})

app.delete('/user/:id', function(request, response){
	response.send(request.params);
})


app.listen(3000, function(){
	console.log('Okey');
})

//GET untuk meminta data


//post untuk push data , menyimpan data ke database


//put memberikan data ke server dan membawa id yang spesifik biasanya untuk  delete

//delete unutk menghapus data berdaasarkan id tertentu



