import React from 'react';

function CollectionCard() {
const CollectionCard = ({id,name,traits,image}) =>{
  return (
      <div className="collectionCard">
          <img src={image} alt="" />
          <div className="details"></div>
          <div className="name">
              {name} <div className="id">#{id}</div>
          </div>
          <div className="priceContainer">
              <img src="" alt="" className="eth" />
              <div className="price"></div>
          </div>
      </div>
  )
  
}
}

export default CollectionCard;
