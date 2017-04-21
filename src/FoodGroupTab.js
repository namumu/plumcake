import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import PropTypes from 'prop-types';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import muiThemeable from 'material-ui/styles/muiThemeable';
import IconButton from 'material-ui/IconButton';
import SocialCake from 'material-ui/svg-icons/social/cake';
import FlatButton from 'material-ui/FlatButton';
import FoodGroupCard from './FoodGroupCard';

export default class FoodGroupTab extends Component {


  render() {
    const fruitVeges = {
      text: 'Fruit & Veges',
      image: "/images/fruit-and-veg.jpg",
      modalText: 'lots of vitamin c etc etc etc etc',
      subtitle: 'dont eat veges',
    };

    const protein = {
      text: 'Protein',
      image: '/images/protein.jpg',
      modalText: 'tastesgood',
      subtitle: 'strong',
    };

    const other = {
      text: 'Other',
      image: '/images/other.jpg',
      modalText: 'wtf is other anyway',
      subtitle: 'cats',
    };

    const dairy = {
      text: 'Milk & Milk products',
      image: '/images/milk.jpg',
      modalText: 'food that was falsely marketted by money hungry farmers',
      subtitle: 'i thought milk was protein',
    };

    const grain = {
      text: 'Grain foods',
      image: '/images/wholegrains.jpg',
      modalText: 'bread',
      subtitle: 'migraine',
    };

    const drink = {
      text: 'Drinks',
      image: '/images/drinks.png',
      modalText: 'up and go',
      subtitle: 'tasty',
    };
    return(
      <div>
        <FoodGroupCard obj={fruitVeges}/>
        <FoodGroupCard obj={protein}/>
        <FoodGroupCard obj={other}/>
        <FoodGroupCard obj={dairy}/>
        <FoodGroupCard obj={grain}/>
        <FoodGroupCard obj={drink}/>

      </div>
    );
  }


}
