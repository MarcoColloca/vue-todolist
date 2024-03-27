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
            CurrentObjectIndex: 0,
            ClassLineThrough: 'decoration-line-through',
        }
    },



    methods:{
        todoCheck(){
            

            for(let i = object; i < this.todoList.length; i++){
                if(this.todoList[i].done === true){
                    
                }

            }            
        }

    }
}).mount('#app')