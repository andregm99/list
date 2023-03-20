import { TextField,Button,Paper, Alert } from "@mui/material";
import { useState } from "react";


export default function Form({addTodo}){//ao inves de digitar props.todohandler posso colocar {nome da propriedade do componente}

    //addTodo é o meu array
    const[text,SetText]=useState(null);//textfield
    const[id,SetId]=useState(0)//id

    const todoCreate=(text)=>{//função do button
        if (text=='') {
            alert('Digite uma tarefa')
        }
        else{
            const todoObj = {text:text,id:id}
            SetId(id+1)
            addTodo(todoObj)//adicionado objetos dentro do array
            document.getElementById('outlined-basic').value=null
        }
    }
    
    return(
        <Paper style={{padding:'1em'}}>
            <div style={{display:'flex',justifyContent:'center'}}>
            <TextField id="outlined-basic" 
            label="Tarefa" 
            variant="outlined" 
            onChange={e => SetText(e.target.value)} 
            fullWidth 
            />
            <Button variant="text" onClick={()=>todoCreate(text)}>ADD</Button>
            </div>
        </Paper>
    )
}