const modalLogin = document.getElementById('modal-login');
const modalRegister = document.getElementById('modal-register');

modalLogin.addEventListener('click', displayHandler);
modalRegister.addEventListener('click', displayHandler);

function displayHandler(e) {

    if (e.path[1].id === "modal-login") {
        setDisplay("login-display")
    } else {
        setDisplay("register-display")
    }
}

function setDisplay(id) {
    const modal = document.getElementById(id)
    const style = window.getComputedStyle(modal);
    const display = style.getPropertyValue('display');

    if (display === 'none') {
        modal.style.display = 'flex';
    } else {
        modal.style.display = 'none';
    }
}