import React, { Fragment } from 'react';

export default function TodoList(props){
return(
<Fragment>
<input
  type="text"
  value= {props.inputText}
  onChange ={props.handleChange}
/>
<button onClick ={ props.addTodo}> Add Item to list </button>
<ul>
  {props.todoList.map((todo,index) => (
    <li className={props.changeClass(todo.completed)} onClick={() => props.toggleTodo(index)} key={index}>
            {todo.value}
            <button onClick={props.removeItem(index)}>Delete</button>
          </li>

  ))}
</ul>



</Fragment>
)




}
