import {createContext, useEffect, useReducer, useState} from "react";
// import RecipeReducer from "./RecipeReducer";

export const RecipeContext = createContext()

const RECIPE_TOKEN = process.env.REACT_APP_RECIPE_TOKEN

export const RecipeProvider = ({children}) => {
    // const initialState = {
    //     recipes: [],
    //     similarRecipes: [],
    //     snacks: [],
    //     recipeDetails: {},
    //     results: [],
    //     loading: false
    // }

    const [recipes, setRecipes] = useState([])
    const [similarRecipes, setSimilarRecipes] = useState([])
    const [snacks, setSnacks] = useState([])
    const [recipeDetails, setRecipeDetails] = useState({})
    const [results, setResults] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getPopularRecipes()
        getSnackRecipes()
        setLoading(false)
    }, [])

    // const [state, dispatch] = useReducer(RecipeReducer, initialState)
    //
    // const setLoading = () => {
    //     dispatch({
    //         type: 'SET_LOADING'
    //     })
    // }

    const getPopularRecipes = async () => {
        // setLoading()
        // setLoading(false)
        const res = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${RECIPE_TOKEN}&number=3`)
        const data = await res.json()
        // console.log(data)

        // dispatch({
        //     type: 'GET_POPULAR',
        //     payload: data
        // })
        setRecipes([...data.recipes])
    }

    const getSnackRecipes = async () => {
        // setLoading()
        // setLoading(false)
        const res = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${RECIPE_TOKEN}&type=snack&number=3`, {
            headers: {'Content-Type': 'application/json'}
        })
        const data = await res.json()
        // dispatch({
        //     type: 'GET_SNACKS',
        //     payload: data
        // })
        setSnacks([...data.recipes])
    }

    const getSingleRecipe = async (id) => {
        // setLoading()
        setLoading(false)
        const res = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${RECIPE_TOKEN}`, {
            headers: {
                'Content-Type': 'application/json',
            }
        })
        if (res.status === 404) {
            window.location = '/*'
        } else {
            const data = await res.json()
            // dispatch({
            //     type: 'GET_SINGLE_RECIPE',
            //     payload: data
            // })
            setRecipeDetails(data)
        }
    }

    const getSimilarRecipes = async (id) => {
        // setLoading()
        setLoading(false)
        const res = await fetch(`https://api.spoonacular.com/recipes/${id}/similar?apiKey=${RECIPE_TOKEN}&number=4`, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await res.json()
        // dispatch({
        //     type: 'GET_SIMILAR',
        //     payload: data
        // })
        setSimilarRecipes([...data])
    }
    const getResults = async (text) => {
        // setLoading()
        setLoading(false)
        const res = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${RECIPE_TOKEN}&query=${text}`, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await res.json()
        // dispatch({
        //     type: 'GET_RESULTS',
        //     payload: data
        // })
        setResults([...data.results])

    }
    return (
        <RecipeContext.Provider
            value={{
                // ...state,
                recipes,
                similarRecipes,
                snacks,
                recipeDetails,
                results,
                loading,
                getSingleRecipe,
                getSimilarRecipes,
                getResults
            }}
        >
            {children}
        </RecipeContext.Provider>
    )
}