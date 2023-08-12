import React, { useState } from 'react';
import './App.css';
import { log } from 'console';

function App() {

  type Todo = {
    inputValue: string;
    id: number;
    checked: boolean;
  }

  const [inputValue, setInputValue] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target.value);
    setInputValue(e.target.value);
  }

  const [todos, setTodos] = useState<Todo[]>([]);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // 新しいTodoのオブジェクト
    const createTodo: Todo = {
      inputValue: inputValue,
      id: todos.length,
      checked: false,
    };

    setTodos([createTodo, ...todos]);
    //入力欄に作成した文字を残したくないため空に
    setInputValue("");
  }

  const handleEdit = (id: number, inputValue: string) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.inputValue = inputValue;
      }
      return todo;
    });
    setTodos(newTodos);
  }

  const handleChecked = (id: number, checked: boolean) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.checked = !checked;
      }
      return todo;
    });
    setTodos(newTodos);
  }

  const handleDelete = (id: number) => {

    const unko = todos.filter((todo) => todo.id !== id);
    setTodos(unko);
  }

  return (
    <div className="App">
      <div>
        <h2>Todoリスト with Typescript</h2>
        <form onSubmit={(e) => { handleSubmit(e) }}>
          <input
            type="text"
            onChange={(e) => { handleChange(e) }}
            className='inputText'
            value={inputValue}
          />
          <button type="submit" className='submitButton'>作成</button>
        </form>
        <ul className='todoList'>
          {todos.map((todo) => (
            <li key={todo.id}>
              <input
                type="text"
                value={todo.inputValue}
                onChange={(e) => { handleEdit(todo.id, e.target.value) }}
                className='inputText'
                disabled={todo.checked}
              />
              <input
                type="checkbox"
                onChange={() => { handleChecked(todo.id, todo.checked) }}
              />
              <button onClick={() => handleDelete(todo.id)}>消</button>
            </li>
          ))}
        </ul>
      </div>
    </div >
  );
}

export default App;
