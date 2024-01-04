'use strict'

class ColorItem {
    constructor(blockWrap, paragrafWrap){
        this.blocks = document.querySelector(blockWrap);
        this.paragraf = document.querySelector(paragrafWrap);
    }

    changeColorText(e){
        if(e.target.matches('.block')){
            let colorText = e.target.getAttribute('data-color');
            this.paragraf.style.color = colorText;
        }
    }

    init(){
        console.dir(this);
        this.blocks.addEventListener('click',this.changeColorText.bind(this));
    }
}