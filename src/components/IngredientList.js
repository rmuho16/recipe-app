import {useContext} from "react"
import {RecipeContext} from "../recipeContext/RecipeContext"
import IngredientItem from "./IngredientItem"
import Loading from "../components/Loading"

const IngredientList = () => {
    const {recipeDetails, loading} = useContext(RecipeContext)
    const ingredientList = !loading && (!recipeDetails.extendedIngredients || recipeDetails.extendedIngredients.length === 0) ? 'No Ingredients' : loading ?
        <Loading/> : (recipeDetails.extendedIngredients.map(ingredient => (
            <IngredientItem key={ingredient.id} ingredient={ingredient}/>
        )))
    return (
        <>
            <h2 className="p-2 mt-2">Ingredients</h2>
            {ingredientList}
        </>
    )
}
export default IngredientList