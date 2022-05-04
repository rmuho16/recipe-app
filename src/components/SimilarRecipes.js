import {useContext} from "react"
import {RecipeContext} from "../recipeContext/RecipeContext"
import SimilarRecipe from "./SimilarRecipe"
import Loading from '../components/Loading'
const SimilarRecipes = () => {
    const {similarRecipes, loading} = useContext(RecipeContext)
    const similarRecipeList = !loading && (!similarRecipes || similarRecipes.length === 0) ? 'No Similar Recipes' : loading ?
        <Loading/> : (similarRecipes.map(similar => (
            <SimilarRecipe key={similar.id} similar={similar}/>
        )))
    return (
        <>
            <h2 className="">Similar Recipes</h2>
            <div className="row align-items-md-stretch">
                {similarRecipeList}
            </div>
        </>
    )
}
export default SimilarRecipes