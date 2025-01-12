import React from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, router } from '@inertiajs/react';
import Sidebar from '@/Components/Sidebar';
import { Container } from 'react-bootstrap';
import PostItem from '@/Components/PostItem';
import Pagination from '@/Components/Pagination';
import Tab from '@/Components/Tab';

const blogIndex = ({ posts, queryParams, categories }) => {
    queryParams = queryParams || {};

    const sortChanged = (sort: string): void => {
        queryParams['sort_mode'] = sort;
        router.get(route('post.index'), queryParams);
    };

    const searchChanged = (search: string): void => {
        queryParams['search'] = search;
        router.get(route('post.index'), queryParams);
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="h3 text-body">
                    Blog
                </h2>
            }
        >

            <Head title="Blog" />

            <Container className='mt-5'>
                <div className="row">
                    <div className="col">
                        <ul className="nav nav-tabs">
                            <li className="nav-item">
                                <Tab sort_mode={queryParams.sort_mode} sortChanged={sortChanged} text='Latest' mode='desc' />
                            </li>
                            <li className="nav-item">
                                <Tab sort_mode={queryParams.sort_mode} sortChanged={sortChanged} text="Oldest" mode='asc' />
                            </li>
                        </ul>
                        {posts.data.length ? (
                            <>
                                {posts.data.map((el, id) => (
                                    <div className="mt-4" key={id}>
                                        <PostItem
                                            slug={el.slug}
                                            readingTime={el.readingTime}
                                            author={el.author}
                                            title={el.title}
                                            publishedAt={el.publishedAt}
                                            body={el.body} img={el.image}
                                            categories={el.categories}
                                            likes={el.likes}
                                        />
                                    </div>
                                ))
                                }
                            </>
                        ) : (<h2 className='text-center mt-5'>No posts yet</h2>)}

                        {posts.links.length > 3 ? (
                            <div className="d-flex flex-column justify-content-center align-items-center mt-3">
                                <Pagination links={posts.links} />
                            </div>
                        ) : <></>}
                    </div>
                    <div className="col-3">
                        <Sidebar categories={categories} searchChanged={searchChanged} />
                    </div>
                </div>
            </Container>

        </AuthenticatedLayout>
    )
}

export default blogIndex;

