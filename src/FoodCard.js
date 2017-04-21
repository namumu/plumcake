import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import PropTypes from 'prop-types';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import muiThemeable from 'material-ui/styles/muiThemeable';
import IconButton from 'material-ui/IconButton';
import SocialCake from 'material-ui/svg-icons/social/cake';
import FlatButton from 'material-ui/FlatButton';
import Left from './Left';

export default class FoodCard extends Component {


  render() {
    const obj = this.props.obj;
    const name = obj.name;
    const calories = obj.calories;
    const fat = obj.fat;
    const carb = obj.carb;
    const protein = obj.protein;
    const portionSize = obj.portionSize;
    const grams = obj.grams;
    const image = obj.image;
    const category = obj.category;

    return(
      <Card style={{ width:'20%', height:'100%', borderRadius:'1rem', backgroundColor:'lightblue' }}>
        <CardMedia>
          <img src={require('../public/images/apple.jpg')} style={{ borderTopLeftRadius: '1rem', borderTopRightRadius: '1rem' }} />
        </CardMedia>
        <CardTitle title={name} subtitle={category}/>
        <CardText>
          <p><b>Portion Size:</b> {portionSize}</p>
          <p><b>Grams:</b> {grams}</p>
          <p><b>Calories:</b> {calories}</p>
          <p><b>Fat:</b> {fat}</p>
          <p><b>Carbohydrates:</b> {carb}</p>
        </CardText>
      </Card>
    );
  }


}

FoodCard.propTypes = {
  obj: PropTypes.object.isRequired,
};
