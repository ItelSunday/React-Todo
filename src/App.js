import React from 'react';

import Todo from './components/TodoComponents/Todo'
import TodoForm from './components/TodoComponents/TodoForm';

const ListToDo = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
constructor() {
  super();
  this.state = {

  };
} 


  render() {
    return (
      <div className="todo-container">
        <h2>Welcome to your ToDo App!</h2>
        <Todo />
        <TodoForm />
      <form>
      <input type= "text" />
        <button onClick={this.addtodo}>Add To Do</button>
      </form>
      
      
      </div>
    );
  }
}

export default App;
