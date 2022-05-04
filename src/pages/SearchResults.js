import {useContext, useEffect, useState} from "react"
import {RecipeContext} from "../recipeContext/RecipeContext"
import {Link, useParams} from "react-router-dom"
import Card from "react-bootstrap/Card"
import Col from "react-bootstrap/Col"
import {Row} from "react-bootstrap"
import Loading from '../components/Loading'

const SearchResults = () => {
    const params = useParams()
    const [loading, setLoading] = useState(true)
    const {results, getResults} = useContext(RecipeContext)
    useEffect(() => {
        getResults(params.text)
        setLoading(false)
    }, [params.text])

    if (loading) {
        return <Loading/>
    } else if (!loading && (!results || results.length === 0)) {
        return <h2 className='text-center'>No Results</h2>
    } else {
        return (
            <div className='container'>
                <Row xs={1} md={3} className="g-4">
                    {results.map(result => (
                        <Col key={result.id}>
                            <Link to={`/recipe-details/${result.id}`} className='text-decoration-none link-dark'>
                                <Card className='h-100 border-0'>
                                    <Card.Img variant="top" src={result.image}/>
                                    <Card.Body className='d-flex flex-column' style={{minHeight: '110px'}}>
                                        <Card.Title>{result.title}</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Col>
                    ))}
                </Row>
            </div>
        )
    }
}

export default SearchResults