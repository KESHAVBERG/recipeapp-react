import React, { useEffect, useState } from 'react';
import Recipie from './component/recipie'
import './App.css'


function App() {

  const [recipes, setrecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [qurey, setQurey] = useState('rice');


  const appId = '84571414';
  const apiKey = 'xxxxxxxxxxx';
  useEffect(() => {
    getrecipie();
  }, [qurey])

 



  const getrecipie = async () => {
    const responce = await fetch(`https://api.edamam.com/search?q=${qurey}&app_id=${appId}&app_key=${apiKey}`);
    const data = await responce.json();
    setrecipes(data.hits);
  }

  const updateSearch = (e)=>{
    setSearch(e.target.value)
  }

  const handleSubmit = (e)=>{
e.preventDefault();
setQurey(search);
setSearch('')
  }
  
  return (
    <div className="app">
      <form onSubmit={handleSubmit} className='search-form'>
        <input className='search-bar' value = {search}  onChange={updateSearch}/>
        <button className='search-submit'>submit</button>
      </form>
      {recipes.map(rec => (
        < Recipie title={rec.recipe.label} calories={rec.recipe.calories} image={rec.recipe.image} key={rec.recipe.labe} 
        ingri = {rec.recipe.ingredients}/>
      ))}
    </div>
  );
}

export default App;
