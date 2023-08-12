import React, { useState } from 'react';
import './App.css';
import { log } from 'console';

function App() {

  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);

  type Todo = {
    inputValue: string;
    id: number;
    checked: boolean;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);

  }

  return (
    <div className="App">
      <div>
        <h2>Todoリスト with Typescript</h2>
        <form onSubmit={() => { }}>
          <input
            type="test"
            onChange={(e) => { handleChange(e) }}
            className='inputText'
          />
          <button type="submit" className='submitButton'>作成</button>
        </form>
      </div>
    </div >
  );
}

export default App;
