'use strict';

class Calculator {
    constructor(wrap, screen, equ) {
        this.calcWrapper = document.querySelector(wrap);
        this.calcScreen = this.calcWrapper.querySelector(screen);
        this.calcEqual = this.calcWrapper.querySelector(equ);
    }

    performCalculation() {
        try {
            const result = eval(this.calcScreen.textContent);
            return result.toFixed(3);
        } catch (error) {
            return 'Error';
        }
    }

    clickKey(e) {
        if (e.target === this.calcScreen || e.target === this.calcEqual) {
            return;
        }
        const value = e.target.textContent;
        this.calcScreen.textContent += value;
    }

    clickEqual() {
        this.calcScreen.textContent = this.performCalculation();
    }

    init() {
        console.dir(this)
        this.calcWrapper.addEventListener('click', this.clickKey.bind(this));
        this.calcEqual.addEventListener('click', this.clickEqual.bind(this));
    }
}