import React, {Component} from 'react';
import {TextField, Button, makeStyles} from '@material-ui/core';
import axios from 'axios';
import Formik from 'formik';

class PostForm extends Component{
    constructor(props){
        super(props)
        this.submitHandler=this.submitHandler.bind(this);
        this.state={
            owner_name:'',
            caption:'',
            url:''
        }
    }

        changeHandler = (e) => {
            this.setState({[e.target.name]:e.target.value})
        }

        submitHandler = (e) => {
            e.preventDefault() 
            console.log(this.state)
            axios.post("http://localhost:8081/memes",this.state)
            .then(response =>{
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
        }
        render(){
        const {owner_name,caption,url} = this.state
      //  console.log(this.state); 
        return(
            <div>
                <form  onSubmit={this.submitHandler} margin-left="200px"> 
                <TextField name="owner_name" label="Full Name" variant="outlined" value={this.owner_name} onChange={this.changeHandler}/><br></br><br></br>
                    <TextField name="caption" label="Caption" variant="outlined" value={this.caption} onChange={this.changeHandler}/><br></br><br></br>
                    <TextField name="url" label="Meme Url" variant="outlined" value={this.url} onChange={this.changeHandler}/><br></br><br></br>
                    <Button variant="contained" color="primary" type="submit">
                        Submit  
                    </Button><br></br><br></br>
                </form>
            </div>
        );
    }
}

export default PostForm;

