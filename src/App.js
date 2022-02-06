import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import CollectionCard from './Components/CollectionCards/CollectionCard';
import {useState,useEffect} from 'react'
import axios from 'axios';

function App() {
  const [punkList, setPunkList] = useState([]);

  useEffect(() => {
    
    const GetMyNfts = async ()=>{
      const openSeaData = await axios.get('https://testnets-api.opensea.io/api/v1/assets?asset_contract_address=0x6eb0C778B1a78134b381D2F26cee9C39eF13680f&order_direction=asc')
      console.log(openSeaData.data.assets);
    }

    return GetMyNfts()

  }, []);
  
  return (
    <div className='app'>
      <Header/>
      <CollectionCard 
      id={0}
      name='Bandana Punk' 
      traits={[{'value':7}]} 
      image='https://ipfs.thirdweb.com/ipfs/QmZ5fD3UTRh8ALZCpMdypHkhMQSXyi4yyCz3Ea19kPmtXg/0.jpg'/>
    </div>
  );
}

export default App;
