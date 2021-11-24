"use strict";
class RotateLogo {
    constructor() {
        this.tigerSpinStart = document.getElementById('tiger-spin');
        this.tigerSticker = document.getElementById('tiger-sticker');
        this.configure();
    }
    configure() {
        this.tigerSpinStart.addEventListener('click', this.rotateLogoHandler.bind(this));
    }
    rotateLogoHandler() {
        const style = window.getComputedStyle(this.tigerSticker);
        const visibility = style.getPropertyValue('visibility');
        if (visibility === 'hidden') {
            this.tigerSticker.style.visibility = 'visible';
            this.tigerSticker.style.transitionDuration = '1s';
            this.tigerSticker.style.transform = 'rotate(360deg)';
        }
        else {
            this.tigerSticker.style.transitionDuration = 'unset';
            this.tigerSticker.style.transform = 'none';
            this.tigerSticker.style.visibility = 'hidden';
        }
    }
}
const rotateLogo = new RotateLogo();
