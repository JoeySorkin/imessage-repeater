const osascript = require('node-osascript');
const path = require('path');
let form = document.getElementById('form');
let currentnum;
const notification = {
	title: 'BTC Alert',
	body: 'BTC just beat your target price!'
};
form.addEventListener('submit', () => {
	let mes = form.elements.namedItem('Message').value;
	let rec = form.elements.namedItem('Recipient').value;
	let rep = form.elements.namedItem('quantity').value;
	for (let i = 0; i < rep; i++) {
		currentnum = i;

		send(mes, rec);
	}
	notify(mes, rec, rep);
});

// document.getElementById('Run').addEventListener('click', () => {
// 	send('Hello', 'Joey Sorkin');
// });

function send(message, contact) {
	osascript.executeFile(
		path.join(__dirname, 'sendMessage.scpt'),
		{
			targetMessage: message,
			targetContact: contact
		},
		(err, result, raw) => {
			if (err) return console.log(err);
			console.log(result, raw);
		}
	);
}

function notify(mess, reci, repi) {
	if (mess.length === 0) {
		Notification.requestPermission().then(result => {
			var notif = new Notification('Uh Oh!', {
				body: 'It seems like you have not filled in the message field!',
				icon: 'error.png'
			});
		});
	}
	if (reci.length === 0) {
		Notification.requestPermission().then(result => {
			var notif = new Notification('Uh Oh!', {
				body: 'It seems like you have not filled in the recipient field!',
				icon: 'error.png'
			});
		});
	}
	if (!repi) {
		Notification.requestPermission().then(result => {
			var notif = new Notification('Uh Oh!', {
				body: 'It seems like you have not filled in the repititions field!',
				icon: 'error.png'
			});
		});
	}
}
