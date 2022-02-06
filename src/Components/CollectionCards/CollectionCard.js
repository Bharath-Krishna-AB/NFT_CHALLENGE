import React from 'react';
import './CollectionCard.css'

const CollectionCard = ({id,name,traits,image}) =>{
  return (
      <div className="collectionCard">
          <img src={image} alt="" />
          <div className="details">
          <div className="name">
              {name} <div className="id">#{parseInt(id, 10)+1}</div>
          </div>
          <div className="priceContainer">
              <img src="Assets/owner/weth.png" alt="" className="weth" />
              <div className="price">{traits[0]?.value}</div>
          </div>
          </div>
      </div>
  )
  
}

export default CollectionCard;
