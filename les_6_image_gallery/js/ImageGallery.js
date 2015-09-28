var ImageGallery = function(galleryID){

    this.container = document.querySelector(galleryID);

    this.slide = 0;

    this.initElements();
    this.initHandlers();
}

ImageGallery.prototype = {

    initElements: function(){
        this.image = this.container.querySelector('img');
        this.nextButton = this.container.querySelector(".nextButton");
        this.previousButton = this.container.querySelector(".previousButton");
        this.numbering = this.container.querySelector(".numbering");
    },

    initHandlers: function(){
        this.nextButton.addEventListener('click', this.nextSlide.bind(this));
        this.previousButton.addEventListener('click', this.previousSlide.bind(this));
    },

    setData: function(imageURLs){
        this.imageURLs = imageURLs;
        this.updateSlide();
    },

    nextSlide: function(){
        this.slide++;
        if(this.slide >= this.imageURLs.length){
            this.slide = 0;
        }
        this.updateSlide();
    },

    previousSlide: function(){
        this.slide--;
        if(this.slide < 0){
            this.slide = this.imageURLs.length -1;
        }
        this.updateSlide();
    },

    updateSlide: function(){
        this.image.src = this.imageURLs[this.slide];
        this.numbering.innerHTML = (this.slide + 1) + "/" + this.imageURLs.length;
    }

}