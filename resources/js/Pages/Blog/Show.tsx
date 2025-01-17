import React, { FormEventHandler } from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, router, useForm, usePage } from '@inertiajs/react';
import Sidebar from '@/Components/Sidebar';
import { Button, Card, Container, Form } from 'react-bootstrap';
import articleItem from '@/Components/articleItem';
import Pagination from '@/Components/Pagination';
import Tab from '@/Components/Tab';
import Category from '@/Components/Category';
import { User } from '@/Components/User';
import Comment from '@/Components/Comment';
import AvatarComponent from '@/Components/AvatarComponent';
import { Post } from '@/types';
import Like from '@/Components/LikeButton';

const blogShow = ({ article }: { article: Post }) => {
    const { data, setData, post, errors } = useForm({
        body: '',
        _method: 'POST',
    });

    const user = usePage().props.auth.user;

    const onSubmit: FormEventHandler = (
        e: React.ChangeEvent<HTMLInputElement>,
    ) => {
        e.preventDefault();
        post(route('post.storeComment', article.slug), { preserveScroll: true });
    };
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-gray fs-3">
                    Blog
                </h2>
            }
        >

            <Head title="Blog" />

            <Container>
                <div className="d-flex justify-content-center">
                    <div className="p-2" style={{ maxWidth: '850px' }}>
                        <div className="d-flex justify-content-center col-span-4 article-thumbnail">
                            <img className='w-full img-fluid  my-2 rounded-5' src={article.image} alt="" />
                        </div>
                        <h2 className='mt-2'>{article.title}</h2>
                        <div className="d-flex">
                            <User author={article.author} />
                            <span className='ms-5'>{article.publishedAt}</span>
                        </div>
                        <p className='mt-2'>{article.body}</p>
                        {user ? (
                            <Like slug={article.slug} likes={article.likes} />
                        ) : (
                            <Like slug={article.slug} likes={article.likes} style={{ pointerEvents: 'none' }} />
                        )}
                        <div className="mt-3">
                            {article.categories.map((el, id) => (
                                <Category key={id} title={el.title} bg_color={el.bg_color} text_color={el.text_color} />
                            ))}
                        </div>

                        <section className="p-3 mt-4 border-top">
                            {article.comments.map((el, id) => (
                                <Comment postSlug={post.slug} comment={el} />
                            ))}
                            {user ? (

                                <Card className="py-3 border-0 mt-3" style={{ backgroundColor: "#f8f9fa;" }}>
                                    <Card.Body className="body">
                                        <div className="d-flex flex-start w-100">
                                            <AvatarComponent image={user.image} />
                                            <div data-mdb-input-init className="form-outline w-100 ms-2">
                                                <textarea onChange={(e) => setData('body', e.target.value)} className="form-control" id="textAreaExample" rows={4}></textarea>
                                                <label className="form-label" htmlFor="textAreaExample">Message</label>
                                            </div>
                                        </div>
                                        <div className="float-end mt-2 pt-1">
                                            <Button onClick={onSubmit} type="button" data-mdb-button-init data-mdb-ripple-init className="ms-3">Post comment</Button>
                                        </div>
                                    </Card.Body>
                                </Card>


                            ) : (

                                <h4>In order to submit comments you have to login</h4>

                            )}

                        </section>

                        {/*     <div className="container my-5 py-5"> */}
                        {/*         <div className="row d-flex justify-content-center"> */}
                        {/*             <div className="col-md-12 col-lg-10 col-xl-8"> */}
                        {/*             </div> */}
                        {/*         </div> */}
                        {/*     </div> */}
                        {/* </div> */}


                    </div>
                </div>

            </Container>

        </AuthenticatedLayout >
    )
}

export default blogShow;
