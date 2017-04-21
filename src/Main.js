import React from 'react';
import AppBar from 'material-ui/AppBar';
import {Card, CardActions, CardMedia, CardHeader, CardText} from 'material-ui/Card';
import muiThemeable from 'material-ui/styles/muiThemeable';
import IconButton from 'material-ui/IconButton';
import SocialCake from 'material-ui/svg-icons/social/cake';
import Left from './Left';
import FoodChip from './FoodChip';
import FoodCard from './FoodCard';
import Tabbed from './Tabbed';

const testObj = {
  name: 'Apple',
  calories: '100kcal',
  fat: '100g',
  carb: '200g',
  protein: '300g',
  portionSize: '400g',
  grams: '50g',
  image: '../public/images/apple.jpg',
  category: 'Fruit'

}

const Main = (props) => (
  <div>
    <AppBar
      title="Plum Cake"
      iconElementLeft={<IconButton><SocialCake /></IconButton>}
    />
    <img src= '../images/banner.png' style={{ width:'20%', height:'100%', float:'left' }}/>
      <div>
        <Tabbed style={{ float:'right' }}/>
      </div>
  </div>
);

export default muiThemeable()(Main);
