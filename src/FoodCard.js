import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import PropTypes from 'prop-types';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import muiThemeable from 'material-ui/styles/muiThemeable';
import SocialCake from 'material-ui/svg-icons/social/cake';
import FlatButton from 'material-ui/FlatButton';
import Left from './Left';
import Checkbox from 'material-ui/Checkbox';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import Visibility from 'material-ui/svg-icons/action/visibility';
import VisibilityOff from 'material-ui/svg-icons/action/visibility-off';
import Toggle from 'material-ui/Toggle';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

export default class FoodCard extends Component {

  clearCard = () => {
    var name = this.props.obj[0].name.toLowerCase();
    console.log(name);
    this.props.clearCard(name);
  }


  render() {
    const googleSearchString = 'http://www.google.com/search?q=one+serving+of+';
    const obj = this.props.obj[0];
    const name = obj.name;
    const calories = obj.calories;
    const fat = obj.fat;
    const carb = obj.carb;
    const protein = obj.protein;
    const portionSize = obj.portionSize;
    const grams = obj.grams;
    const image = obj.image;
    const category = obj.category;
    const styles = {
    checkbox: {
      marginBottom: 16,
      width: '10%',
      margin:'auto',
    },
  };

    return(
      <Card style={{ width:'80%', height:'100%', borderRadius:'1rem', backgroundColor:'lightblue', margin:'auto', display:'flex', marginTop:'5rem' }}>

          <img src={require('../public/images/apple.jpg')} style={{ borderTopLeftRadius: '1rem', borderBottomLeftRadius: '1rem', width:'50%', float:'left', overflow:'hidden' }} />

        <div>
        <div style={{ float:'right', width:'50%' }}>
          <IconButton style={{float:'right' }} onTouchTap={this.clearCard}><NavigationClose /></IconButton>
        </div>
          <CardTitle title={name} subtitle={category} style={{ padding:'0' }}/>
          <CardText style={{ textAlign:'center', padding:'0' }}>
            <p><b>Portion Size:</b> {portionSize}</p>
            <p><b>Grams:</b> {grams}</p>
            <p><b>Calories:</b> {calories}</p>
            <p><b>Fat:</b> {fat}</p>
            <p><b>Carbohydrates:</b> {carb}</p>
          </CardText>
          <CardActions style={{ padding:'0' }}>
            <FlatButton label="Search on Google" style={{ marginRight:'0' }} href= {googleSearchString + name} target="_blank" />
          </CardActions>
        </div>
      </Card>
    );
  }


}

FoodCard.propTypes = {
  obj: PropTypes.array.isRequired,
  clearCard: PropTypes.func.isRequired,
};
