// Goal: Create method to get incomplete tasks
//
// 1. Define getTasksToDo method
// 2. Use filter to to return just the incompleted tasks (arrow function)
// 3. Test your work by running the script


const tasks={
    tasks: [{
        text:'Grocery Shopping',
        completed:true
    }, {
        text:'Clean yard',
        completed: false
    }, {
        text:'Film course',
        completed: true
    }], 
    getTasksToDo() {
        //const tasksToDo=this.tasks.filter((task)=> {
        return this.tasks.filter((task)=> task.completed===false
            //{
              // return task.completed===false;
            //}
        )
        return tasksToDo;
    }
}
console.log(tasks.getTasksToDo());