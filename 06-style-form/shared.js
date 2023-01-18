const selectPlanButton = document.querySelectorAll('.plan button');
const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');
const closeModalButton = document.querySelector('.modal__action--negative');
const toggleButton = document.querySelector('.toggle-button');
const mobileNav = document.querySelector('.mobile-nav');

const closeModal = () => {
	if (modal) {
		modal.classList.remove('open');
	}

	backdrop.classList.remove('open');
	mobileNav.classList.remove('open');
};

for (let i = 0; i < selectPlanButton.length; i++) {
	selectPlanButton[i].addEventListener('click', () => {
		modal.classList.add('open');
		backdrop.classList.add('open');
	});
}

if (closeModalButton) {
	closeModalButton.addEventListener('click', closeModal);
}

backdrop.addEventListener('click', closeModal);

toggleButton.addEventListener('click', () => {
	mobileNav.classList.add('open');
	backdrop.classList.add('open');
});
