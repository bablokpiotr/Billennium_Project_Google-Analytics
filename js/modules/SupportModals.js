const yesButton = document.getElementById('resolve_yes');
const noButton = document.getElementById('resolve_no');
const closeModals = document.getElementById('close-callModal');

yesButton.addEventListener('click', onEndComment);
noButton.addEventListener('click', supportQuestionModal);
closeModals.addEventListener('click', closeAllModals);

function supportQuestionModal() {
    manageElDisplay('support_contact', 'flex');
}

function closeAllModals() {
    manageElDisplay('support_contact', 'none');
    manageElDisplay('end_question', 'none');
    window.location.reload(true);
}

function onEndComment() {
    manageElDisplay('furry_face', 'none');
    manageElDisplay('smile_face', 'flex');
    manageElDisplay('resolve_buttons', 'none');
    replaceElText('end_question_h1', `We're glad we were able to solve your problem!`)
    creatElement('button', 'Close', 'close__modal', 'click', closeAllModals, 'end_question');
}

function manageElDisplay(id, disp) {
    const elVis = document.getElementById(id);
    elVis.style.display = disp;
}

function replaceElText(id, newText) {
    const editEl = document.getElementById(id);
    editEl.innerHTML = newText;
}

function creatElement(el, userInnerHTML, userCssClass, event, functionToAdd, appendTo) {
    const newEl = document.createElement(el);
    newEl.classList.add(userCssClass);
    newEl.innerHTML = userInnerHTML;
    newEl.addEventListener(event, functionToAdd)
    document.getElementById(appendTo).appendChild(newEl);
}