import React, {Component} from 'react';
import AutoComplete from 'material-ui/AutoComplete';

const food = [
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

export default class Left extends Component {
  state = {
    searchText: '',
  };

  handleUpdateInput = (searchText) => {
    this.setState({
      searchText: searchText,
    });
  };

  handleNewRequest = () => {
    this.setState({
      searchText: '',
    });
  };

  render() {
    return (
        <AutoComplete
        floatingLabelText="Enter a food!"
        searchText={this.state.searchText}
        onUpdateInput={this.handleUpdateInput}
      //onNewRequest={this.handleNewRequest}
        filter={AutoComplete.fuzzyFilter}
        dataSource={food}
        maxSearchResults={5}
        fullWidth={true}
      />
    );
  }
}
