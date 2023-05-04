const axios = require('axios')
const fs = require('fs');
const path = require('path');
const { getBookByIdAppService } = require("../AppService/BookAppService")
//192.168.1.85
const ipServidor = "http://192.168.1.85:3000/api"
exports.getToken = async () => {
	return await axios.post(ipServidor + "/token",
		{
			usuario: "20000453",
			contrasena: "20000453"
		}
	)
		.then(response => {
			return response.data
		}, error => {
			return ''

		});
}
exports.getBook = async (req, res) => {

	let token = await this.getToken();
	console.log(token)
	axios.post(ipServidor + "/buscar-libro",
		{
			filtro: req.body.name

		},
		{
			headers: {

				'Content-Type': 'application/json',
				'Authorization': 'Bearer ' + token
			}
		}
	)
		.then(response => {

			res.json(response.data)
			console.log(response.data)
		}, error => {

			res.status(500).json({ msg: error })
		});
}
exports.deleteBook = async (req, res) => {

	axios.delete('http://192.168.0.109:3000/delete/' + req.params.idBook)
		.then(response => {

			res.json(response.data)
		}, error => {
			res.status(500).json({ msg: error })
		});

}
exports.modifyBook = async (req, res) => {
	// name,description,topic "put"
	axios({
		method: 'post',
		url: 'http://192.168.0.109:3000/update/' + req.params.idBook,
		headers: {},
		data: req.body
	}).then(response => {
		res.json(response.data)
	}, error => {
		res.status(500).json({ msg: error })
	});

}
exports.createBook = async (req, res) => {
	let token = await this.getToken();
	console.log(req.body)
	axios({
		method: 'post',
		url: ipServidor + "/registrar-libro",
		headers: {

			'Content-Type': 'application/json',
			'Authorization': 'Bearer ' + token
		},
		data: {
			libro_id: req.body.libro_id,
			libro_nombre: req.body.libro_nombre,
			tema: req.body.tema

		}
	}).then(response => {
		res.json(response.data)
	}, error => {
		res.status(500).json({ msg: error })
	});

}


exports.recoverBook = async (req, res) => {

	let token = await this.getToken();
	axios.post(ipServidor + "/recuperar-libro",
		{
			universidad_id: req.body.universidad_id,
			universidad_libro_id: req.body.universidad_libro_id

		},
		{
			headers: {

				'Content-Type': 'application/json',
				'Authorization': 'Bearer ' + token
			}
		}
	)
		.then(response => {

			res.json(response.data.libro_base64)
		}, error => {

			res.status(500).json({ msg: error })
		});
}
exports.recoverUniversalBook = async (req, res) => {
	let token = await this.getToken();


	res.setHeader('Authorization', 'Bearer ' + token);


	if (!req.body.universidad_libro_id) {
		return res.status(402).json({ error: 'No se proporcionó el identificador del libro' });
	}
	let result = await getBookByIdAppService(req.body.universidad_libro_id)

	return res.status(200).json(result[0].base64);


}
