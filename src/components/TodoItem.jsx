import * as React from 'react';

import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';

import DeleteIcon from '@mui/icons-material/Delete';
import { Paper } from '@mui/material';
import EditTodoDialog from './EditTodoDialog';

export default function TodoItem({todo,deleteTodo,editTodo}) {
  const[openDialog,SetOpenDialog]=React.useState(false)

  const dialogHandler=()=>{
    SetOpenDialog(!openDialog)//!opendialog estou dizendo para colocar o valor contrário de false ou seja true.
    
    /*com esta função eu altero o valor atual do meu estado, para abrir o dialog basta ()=>SetOpenDialog(true), e para fechar o evento onclose chamará o dialogHandler irá altera para false e meu dialog fechará*/
  }
  return (

    <>
    <EditTodoDialog open={openDialog} dialogHandler={dialogHandler} todo={todo} editTodo={editTodo}/>
    <Paper>
    <ListItem
    secondaryAction={
      <IconButton edge="end" aria-label="comments"onClick={()=>deleteTodo(todo.id)}>
        <DeleteIcon />
      </IconButton>
    }
    disablePadding
  >
    <ListItemButton role={undefined}  dense>
      <ListItemIcon>
        <Checkbox
          edge="start"
         
          tabIndex={-1}
          disableRipple
          
        />
      </ListItemIcon>
      <ListItemText primary={todo.text} onClick={()=>SetOpenDialog(true)}/>
    </ListItemButton>
  </ListItem>
  </Paper>
  </>
  );
}