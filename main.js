// On va mettre le click event sur les icons Select element function

const selectElement = function (element){
	return document.querySelector(element);
};

let menuToggler = selectElement('.menu-toggle');
let body = selectElement('body');

menuToggler.addEventListener('click', function (){
	body.classList.toggle('open');
});

/*Normalement apres sa si tu ferme sa ferme et ouvre ouvre wsh*/



 /*Cette partie se fera apres avoir terminer all*/
window.sr = ScrollReveal();

sr.reveal('.animate-left', {
	origin: 'left',
	duration:1000,
	distance:'25rem',
	delay: 300
}
	);

sr.reveal('.animate-right', {
	origin: 'right',
	duration:1000,
	distance:'25rem',
	delay: 600
}
	);

sr.reveal('.animate-bottom', {
	origin: 'bottom',
	duration:1000,
	distance:'25rem',
	delay: 600
}
	);
sr.reveal('.animate-top', {
	origin: 'top',
	duration:1000,
	distance:'25rem',
	delay: 800
}
	);
