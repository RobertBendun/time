function utc() {
	const now = new Date();
	const h = now.getUTCHours()  .toString().padStart(2, '0');
	const m = now.getUTCMinutes().toString().padStart(2, '0');
	const s = now.getUTCSeconds().toString().padStart(2, '0');
	document.getElementById('utc').textContent = `${h}:${m}:${s}`;
	setTimeout(utc, 1000);
}

function local() {
	const now = new Date();
	const h = now.getHours()  .toString().padStart(2, '0');
	const m = now.getMinutes().toString().padStart(2, '0');
	const s = now.getSeconds().toString().padStart(2, '0');
	document.getElementById('local').textContent = `${h}:${m}:${s}`;
	setTimeout(local, 1000);
}

function utc6() {
	const now = new Date();
	const h = now.getUTCHours()  .toString(6).padStart(2, '0');
	const m = now.getUTCMinutes().toString(6).padStart(3, '0');
	const s = now.getUTCSeconds().toString(6).padStart(3, '0');
	document.getElementById('utc6').textContent = `${h}:${m}:${s}`;
	setTimeout(utc6, 1000);
}

function local6() {
	const now = new Date();
	const h = now.getHours()  .toString(6).padStart(2, '0');
	const m = now.getMinutes().toString(6).padStart(3, '0');
	const s = now.getSeconds().toString(6).padStart(3, '0');
	document.getElementById('local6').textContent = `${h}:${m}:${s}`;
	setTimeout(local6, 1000);
}

function beat() {
	let now = new Date();
	now = 3600 * ((now.getUTCHours()+1)%24) + 60 * now.getUTCMinutes() + now.getUTCSeconds();
	now = (Math.round(now / 86.4 * 100) / 100).toFixed(2);
	document.getElementById('beat').textContent = `@${now}`;
	setTimeout(beat, 864);
}

function net() {
	const now = new Date();
	let degrees = now.getUTCHours() * 60 / 4 + Math.floor(now.getUTCMinutes() / 4);
	let minutes = (now.getUTCMinutes() % 4) * 60 / 4 + Math.floor(now.getUTCSeconds() / 4);
	minutes = minutes.toString().padStart(2, '0');
	document.getElementById('net').innerHTML = `${degrees}&deg; ${minutes}&#039; NET`;
	setTimeout(net, 4000);
}

const hexclock_table = [
	(16 ** 2),
	(16 ** 4),
	(16 ** 6),
];

function hexclock() {
	let now = new Date();
	let f = now.getHours();
	f = f * 60 + now.getMinutes();
	f = f * 60 + now.getSeconds();
	f = f * 1000 + now.getMilliseconds();
	f = f / (1000 * 60 * 60 * 24);

	const h = Math.floor(f * 0x10)           .toString(16)                 .toUpperCase();
	const m = Math.floor(f * 0x1000  % 0x100).toString(16).padStart(2, '0').toUpperCase();
	const s = Math.floor(f * 0x10000 % 0x10) .toString(16)                 .toUpperCase();

	document.getElementById('hexclock').textContent = `${h}_${m}_${s}`;

	setTimeout(hexclock, 300);
}

function unix() {
	document.getElementById('unix').textContent = Math.floor(Date.now()/1000);
	setTimeout(unix, 1000);
}


for (const element of document.querySelectorAll('.local-timezone')) {
	element.textContent = Intl.DateTimeFormat().resolvedOptions().timeZone;
}

utc();
local();
utc6();
local6();
beat();
net();
hexclock();
unix();
