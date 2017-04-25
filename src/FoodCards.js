import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import PropTypes from 'prop-types';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import muiThemeable from 'material-ui/styles/muiThemeable';
import IconButton from 'material-ui/IconButton';
import SocialCake from 'material-ui/svg-icons/social/cake';
import FlatButton from 'material-ui/FlatButton';
import Left from './Left';
import Checkbox from 'material-ui/Checkbox';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import Visibility from 'material-ui/svg-icons/action/visibility';
import VisibilityOff from 'material-ui/svg-icons/action/visibility-off';
import Toggle from 'material-ui/Toggle';
import FoodCard from './FoodCard';

export default class FoodCards extends Component {

  render() {
    console.log(this.props.foodArray);
      this.props.foodArray.forEach(function(food){
        return(<FoodCard obj={this.props.obj[food.toLowerCase()]} />);
      });
  }


}

FoodCards.propTypes = {
  obj: PropTypes.object.isRequired,
  foodArray: PropTypes.array.isRequired,
};
