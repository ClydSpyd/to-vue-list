<template>
  <AddTask @add-task="handleAddTask" />
  <Task
    v-for="task in tasks"
    @toggle-complete="toggleComplete"
    @delete-task="deleteTask"
    :task="task"
    :key="task.id"/>
  <p v-if="tasks?.length" >[double-click a task to toggle complete]</p>
  <h5 v-else>No tasks on list</h5>
  
</template>

<script>
import AddTask from '../components/AddTask'
import Task from '../components/Task'
import Demo from '../components/Demo'
export default {
  name: 'AppMain',
  components: {
    AddTask,
    Task,
    Demo
  },
  data(){
    return{
      tasks:[]
    }
  },
  created(){
    const lsTasks = localStorage.getItem('vueTasks')
    this.tasks= lsTasks ? JSON.parse(lsTasks) : []
  },
  methods:{
    handleAddTask(newTaskObj){
      const newTask = {...newTaskObj}
      console.log(this.tasks)
      this.tasks = [...this.tasks, newTask]
      console.log(this.tasks)
      localStorage.setItem('vueTasks', JSON.stringify(this.tasks))

    },
    toggleComplete(id){
      const taskIdx = this.tasks.map(task=>task.taskId).indexOf(id)
      this.tasks[taskIdx].completed=!this.tasks[taskIdx].completed
      localStorage.setItem('vueTasks', JSON.stringify(this.tasks))
    },
    deleteTask(id){
      this.tasks=this.tasks.filter(task=>task.taskId!==id)
      localStorage.setItem('vueTasks', JSON.stringify(this.tasks))
    }

  }
}
</script>

<style lang="scss" scoped>

p{
  font-size: 12px;
  color:$vueBlue;
}
</style>


