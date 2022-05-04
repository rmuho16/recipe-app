const IngredientItem = ({ingredient}) => {
    return (
        <>
            <div className="d-flex flex-wrap justify-content-around align-items-center py-1 my-1 border-bottom">
                <p className="col-md-4 mb-0 text-muted">{ingredient.name}</p>
                <ul className="nav col-md-4 justify-content-end">
                    <li className="nav-item">
                        <h6 className="nav-link px-1 text-muted">{ingredient.measures.metric.amount}</h6>
                    </li>
                    {(ingredient.measures.metric.unitShort && ingredient.measures.metric.unitShort.length > 0) ?
                        <li className="nav-item">
                            <h6 className="nav-link px-1 text-muted">{ingredient.measures.metric.unitShort}</h6>
                        </li>
                        : null}
                </ul>
            </div>
        </>
    )
}

export default IngredientItem