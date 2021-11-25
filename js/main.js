let currentLvl = 1;
let draggedElem = null;

window.onload = () => {
    const grayImagesContainer = document.querySelectorAll(".tiger-gray-item img")

    for (let i = 0; i < grayImagesContainer.length; i++) {
        grayImagesContainer[i].addEventListener("dragover", dragOver);
        grayImagesContainer[i].addEventListener("dragleave", dragLeave);
        grayImagesContainer[i].addEventListener("dragend", dragEnd);
        grayImagesContainer[i].addEventListener("drop", drop);
    }

    const body = document.querySelector(".tiger-items-container");
    body.innerHTML = "";

    const templateBox = document.getElementById("tiger-item-row");
    const template = templateBox.content;

    const randomNum = random(5);
    randomNum.forEach(elem => {
        const row = template.cloneNode(true);
        const img = row.querySelector(".tiger-item-image");

        img.src = `../media/tiger/${elem}.svg`;
        img.id = elem;

        img.addEventListener("dragstart", dragStart);
        img.addEventListener("dragend", dragEnd);
        body.appendChild(row);
    });
}

function dragStart(event) {
    const element = event.target;
    const id = event.target.id;

    draggedElem = element;
    event.dataTransfer.setData('text/plain', id);
    setTimeout(() => {
        element.classList.add('hide');
    }, 0);
}

function dragEnd(event) {
    const element = event.target;
    if (element.id != currentLvl - 1) {
        element.classList.remove('hide');
    }

    if (currentLvl == 6) {
        const tigerContainer = document.querySelector(".tiger-icon-container");
        tigerContainer.classList.add("tiger-icon-container-visible");
    }
}

function dragEnter(e) {
    e.preventDefault();
    e.target.classList.add('drag-over');
}

function dragOver(e) {
    e.preventDefault();
    e.target.classList.add('drag-over');
}

function dragLeave(e) {
    e.preventDefault();
    e.target.classList.remove('drag-over');
}

function drop(e) {
    e.preventDefault();
    const sourceId = draggedElem.id;
    const targetId = e.target.id;
    const targetImg = document.getElementById(targetId);
    const sourceImg = document.getElementById(sourceId);

    const arrowsContainer = document.getElementById(`${sourceId}-container-arrows`);

    if (sourceId == targetId.split("-")[0] && targetId.split("-")[0] == currentLvl) {
        currentLvl += 1;

        const child = arrowsContainer != null ? arrowsContainer.children : [];

        for (let i = 0; i < child.length; i += 1) {
            child[i].classList.add("arrow-opacity-1")
        }
        targetImg.src = sourceImg.src;
        draggedElem.classList.add("hide")
    }
    e.target.classList.remove('drag-over');
}

function random(num) {
    const arr = [];

    while (arr.length < num) {
        var r = Math.floor(Math.random() * num) + 1;
        if (arr.indexOf(r) === -1) arr.push(r);
    }
    return arr;
}



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
