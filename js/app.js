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
            classLineThrough: 'decoration-line-through text-crimson',
            taskValue: ''
        }
    },



    methods:{

        checkTask(index){

            this.todoList[index].done = !this.todoList[index].done;
        },

        removeTask(index, elementsRemoved){
            this.todoList.splice(index, elementsRemoved)
    
        },
        
        addTask(){

            const newTask = {
                text: this.taskValue,
                done: false
            }

            this.todoList.push(newTask)
            this.taskValue = ''
        },
        
    }
}).mount('#app')