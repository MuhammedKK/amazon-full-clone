import './App.css';
import Banner from './Components/Banner';
import Navbar from './Components/Nav';
import Products from './Components/Products';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Banner />
        <Products />
    </div>
  );
}

export default App;
