var NLTunnel = require('node-local-tunnel')

var options = {
	port : 8801, // Remote port (Defined by Golfcomsci57)
	remoteHost : '80.211.23.78',	// Remote Server (Defined by Golfcomsci57)
	localBase : 'http://localhost:8800', // Local Sourcec (Defined by You)
	auth : {
		username : 'username', //(Defined by Golfcomsci57)
		password: 'password' //(Defined by Golfcomsci57)
	},
	ssl: false 
} 
NLTunnel.client(options)