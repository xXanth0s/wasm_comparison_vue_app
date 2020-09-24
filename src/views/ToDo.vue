<template>
    <div class="container">
        <div>
            this is the todo page
        </div>
        <to-do-list-element v-for="toDoTask in toDoTasks"
                            :key="toDoTasks._id"
                            :to-do-task="toDoTask"
                            class="mt-2"
                            @change="taskChanged"
                            @delete="taskDeleted"></to-do-list-element>
        <div class="mt-2">
            <button v-if="!isAddingTask"
                    class="round-button float-right"
                    title="Task hinzufügen"
                    @click="openAddTask">+
            </button>
            <div v-if="isAddingTask">
                <textarea v-if="isAddingTask" v-model="newTaskText" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                <button class="btn btn-sm btn-primary float-right mt-2" @click="addTask">Task hinzufügen</button>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import ToDoListElement from "../components/to-do/ToDoListElement";


    export default {
        name: 'ToDoView',
        components: {
            ToDoListElement
        },
        data: () => ({
            toDoTasks: [],
            isAddingTask: false,
            newTaskText: ''
        }),
        methods: {
            taskChanged(task) {
                const index = this.findTaskIndex(task);
                this.toDoTasks[index] = task;
                axios.put(`${process.env.VUE_APP_API_URL}/task/${task._id}`, task)
                    .catch(() => console.log('error occured while updating the task', task));
            },
            taskDeleted(taskToDelete) {
                axios.delete(`${process.env.VUE_APP_API_URL}/task/${taskToDelete._id}`)
                    .then(() => {
                        this.toDoTasks = this.toDoTasks.filter(task => task._id !== taskToDelete._id);
                    })
                    .catch(() => console.log('error occured while deleting the task', taskToDelete));

            },
            findTaskIndex(task) {
                return this.toDoTasks.findIndex(_task => _task._id === task._id);
            },
            openAddTask() {
                this.isAddingTask = true;
            },
            addTask() {
                if(this.newTaskText) {
                    const task = {
                        description: this.newTaskText
                    };
                    axios.post(`${process.env.VUE_APP_API_URL}/task`, task)
                        .then(newTask => {
                            this.toDoTasks.push(newTask.data);
                            this.newTaskText = '';
                            this.isAddingTask = false;
                        })
                        .catch(() => console.log('error occured while deleting the task', task));

                }
             }

        },
        mounted() {
            axios.get(`${process.env.VUE_APP_API_URL}/task`)
                .then(response => {
                    this.toDoTasks = response.data;
                });
        }
    }
</script>

<style scoped>
    .container {
        width: 340px;
    }

    .round-button {
        border-radius: 50%;
    }
</style>
