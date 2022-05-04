import {useContext} from "react";
import {RecipeContext} from "../recipeContext/RecipeContext";
import SnackItem from "./SnackItem";
import Loading from "../components/Loading"
import {Row} from 'react-bootstrap'

const SnackList = () => {
    const {snacks, loading} = useContext(RecipeContext)
    if (loading) {
        return <Loading/>
    } else {
        return (
            <>
                <h2>Snacks</h2>
                <Row xs={1} md={3} className="g-4">
                    {snacks.map(snack => (
                        <SnackItem key={snack.id} snack={snack}/>
                    ))}
                </Row>
            </>
        )
    }
}
export default SnackList