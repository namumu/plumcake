import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import PropTypes from 'prop-types';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import muiThemeable from 'material-ui/styles/muiThemeable';
import IconButton from 'material-ui/IconButton';
import SocialCake from 'material-ui/svg-icons/social/cake';
import FlatButton from 'material-ui/FlatButton';
import FoodGroupCard from './FoodGroupCard';
import FoodGroupCardMobile from './FoodGroupCardMobile';

export default class FoodGroupTab extends Component {


  render() {
    const fruitVeges = {
      text: 'Fruit and vegetables',
      image: "./images/fruit-and-veg.jpg",
      modalText: '<p>These colourful foods provide us with essential vitamins, minerals and antioxidants. </p>' +
'<p>Eating a range of colours ensures a balanced intake of these nutrients.</p>' +
'<p>It is recommended to have at least 3 serves of vegetables a day and 2 serves of fruit.</p>' +
'<p>An easy way to think of what one serve of fruit or vegetables looks like, is to look at what can fit in the palm of your hand.</p>',
    };

    const protein = {
      text: 'Lean meats and alternatives',
      image: './images/protein.jpg',
      modalText: '<p>These foods provide us with most of our protein, as well as minerals such as iron and zinc and B vitamins and fats.</p>' +
      '<p>Most of the foods in this category are meat (poultry, beef, lamb, pork and seafood), however non-meat options are also considered in this protein group (tofu and soy products, eggs, legumes and nuts).</p>' +
      '<p>It is recommended to have at least 1 or more serves of lean meats and alternatives in a day.</p>' +
      '<p>An easy way to think of what one serve of lean meats and alternatives looks like, is to compare it to the flat palm of your hand and the thickness of your hand. </p>' +
      '<p>Remove the visible fat from the meat and skin from the chicken to reduce intake of saturated fat. ' +
      '<p>Oily fish such as salmon, tuna, mackerel and sardines are a great source of omega-3 fatty acids.',
    };

    const other = {
      text: 'Other',
      image: './images/other.jpg',
      modalText: '<p>These foods are also known as ‘treat foods’ try to control the intake of these foods and keep it to a minimum.</p>' +
      '<p>These foods are often high in sugar, salt and fat.</p>' +
      '<p>A great way to find out how much sugar, fat and salt are in these foods, read the label!</p>' +
      '<p>Turn the packaging around and look at the nutrient information panel, choose foods that are <10g fat and <10g sugar per 100g.</p>' +
      '<p>The recommended salt intake is <1 teaspoon per day, so make sure you aren’t eating all your salt from that one packet of chips!</p>',
    };

    const dairy = {
      text: 'Milk and milk products',
      image: './images/milk.jpg',
      modalText: '<p>These foods provide a good source of calcium, zinc, protein, carbohydrate, fat and vitamins.</p>' +
      '<p>These include your dairy products such as milk, yoghurt and cheese.</p>' +
      '<p>It is recommended to have 2 to 3 serves of milk and milk products in a day.</p>' +
      '<p>An easy way to think of what one serve of milk and milk products is one glass which is 250ml.</p>' +
      '<p>Choose low-fat options for yoghurt, milk (trim or lite) and cheese (edam, cottage) to reduce intake of saturated fat.</p>',
    };

    const grain = {
      text: 'Breads and cereals',
      image: './images/wholegrains.jpg',
      modalText: '<p>These are grain foods that provide us with most of the carbohydrates we eat in a day.</p>' +
      '<p>Pasta, rice, bread, cereals and grains (maize, barley, oats, quinoa, corn, rye, couscous) are foods are high in B vitamins, minerals and fibre which makes us fuller for longer.</p>' +
      '<p>In particular whole grain food contains all the germ, endosperm and bran components of the grain, making it a healthier alternative to refined grain.</p>' +
      '<p>It is recommended to have at least 6 serves of breads and cereals in a day.</p>' +
      '<p>An easy way to think of what one serve of these grain foods looks like, is to compare it to the size of your fist.</p>',
    };

    const drink = {
      text: 'Beverage',
      image: './images/beverage_mobile.jpg',
      modalText: '<p>Water is the go-to drink!</p>' +
      '<p>It is recommended to have 8-10 cups of water in a day.</p>' +
      '<p>Be careful of fruit juices, energy drinks and soft drinks which are often full of added sugar.</p>' +
      '<p>Diet soft drinks are a better alternative to their full sugar counterparts.</p>' +
      '<p>Try adding chopped fruit or lemon juice to water, or have tea or coffee with no sugar to make water more interesting.</p>',
    };
    return(
      <div>
        <FoodGroupCardMobile obj={fruitVeges}/>
        <FoodGroupCardMobile obj={protein}/>
        <FoodGroupCardMobile obj={other}/>
        <FoodGroupCardMobile obj={dairy}/>
        <FoodGroupCardMobile obj={grain}/>
        <FoodGroupCardMobile obj={drink}/>

      </div>
    );
  }


}
