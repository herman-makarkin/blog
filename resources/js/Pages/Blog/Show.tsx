import React from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, router } from '@inertiajs/react';
import Sidebar from '@/Components/Sidebar';
import { Container } from 'react-bootstrap';
import PostItem from '@/Components/PostItem';
import Pagination from '@/Components/Pagination';
import Tab from '@/Components/Tab';
import Category from '@/Components/Category';

const blogShow = ({ post }) => {
    // console.log(posts);
    // queryParams = queryParams || {};
    //
    // const sortChanged = (sort: string): void => {
    //     queryParams['sort_mode'] = sort;
    //     router.get(route('post.index'), queryParams);
    // };
    //
    // const searchChanged = (search: string): void => {
    //     queryParams['search'] = search;
    //     router.get(route('post.index'), queryParams);
    // };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Blog
                </h2>
            }
        >

            <Head title="Blog" />

            <Container>
                <div className="d-flex justify-content-center">
                    <div className="p-2" style={{ maxWidth: '850px' }}>
                        <div className="d-flex justify-content-center col-span-4 article-thumbnail">
                            <img className='w-full img-fluid  my-2 rounded-5' src={post.image} alt="" />
                        </div>
                        <h2 className='mt-2'>{post.title}</h2>
                        <div className="mt-2 d-flex">
                            <p>{post.author.name} </p>
                            <p className='ms-4'> {post.publishedAt}</p>
                        </div>
                        <p className='mt-2'>{post.body}</p>
                        <div className="categories">
                            {post.categories.map((el, id) => (
                                <Category key={id} title={el.title} bg_color={el.bg_color} text_color={el.text_color} />
                            ))}
                        </div>
                    </div>
                </div>
            </Container>

        </AuthenticatedLayout>
    )
}

export default blogShow;
