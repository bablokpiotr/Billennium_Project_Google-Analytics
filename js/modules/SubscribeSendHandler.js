const subscribeBtn = document.getElementById('subscribe__btn');

subscribeBtn.addEventListener('click', sendEmailHandler);

function sendEmailHandler(e) {
    e.path[1].childNodes[5].value = '';
}