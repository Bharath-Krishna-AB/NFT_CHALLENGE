import React from 'react';
import CollectionCard from '../CollectionCards/CollectionCard';

function PunkList({punkList}) {
  return (
      <div className="punkList">
          {
              punkList.map(punk =>(
                  <div>
                      <CollectionCard
                      key={punk.token_id}
                      id={punk.token_id}
                      name={punk.name}
                      traits={punk.traits}
                      image={punk.image_original_url}
                      />
                  </div>
              )
              )
          }
      </div>
  )
}

export default PunkList;
