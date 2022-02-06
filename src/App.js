import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import CollectionCard from './Components/CollectionCards/CollectionCard';
import {useState,useEffect} from 'react'


function App() {
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
