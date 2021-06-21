window.addEventListener('load', setup);

const get = document.getElementById.bind(document);
const query = document.querySelector.bind(document);

function setup() {
  
  let modalRoot = get('modal-root');
  let button = get('submitButton');
  let modal = query('.modal');
  let closeButton = get('closeButton')
  
  modalRoot.addEventListener('click', rootClick);
  button.addEventListener('click', openModal);
  modal.addEventListener('click', modalClick);
  closeButton.addEventListener('click', rootClick)

  function rootClick() {
    modalRoot.classList.remove('visible');
  }
  
  function openModal() {
    modalRoot.classList.add('visible');
  }
  
  function modalClick(e) {
    e.preventDefault();
    e.stopPropagation();
    e.stopImmediatePropagation();
    return false;
  }
  
}