const {ipcRenderer} = require('electron')

const submitButton = document.querySelector('#submitButton')
submitButton.addEventListener('click', submitForm)

function submitForm() {
  const email = document.querySelector('#inputEmail').value
  const password = document.querySelector('#inputPassword').value
  ipcRenderer.send('loginFormSubmit', email, password)
}
