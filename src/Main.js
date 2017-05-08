import React from 'react';
import AppBar from 'material-ui/AppBar';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import muiThemeable from 'material-ui/styles/muiThemeable';
import IconButton from 'material-ui/IconButton';
import SocialCake from 'material-ui/svg-icons/social/cake';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Left from './Left';
import FoodChip from './FoodChip';
import FoodCard from './FoodCard';
import Tabbed from './Tabbed';
import TabbedMobile from './TabbedMobile';
// <div style={{ width:'20%', height:'100%', float:'left' }}>
//   <img src= '../images/banner.png'/>
//
//
//
//
// </div>
class Main extends React.Component{
  constructor() {
    super();
    this.state = {
      width: window.innerWidth,
    };
  }

  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  // make sure to remove the listener
  // when the component is not mounted anymore
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

render() {
  const { width } = this.state;
const isMobile = width <= 500;
if(isMobile) {
  return(
    <Card id='aaa' style={{display:'inline-block', float:'right', width:'100%', backgroundColor:'azure'}}>
      <TabbedMobile style={{ float:'right' }}/>



    </Card>
);
}else {
  return(
  <div>
    <AppBar
      title="Plum Cake"
      iconElementLeft={<IconButton><SocialCake /></IconButton>}
    />

    <Card id='aaa' style={{display:'inline-block', float:'right', width:'100%', padding:'1rem', backgroundColor:'azure'}}>
      <Tabbed style={{ float:'right' }}/>



    </Card>
  </div>);}
}
}
export default muiThemeable()(Main);
