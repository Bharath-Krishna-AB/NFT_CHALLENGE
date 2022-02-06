import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import CollectionCard from './Components/CollectionCards/CollectionCard';

function App() {
  return (
    <div className='app'>
      <Header/>
      <CollectionCard/>
    </div>
  );
}

export default App;
