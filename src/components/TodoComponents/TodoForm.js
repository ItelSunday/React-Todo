import React from 'react';

const TodoForm = props => {
    return (
    <form onSubmit={props.addtodo}>
      <input 
      type= "text" 
      value= {props.tasktodo} 
      onChange= {props.handleChanges}
      tasktodo="tasktodo"
      placeholder= "Task"
      />

        <button type="submit">Add To Do</button>
        <button onClick={this.cleartodo}>Clear List</button>
      
    </form>
      
    );
};

export default TodoForm;