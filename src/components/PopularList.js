import Row from "react-bootstrap/Row";
import PopularItem from "./PopularItem";
import {useContext} from "react";
import {RecipeContext} from "../recipeContext/RecipeContext";
import Loading from "../components/Loading"

const PopularList = () => {
    const {recipes, loading} = useContext(RecipeContext)
    if (loading) {
        return <Loading/>
    } else {
        return (
            <>
                <h2>Popular</h2>
                <Row xs={1} md={3} className="g-4">
                    {recipes.map(recipe => (
                        <PopularItem key={recipe.id} recipe={recipe}/>
                    ))}
                </Row>
            </>
        )
    }

}

export default PopularList