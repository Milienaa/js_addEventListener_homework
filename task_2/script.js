'use strict'

class ColorItem {
    constructor(blockWrapper,buttonWrapper){
        this.elemStr = blockWrapper;
        this.blockWrap = document.querySelector(this.elemStr);
        this.button = document.querySelector(buttonWrapper);
    }

    colorGeneration(elem){
        elem.style.backgroundColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
    }

    addBlock(){
        let newBlock = document.createElement('div');
        newBlock.classList.add('color__item');
        this.colorGeneration(newBlock);
        this.blockWrap.appendChild(newBlock);
    }

    removeBlock(e){
        if (e.target.matches('.color__item')) {
            this.blockWrap.removeChild(e.target);
        }
    }

    init(){
        console.dir(this);
        this.button.addEventListener('click', this.addBlock.bind(this));
        this.blockWrap.addEventListener('click', this.removeBlock.bind(this));
    }
}