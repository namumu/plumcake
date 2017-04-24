import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
// From https://github.com/oliviertassinari/react-swipeable-views
import SwipeableViews from 'react-swipeable-views';
import FoodGroupTab from './FoodGroupTab';
import AutoComplete from 'material-ui/AutoComplete';
import FoodCard from './FoodCard';

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
    if(foodObject != null) {
      console.log(FoodMap[chosenRequest.toLowerCase()]);
      this.setState({
        trueText: chosenRequest,
        showFoodCard: true,
      });
    }else {
      this.setState({
        showFoodCard: false,
      });
    }


  }

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
              <FoodCard obj={FoodMap[this.state.trueText.toLowerCase()]} />
            }
          </div>
        </SwipeableViews>
      </div>
    );
  }
}
