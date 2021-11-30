const yesButton = document.getElementById('resolve_yes');
const noButton = document.getElementById('resolve_no');
const closeModals = document.getElementById('close-callModal');
const endQuestion = document.getElementById('end_question');

yesButton.addEventListener('click', onEndComment);
noButton.addEventListener('click', supportQuestionModal);
closeModals.addEventListener('click', closeAllModals);


function supportQuestionModal() {
    const finalQuestion = document.getElementById('support_contact');
    finalQuestion.style.display = 'flex';
}

function closeAllModals() {
    const support = document.getElementById('support_contact');

    support.style.display = 'none';
    endQuestion.style.display = 'none';
    window.location.reload(true);
}

function onEndComment() {
    const furryFace = document.getElementById('furry_face');
    const smileFace = document.getElementById('smile_face');
    furryFace.style.display = 'none';
    smileFace.style.display = 'flex';
    const buttons = document.getElementById('resolve_buttons');
    const h1 = document.getElementById('end_question_h1');
    creatElement('button');

    buttons.style.display = 'none';
    h1.innerHTML = `We're glad we were able to solve your problem!`
}

function creatElement(el) {
    const newEl = document.createElement(el);
    newEl.classList.add('close__modal');
    newEl.innerHTML = 'Close';
    newEl.addEventListener('click', closeAllModals)
    endQuestion.appendChild(newEl);

    newEl.addEventListener('click', closeAllModals)

    return newEl
}