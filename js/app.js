console.log('JS Test')

const { createApp } = Vue;


createApp({
    data(){
        return{
            title: '(ง•̀_•́)ง',
            todoList:[
                {
                    text: 'Svegliarsi',
                    done: false,
                },
                {
                    text: 'Respirare',
                    done: false,
                },
                {
                    text: 'Fare una giravolta',
                    done: false,
                },
                {
                    text: 'Respirare',
                    done: false,
                },
                {
                    text: 'Andare a dormire',
                    done: false,
                },
            ],
        }
    },



    methods:{


    }
}).mount('#app')