const selectPlanButton = document.querySelectorAll('.plan button');
const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');
const closeModalButton = document.querySelector('.modal__action--negative');

const closeModal = () => {
	backdrop.style.display = 'none';
	modal.style.display = 'none';
};

for (let i = 0; i < selectPlanButton.length; i++) {
	selectPlanButton[i].addEventListener('click', () => {
		backdrop.style.display = 'block';
		modal.style.display = 'block';
	});
}

closeModalButton.addEventListener('click', closeModal);
backdrop.addEventListener('click', closeModal);
