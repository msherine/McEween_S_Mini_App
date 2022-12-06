import carThumbImg from './modules/carThumbs.js';
import lightBox from './modules/lightbox.js';


(() => {
    console.log("Welcome to Mini App ");
    
    const { createApp }=Vue;

    createApp({

        created(){
            fetch('./data.json')
            .then(res => res.json())
            .then(data => this.carData = data)
            .catch(error => console.error(error));
        },

    data(){
        return{
            carData: {},
            lightboxData: {},
            showLightBox: false
        }
    },
     
    methods: {
        loadLightBox(item) {
            this.lightboxData=item;
            this.showLightBox=true;
        }
    },

    components: {

        carthumb: carThumbImg,
        carlb: lightBox
    }


    }).mount('#app')

    function showMenu() {
        document.querySelector('.navigation').classList.toggle('active');
        document.querySelector('.menu').classList.toggle('hide');
        document.querySelector('.close').classList.toggle('show');
    }

})();