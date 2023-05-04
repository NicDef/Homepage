'strict';

const toggleNav = () => {
	document.body.dataset.nav = document.body.dataset.nav === 'true' ? 'false' : 'true';
};

function isTouchDevice() {
	return 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
}

if (!isTouchDevice()) {
	document.addEventListener('mousemove', parallax);
}

// Parallax
function parallax(event) {
	if (document.body.dataset.nav == 'true') return;
	this.querySelectorAll('.heading').forEach((shift) => {
		const position = shift.getAttribute('value');
		const x = (window.innerWidth - event.pageX * position) / 300;
		const y = (window.innerHeight - event.pageY * position) / 300;

		shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
	});
}

// PROJECTS PARALLAX
// document.getElementById('projects').onmousemove = (e) => {
// 	for (const card of document.getElementsByClassName('project')) {
// 		const rect = card.getBoundingClientRect(),
// 			x = e.clientX - rect.left,
// 			y = e.clientY - rect.top;

// 		card.style.setProperty('--mouse-x', `${x}px`);
// 		card.style.setProperty('--mouse-y', `${y}px`);
// 	}
// };

// Cursor

// class ArrowPointer {
// 	constructor() {
// 		this.root = document.body;
// 		this.cursor = document.querySelector('.curzr');

// 		(this.position = {
// 			distanceX: 0,
// 			distanceY: 0,
// 			distance: 0,
// 			pointerX: 0,
// 			pointerY: 0,
// 		}),
// 			(this.previousPointerX = 0);
// 		this.previousPointerY = 0;
// 		this.angle = 0;
// 		this.previousAngle = 0;
// 		this.angleDisplace = 0;
// 		this.degrees = 57.296;
// 		this.cursorSize = 20;

// 		this.cursorStyle = {
// 			boxSizing: 'border-box',
// 			position: 'fixed',
// 			top: '0px',
// 			left: `${-this.cursorSize / 2}px`,
// 			zIndex: '2147483647',
// 			width: `${this.cursorSize}px`,
// 			height: `${this.cursorSize}px`,
// 			transition: '250ms, transform 100ms',
// 			userSelect: 'none',
// 			pointerEvents: 'none',
// 		};

// 		this.init(this.cursor, this.cursorStyle);
// 	}

// 	init(el, style) {
// 		Object.assign(el.style, style);
// 		this.cursor.removeAttribute('hidden');
// 	}

// 	move(event) {
// 		this.previousPointerX = this.position.pointerX;
// 		this.previousPointerY = this.position.pointerY;
// 		this.position.pointerX = event.pageX + this.root.getBoundingClientRect().x;
// 		this.position.pointerY = event.pageY + this.root.getBoundingClientRect().y;
// 		this.position.distanceX = this.previousPointerX - this.position.pointerX;
// 		this.position.distanceY = this.previousPointerY - this.position.pointerY;
// 		this.distance = Math.sqrt(this.position.distanceY ** 2 + this.position.distanceX ** 2);

// 		this.cursor.style.transform = `translate3d(${this.position.pointerX}px, ${this.position.pointerY}px, 0)`;

// 		if (this.distance > 1) {
// 			this.rotate(this.position);
// 		} else {
// 			this.cursor.style.transform += ` rotate(${this.angleDisplace}deg)`;
// 		}
// 	}

// 	rotate(position) {
// 		let unsortedAngle = Math.atan(Math.abs(position.distanceY) / Math.abs(position.distanceX)) * this.degrees;
// 		let modAngle;
// 		const style = this.cursor.style;
// 		this.previousAngle = this.angle;

// 		if (position.distanceX <= 0 && position.distanceY >= 0) {
// 			this.angle = 90 - unsortedAngle + 0;
// 		} else if (position.distanceX < 0 && position.distanceY < 0) {
// 			this.angle = unsortedAngle + 90;
// 		} else if (position.distanceX >= 0 && position.distanceY <= 0) {
// 			this.angle = 90 - unsortedAngle + 180;
// 		} else if (position.distanceX > 0 && position.distanceY > 0) {
// 			this.angle = unsortedAngle + 270;
// 		}

// 		if (isNaN(this.angle)) {
// 			this.angle = this.previousAngle;
// 		} else {
// 			if (this.angle - this.previousAngle <= -270) {
// 				this.angleDisplace += 360 + this.angle - this.previousAngle;
// 			} else if (this.angle - this.previousAngle >= 270) {
// 				this.angleDisplace += this.angle - this.previousAngle - 360;
// 			} else {
// 				this.angleDisplace += this.angle - this.previousAngle;
// 			}
// 		}
// 		style.transform += ` rotate(${this.angleDisplace}deg)`;

// 		setTimeout(() => {
// 			modAngle = this.angleDisplace >= 0 ? this.angleDisplace % 360 : 360 + (this.angleDisplace % 360);
// 			if (modAngle >= 45 && modAngle < 135) {
// 				style.left = `${-this.cursorSize}px`;
// 				style.top = `${-this.cursorSize / 2}px`;
// 			} else if (modAngle >= 135 && modAngle < 225) {
// 				style.left = `${-this.cursorSize / 2}px`;
// 				style.top = `${-this.cursorSize}px`;
// 			} else if (modAngle >= 225 && modAngle < 315) {
// 				style.left = '0px';
// 				style.top = `${-this.cursorSize / 2}px`;
// 			} else {
// 				style.left = `${-this.cursorSize / 2}px`;
// 				style.top = '0px';
// 			}
// 		}, 0);
// 	}

// 	remove() {
// 		this.cursor.remove();
// 	}
// }

// (() => {
// 	const cursor = new ArrowPointer();
// 	if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
// 		document.onmousemove = function (event) {
// 			cursor.move(event);
// 		};
// 	} else {
// 		cursor.remove();
// 	}
// })();
