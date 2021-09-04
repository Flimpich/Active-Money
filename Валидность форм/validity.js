import BtnClick from '../btn-click.js';

export default class Validity extends BtnClick {
    constructor() {
        super();
        this.formSubmitApplication = document.querySelectorAll('.form');
    }

    hint(inputName, inputTlf, forms) {
        if (!(/^[A-Za-zА-Яа-яЁё]{3,}/.test(inputName.value))) {
            inputName.style.cssText = `border: 1px solid rgba(255, 0, 0, 0.658);
            box-shadow:0 0 5px 1px rgba(255, 0, 0, 0.658)`;
        }
        if (!inputTlf.value) {
            inputTlf.style.cssText = `border: 1px solid rgba(255, 0, 0, 0.658);
            box-shadow:0 0 5px 1px rgba(255, 0, 0, 0.658)`;
        }

        inputName.addEventListener('input', (e) => {
            if (/^[A-Za-zА-Яа-яЁё]{3,}/.test(inputName.value)) {
                inputName.style.cssText = ``;
            }
        })
        inputTlf.addEventListener('input', () => {
            if (!inputTlf.value) {
                inputTlf.style.cssText = ``;
            }
        })
    }

    valid() {
        this.formSubmitApplication.forEach((form) => {
            const inputName = form.elements.name;
            const inputTlf = form.elements.tlf;
            const forms = form;
            this.hint.bind(this);
            form.addEventListener('submit', (e) => {
                if (!(/^[A-Za-zА-Яа-яЁё]{3,}/.test(inputName.value) && inputTlf.value)) {
                    e.preventDefault();
                    this.hint(inputName, inputTlf, forms);
                    console.log('error');
                    return;
                }
                e.preventDefault();
                inputName.value = '';
                inputTlf.value = '';
                this.formThank.style.transform = 'scale(1)';
                this.formThank.style.opacity = '1';
                this.formThank.style.zIndex = '100';
                this.workspaceSubmitApplication.style.zIndex = '0';
                inputTlf.style.cssText = ``;
            });
        });
    }

}

const validity = new Validity();
validity.events();
validity.valid();

