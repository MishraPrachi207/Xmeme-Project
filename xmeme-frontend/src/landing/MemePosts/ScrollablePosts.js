import React, {Component} from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import axios from 'axios';

class ScrollablePosts extends Component{
 
    state={
        memes:[]

    }


componentDidMount(){
    /*fetch('http://localhost:9191/memes')
    .then(response => response.data.json())
    .then(json => {
        this.setState({
            isLoaded: true,
            dataList: json,
        })
    })*/
    axios.get('http://localhost:8081/memes')
    .then(res => {
      const memes =res.data;
      this.setState({memes});
      console.log(res.data)
    })
}
 
  render(){
    console.log(this.state.memes)
  return(
    <div>
      <GridList class="tile" cellHeight={200} cols={1} style={{width: 800, height: 600}}>
        {this.state.memes.map((data) => (
          <GridListTile  key ={data.id}>
            <img src={data.url} alt="meme"></img>
            <GridListTileBar
              title={data.owner_name}
              subtitle={<span>{data.caption}</span>}
              actionIcon={<IconButton>
                    <StarBorderIcon style={{color:"white"}} />
                </IconButton>}
            />
          </GridListTile>
        ))}

      </GridList>
    </div>
  )
}
}

export default ScrollablePosts;
