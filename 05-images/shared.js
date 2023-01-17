const selectPlanButton = document.querySelectorAll('.plan button');
const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');
const closeModalButton = document.querySelector('.modal__action--negative');
const toggleButton = document.querySelector('.toggle-button');
const mobileNav = document.querySelector('.mobile-nav');

const closeModal = () => {
	backdrop.style.display = 'none';
	modal.style.display = 'none';
	mobileNav.style.display = 'none';
};

for (let i = 0; i < selectPlanButton.length; i++) {
	selectPlanButton[i].addEventListener('click', () => {
		backdrop.style.display = 'block';
		modal.style.display = 'block';
	});
}

closeModalButton.addEventListener('click', closeModal);
backdrop.addEventListener('click', closeModal);

toggleButton.addEventListener('click', () => {
	mobileNav.style.display = 'block';
	backdrop.style.display = 'block';
});
