import React from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, router, usePage } from '@inertiajs/react';
import Sidebar from '@/Components/Sidebar';
import { Container } from 'react-bootstrap';
import PostItem from '@/Components/PostItem';
import Pagination from '@/Components/Pagination';
import Tab from '@/Components/Tab';
import { CategoryT, Post } from '@/types';
import { LinkProps } from '@/props';

interface data {
    data: Post[];
    links: LinkProps;
}

const blogIndex = ({ posts, queryParams, categories }: { posts: data, queryParams: any, categories: CategoryT[] }) => {
    queryParams = queryParams || {};

    const sortChanged = (sort: string): void => {
        queryParams['sort_mode'] = sort;
        router.get(route('post.index'), queryParams);
    };

    const categoryChanged = (category: string): void => {
        queryParams['category'] = category;
        router.get(route('post.index'), queryParams);
    };

    const searchChanged = (search: string): void => {
        queryParams['search'] = search;
        router.get(route('post.index'), queryParams);
    };

    const resetSearch = () => {
        queryParams = {};
        router.get(route('post.index'), queryParams);
    }

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-gray fs-3">
                    Blog
                </h2>
            }
        >

            <Head title="Blog" />

            <Container className='mt-5'>
                <div className="row">
                    <div className="col-12 col-lg-3">
                        <Sidebar reset={resetSearch} categories={categories} searchChanged={searchChanged} />
                    </div>
                    <div className="col-12 col-lg-9">
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
                                {posts.data.map((el: Post, id) => (
                                    <div className="mt-4" key={id}>
                                        <PostItem
                                            slug={el.slug}
                                            readingTime={el.readingTime}
                                            author={el.author}
                                            title={el.title}
                                            publishedAt={el.publishedAt}
                                            body={el.body}
                                            img={el.image}
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
                </div>
            </Container>

        </AuthenticatedLayout>
    )
}

export default blogIndex;

