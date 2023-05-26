import React from 'react'
import MSlider from './MSlider';
import CardItem from './card/CardMapItem';

const Home = (props) => {
  return (
    <div>
      <MSlider/>
      <CardItem item={props.item}/>
    </div>
  )
}

export default Home