class Slider {
    constructor() {
        this.profils = document.querySelectorAll('.profil');
        this.sliderProfil = document.querySelector('.slider-profils');
        this.sliderFeedbacks = document.querySelector('.slider-feedbacks');
        this.movingArrowLeft = document.querySelector('.moving-left');
        this.movingArrowRight = document.querySelector('.moving-right');
        this.widthSliderProfil = this.sliderProfil.offsetWidth;
        this.widthSliderFeedbacks = this.sliderFeedbacks.offsetWidth;
        this.offsetWidthProfil = this.widthSliderProfil;
        this.offsetWidthFeedbacks = this.widthSliderFeedbacks;
        this.click = 0;
        this.shift = true;
        this.cloneFirstProfil = this.sliderProfil.firstElementChild.cloneNode(true);
        this.cloneLastProfil = this.sliderProfil.lastElementChild.cloneNode(true);
        this.cloneFirstFeedbacks = this.sliderFeedbacks.firstElementChild.cloneNode(true);
        this.cloneLastFeedbacks = this.sliderFeedbacks.lastElementChild.cloneNode(true);
    }

    clone () {
        this.sliderFeedbacks.append(this.cloneFirstFeedbacks);
        this.sliderFeedbacks.prepend(this.cloneLastFeedbacks);
        this.sliderProfil.append(this.cloneFirstProfil);
        this.sliderProfil.prepend(this.cloneLastProfil);
      }

    moving(count) {
        this.sliderProfil.classList.add('smoothness');
        this.sliderFeedbacks.classList.add('smoothness');
        if (this.shift) {
            if (count === -1) {
                const offsetLeftProfil = this.sliderProfil.offsetLeft;
                const offsetLeftFeedbacks = this.sliderFeedbacks.offsetLeft;
                this.sliderProfil.style.left = offsetLeftProfil + this.widthSliderProfil + 'px';
                this.sliderFeedbacks.style.left = offsetLeftFeedbacks + this.widthSliderFeedbacks + 'px';
                this.click -= 1;
            }
            if (count === 1) {
                const offsetLeftProfil = this.sliderProfil.offsetLeft;
                const offsetLeftFeedbacks = this.sliderFeedbacks.offsetLeft;
                this.sliderProfil.style.left = offsetLeftProfil - this.widthSliderProfil + 'px';
                this.sliderFeedbacks.style.left = offsetLeftFeedbacks - this.widthSliderFeedbacks + 'px';
                this.click += 1;
            }
        }
        this.shift = false;
    }

    check() {
        this.sliderProfil.classList.remove('smoothness');
        this.sliderFeedbacks.classList.remove('smoothness');
        if (this.click === -1) {
            this.sliderProfil.style.left = -(this.widthSliderProfil * this.profils.length - 1) + 'px';
            this.sliderFeedbacks.style.left = -(this.widthSliderFeedbacks * this.profils.length - 1) + 'px';
            this.click = this.profils.length -1;
        }
        if (this.click === this.profils.length) {
            this.sliderProfil.style.left = -this.widthSliderProfil + 'px';
            this.sliderFeedbacks.style.left = -this.widthSliderFeedbacks + 'px';
            this.click = 0;
        }
        this.shift = true;
    }

    events() {
        this.movingArrowLeft.addEventListener('click', function () {
            this.moving(-1)
        }.bind(this));
        this.movingArrowRight.addEventListener('click', function () {
            this.moving(1)
        }.bind(this));
        this.sliderProfil.addEventListener('transitionend', this.check.bind(this));
        this.sliderFeedbacks.addEventListener('transitionend', this.check.bind(this));
    }
}
const sliders = new Slider();
sliders.events();
sliders.clone();
