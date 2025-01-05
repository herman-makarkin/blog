import React from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import Sidebar from '@/Components/Sidebar';
import { Container } from 'react-bootstrap';
import PostItem from '@/Components/PostItem';

const blogIndex = ({ posts }) => {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Blog
                </h2>
            }
        >

            <Head title="Blog" />

            <Container className='mt-5'>
                <div className="row">
                    <div className="col">
                        {posts.map(el => (
                            <div className="mt-4">
                                <PostItem
                                    readingTime={el.readingTime}
                                    author={el.author} title={el.title}
                                    publishedAt={el.publishedAt}
                                    body={el.body} img={el.image}
                                />
                            </div>
                        ))}
                    </div>
                    <div className="col-3">
                        <Sidebar></Sidebar>
                    </div>
                </div>
            </Container>

        </AuthenticatedLayout>
    )
}

export default blogIndex;

