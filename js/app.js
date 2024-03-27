console.log('JS Test')

const { createApp } = Vue;


createApp({
    data(){
        return{
            title: '(ง•̀_•́)ง',
            todoList:[
                {
                    text: 'Svegliarsi',
                    done: true,
                },
                {
                    text: 'Inspirare',
                    done: false,
                },
                {
                    text: 'Fare una giravolta',
                    done: true,
                },
                {
                    text: 'Espirare',
                    done: false,
                },
                {
                    text: 'Andare a dormire',
                    done: false,
                },
            ],
            classLineThrough: 'decoration-line-through',
        }
    },



    methods:{
        todoCheck(element){
            
            for(let i = 0; i < this.todoList.length; i++){
                
            }

            if(element.done === false){
                element.done === true
            } else if(element.done === true){
                element.done === false
            }
            console.log('Aaa')
        }

    }
}).mount('#app')