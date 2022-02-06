import React, { useEffect, useState } from 'react';
import './Main.css'

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
              
              <div className="nonImgSection">
              <div className="punkDetails">
                  <div className="title">{activePunk?.name}</div>
                  <span className="itemNumber">#{activePunk? parseInt(activePunk.token_id, 10)+1:''}</span>
              </div>

              <div className="owner">
                  <div className="ownerImageContainer">
                      <img src={activePunk?.owner.profile_img_url} alt="" />
                  </div>
                  <div className="ownerDetails">
                      <div className="ownerNameAndHandle">
                          <div className='walletId'>0xB24bCEF0b0A7bc889e6eeeD35896183430Bb561f</div>
                          <div className="ownerHandle">@Bharath AB</div>
                      </div>
                      <div className="ownerLinkContainer">
                          <a href="https://www.instagram.com/bharath__ab/">
                      <div className="ownerLink">
                          <img src="Assets/owner/instagram.png" alt="" />
                      </div>
                      </a>
                      <div className="ownerLink">
                          <img src="Assets/owner/twitter.png" alt="" />
                      </div>
                      <div className="ownerLink">
                          <img src="Assets/owner/more.png" alt="" />
                      </div>
                      </div>
                  </div>
              </div>
              </div>
          </div>
      </div>
  )
}

export default Main;
