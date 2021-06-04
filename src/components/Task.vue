<template>
  <div @dblclick="toggleComplete(task.taskId)" :class="[task.completed&&'completed','taskDiv']">

    <div :class="['tab', priorityClass]"><p>{{priorityClass}}</p></div>

    <div class="inner">

      <h5>{{task.text}}</h5>

      <div class="deleteDiv">
        <h1 @click="confState=true" v-if="!confState" >X</h1>
        <div class="deleteConf" v-else >
          <p>Delete task?</p>
          <div class="buttons">
            <p @click="deleteTask(task.taskId)">confirm</p>
            <p @click="confState=false" >cancel</p>
          </div>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: "Task",
  props:{
    task: Object
  },
  data(){
    return{
      confState:false
    }
  },
  methods:{
    toggleComplete(id){
      this.$emit('toggle-complete', id)
    },
    deleteTask(id){
      this.confState=false
      this.$emit('delete-task', id)
    }
  },
  computed: {
    priorityClass() {
      switch (this.task.priority){
        case 1:
          return 'urgent'
        case 2:
          return 'high'
        case 3:
          return 'medium'
        default:
          return 'low'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .taskDiv{
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing:border-box;
    cursor: pointer;
    position: relative;
    margin: 3px 0;

    &:hover{
      .tab{
        width: 20px;

        p{
          opacity: 1;
        }
      }

      .inner{
        h1{
          opacity: 1;
        }
      }
    }

    .inner{
      height: 100%;
      width:calc(100% - 10px);
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding:0 10px;
      border:1px solid #cacaca;
      border-left-width: 0px;

      h1{
        font-family: Arial, Helvetica, sans-serif;
        font-size: 18px;
        font-weight: 900;
        opacity: 0;
        transition: .3s ease all;

        &:hover{color: #d00000}

        @media (max-width:600px){
          opacity: 1;
        }
      }

      .deleteConf{
        display: flex;
        flex-direction: column;
        align-items: center;

        p{
          font-size: 11px;
          margin: 1px 0;
          line-height: 14px;
          font-weight: 500;
          transition: .2s ease all;
        }

        >p{
            color: #d00000;
            }
        .buttons{
          width:75px;
          display: flex;
          justify-content: space-between;

          P:hover{
            text-decoration: underline;
          }

          // p:first-child:hover{
          //   color: #d00000;
          //   text-decoration: underline;
          // }

          // p:last-child:hover{
          //   color: $vueGreen;
          //   text-decoration: underline;
          // }
        }
      }
    }

    .tab{
      border:1px solid #cacaca;
      border-right-width: 0px;
      height: 100%;
      width: 10px;
      transition: .3s ease-in-out all;
      display: flex;
      align-items: center;
      justify-content: center;

      &.urgent{
        background: $urgent;
      }
      &.high{
        background: $high;
      }
      &.medium{
        background: $mid;
      }
      &.low{
        background: $low;
      }

      p{
        // transform: rotate(90deg);
        writing-mode: vertical-rl;
        text-orientation: mixed;
        color: white;
        font-weight: 700;
        margin: 0;
        opacity: 0;
        transition: .3s ease-in-out all;
        font-size: 11px;
      }
    }

    &.completed{

      .tab{
        background: #cacaca;
      }
      .inner{
        h5{
          color: #cacaca;
          text-decoration: line-through;
        }
      }

    }
  }
</style>
