import './App.css';
import Recipe from './Recipe';
import React,{useEffect,useState} from 'react';


const App = () =>{

  const APP_ID = '69cd88cb'
  const APP_KEY = '27ce889aad0370e7f623678db57809dd';
  const exampleReq =`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`

  const [recipes,setRecipes] = useState([]);
  const [search,setSearch] = useState('')
  const [query,setQuery] = useState('chicken')

  useEffect(()=>{
   getRecipes();
  },[query])

  const getRecipes = async () =>{
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data =await response.json();
    setRecipes(data.hits)
    //console.log(data.hits.length)
    console.log(data.hits[0])
    //for(let i=0;i<data.hits.length;i++){
    //  console.log(data.hits[i].recipe)
    //}
  }

  const updateSearch = e =>{
    setSearch(e.target.value);
    //console.log(search)
  }

  const getSearch = e =>{
    e.preventDefault();
    setQuery(search)
    setSearch('')
  }

  return(
    <div className = "App">
      <div className="headerss">
        <h1>JAY'S RECIPE APP</h1>
      </div>
      <form className="search-form" onSubmit={getSearch}>
        
        <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
        <button className="search-button" type="submit">Search</button>
      </form>
      <div className="cont">
        <div className="output">
        {recipes.map(recipe=>(
          <Recipe key={recipe.recipe.label} title={recipe.recipe.label} calories={recipe.recipe.calories} image={recipe.recipe.image} ingredients={recipe.recipe.ingredients} url={recipe.recipe.url}/>))}
        </div>
      </div>
      
      <footer className="footerss">
        <p>All Rights Reserved</p>
        <p>&#169; 2021 Nirmith Victor D'Almeida</p>
      </footer>
    </div>
  );
}
export default App;
//<h1 onClick={()=>setCounter(counter+1)}>{counter}</h1>