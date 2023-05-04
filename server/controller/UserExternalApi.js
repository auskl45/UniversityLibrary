const axios = require('axios')

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

exports.getUser = async (req, res) => {
	let token = await this.getToken();

	axios.get(ipServidor + "/perfil",
		{
			headers: {
				'Content-Type': 'application/json',
				'Authorization': 'Bearer ' + token
			}
		}
	)
		.then(response => {
			res.json(response.data)
		}, error => {

			res.status(500).json({ msg: error })
		});
}
exports.updateUser = async (req, res) => {

	let token = await this.getToken();
	console.log(req.body)
	axios({
		method: 'post',
		url: ipServidor + "/actualizar-perfil",
		headers: {

			'Content-Type': 'application/json',
			'Authorization': 'Bearer ' + token
		},
		data: req.body
	}).then(response => {
		res.json(response.data)
		//console.log(response.data)

	}, error => {
		res.status(500).json({ msg: error })
	});
}