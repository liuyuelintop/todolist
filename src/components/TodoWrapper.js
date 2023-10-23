import { useState, useEffect } from "react";
import TodoForm from "./TodoForm";
import { Todo } from "./ToDo";
import { v4 as uuidv4 } from "uuid";
import { EditTodoForm } from "./EditToDoForm";

const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

  // 使用 useEffect 获取远程数据
  useEffect(() => {
    fetch("http://localhost:8000/todos") // JSON Server 的端点 URL
      .then((response) => response.json())
      .then((data) => {
        setTodos(data);
      });
  }, []);

  const addTodo = (todo) => {
    // 发送 POST 请求将新任务添加到 JSON Server
    fetch("http://localhost:8000/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: uuidv4(),
        task: todo,
        completed: false,
        isEditing: false,
      }),
    })
      .then((response) => response.json())
      .then((newTodo) => {
        setTodos([...todos, newTodo]);
      });
  };

  const toggleComplete = (id) => {
    // 发送 PATCH 请求来切换任务的完成状态
    fetch(`http://localhost:8000/todos/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        completed: !todos.find((todo) => todo.id === id).completed,
      }),
    })
      .then((response) => response.json())
      .then((updatedTodo) => {
        setTodos(
          todos.map((todo) =>
            todo.id === id ? updatedTodo : todo
          )
        );
      });
  };

  const deleteTodo = (id) => {
    // 发送 DELETE 请求来删除任务
    fetch(`http://localhost:8000/todos/${id}`, {
      method: "DELETE",
    }).then(() => {
      setTodos(todos.filter((todo) => todo.id !== id));
    });
  };

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const editTask = (task, id) => {
    // 发送 PUT 请求来编辑任务
    fetch(`http://localhost:8000/todos/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        task,
        isEditing: false,
      }),
    })
      .then((response) => response.json())
      .then((updatedTodo) => {
        setTodos(
          todos.map((todo) =>
            todo.id === id ? updatedTodo : todo
          )
        );
      });
  };

  return (
    <div className="TodoWrapper">
      <h1>Get Things Done!</h1>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo) =>
        todo.isEditing ? (
          <EditTodoForm todo={todo} editTodo={editTask} />
        ) : (
          <Todo
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        )
      )}
    </div>
  );
};

export default TodoWrapper;
