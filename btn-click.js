export default class BtnClick {
    constructor() {
        // Формы и кнопки подачи заявки и закрытия форм//
        this.formThank = document.querySelector('.thank-application');
        this.workspaceSubmitApplication = document.querySelector('.submitting-application');
        this.btnLeaveApplication = document.querySelectorAll('.application');
        this.btnSubmitApplication = document.querySelectorAll('.thank');
        this.btnClose = document.querySelectorAll('.container-btn-close');
        // Bady для скрытия скрола во время прелоадера //
        this.bady = document.querySelector('.hidden');
        // Стрелка для перемещения из шапки на следующий раздел//
        this.arrow = document.querySelector('.bottom_arrow');
        // Высота раздела "Шапка"//
        this.headerWidth = document.querySelector('.header').offsetHeight;
    }

    events() {
    //События появления формы подачи заявки для кнопок//
        this.btnLeaveApplication.forEach(item => {
            item.addEventListener('click', () => {
            this.workspaceSubmitApplication.style.transform = 'scale(1)';
            this.workspaceSubmitApplication.style.opacity = '1';
            this.workspaceSubmitApplication.style.zIndex = '100';
            });
        });
    //События появления формы благодарности при отправки заявки для кнопок//
    //События закрытия форм благодарности и подачи заявки//
        this.btnClose.forEach(item => {
            item.addEventListener('click', () => {
            this.workspaceSubmitApplication.style.transform = 'scale(0)';
            this.workspaceSubmitApplication.style.opacity = '';
            this.workspaceSubmitApplication.style.zIndex = '0';
            this.formThank.style.transform = 'scale(0)';
            this.formThank.style.opacity = '';
            this.formThank.style.zIndex = '0';
            });
        });
    //Событие перемещения по стрелке из шапки на следующий раздел//
        this.arrow.addEventListener('click', () => {
            window.scrollTo(0, this.headerWidth);
        });
    }
}