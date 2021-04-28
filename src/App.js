import './App.css';
import { useState, useEffect } from 'react';
import Country from './components/Country/Country';
import Cart from './components/Cart/Cart';
function App() {

  const [countries, setCountries] = useState([]);
  const [selectedCountry , setSelectedCountry] = useState([]);
  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(res => res.json())
      .then(data => setCountries(data))
      .catch(error => console.log('Error'))
  }, [])

  const handleAddCountry = (country)=>{
     const newCountry = [...selectedCountry , country ]
     setSelectedCountry(newCountry);
  }

 
  return (

    <div className="App">
      <h3>Country loaded : {countries.length}</h3>
      <h4>Country added : {selectedCountry.length}</h4>
      {
        <Cart selectedCountry={selectedCountry}></Cart>
      }
      {
        countries.map(country => <Country country={country} handleAddCountry={handleAddCountry} key={country.alpha3Code}></Country>)
      }
    </div>

  );
}

export default App;
