export const modalLogin = document.getElementById('modal-login');
export const modalRegister = document.getElementById('modal-register');

modalLogin.addEventListener('click', displayHandler);
modalRegister.addEventListener('click', displayHandler);

function displayHandler(e) {
    if (e.path[1].id === 'modal-login') {
        setDisplay('login-display');
    } else {
        setDisplay('register-display');
    }
}

function setDisplay(id) {
    const modal = document.getElementById(id)
    const style = window.getComputedStyle(modal);
    const display = style.getPropertyValue('display');

    modalSwitch(id)

    if (display === 'none') {
        modal.style.display = 'flex';
    } else {
        modal.style.display = 'none';
    }
}

function modalSwitch(id) {
    let modalToClose;

    if (id === 'login-display') {
        modalToClose = document.getElementById('register-display');
        modalToClose.style.display = 'none';
    } else if (id === 'register-display') {
        modalToClose = document.getElementById('login-display');
        modalToClose.style.display = 'none';
    }
}

document.addEventListener('mousedown', (e) => {
    if (e.path[0].id !== 'login-modal' &&
        e.path[1].id !== 'login-modal' &&
        e.path[2].id !== 'login-modal' &&
        e.path[0].id !== 'register-modal' &&
        e.path[1].id !== 'register-modal' &&
        e.path[2].id !== 'register-modal'
    ) {
        modalSwitch('login-display');
        modalSwitch('register-display');
    }
})