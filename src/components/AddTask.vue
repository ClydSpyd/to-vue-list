<template>
  <div  :class="[showForm && 'open', 'addTaskDiv']">
    <Button 
      :hide=showForm
      @click="showForm=true" 
      fontSize="15"
      text="Add Task" 
      color="#3FB883" />

      <div :class="[ showForm && 'show', 'form']" >

        <div :class="[error&&'shakeSm']">
          <input
            :value="newTaskObj.text"
            @keyup.enter="handleSubmit"
            @input="handleInput($event)"
            autofocus
            type="text">
          
          <div @change="handleChange($event)" class="radios">
            <p>priority:</p>
            <label>
              <input :checked="newTaskObj.priority===1" type="radio" name="priority" value=1>
              <div class="priority one">Urgent</div>
            </label>
            <label>
              <input :checked="newTaskObj.priority===2" type="radio" name="priority" value=2>
              <div class="priority two">High</div>
            </label>
            <label>
              <input :checked="newTaskObj.priority===3" type="radio" name="priority" value=3>
              <div class="priority three">Medium</div>
            </label>
            <label>
              <input :checked="newTaskObj.priority===4" type="radio" name="priority" value=4>
              <div class="priority four">Low</div>
            </label>
          </div>
        </div>

        <div class="buttons">

          <Button 
            @click="handleSubmit()" 
            :hide=!showForm
            fontSize="12"
            text="GO" 
            color="#3FB883" />

            <h6 @click="showForm=false" >cancel</h6>
        </div>


      </div>
  </div>
</template>

<script>
  import Button from './Button'
  export default {
    name: "AddTask",
    data(){
      return{
        checked:true,
        showForm: false,
        newTaskObj:{
          text:"",
          priority:0
        },
        error: false
      }
    },
    methods: {
      handleInput(event){
        this.newTaskObj={...this.newTaskObj, text:event.target.value}
      },
      handleChange(event){
        this.newTaskObj={...this.newTaskObj, priority:parseInt(event.target.value)}
      },
      handleSubmit(){
        if(this.newTaskObj.text===""||this.newTaskObj.priority===0){
          this.error=true
          return setTimeout(()=>{this.error=false},1300)
        }
        const emitObj={
          text:this.newTaskObj.text,
          priority:this.newTaskObj.priority,
          taskId: Math.floor(Math.random() * 1000),
          completed: false
        }
        this.$emit("add-task", emitObj);
        this.showForm=!this.showForm,
        this.newTaskObj={
          text:"",
          priority:0,
        }
      }
    },
    components:{
      Button
    }
  }
</script>

<style lang="scss" scoped>

  .addTaskDiv{
    height: 60px;
    margin-bottom: 10px;
    width: 100%;
    transition: .25s ease-out all;
    position: relative;
    display: grid;
    place-items: center;

    &.open{
      height: 130px;
    }
  }

  .form{
    position: absolute;
    top: 5px;
    opacity: 0;
    transition: .3s ease-in-out all;
    pointer-events: none;

    &.show{
      opacity: 1;
      pointer-events: all;
    }

    input[type=text]{
      width:85%;
      padding: 8px 10px;
    }

    .radios{
      display: flex;
      align-items: center;
      justify-content: center;


      input[type=radio]{
        display: none;
      }
      p{
        font-size: 12px;
        margin-right: 5px;
      }

      label>input+div.priority{
        font-weight: 700;
        cursor: pointer;
        margin: 0 1px;
        padding: 0 5px;
        font-size: 14px;

        &.one{
          color: $urgent;
        }
        &.two{
          color: $high;
        }
        &.three{
          color: $mid;
        }
        &.four{
          color: $low;
        }
      }
      input:checked+div.priority{
        margin: 0 ;
        
        &.one{
          border:1px solid $urgent;
          color:white;
          background: $urgent;
        }
        &.two{
          border:1px solid $high;
          color:white;
          background: $high;
        }
        &.three{
          border:1px solid $mid;
          color:white;
          background: $mid;
        }
        &.four{
          border:1px solid $low;
          color:white;
          background: $low;
        }
      }
    }

    .buttons{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    height: 40px;

    h6{
      margin-left: 5px;
      cursor: pointer;
      color: $vueBlue;

      &:hover{
        text-decoration: underline;
      }
    }
    }
  }
 
</style>