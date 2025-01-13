import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import SelectInput from '@/Components/SelectInput';
import TextAreaInput from '@/Components/TextAreaInput';
import TextInput from '@/Components/TextInput';
import Authenticated from '@/Layouts/AuthenticatedLayout';
import { Link, useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';
import { Button, Form } from 'react-bootstrap';

const Edit = ({ article }) => {
    const { data, setData, post, errors } = useForm({
        image: article.image || '',
        title: article.title || '',
        state: article.state || state,
        slug: article.slug || '',
        // status: post.status || '',
        body: article.body || '',
        // deadline: post.deadline || '',
    });

    const onSubmit: FormEventHandler = (e, state: string) => {
        e.preventDefault();
        data.state = state,
            post(route('post.update', article.slug));
    };
    return (
        <Authenticated
            header={
                <h2 className="text-gray fs-3">
                    Edit post {article.title}
                </h2>
            }
        >
            <Form className="rounded p-4 shadow">
                {article.image && (
                    <div style={{ maxWidth: 500 }}>
                        <img src={article.image} alt="" />
                    </div>
                )}
                <Form.Group>
                    <InputLabel
                        htmlFor="post_image"
                        value="post Image"
                    />
                    <TextInput
                        id="post_image"
                        type="file"
                        name="image"
                        onChange={(e) => {
                            if (e.target.files)
                                return setData('image', e.target.files[0]);
                        }}
                    />
                    <InputError message={errors.image} />
                </Form.Group>
                <Form.Group className="mt-3">
                    <InputLabel htmlFor="post_title" value="post title" />
                    <TextInput
                        id="post_title"
                        type="text"
                        name="title"
                        value={data.title}
                        isFocused={true}
                        onChange={(e) => setData('title', e.target.value)}
                    />
                    <InputError message={errors.title} />
                </Form.Group>
                <Form.Group className="mt-3">
                    <InputLabel htmlFor="post_slug" value="post slug" />
                    <TextInput
                        id="post_slug"
                        type="text"
                        name="slug"
                        value={data.slug}
                        isFocused={true}
                        onChange={(e) => setData('slug', e.target.value)}
                    />
                    <InputError message={errors.slug} />
                </Form.Group>
                <Form.Group className="mt-3">
                    <InputLabel
                        htmlFor="post_body"
                        value="Body"
                    />
                    <TextAreaInput
                        id="post_body"
                        name="body"
                        value={data.body}
                        onChange={(e) => setData('body', e.target.value)}
                    />
                    <InputError message={errors.body} />
                </Form.Group>
                <Form.Group className="d-flex mt-4 flex-row-reverse">
                    <Button
                        variant="success"
                        className='ms-3'
                        onClick={(e) => {
                            // state = 'published';
                            // console.log(data);
                            // setData('state', state);
                            // console.log(data);
                            onSubmit(e, 'published');
                            // onSubmit(e);
                        }}
                    >Publish</Button>
                    <Button variant='primary ms-3' onClick={(e) => {
                        onSubmit(e, 'draft');
                    }}>
                        Draft
                    </Button>
                    <Link
                        href={route('post.myblogs')}
                        className="btn btn-danger"
                    >
                        Cancel
                    </Link>
                </Form.Group>
            </Form>
        </Authenticated>
    );
};

export default Edit;
