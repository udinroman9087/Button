const showButton = document.querySelector('button');
const modal = document.getElementById('modal');

const closeButton = modal.querySelector('button');

const showModal = () => {
   modal.classList.add('active');
}
   
  
const hideModal = () => {
   modal.classList.remove('active');
}
   
 
showButton.addEventListener('click', () => {
   showModal();
});
   
closeButton.addEventListener('click', () => {
   hideModal();
});

if (localStorage.getItem('modalShown')) {
  
   modal.classList.remove('active');
 } else {
   showModal();
   localStorage.setItem('modalShown', true);
 }