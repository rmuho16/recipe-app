import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from '../pages/Home'
import RecipeDetails from "../pages/RecipeDetails"
import Navbar from "./layout/Navbar"
import SearchResults from '../pages/SearchResults'
import NotFound from "../pages/NotFound"

const App = () => {
  return (
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/recipe-details/:id' element={<RecipeDetails/>}/>
          <Route exact path={'/search-results/:text'} element={<SearchResults/>}/>
          <Route exact path={'/*'} element={<NotFound/>}/>
        </Routes>
      </Router>
  )
}

export default App