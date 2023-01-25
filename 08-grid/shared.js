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

	backdrop.style.display = 'none';
	mobileNav.classList.remove('open');

	setTimeout(() => {
		backdrop.style.display = 'none';
		backdrop.classList.remove('open');
	}, 200);
};

for (let i = 0; i < selectPlanButton.length; i++) {
	selectPlanButton[i].addEventListener('click', () => {
		modal.classList.add('open');
		backdrop.style.display = 'block';

		setTimeout(() => {
			backdrop.classList.add('open');
		}, 10);
	});
}

if (closeModalButton) {
	closeModalButton.addEventListener('click', closeModal);
}

backdrop.addEventListener('click', closeModal);

toggleButton.addEventListener('click', () => {
	mobileNav.classList.add('open');

	setTimeout(() => {
		backdrop.classList.add('open');
	}, 10);
});
