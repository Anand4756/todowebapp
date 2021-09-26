import React, {useState} from 'react'

const Input = (props) => {

    const [todo, settodo] = useState({
        title: "",
        content: ""
    });
   
       function handlechange(event){
           console.log(event.target.name); 
            const {name, value} = event.target;

            settodo(prevtodo => {
                console.log(prevtodo)
                return {
                    
                    ...prevtodo,
               
                    [name]: value
                }
            })
       }

       function submit(event){
            props.onAdd(todo);
            event.preventDefault();

       }
        

    return (
        <div className="inputarea">
            <input type="text" name="title" className="title" value= {todo.title} onChange={handlechange} placeholder="TITLE" />
            <textarea rows="5" cols="20" className="textarea" value={todo.content} name="content" onChange={handlechange} placeholder="BODY"></textarea>
            <button className="okbtn" onClick={submit}>+</button>
        </div>
    )
}

export default Input
