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
      <Card style= {{ width: width }}>
        <CardMedia overlay={<CardTitle title={text} subtitle={subtitle} />}>
          <img src={image} />
        </CardMedia>
      </Card>
    );
  }


}

FoodGroupCard.propTypes = {
  obj: PropTypes.object.isRequired
};
