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
            taskValue: ''
        }
    },



    methods:{
        removeTask(array, index, elementsRemoved){
            array.splice(index, elementsRemoved)
    
        },
        
        addTask(){

            //this.taskValue.trim()

            if(this.taskValue !== ''){

                this.todoList.push({
                    text: this.taskValue,
                    done: false,
                })
    
                this.taskValue = ''
            }
        },
        
    }
}).mount('#app')