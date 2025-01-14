import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { Button } from 'react-bootstrap'
import Welcome from './Welcome';
import PostComponent from '@/Components/PostComponent';

export default function Dashboard({ featuredPosts, latestPosts }) {

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-gray fs-3">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="container">
                <div className='text-center mt-5 mb-5'>
                    <h1 className="h1">Welcome to CascadeBlog</h1>
                    <p className="text-muted">The Best blog in the universe</p>
                </div>
                <div className='w-full'>
                    <h2>Featured Posts</h2>
                    <div className="row">
                        {featuredPosts.map(el => (
                            <div className="col-lg-4 col-md-6 mt-3">
                                <PostComponent slug={el.slug} title={el.title} publishedAt={el.publishedAt} description={el.body} img={el.image} categories={el.categories}></PostComponent>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='w-full mt-5'>
                    <h2>Latest Posts</h2>
                    <div className="row d-flex flex-row flex-wrap">
                        {latestPosts.map(el => (
                            <div className="col-lg-4 col-md-6 mt-3">
                                <PostComponent slug={el.slug} title={el.title} publishedAt={el.publishedAt} description={el.body} img={el.image} categories={el.categories}></PostComponent>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </AuthenticatedLayout>
    );
}
