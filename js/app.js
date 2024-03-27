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
        removeTodo(array, index, elementsRemoved){
            array.splice(index, elementsRemoved)
    
        }
    
    }
}).mount('#app')