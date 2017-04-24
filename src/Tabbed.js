import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
// From https://github.com/oliviertassinari/react-swipeable-views
import SwipeableViews from 'react-swipeable-views';
import FoodGroupTab from './FoodGroupTab';
import AutoComplete from 'material-ui/AutoComplete';
import FoodCard from './FoodCard';

const fruit = [
  'Apple', 'Apricot', 'Avocado',
  'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry',
  'Boysenberry', 'Blood Orange',
  'Cantaloupe', 'Currant', 'Cherry', 'Cherimoya', 'Cloudberry',
  'Coconut', 'Cranberry', 'Clementine',
  'Damson', 'Date', 'Dragonfruit', 'Durian',
  'Elderberry',
  'Feijoa', 'Fig',
  'Goji berry', 'Gooseberry', 'Grape', 'Grapefruit', 'Guava',
  'Honeydew', 'Huckleberry',
  'Jabouticaba', 'Jackfruit', 'Jambul', 'Jujube', 'Juniper berry',
  'Kiwi fruit', 'Kumquat',
  'Lemon', 'Lime', 'Loquat', 'Lychee',
  'Nectarine',
  'Mango', 'Marion berry', 'Melon', 'Miracle fruit', 'Mulberry', 'Mandarine',
  'Olive', 'Orange',
  'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Physalis', 'Plum', 'Pineapple',
  'Pumpkin', 'Pomegranate', 'Pomelo', 'Purple Mangosteen',
  'Quince',
  'Raspberry', 'Raisin', 'Rambutan', 'Redcurrant',
  'Salal berry', 'Satsuma', 'Star fruit', 'Strawberry', 'Squash', 'Salmonberry',
  'Tamarillo', 'Tamarind', 'Tomato', 'Tangerine',
  'Ugli fruit',
  'Watermelon',
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

const testObj = {
  name: 'Apple',
  calories: '100kcal',
  fat: '100g',
  carb: '200g',
  protein: '300g',
  portionSize: '400g',
  grams: '50g',
  image: '../public/images/apple.jpg',
  category: 'Fruit and vegetables'

}

export default class Tabbed extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
      searchText: '',

    };
  }

  state = {
    simple: '',
  };

  handleChange = (value) => {
    this.setState({
      slideIndex: value,
    });
  };

  onNewRequest = (chosenRequest, index) => {
    this.setState({
      searchText: chosenRequest,
    });
    if(index != -1) {

    }else {

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
          <div style={styles.slide} style={{ textAlign:'center' }}>
            <AutoComplete
              floatingLabelText="Enter a food!"
              filter={AutoComplete.noFilter}
              dataSource={fruit}
              maxSearchResults={5}
              onNewRequest={ this.onNewRequest.bind(this) }
              searchText={this.state.searchText}
            />
            <FoodCard obj={testObj} />
          </div>
        </SwipeableViews>
      </div>
    );
  }
}
