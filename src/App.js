import logo from './logo.svg';
import './App.css';
import {Routes , Route} from 'react-router-dom'
import Navbar from './components/navbar';
import Home from './Pages/home';
import Favourates from './Pages/favorutes';
import Details from './Pages/details';

function App() {
  return (
    <div >
     <div className='min-h-screen p-6 bg-white text-gray-600 text-lg'>
      <Navbar/>
      <Routes>
<Route
path='/'
element = {<Home/>}
/>
<Route
path='/favrates'
element = {<Favourates/>}/>
<Route
path='/recipe-item/:id'
element = {<Details/>}/>

      </Routes>
     </div>
    </div>
  );
}

export default App;
