import React from 'react'
import { InputGroup, FormGroup } from 'react-bootstrap'

const Sidebar = ({ searchChanged }) => {
    let search = '';
    const setSearch = (value) => {
        console.log(value);
        search = value;
    }

    return (
        <div>
            <h3>Search</h3>
            <InputGroup>
                <div className="form-outline" data-mdb-input-init>
                    <input type="search" onChange={(e) => setSearch(e.target.value)} id="form1" className="form-control" placeholder='Search' />
                </div>
                <button type="button" className="btn btn-primary" onClick={() => searchChanged(search)} data-mdb-ripple-init>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-search">
                        <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
                </button>
            </InputGroup>
            <h3 className='mt-5 mb-2'>Recommended Topics</h3>
            <div className="d-flex flex-row flex-wrap"></div>

        </div>
    )
}

export default Sidebar
