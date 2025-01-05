import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { Button } from 'react-bootstrap'
import Welcome from './Welcome';
import PostComponent from '@/Components/PostComponent';

export default function Dashboard({ featuredPosts, latestPosts }) {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="container">
                <div className='text-center mt-5 mb-5'>
                    <h1 className="h1">Welcome to ChadBlog</h1>
                    <p className="text-muted">best blog in the universe</p>
                    <Button>Start Reading</Button>
                </div>
                <div className='w-full'>
                    <h2>Featured Posts</h2>
                    <div className="row">
                        {featuredPosts.map(el => (
                            <div className="col-lg-4 col-md-6">
                                <PostComponent title={el.title} publishedAt={el.publishedAt} description={el.body} img={el.image}></PostComponent>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='w-full'>
                    <h2>Latest Posts</h2>
                    <div className="row d-flex flex-row flex-wrap">
                        {latestPosts.map(el => (
                            <div className="col-lg-4 col-md-6">
                                <PostComponent title={el.title} publishedAt={el.published_at} description={el.body} img={el.image}></PostComponent>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </AuthenticatedLayout>
    );
}
