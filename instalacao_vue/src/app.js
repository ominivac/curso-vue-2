const MyNameApp  = {
    data() {
        return {    
            name: 'Rafael',
            age: 22,
            job: 'Desenvolvedor'
        }
    }
}   

Vue.createApp(MyNameApp).mount('#app')