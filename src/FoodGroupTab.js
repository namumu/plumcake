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
      image: "./images/fruit-and-veg.jpg",
      modalText: 'lots of vitamin c etc etc etc etc',
      subtitle: 'why eat veges when you can eat chips',
    };

    const protein = {
      text: 'Protein',
      image: './images/protein.jpg',
      modalText: 'tastesgood',
      subtitle: 'strong',
    };

    const other = {
      text: 'Other',
      image: './images/other.jpg',
      modalText: 'wtf is other anyway',
      subtitle: 'cats',
    };

    const dairy = {
      text: 'Milk & Milk products',
      image: './images/milk.jpg',
      modalText: 'food that was falsely marketted by money hungry farmers',
      subtitle: 'i thought milk was protein',
    };

    const grain = {
      text: 'Grain foods',
      image: './images/wholegrains.jpg',
      modalText: 'bread',
      subtitle: 'migraine',
    };

    const drink = {
      text: 'Drinks',
      image: './images/drinks.png',
      modalText: 'Do you find yourself racing out the door each workday morning without having had breakfast? Or are you one of the 20% of employees who now eat breakfast at work*? Sanitarium New Zealand’s UP&GO liquid breakfast is a convenient choice for when you are on the go. We’ve done the thinking for you to help get your day off to a nutritious start. * Cereal Social Trends Report for ABCMF. McCrindle Research 2012.',
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
