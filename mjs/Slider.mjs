export class Slider {
    constructor(elmMonSlider, config_slider){
        this.elmMonSlider = elmMonSlider;
        this.list_slide = config_slider.list_slide;
        console.log('slider')

    }

    creerSlider() {

        console.log(this.elmMonSlider.tagName)
        console.log(this.list_slide)
        let elmSlider = document.createElement('div')
        elmSlider.classList.add('slider')
        let elmSlides = document.createElement('div')
        
        elmSlides.classList.add('slides')
        let k=1
        for (let unSlide of this.list_slide){
            let elmSlide = document.createElement('div')
            let elmImg = document.createElement('IMG')
            let elTitre = document.createElement("p");
            let elSTitre = document.createElement("p");
            elTitre.innerHTML = unSlide.titre
            elSTitre.innerHTML = unSlide.sousTitre
            elSTitre.setAttribute("class", "sous-titre");
            elmImg.setAttribute("src", unSlide.img)
            elmSlide.id = 'slides-' + k
            k++
            
            elmSlides.appendChild(elmSlide)
            elmSlide.appendChild(elTitre)
            elmSlide.appendChild(elSTitre)
            elmSlide.appendChild(elmImg)
        }
        elmSlider.appendChild(elmSlides)
        this.elmMonSlider.appendChild(elmSlider)

    }


}