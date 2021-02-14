import React from 'react';
import { Grid, Paper, Typography} from '@material-ui/core' 
import PostAddIcon from '@material-ui/icons/PostAdd';
import PostForm from './PostForm'
import Box from '@material-ui/core/Box'

function MemeForm(){
    const paperStyle={padding:'30px 20px', width:250 ,margin:"20px auto"}
    return (
            <Grid align="left">
                <Paper elevation={20} style={paperStyle}>
                    <Grid>
                        <PostForm />
                    </Grid>
                    
                </Paper>

            </Grid>

    )
}

export default MemeForm;