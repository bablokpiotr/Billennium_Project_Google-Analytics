export const yesButton = document.getElementById('resolve_yes');
export const noButton = document.getElementById('resolve_no');

yesButton.addEventListener('click',closeModal);
noButton.addEventListener('click',supportQuestionModal);

function closeModal() {
    location.href = '../../index.html';
}

function supportQuestionModal() {
    const finalQuestion = document.getElementById('support_contact');
    finalQuestion.style.display = 'flex';
}