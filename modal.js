// Get the modal
const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.modal-content')

// Get the button that opens the modal
const openModal = document.querySelector('.open-modal');

// Get the <span> element that closes the modal
const toClose = document.querySelector('.close');

// When the user clicks the button, open the modal 
openModal.onclick = function() {
  modal.style.display = "block";
  modalContent.focus();
}

// When the user clicks on <span> (x), close the modal
toClose.onclick = function() {
  modalContent.blur();
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modalContent.blur();
    modal.style.display = "none";
  }
}

// When the user clicks on any of the two modal buttons, close it
const modalButtons = document.querySelectorAll('.modal-buttons')
for(let i=0; i < modalButtons.length; i+=1) {
  modalButtons[i].onclick = function() {
    modalContent.blur();
    modal.style.display = "none";
  }
}