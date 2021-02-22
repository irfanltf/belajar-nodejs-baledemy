const express = require('express')
const router = express.Router();


let user = [
	// {id: 1, nama: 'irfan', email:'irfan@polinela.ac.id'},
	// {id: 2, nama: 'Hani', email:'hani@polinela.ac.id'},
];

router.route('/user')
		.get( function(request,response){
			if (user.length > 0) {
			response.json({
				status : true,
				method : request.method,
				data: user,
				url: request.url
			})
			}else{
				response.json({
					status: false,
					message: 'Tidak Terdapat Data'
				})
			}
	})
		.post( function(request, response){
			user.push(request.body)
						response.json({
				status : true,
				method : request.method,
				message : 'Data Berhasil Disimpan',
				data: user,
				url: request.url
			})
	});


// app.get('/user', function(request, response){
// 	response.send('Get user')
// });


// app.post('/user', function(request, response){
// 	response.send('Post User');
// })

router.put('/user/:id', function(request, response){
	const id = request.params.id;
	user.filter(user => {
		if (user.id == id) {
			user.id = id
			user.nama = request.body.nama
			user.email = request.body.email

			return user
		}
	})
	response.send(user);
})

router.delete('/user/:userid', function(request, response){
	let = id = request.params.userid
	users = user.filter(user => user.id != id)
	response.send(users);
})

module.exports = router
