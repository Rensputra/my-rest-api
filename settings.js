const fs = require('fs')

global.creator = 'Zeeoneofc'// BOTCUPU
global.MONGO_DB_URI = "" //mongodb+srv://rendisputra567:<Rendi123>@cluster0.m3rxwdp.mongodb.net/?retryWrites=true&w=majority

global.ACTIVATION_TOKEN_SECRET = "-@Pqnap+@(/1jAPPnew/@10" // APA LOH?
global.your_email = "" //rendisputra567@gmail.com
global.email_password = "" //jopw nofq ooox phry

global.limitCount = 10000
global.YUOR_PORT = 8000
global.loghandler = {
	noapikey:{
		status: 403,
        message: 'Input parameter apikey',
        creator: `${creator}`,
        result: "error"
    },
    error: {
        status: 503,
        message: 'Service Unavaible, Sedang dalam perbaikan',
        creator: `${creator}`
    },
    apikey: {
    	status: 403,
    	message: 'Forbiden, Invalid apikey',
    	creator: `${creator}`
    },
    noturl: {
    	status: 403,
    	message: 'Forbiden, Invlid url, masukkan parameter url',
    	creator: `${creator}`,
    }
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
	delete require.cache[file]
	require(file)
})
