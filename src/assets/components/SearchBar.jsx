import { useState } from "react"
import PropTypes from "prop-types"

export default function SearchBar({ handleSearch }) {
    const [searchKeyword, setSearchKeyword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        handleSearch(searchKeyword);
    }

    const handleChange = (e) => {
        setSearchKeyword(e.target.value);
    }

    return (
        <>
            <div className="container mt-1 py-3 sticky-top">
                <div className="row">
                    <form onSubmit={handleSubmit}>
                        <div className="input-group mb-3">
                            <input 
                                type="text" 
                                value={searchKeyword} 
                                placeholder="Search keyword..." 
                                onChange={handleChange}
                                className="form-control"
                            />
                            <button className="input-group-text"><i className="fa-solid fa-magnifying-glass"></i></button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

SearchBar.propTypes = {
    handleSearch: PropTypes.func.isRequired,
}