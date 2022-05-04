const RecipeReducer = (state, action) => {
    switch (action.type) {
        case 'GET_POPULAR':
            return {
                ...state,
                recipes: [...action.payload.recipes],
                loading: false
            }
        case 'GET_SNACKS':
            return {
                ...state,
                snacks: [...action.payload.recipes],
                loading: false
            }
        case 'GET_SINGLE_RECIPE':
            return {
                recipeDetails: action.payload,
                loading: false
            }

        case 'GET_SIMILAR':
            return {
                ...state,
                similarRecipes: [...action.payload],
                loading: false
            }
        case 'GET_RESULTS':
            return {
                ...state,
                results: [...action.payload.results],
                loading: false
            }
        case 'SET_LOADING':
            return {
                ...state,
                loading: true
            }
        default:
            return state
    }
}

export default RecipeReducer