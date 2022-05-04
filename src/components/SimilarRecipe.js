import {Link} from "react-router-dom"
import './App.css'

const SimilarRecipe = ({similar}) => {
    return (
        <>
            <div className="col-md-6 p-1 ">
                <Link to={`/recipe-details/${similar.id}`} className='text-decoration-none'>
                    <div className="card">
                        <div className="card-img h-100 p-5 rounded-3"
                             style={{backgroundImage: `url(https://spoonacular.com/recipeImages/${similar.id}-556x370.jpg)`}}/>
                        <div
                            className="card-img-overlay text-white d-flex justify-content-center align-items-end overlay-dark">
                            <h4 className='text-center'>{similar.title}</h4>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default SimilarRecipe