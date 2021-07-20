import React from 'react';
import style from './Recipe.module.css'
const Recipe = ({title,calories,image,ingredients,url}) =>{
    return(
        <div>
            <h1 className={style.recipe}>{title}</h1>
            
            <p className={style.caloriecounter}>Calorie Count: {calories}</p>
            <div className={style.imagecontainer}>
                <img className={style.image} src={image} alt={title}/>
            </div>
            <div className={style.linkercontianer}>
                <a className={style.linker} href={url} target="_blank">View Recipe</a>
            </div>
            
        </div>
    )
}
export default Recipe;
/*
<ul>
                <h2 className={style.head}>Ingredients</h2>
                {ingredients.map(ingredient=>(
                    <li className={style.unorderlis}>{ingredient.text}</li>
                ))}
            </ul>
*/