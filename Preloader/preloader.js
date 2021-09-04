window.addEventListener('load', function () {
    document.querySelector('.hidden').style.overflow = 'scroll';
    document.querySelector('.all').style.opacity = '1';
    document.querySelector('.preloader').style.opacity = '0';
    this.setTimeout(() => {
        document.querySelector('.preloader').style.display = 'none'},1000);
});