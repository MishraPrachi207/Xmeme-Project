import React from 'react';
import MemeForm from './MemeInfo/MemeForm';
import HeaderBar from './Header/HeaderBar';
import FormDialog from "./MemeInfo/FormDialog"
import PostForm from "./MemeInfo/PostForm"
import ScrollablePosts from "./MemePosts/ScrollablePosts"
import Box from '@material-ui/core/Box'
const handleFabClick = () => {
    console.log("form Dialog here");
}

function Memes(){
    return (
        <div>
        <HeaderBar 
        handleFabClick={handleFabClick}
        />
        <div class="container">
        <div class="left">
       
        </div>
        <div class="right">
        
        </div>
        </div>
        </div>
    )
}

export default Memes;