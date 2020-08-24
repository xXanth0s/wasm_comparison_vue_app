<template>
    <div class="row">
        <div class="col tile">
            <div class="flex-container ">
                <div class="pr-1 checkbox">
                    <input type="checkbox" :value="toDoTask.completed" @change="taskChecked" class="">
                </div>
                <div class="description">
                    <div>
                        <span class="pl-1"> {{toDoTask.description}}</span>
                        <span>{{toDoTask}}</span>
                    </div>
                    <div>
                        <svg width="1em" height="11em" viewBox="0 0 16 16" class="bi bi-trash trash-icon" fill="currentColor"
                             xmlns="http://www.w3.org/2000/svg"
                            @click="deleteTask">
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                            <path fill-rule="evenodd"
                                  d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ToDoListElement",
        props: {
            toDoTask: {
                required: true,
                type: Object,
                default: {
                    description: '',
                    completed: false
                }
            }
        },
        methods: {
            taskChecked() {
                this.toDoTask.completed = !this.toDoTask.completed;
                this.$emit('change', this.toDoTask);
            },
            deleteTask() {
                this.$emit('delete', this.toDoTask);
            }
        }
    }
</script>

<style scoped>

    input{
        cursor: pointer;
    }

    .flex-container {
        display: flex;
    }

    .tile {
        border-radius: 12px;
        border: 2px black;
        background-color: antiquewhite;
        border-style: solid;
    }

    .tile:hover {
        box-shadow: 0 0 11px rgba(33, 33, 33, .2);

    }

    .checkbox {
        border: 0px;
        border-right: 1px black;
        border-style: solid;
    }

    .description {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }

    .trash-icon {
        cursor: pointer;
    }
</style>
