import React from 'react';
import PropTypes from 'prop-types';

function Food({fav, image, rating}) {
  return (
    <div>
      <h1>{fav}</h1>
      <h4>{rating}/5</h4>
      <img src={image} alt={fav} width="150px" height="100px"/>
    </div>
  )
}

const foodILike = [
  {
    id: 1,
    name: "kimchi",
    img: "http://08food.com/web/product/big/201801/31_shop1_635950.jpg",
    rating: 5
  },
  {
    id: 2,
    name: "ramen",
    img: "https://img1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/liveboard/realfood/3173a007147d49f6a2e32fe433cd83b1.jpg",
    rating: 3.4
  },
  {
    id: 3,
    name: "dongas",
    img: "https://www.nadrifood.co.kr/wp-content/uploads/2018/06/nadri_pro_don_05.jpg",
  }
]

Food.propTypes = {
  fav: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rating: PropTypes.number
}

function App() {
  return (
    <div>
      {foodILike.map(({id, name, img, rating}) => (
        <Food key={id} fav={name} image={img} rating={rating}/>
      ))}
    </div>
  );
}

export default App;
