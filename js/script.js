//? Descrizione: Rifare l'esercizio dello slider come fatto assieme in classe.
//? Bonus: Applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente.



const app = new Vue ({

    el : "#app",

    data : {

        counter : 0,
        immagini : ['img/img1.jpg', 'img/img2.jpg', 'img/img3.jpg', 'img/img4.jpg', 'img/img5.jpg'],
        intervallo : ''
    },

    methods : {
        next(){
            this.counter == this.immagini.length -1 ? this.counter = 0 : this.counter++;
        },
        prev(){
            this.counter == 0 ? this.counter = this.immagini.length -1 : this.counter--;
        },
        imgClick(indice){
            this.counter = indice;
            clearInterval(this.intervallo);
            //* con questo modo riesco a fermare lo scorrimento
        }     
    },

    mounted(){
        this.intervallo = setInterval(this.next, 3000);

        document.addEventListener("keydown", (element) => {
            console.log(element.key);
            if(element.key == 'ArrowRight')
            {
                this.next();
            } else if (element.key == 'ArrowLeft'){
                this.prev();
            }
        });
    }


});


