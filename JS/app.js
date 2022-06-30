const app = Vue.createApp({
    //template: '<h1>{{message}}</h1>',
    data() {
        return {
            /**/
            message: 'Hello World',
            firstName:'Jane',
            lastName:'Doe',
            email:'JaneDoe@gmail.com',
            gender:'female',
            picture:'https://randomuser.me/api/portraits/women/10.jpg',
        }
    },
})

app.mount('#app')