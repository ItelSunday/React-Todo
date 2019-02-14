import React from 'react';

import Todo from './components/TodoComponents/Todo'
import TodoForm from './components/TodoComponents/TodoForm';

const listToDo = [
  {
    task: 'Organize Garage',
    tasktodo: 'Organizing',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    tasktodo: 'Baking',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
constructor() {
  super();
  this.state = {
    listToDo: listToDo,
    tasktodo: ''

  };
} 


addtodo = e => {
  e.preventDefault(); // To avoid the browser from refreshing when the button is clicked
  console.log(e.target);
  // setState with new tasktodo at the end of the array
  // .push() us === :)...  React === :( doesn't know how to render -side effect to avoid it
  //To make it render faster and better, use immutable code:
  const newTodo = {
    tasktodo: this.state.tasktodo
  }
  this.setState({
    listToDo: [...this.state.listToDo, newTodo], //inside set state can input multiple fields
    tasktodo: ''

  });
};

/*Every single keystroke updating in state/data, it will show up on input value*/
handleChanges = (e) => {
  console.log(e.target.value);
  this.setState({
    ["tasktodo"]: e.target.value
    /* tasktodo attribute on all input */
    /* or [name: ] / ["name"] name: - bracket notation to pass to the string / valid to make name valid to statement */
    /* When calling out group name convention on input use [e.target.tasktodo] */
  }); 
};


  render() {
    return (
      <div className="todo-container">
        <h2>Welcome to your ToDo App!</h2>
        <Todo />

        <ul className="task-list">

        {this.state.listToDo.map((listToDoFromMap, index) => 
        {
          console.log(listToDoFromMap);
          return(
            <li key={index} > {listToDoFromMap.task} </li>
        ) } )  } 

        </ul>

       

      <TodoForm 
      addtodo={this.addtodo}
      handleChanges={this.handleChanges}
      tasktodo={this.state.tasktodo}
      />

      </div>


    );
  }
}

export default App;
