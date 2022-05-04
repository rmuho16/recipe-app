import {useContext, useEffect, useState} from "react"
import {RecipeContext} from "../recipeContext/RecipeContext"
import {useParams} from "react-router-dom"
import {AiFillStar} from "react-icons/ai"
import SimilarRecipes from "../components/SimilarRecipes"
import IngredientList from "../components/IngredientList";
import Loading from '../components/Loading'

const RecipeDetails = () => {
    const {recipeDetails, getSingleRecipe, getSimilarRecipes} = useContext(RecipeContext)
    const [loading, setLoading] = useState(true)
    const params = useParams()
    useEffect(() => {
        getSingleRecipe(params.id)
        getSimilarRecipes(params.id)
            .catch(err => console.log(err))
        setLoading(false)
    }, [params.id])
    if (loading) {
        return <Loading/>
    } else
        return (
            <>
                <div className='container text-center'>
                    <h1 className="display-5 fw-bold lh-1 mb-3 ">{recipeDetails.title}</h1>
                    <div className="btn-group text-warning ">
                        <h5><span>
                        <AiFillStar/>
                        <small className="m-2 text-warning">{recipeDetails.healthScore}/100</small>
                    </span></h5>
                    </div>
                </div>
                <div className="container col-xxl-8 px-5 py-5">
                    <div className="row flex-lg-row-reverse g-5 ">
                        <div className="col-10 col-sm-8 col-lg-6">
                            <img src={recipeDetails.image} className="d-block img-fluid rounded-3"
                                 alt={recipeDetails.title}
                                 width="700" height="500" loading="lazy"/>
                        </div>
                        <div className="col-lg-6">
                            <p className="text-reset text-decoration-none link-secondary"
                               dangerouslySetInnerHTML={{__html: recipeDetails.summary}}/>
                        </div>
                    </div>
                    <IngredientList/>
                    {recipeDetails.instructions && recipeDetails.instructions.length > 0 ?
                        <>
                            <h2>Instructions</h2>
                            <div className="p-3 mb-4 bg-light rounded-3">
                                <div className="container-fluid py-1">
                                    <p className="fs-5 text-reset text-decoration-none fw-normal"
                                       dangerouslySetInnerHTML={{__html: recipeDetails.instructions}}/>
                                </div>
                            </div>
                        </>
                        : null}
                    <SimilarRecipes/>
                </div>
            </>
        )
}

export default RecipeDetails