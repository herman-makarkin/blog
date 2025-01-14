import { Link } from '@inertiajs/react';
import React from 'react'
import { InputGroup, FormGroup, Button } from 'react-bootstrap'
import Category from './Category';
import { CategoryT } from '@/types';

const Sidebar = ({ stateChanged = false, reset, searchChanged, categories, user = false }: {
    reset: () => void,
    searchChanged: (x: string) => void,
    categories: CategoryT[],
    user: boolean,
    sortStates: () => void | boolean,
}) => {
    let search = '';
    const setSearch = (value) => {
        search = value;
    }

    return (
        <div>
            <h3>Search</h3>
            <div>
                <div className="form-outline" data-mdb-input-init>
                    <input type="search" onChange={(e) => setSearch(e.target.value)} id="form1" className="form-control" placeholder='Search' />
                </div>
                <Button variant="primary" type="button" className="mt-3 " onClick={() => searchChanged(search)} data-mdb-ripple-init>
                    Search
                </Button>
            </div>
            <h3 className='mt-5 mb-2'>Recommended Topics</h3>
            <div className="d-flex flex-wrap">
                {categories.map((el, id) => (
                    <Category user={user} slug={el.slug} key={id} bg_color={el.bg_color} text_color={el.text_color} title={el.title} />
                ))}
            </div>
            {stateChanged && (
                <div className="d-flex flex-wrap mt-4">
                    <Button variant="danger" onClick={() => stateChanged('draft')}>Draft</Button>
                    <Button variant="success" className='ms-3' onClick={() => stateChanged('published')}>Published</Button>
                </div>
            )}
            <div className="d-flex flex-row flex-wrap">
                <Button variant="primary" className="mt-5" onClick={() => reset()}>Clear Search</Button>
            </div>
        </div>
    )
}

export default Sidebar
