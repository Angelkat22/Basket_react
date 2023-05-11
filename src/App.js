
import './App.css';

import ProductsList from './components/ProductsList/ProductsList';

function App() {
  return (
    <div className='container'>
      <div className='list'>
        <h1>Your Basket</h1>
        <ProductsList />
      </div>
      
    </div>
  );
}

export default App;
