import React, { useEffect, useState } from 'react';

function Main({selectedPunk,punkListData}) {
    // console.log(punkListData);
    console.log(selectedPunk);
    const [activePunk, setActivePunk] = useState(punkListData[0]);

    console.log(activePunk)

    useEffect(() => {
        setActivePunk(punkListData[selectedPunk])
    }, [punkListData,selectedPunk]);
    

  return (
      <div className="main">
          <div className="mainContent">
              <div className="punkHighlight">
                  <div className="punkContainer">
                      <img className='selectedPunk' src={activePunk?.image_url} alt="" />
                  </div>
              </div>
              
              <div className="punkDetails">
                  <div className="title">{activePunk?.name}</div>
                  <span className="itemNumber">#{activePunk?.token_id}</span>
              </div>

              <div className="owner">
                  <div className="ownerImageContainer">
                      <img src={activePunk?.image_url} alt="" />
                  </div>
                  <div className="ownerDetails">
                      <div className="ownerNameAndHandle">
                          <div>0xB24bCEF0b0A7bc889e6eeeD35896183430Bb561f</div>
                          <div className="ownerHandle">@Bharath AB</div>
                      </div>
                      <div className="ownerlink">
                          <img src="Assets/owner/instagram.png" alt="" />
                      </div>
                      <div className="ownerlink">
                          <img src="Assets/owner/twitter.png" alt="" />
                      </div>
                      <div className="ownerlink">
                          <img src="Assets/owner/more.png" alt="" />
                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default Main;
