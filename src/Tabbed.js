import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
// From https://github.com/oliviertassinari/react-swipeable-views
import SwipeableViews from 'react-swipeable-views';
import FoodGroupTab from './FoodGroupTab';
import AutoComplete from 'material-ui/AutoComplete';
import FoodCard from './FoodCard';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const foods = [
  'Bread (White)', 'Bread (Wholemeal)', 'Bread (Wholegrain)', 'Burger Bun',
  'Brown Rice (Raw)', 'White Rice (Raw)', 'Jasmine Rice (Raw)', 'Basmati Rice (Raw)', 'Cereal (Special K)',
  'Cereal (Cocopops)', 'Cereal (RiceBubbles)', 'Cereal (CornFlakes)', 'Pita Bread', 'Naan Bread', 'Porridge',
  'Macaroni (Raw)', 'Spaghetti (Raw)', 'Spaghetti (Canned)', 'Weet-bix', 'Couscous (Raw)',
  'Kidney Bean', 'Broad Bean', 'Baked Beans', 'Fish (Salmon)', 'Tuna (Canned)', 'Chicken (Canned)', 'Steak',
  'Egg', 'Sausage', 'Bacon', 'Ham', 'Chicken (Thigh)', 'Chicken (Wing)', 'Chicken (Breast)', 'Chia Seed', 'Linseed (Flax Seed)', 'Sunflower Seed', 'Tofu', 'Chickpea', 'Nuts (Almond)',
  'Nuts (Cashew)', 'Nuts (Pistachio)', 'Nuts (Walnut)', 'Nuts (Macademia)',
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
  'bread (white)': [{
    name: 'Bread (White)',
    calories: '66 calories',
    fat: '0.82g',
    carb: '12.65g',
    protein: '1.91g',
    portionSize: '1 slice',
    grams: '42.5g',
    image: require('../public/images/white_bread.jpg'),
    category: 'Bread and cereals',
    codeName: 'whiteBread'
  }],
  'bread (wholemeal)': [{
    name: 'Bread (Wholemeal)',
    calories: '128 calories',
    fat: '2.48g',
    carb: '23.64g',
    protein: '3.86g',
    portionSize: '1 slice',
    grams: '42.5g',
    image: require('../public/images/wholemeal_bread.jpg'),
    category: 'Bread and cereals',
    codeName: 'wholemealBread'
  }],
  'bread (wholegrain)': [{
    name: 'Bread (Wholegrain)',
    calories: '65 calories',
    fat: '0.99g',
    carb: '12.06g',
    protein: '2.6g',
    portionSize: '1 slice',
    grams: '42.5g',
    image: require('../public/images/wholegrain_bread.jpg'),
    category: 'Bread and cereals',
    codeName: 'wholegrainBread'
  }],
  'burger bun': [{
    name: 'Burger Bun',
    calories: '120 calories',
    fat: '1.5g',
    carb: '23g',
    protein: '4g',
    portionSize: '1 slice',
    grams: '43g',
    image: require('../public/images/burger_bun.jpg'),
    category: 'Bread and cereals',
    codeName: 'burgerBun'
  }],
  'brown rice (raw)': [{
    name: 'Brown Rice (Raw)',
    calories: '344 calories',
    fat: '2.05g',
    carb: '72.37g',
    protein: '7.13g',
    portionSize: '1/2 cup',
    grams: '87g',
    image: require('../public/images/brown_rice.jpg'),
    category: 'Bread and cereals',
    codeName: 'brownRice'
  }],
  'white rice (raw)': [{
    name: 'White Rice (Raw)',
    calories: '351 calories',
    fat: '0.61g',
    carb: '77.36g',
    protein: '6.44g',
    portionSize: '1/2 cup',
    grams: '87g',
    image: require('../public/images/white_rice.jpg'),
    category: 'Bread and cereals',
    codeName: 'whiteRice'
  }],
  'jasmine rice (raw)': [{
    name: 'Jasmine Rice (Raw)',
    calories: '360 calories',
    fat: '1.6g',
    carb: '94g',
    protein: '6g',
    portionSize: '1/2 cup',
    grams: '63g',
    image: require('../public/images/jasmine_rice.jpg'),
    category: 'Bread and cereals',
    codeName: 'jasmineRice'
  }],
  'basmati rice (raw)': [{
    name: 'Basmati Rice (Raw)',
    calories: '320 calories',
    fat: '2.5g',
    carb: '72g',
    protein: '6g',
    portionSize: '1/2 cup',
    grams: '89.3g',
    image: require('../public/images/basmati_rice.jpg'),
    category: 'Bread and cereals',
    codeName: 'basmatiRice'
  }],
  'cereal (special k)': [{
    name: 'Cereal (Special K)',
    calories: '117 calories',
    fat: '0.48g',
    carb: '22.01g',
    protein: '6.98g',
    portionSize: '1 cup',
    grams: '30.87g',
    image: require('../public/images/special_k.jpg'),
    category: 'Bread and cereals',
    codeName: 'specialK'
  }],
  'cereal (rice bubbles)': [{
    name: 'Cereal (Rice bubbles)',
    calories: '112 calories',
    fat: '0.1g',
    carb: '26g',
    protein: '1.9g',
    portionSize: '1 cup',
    grams: '35g',
    image: require('../public/images/rice_bubbles.jpg'),
    category: 'Bread and cereals',
    codeName: 'riceBubbles'
  }],
  'cereal (cocopops)': [{
    name: 'Cereal (Cocopops)',
    calories: '116.7 calories',
    fat: '0.1g',
    carb: '26.5g',
    protein: '1.4g',
    portionSize: '3/4 cup',
    grams: '30g',
    image: require('../public/images/cocopops.jpg'),
    category: 'Bread and cereals',
    codeName: 'cocopops'
  }],
  'cereal (cornflakes)': [{
    name: 'Cereal (Cornflakes)',
    calories: '100 calories',
    fat: '0g',
    carb: '24g',
    protein: '2g',
    portionSize: '1 cup',
    grams: '28g',
    image: require('../public/images/corn_flakes.jpg'),
    category: 'Bread and cereals',
    codeName: 'cornFlakes'
  }],
  'pita bread': [{
    name: 'Pita Bread',
    calories: '165 calories',
    fat: '0.7g',
    carb: '33.4g',
    protein: '5.5g',
    portionSize: '1 Pita',
    grams: '60g',
    image: require('../public/images/pita_bread.jpg'),
    category: 'Bread and cereals',
    codeName: 'pitaBread'
  }],
  'naan bread': [{
    name: 'Naan Bread',
    calories: '230 calories',
    fat: '4g',
    carb: '40g',
    protein: '8g',
    portionSize: '1 Naan',
    grams: '92g',
    image: require('../public/images/naan_bread.jpg'),
    category: 'Bread and cereals',
    codeName: 'naanBread'
  }],
  'porridge': [{
    name: 'Porridge',
    calories: '120 calories',
    fat: '2.5g',
    carb: '21g',
    protein: '6g',
    portionSize: '1/3 cup',
    grams: '35g',
    image: require('../public/images/porridge.jpg'),
    category: 'Bread and cereals',
    codeName: 'porridge'
  }],
  'macaroni (raw)': [{
    name: 'Macaroni Pasta (Raw)',
    calories: '150 calories',
    fat: '6.5g',
    carb: '20g',
    protein: '2.5g',
    portionSize: '1/2 cup',
    grams: '37.5g',
    image: require('../public/images/macaroni.jpg'),
    category: 'Bread and cereals',
    codeName: 'macaroni'
  }],
  'spiral pasta (raw)': [{
    name: 'Spiral Pasta (Raw)',
    calories: '300 calories',
    fat: '11g',
    carb: '40g',
    protein: '5g',
    portionSize: '1 cup',
    grams: '65g',
    image: require('../public/images/spiral_pasta.jpg'),
    category: 'Bread and cereals',
    codeName: 'spiral_pasta'
  }],
  'spaghetti (raw)': [{
    name: 'Spaghetti (Raw)',
    calories: '210 calories',
    fat: '2.5g',
    carb: '40g',
    protein: '8g',
    portionSize: 'Diameter of a 50 cent coin',
    grams: '56g',
    image: require('../public/images/spaghetti.jpg'),
    category: 'Bread and cereals',
    codeName: 'spaghetti'
  }],
  'spaghetti (canned)': [{
    name: 'Spaghetti (Canned)',
    calories: '120 calories',
    fat: '0.4g',
    carb: '25.3g',
    protein: '3.4g',
    portionSize: '1/2 can',
    grams: '400g',
    image: require('../public/images/spaghetti_canned.jpg'),
    category: 'Bread and cereals',
    codeName: 'spaghettiCanned'
  }],
  'weet-bix': [{
    name: 'Weet-bix',
    calories: '107 calories',
    fat: '0.4g',
    carb: '20.1g',
    protein: '3.7g',
    portionSize: '2 biscuits',
    grams: '30g',
    image: require('../public/images/weetbix.jpg'),
    category: 'Bread and cereals',
    codeName: 'weetbix'
  }],
  'couscous (raw)': [{
    name: 'Couscous (Raw)',
    calories: '376.3 calories',
    fat: '0.64g',
    carb: '77.46g',
    protein: '12.77g',
    portionSize: '2/3 cup',
    grams: '100g',
    image: require('../public/images/couscous.jpg'),
    category: 'Bread and cereals',
    codeName: 'couscous'
  }],
  'kidney bean': [{
    name: 'Kidney Bean',
    calories: '112 calories',
    fat: '0g',
    carb: '20g',
    protein: '8g',
    portionSize: '1/2 cup',
    grams: '89g',
    image: require('../public/images/kidney_bean.jpg'),
    category: 'Protein Foods',
  }],
  'broad bean': [{
    name: 'Broad Bean',
    calories: '512 calories',
    fat: '2.3g',
    carb: '87.43g',
    protein: '39.18g',
    portionSize: '1 cup',
    grams: '150g',
    image: require('../public/images/broad_bean.jpg'),
    category: 'Protein Foods',
  }],
  'baked beans': [{
    name: 'Baked Beans',
    calories: '130 calories',
    fat: '0.5g',
    carb: '26g',
    protein: '6g',
    portionSize: '1/2 cup',
    grams: '129g',
    image: require('../public/images/baked_beans.jpg'),
    category: 'Protein Foods',
  }],
  'fish (salmon)': [{
    name: 'Fish (Salmon)',
    calories: '120 calories',
    fat: '7.5g',
    carb: '0g',
    protein: '11.5g',
    portionSize: '1/2 Fillet',
    grams: '56.5g',
    image: require('../public/images/salmon.jpg'),
    category: 'Protein Foods',
  }],
  'tuna (canned)': [{
    name: 'Tuna (Canned)',
    calories: '60 calories',
    fat: '1g',
    carb: '0g',
    protein: '13g',
    portionSize: '1/4 cup',
    grams: '56g',
    image: require('../public/images/tuna.jpg'),
    category: 'Protein Foods',
  }],
  'chicken (canned)': [{
    name: 'Chicken (Canned)',
    calories: '70 calories',
    fat: '1.5g',
    carb: '0g',
    protein: '12g',
    portionSize: '1/3 cup',
    grams: '71g',
    image: require('../public/images/chicken_canned.jpg'),
    category: 'Protein Foods',
  }],
  'steak': [{
    name: 'Steak',
    calories: '135 calories',
    fat: '9g',
    carb: '0g',
    protein: '13.5g',
    portionSize: 'Area of a deck of cards',
    grams: '85.05g',
    image: require('../public/images/steak.jpg'),
    category: 'Protein Foods',
  }],
  'egg': [{
    name: 'Egg',
    calories: '70 calories',
    fat: '5g',
    carb: '1g',
    protein: '6g',
    portionSize: '1 large egg',
    grams: '53g',
    image: require('../public/images/egg.jpg'),
    category: 'Protein Foods',
  }],
  'sausage': [{
    name: 'Sausage',
    calories: '170 calories',
    fat: '14.86g',
    carb: '0g',
    protein: '8.45g',
    portionSize: '2 links',
    grams: '55.92g',
    image: require('../public/images/sausage.jpg'),
    category: 'Protein Foods',
  }],
  'bacon': [{
    name: 'Bacon',
    calories: '60 calories',
    fat: '5g',
    carb: '0g',
    protein: '5g',
    portionSize: '3 slices',
    grams: '14g',
    image: require('../public/images/bacon.jpg'),
    category: 'Protein Foods',
  }],
  'ham': [{
    name: 'Ham',
    calories: '60 calories',
    fat: '5g',
    carb: '0g',
    protein: '5g',
    portionSize: '3 slices',
    grams: '14g',
    image: require('../public/images/ham.jpg'),
    category: 'Protein Foods',
  }],
  'chicken (wing)': [{
    name: 'Chicken (Wing)',
    calories: '60 calories',
    fat: '5g',
    carb: '0g',
    protein: '5g',
    portionSize: '3 slices',
    grams: '14g',
    image: require('../public/images/chicken_wing.jpg'),
    category: 'Protein Foods',
  }],
  'chicken (breast)': [{
    name: 'Chicken (Breast)',
    calories: '135 calories',
    fat: '4g (6g with skin)',
    carb: '0g',
    protein: '21g',
    portionSize: 'Area of a deck of cards',
    grams: '85.05g',
    image: require('../public/images/chicken_breast.jpg'),
    category: 'Protein Foods',
  }],
  'chicken (thigh)': [{
    name: 'Chicken (Thigh)',
    calories: '170 calories',
    fat: '7g',
    carb: '0g',
    protein: '19g',
    portionSize: '1 thigh',
    grams: '85.05g',
    image: require('../public/images/chicken_thigh.jpg'),
    category: 'Protein Foods',
  }],
  'chia seed': [{
    name: 'Chia Seed',
    calories: '68 calories',
    fat: '4.5g',
    carb: '6g',
    protein: '2g',
    portionSize: '1 tablespoon',
    grams: '10g',
    image: require('../public/images/chia.jpg'),
    category: 'Protein Foods',
  }],
  'linseed (flax seed)': [{
    name: 'Linseed (Flax Seed)',
    calories: '70 calories',
    fat: '5.6g',
    carb: '4g',
    protein: '3g',
    portionSize: '2 tablespoon',
    grams: '14g',
    image: require('../public/images/linseed.jpg'),
    category: 'Protein Foods',
  }],
  'sunflower seed': [{
    name: 'Sunflower Seed',
    calories: '150 calories',
    fat: '11g',
    carb: '7g',
    protein: '6g',
    portionSize: '1/4 Cup',
    grams: '31g',
    image: require('../public/images/sunflower_seed.jpg'),
    category: 'Protein Foods',
  }],
  'tofu': [{
    name: 'Tofu',
    calories: '110 calories',
    fat: '3g',
    carb: '4g',
    protein: '17g',
    portionSize: '1/3 Cup',
    grams: '85g',
    image: require('../public/images/tofu.jpg'),
    category: 'Protein Foods',
  }],
  'chickpea': [{
    name: 'Chickpea',
    calories: '130 calories',
    fat: '2g',
    carb: '22g',
    protein: '7g',
    portionSize: '1/2 Cup',
    grams: '82g',
    image: require('../public/images/chickpea.png'),
    category: 'Protein Foods',
  }],
  'nuts (almond)': [{
    name: 'Nuts (Almond)',
    calories: '160 calories',
    fat: '14g',
    carb: '6g',
    protein: '6g',
    portionSize: '23 Kernels',
    grams: '28g',
    image: require('../public/images/almond.jpg'),
    category: 'Protein Foods',
  }],
  'nuts (cashew)': [{
    name: 'Nuts (Cashew)',
    calories: '156 calories',
    fat: '12g',
    carb: '9g',
    protein: '5g',
    portionSize: '18 Kernels',
    grams: '28g',
    image: require('../public/images/cashew.jpg'),
    category: 'Protein Foods',
  }],
  'nuts (pistachio)': [{
    name: 'Nuts (Pistachio)',
    calories: '170 calories',
    fat: '13g',
    carb: '5g',
    protein: '6g',
    portionSize: '43 Kernels',
    grams: '28g',
    image: require('../public/images/pistachio.jpg'),
    category: 'Protein Foods',
  }],
  'nuts (walnut)': [{
    name: 'Nuts (Walnut)',
    calories: '170 calories',
    fat: '16g',
    carb: '5g',
    protein: '5g',
    portionSize: '14 Halves',
    grams: '28g',
    image: require('../public/images/walnut.jpg'),
    category: 'Protein Foods',
  }],
  'nuts (macademia)': [{
    name: 'Nuts (Macademia)',
    calories: '204 calories',
    fat: '21.48g',
    carb: '3.92g',
    protein: '2.24g',
    portionSize: '12 Kernels',
    grams: '28g',
    image: require('../public/images/macademia.jpg'),
    category: 'Protein Foods',
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
    console.log(FoodMap);
    var foodObject = FoodMap[chosenRequest.toLowerCase()];
    console.log(foodObject);
    if(foodObject != null && !this.state.foodArray.includes(chosenRequest.toLowerCase())) {
      var newArray = this.state.foodArray.slice();
      newArray.unshift(chosenRequest);
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

  clearCard = (card) => {
      var newArray = this.state.foodArray;
      var index = newArray.indexOf(card);
      newArray.splice(index, 1);
      this.setState({
        foodArray: newArray,
      });

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
          inkBarStyle={{ height:'4px', marginTop:'-4px' }}
        >
          <Tab label="What are the food groups?" value={0} />
          <Tab label="What is a healthy plate model?" value={1} />
          <Tab label="How much is one serving?" value={2} />
        </Tabs>
        <SwipeableViews
          index={this.state.slideIndex}
          onChangeIndex={this.handleChange}
        >
          <div>
            <FoodGroupTab />
          </div>
          <div>
          <h1>What is a healthy plate model?</h1>
            <img src={require("../public/images/healthy.png")} style={{ margin:'0 auto', display:'block', width:'40%', float:'right' }}/>
            <p>
              A healthy plate model consists of 3 parts. The starchy carbohydrate takes up 1/4 of the plate, the protein food takes up 1/4 of the plate and vegetables takes up the remaining 1/2.
            </p>
            <h3>Examples</h3>
            <p><b>Starchy carbohydrates</b>: potato, kumara, rice, pasta, grains, corn, taro, parsnip</p>
            <p><b>Protein foods</b>: lean meats, fish, seafood, eggs, baked beans</p>
            <p><b>Vegetables</b>: salad vegetables, carrot, capsicum, pumpkin, onion</p>

          </div>
          <div>
          <FlatButton label="Clear All" secondary={true} fullWidth={true} labelStyle={{ fontSize:'20px' }} onTouchTap={this.clearAll.bind(this)}/>
            <div style={styles.slide} style={{ textAlign:'center', marginTop:'5rem' }}>

              <AutoComplete
                floatingLabelText="Enter a food!"
                filter={AutoComplete.fuzzyFilter}
                dataSource={foods}
                maxSearchResults={5}
                onNewRequest={ this.onNewRequest.bind(this) }
                searchText={this.state.searchText}
                textFieldStyle={{fontSize:'32px', lineHeight:'32px', height:'92px'}}
              />
              <ReactCSSTransitionGroup
                transitionName = "example"
                transitionEnterTimeout={700} transitionLeaveTimeout={300}
                transitionAppear={true}
                transitionAppearTimeout={500} component='div'>
                {
                  this.state.showFoodCard &&
                  this.state.foodArray.map(food => {
                      return(

                        <FoodCard obj={FoodMap[food.toLowerCase()]} key={food} clearCard={this.clearCard.bind(this)} style={{opacity:'0', transition:'opacity 1s ease-in-out'}}/>
                      );
                  })
                }
              </ReactCSSTransitionGroup >

            </div>
          </div>
        </SwipeableViews>
      </div>
    );
  }
}
