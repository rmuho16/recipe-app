import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import {RiTimerFill} from 'react-icons/ri'
import {Link} from "react-router-dom";
import {AiFillStar} from "react-icons/ai";

const PopularItem = ({recipe}) => {
    return (
        <>
            <Col>
                <Link to={`/recipe-details/${recipe.id}`} className='text-decoration-none link-dark'>
                    <Card className='h-100  border-0' >
                        <Card.Img variant="top" src={recipe.image}/>
                        <Card.Body className='d-flex flex-column' style={{minHeight:'110px'}}>
                            <Card.Title>{recipe.title}</Card.Title>
                            <div className="d-flex justify-content-between">
                                <div className="btn-group ">
                                    {recipe.cuisines.length > 0 ?
                                        <small className="text-dark text-opacity-25">#{recipe.cuisines}</small> : null}
                                </div>
                            </div>
                        </Card.Body>
                        <Card.Body className='pt-0'>
                            <div className="d-flex justify-content-between">
                                <div className="btn-group text-warning">
                                    <h5><span>
                                    <AiFillStar/>
                                    <small className="m-2 text-warning">{recipe.spoonacularScore}/100</small>
                                </span></h5>
                                </div>
                                <div className="btn-group ">
                                    <h5><span className="badge bg-light">
                                    <RiTimerFill className='m-1 text-dark text-opacity-50'/>
                                    <small className="text-dark text-opacity-25">{recipe.readyInMinutes} mins</small>
                                </span></h5>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Link>
            </Col>
        </>
    )
}
export default PopularItem