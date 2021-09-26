import React,{useState} from 'react'
import Card from '../components/Card';
import Input from '../components/Input';

const Todo = () => {
    const [todos, settodos] = useState([])

  function addtodo(newNote) {
    
    settodos(prevtodos => {
      return [...prevtodos, newNote];

    })
  }
    return (
        <div>
            <Input onAdd={addtodo}/>
   {todos.map(todoitems=>{
     return <Card title={todoitems.title} content={todoitems.content} />
   })}
        </div>
    )
}

export default Todo

