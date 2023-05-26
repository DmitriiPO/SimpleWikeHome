import React from 'react';
import Item from './Item.jsx';

const CardItem = (props) => {
  return (
    <div>
         {
      props.item.map(obj=>{
        return (<Item
          key={obj.myId} 
          id={obj.id}
          myId={obj.myId}
          title={obj.title}
          discription={obj.discription}
          price={obj.price}
          img={obj.img}
          />
          )
      })
    }
    </div>
  )
}

export default CardItem