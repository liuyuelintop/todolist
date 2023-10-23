import React, {useState} from 'react'

export const EditTodoForm = ({editTodo, todo}) => {
    const [value, setValue] = useState(todo.task);

    const handleSubmit = (e) => {
      // prevent default action
        e.preventDefault();
        // edit todo
        editTodo(value, todo.id);
      };
  return (
    <form onSubmit={handleSubmit} className="TodoForm">
    <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="todo-input" placeholder='Update task' />
    <button type="submit" className='todo-btn'>Update task</button>
  </form>
  )
}
