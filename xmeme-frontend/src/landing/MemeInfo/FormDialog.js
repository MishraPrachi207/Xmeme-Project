import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Grid, Paper, Typography} from '@material-ui/core' 
import PostAddIcon from '@material-ui/icons/PostAdd';
import PostForm from './PostForm'

 /*
function FormDialog() { 
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  }


} */


const FormDialog =(props) =>  {
  const paperStyle={margin:"20px auto"}
  return (
  <Dialog open="true" elevation={20} style={paperStyle} align="center" >
      <DialogTitle color="primary">
        <span style={{ color: 'magenta' }}>Find out by posting a dank meme!</span>
      </DialogTitle>
      <PostForm />
    </Dialog>
  )

}
  
export default FormDialog;