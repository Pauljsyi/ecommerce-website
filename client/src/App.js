import './App.css';
import Navheader from './components/Navheader';
import Products from './components/Products';
import Featured from './components/Featured';
import Cart from './components/Cart';

function App() {
  return (
    <div>
      <Navheader />
      <Featured />
      <Products />
      <Cart />

    </div>
  );
}

export default App;
