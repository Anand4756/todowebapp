import React,{useState} from 'react'
import Card from '../components/Card';
import Input from '../components/Input';
import Nav from '../components/Nav';

const Todo = () => {
    const [todos, settodos] = useState([])

  function addtodo(newNote) {
    
    settodos(prevtodos => {
      return [...prevtodos, newNote];

    })
  }
    return (
      
        <div>
          <Nav />
            <Input onAdd={addtodo}/>
   {todos.map(todoitems=>{
     return <Card title={todoitems.title} content={todoitems.content} />
   })}
        </div>
    )
}

export default Todo

