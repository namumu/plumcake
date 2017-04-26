import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import PropTypes from 'prop-types';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import muiThemeable from 'material-ui/styles/muiThemeable';
import IconButton from 'material-ui/IconButton';
import SocialCake from 'material-ui/svg-icons/social/cake';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';

export default class FoodGroupCard extends Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const obj = this.props.obj;
    const text = obj.text;
    let image;
    const subtitle = obj.subtitle;
    const modalText = obj.modalText;
    const width = '33%';

    function imageSource() {
      switch(text) {
        case 'Fruit and vegetables':
          return require('../public/images/fruit-and-veg.jpg');
        case 'Lean meats and alternatives':
          return require('../public/images/protein.jpg');
        case 'Other':
          return require('../public/images/other.jpg');
        case 'Milk and milk products':
          return require('../public/images/milk.jpg');
        case 'Beverage':
          return require('../public/images/drinks.jpg');
        case 'Breads and cereals':
          return require('../public/images/wholegrains.jpg');
        default:
          break;
      }
    }

    return(
      <Card style={{ width: width, float:'left', cursor:'pointer'}} onTouchTap={this.handleOpen}>
        <Dialog
          title={text}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
          contentStyle={{ borderWidth:'10px', borderColor:'rgb(0, 188, 212)', borderStyle:'solid' }}
        >
        <div className="content" dangerouslySetInnerHTML={{__html: modalText}}></div>
        </Dialog>
        <CardMedia overlay={<CardTitle title={text} subtitle={subtitle} />} mediaStyle={{flex:'1', top:'0', left:'0', bottom:'0', right:'0', resizeMode:'contain'}}>
          <img src={imageSource()}
           style={{ flex:'1', top:'0', left:'0', bottom:'0', right:'0', resizeMode:'contain', overflow:'hidden', height:'40vh', background:'no-repeat scroll' }} />
        </CardMedia>
      </Card>
    );
  }


}

FoodGroupCard.propTypes = {
  obj: PropTypes.object.isRequired
};
