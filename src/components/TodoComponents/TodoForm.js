import React from 'react';

const TodoForm = props => {
    return (
    <form onSubmit={props.addtodo} autocomplete= 'on'>
      <input 
      name="tasktodo"
      type= "text" 
      value= {props.tasktodo} 
      onChange= {props.handleChanges}
      tasktodo="tasktodo"
      placeholder= "Task"
      />

        <button type="submit">Add To Do</button>
        <button type="clear " onClick={this.cleartodo}>Clear List</button>
      
    </form>
      
    );
};

export default TodoForm;