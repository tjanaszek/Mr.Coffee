window.addEventListener('load', setup);
const get = document.getElementById.bind(document);
const query = document.querySelector.bind(document);

function setup() {
  
  let modalRoot = get('modal-root');
  let button = get('submitButton');
  let form = get('contactForm')
  let modal = query('.modal');
  let closeButton = get('closeButton')

  let name = get('nameInput')
  let surname= get('surnameInput')
  let number= get('phoneInput')
  let email= get('mailInput')
  let message= get('messageInput')
  
  modalRoot.addEventListener('click', rootClick);
  modal.addEventListener('click', modalClick);
  closeButton.addEventListener('click', rootClick)
  form.addEventListener('submit', function (e) {
    e.preventDefault()
    console.log(`${name.value} ${surname.value}`)
    console.log(`phone number: ${number.value}`)
    console.log(`e-mail: ${email.value}`)
    console.log(`${message.value}`)
    modalRoot.classList.add('visible');
  })

  function rootClick() {
    modalRoot.classList.remove('visible');
  }
  
  function modalClick(e) {
    e.preventDefault();
    e.stopPropagation();
    e.stopImmediatePropagation();
    return false;
  }
  
}