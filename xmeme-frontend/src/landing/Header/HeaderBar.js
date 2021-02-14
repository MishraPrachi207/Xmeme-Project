import React from 'react';
import { Grid, Paper, Fab, Typography, Tooltip, Avatar} from '@material-ui/core' 
import AddIcon from '@material-ui/icons/PostAdd';
import FormDialog from '../MemeInfo/FormDialog';
import GitHubIcon from '@material-ui/icons/GitHub';


const handleFabClick = () => {
    return(
    <FormDialog />
    )
}

function HeaderBar(){
    const paperStyle={padding:'10px 20px', margin:"20px auto"}
  
    return (
        <div>
            <Grid>
                <Paper elevation={20} style={paperStyle}>
                    
                        <Grid container justify="space-between">
                    <h5>Xmeme</h5>
                   
                
                        <Typography variant="Heading">
                            <h2>Who is the memeposter among us?</h2>
                        </Typography>
                        <Tooltip title="Post a Meme" aria-label="add">
                            <Fab color="primary" onClick={handleFabClick} >
                                <AddIcon />
                            </Fab>
                        </Tooltip>
                    </Grid>
                   
                    
                </Paper>

            </Grid>

        </div>
    )
}

export default HeaderBar;