import React from 'react';
import AppBar from 'material-ui/AppBar';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import muiThemeable from 'material-ui/styles/muiThemeable';
import IconButton from 'material-ui/IconButton';
import SocialCake from 'material-ui/svg-icons/social/cake';
import Left from './Left';
import FoodChip from './FoodChip';
import FoodCard from './FoodCard';
import Tabbed from './Tabbed';

const Main = (props) => (
  <div>
    <AppBar
      title="Plum Cake"
      iconElementLeft={<IconButton><SocialCake /></IconButton>}
    />
    <img src= '../images/banner.png' style={{ width:'20%', height:'100%', float:'left' }}/>
    <Card id='aaa' style={{display:'inline-block', float:'right', width:'80%', padding:'1rem'}}>
      <Tabbed style={{ float:'right' }}/>



    </Card>
  </div>
);

export default muiThemeable()(Main);
