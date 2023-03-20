import { Container, List } from '@mui/material';
import { useState } from 'react';
import Form from '../components/Form';
import TodoItem from "../components/TodoItem";

export default function Home(){
    const[todos,SetTodos]=useState([])

    const addTodo= (todo) =>{
      SetTodos([...todos,todo]); 
    }

    const deleteTodo=(id)=>{
        var filtered=todos.filter((todo)=>todo.id !== id)/*Se o id não for diferente do passado no parâmetro ele não passará na filtragem e será excluído */
        SetTodos(filtered)
    }

    const editTodo=(id, editedText)=>{
        var todosArray=[...todos]
        
        for(var i in todosArray){
            if (todosArray[i].id == id) {
                todosArray[i].text =editedText
            }
        }
    }
  
    return(
    <Container maxWidth='xs' style={{marginTop:"1em"}}>
        <Form addTodo={addTodo}/>
        <List sx={{marginTop:'1em' }}>
        {todos.map((todo)=>
        <div style={{marginTop:'1em'}}>
            <TodoItem editTodo={editTodo} todo={todo} deleteTodo={deleteTodo}/>
        </div>
        )}
        
        </List>
    </Container>
    )
}