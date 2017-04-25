import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
// From https://github.com/oliviertassinari/react-swipeable-views
import SwipeableViews from 'react-swipeable-views';
import FoodGroupTab from './FoodGroupTab';
import AutoComplete from 'material-ui/AutoComplete';
import FoodCard from './FoodCard';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

const fruit = [
  'Apple', 'Pear'
];

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  slide: {
    padding: 10,
  },
};

const FoodMap = {
  apple: [{
    name: 'Apple',
    calories: '100kcal',
    fat: '100g',
    carb: '200g',
    protein: '300g',
    portionSize: '400g',
    grams: '50g',
    image: '../public/images/apple.jpg',
    category: 'Fruit and vegetables'
  }],
  pear: [{
    name: 'Pear',
    calories: '400kcal',
    fat: '20g',
    carb: '10g',
    protein: '90g',
    portionSize: '123g',
    grams: '857g',
    image: '../public/images/pear.png',
    category: 'Fruit and vegetables'
  }],
}

export default class Tabbed extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
      searchText: '',
      trueText:'',
      foodArray: [],
    };
  }

  state = {
    simple: '',
  };

  handleChange = (value) => {
    this.setState({
      slideIndex: value,
      showFoodCard: false,
    });
  };

  onNewRequest = (chosenRequest, index) => {
    this.setState({
      searchText: chosenRequest,
    });
    var foodObject = FoodMap[chosenRequest.toLowerCase()];
    if(foodObject != null && !this.state.foodArray.includes(chosenRequest.toLowerCase())) {
      var newArray = this.state.foodArray.slice();
      newArray.push(chosenRequest);
      this.setState({
        trueText: chosenRequest,
        foodArray: newArray,
        showFoodCard: true,
      });
    }

  }

  clearAll = () => {
    var newArray = [];
    this.setState({
      foodArray: newArray,
      showFoodCard: false,
    })

  }

  // returnFoodCards = () => {
  //   console.log(this.state.foodArray);
  //   this.state.foodArray.forEach(function(food) {
  //     return(foodCards.push(<FoodCard obj={FoodMap[food.toLowerCase()]} />));
  //   })
  // }

  render() {
    return (
      <div style={{}}>
        <Tabs
          onChange={this.handleChange}
          value={this.state.slideIndex}
        >
          <Tab label="What are the food groups?" value={0} />
          <Tab label="How much is one serving?" value={1} />
        </Tabs>
        <SwipeableViews
          index={this.state.slideIndex}
          onChangeIndex={this.handleChange}
        >
          <div>
            <FoodGroupTab />
          </div>
          <div>
          <FlatButton label="Clear All" secondary={true} fullWidth={true} labelStyle={{ fontSize:'20px' }} onTouchTap={this.clearAll.bind(this)}/>
            <div style={styles.slide} style={{ textAlign:'center', marginTop:'5rem' }}>

              <AutoComplete
                floatingLabelText="Enter a food!"
                filter={AutoComplete.noFilter}
                dataSource={fruit}
                maxSearchResults={5}
                onNewRequest={ this.onNewRequest.bind(this) }
                searchText={this.state.searchText}
                textFieldStyle={{fontSize:'32px', lineHeight:'32px', height:'92px'}}
              />


              {
                this.state.showFoodCard &&
                this.state.foodArray.map(function(food) {
                  return(<FoodCard obj={FoodMap[food.toLowerCase()]} key={food} />);
                })
              }


            </div>
          </div>
        </SwipeableViews>
      </div>
    );
  }
}
