import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import {useState,useEffect} from 'react'
import axios from 'axios';
import PunkList from './Components/PunkList/PunkList';
import Main from './Components/Main/Main';

function App() {
  const [punkListData, setPunkListData] = useState([]);
  const [selectedPunk, setSelectedPunk] = useState(0);

  useEffect(() => {
    
    const GetMyNfts = async ()=>{
      const openSeaData = await axios.get('https://testnets-api.opensea.io/api/v1/assets?asset_contract_address=0x6eb0C778B1a78134b381D2F26cee9C39eF13680f&order_direction=asc')
      console.log(openSeaData.data.assets);
      setPunkListData(openSeaData.data.assets)
    }

    return GetMyNfts()

  }, []);

 console.log(punkListData.length)

  
  return (
    <div className='app'>
        <Header/>
      {punkListData.length > 0 && (
        <>
          <Main punkListData={punkListData} selectedPunk={selectedPunk} />)
          <PunkList 
          punkListData={punkListData} 
          setSelectedPunk={setSelectedPunk} 
          />
        </>
      )
      }

    </div>
  );
}

export default App;
