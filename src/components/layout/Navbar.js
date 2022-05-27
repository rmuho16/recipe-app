import React, {useState} from 'react'
import {FaSearch} from "react-icons/fa";
import {Link, useNavigate} from 'react-router-dom'
import PropTypes from 'prop-types'

function Navbar({title}) {
    const [text, setText] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        if (text) {
            navigate(`/search-results/${text}`)
        }
        setText('')
    }
    const handleText = (e) => {
        setText(e.target.value)
    }
    return (
        <header
            className="d-flex flex-wrap justify-content-around py-3 mb-4 border-bottom">
            <Link to={'/'} className='text-decoration-none'>
                <h4 className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                    {title}
                </h4>
            </Link>
            <form className="d-flex justify-content-center" onSubmit={handleSubmit}>
                <div className="input-group">
                            <span className="input-group-text border-0 bg-light bg-opacity-10">
                                <FaSearch className='text-dark text-opacity-50'/>
                            </span>
                    <input type="text" value={text} className="form-control border-0" onChange={handleText}
                           placeholder="Search"/>
                </div>
            </form>
        </header>
    )
}

Navbar.defaultProps =
    {
        title: 'The CookBook',
    }

Navbar.propTypes =
    {
        title: PropTypes.string,
    }

export default Navbar
