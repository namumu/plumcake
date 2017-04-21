import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import PropTypes from 'prop-types';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import muiThemeable from 'material-ui/styles/muiThemeable';
import IconButton from 'material-ui/IconButton';
import SocialCake from 'material-ui/svg-icons/social/cake';
import FlatButton from 'material-ui/FlatButton';

export default class FoodGroupCard extends Component {


  render() {
    const obj = this.props.obj;
    const text = obj.text;
    const image = obj.image;
    const subtitle = obj.subtitle;
    const modalText = obj.modalText;
    const width = '33%';

    return(
      <Card style= {{ width: width, float:'left' }}>
        <CardMedia overlay={<CardTitle title={text} subtitle={subtitle} />} mediaStyle={{flex:'1', top:'0', left:'0', bottom:'0', right:'0', resizeMode:'contain'}}>
          <img src={require(image)} style={{ flex:'1', top:'0', left:'0', bottom:'0', right:'0', resizeMode:'contain', overflow:'hidden', height:'40vh', background:'no-repeat scroll' }} />
        </CardMedia>
      </Card>
    );
  }


}

FoodGroupCard.propTypes = {
  obj: PropTypes.object.isRequired
};
