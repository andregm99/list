import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TextField } from '@mui/material';



export default function EditTodoDialog({open,dialogHandler,todo,editTodo}) {
  const[editedText,SetEditedText]=React.useState(todo.text)

  const textHandler=()=>{
    editTodo(todo.id,editedText)
    dialogHandler()
  }

  return (
      <Dialog
        open={open}
        keepMounted
        onClose={dialogHandler}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Editando Tarefa"}</DialogTitle>
        <DialogContent>
          <TextField fullWidth defaultValue={editedText} onChange={(e) =>SetEditedText(e.target.value)}/>
        </DialogContent>
        <DialogActions>
          <Button onClick={dialogHandler}>Cancelar</Button>
          <Button onClick={textHandler}>Ok</Button>
        </DialogActions>
      </Dialog>
  );
}