const menuIcon = document.querySelector('.ham-menu');
const addC = document.querySelector('.nav-bar');
menuIcon.addEventListener('click',()=>{
	addC.classList.toggle('change');
})