import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextAreaInput from '@/Components/TextAreaInput';
import TextInput from '@/Components/TextInput';
import Authenticated from '@/Layouts/AuthenticatedLayout';
import { Link, useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';
import { Form } from 'react-bootstrap';

interface FormProps {
    image: File | undefined;
    title: string;
    slug: string;
    // status: string;
    body: string;
    // deadline: string;
}

const Create = () => {
    const { data, setData, post, errors } = useForm<FormProps>({
        image: undefined,
        title: '',
        slug: '',
        body: '',
        _method: 'POST',
    });

    const onSubmit: FormEventHandler = (
        e: React.ChangeEvent<HTMLInputElement>,
    ) => {
        e.preventDefault();
        post(route('post.store'));
    };

    console.log('hi')

    return (
        <Authenticated
            header={<h2 className="text-gray fs-3">Create new blog</h2>}
        >
            <Form onSubmit={onSubmit} className="rounded p-4 shadow">
                <Form.Group>
                    <InputLabel
                        htmlFor="blog_image_path"
                        value="blog Image"
                    />
                    <TextInput
                        id="blog_image_path"
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
                    <InputLabel htmlFor="blog_title" value="blog Name" />
                    <TextInput
                        id="blog_title"
                        type="text"
                        name="title"
                        value={data.title}
                        isFocused={true}
                        onChange={(e) => setData('title', e.target.value)}
                    />
                    <InputError message={errors.title} />
                </Form.Group>
                <Form.Group className="mt-3">
                    <InputLabel htmlFor="blog_slug" value="blog Slug" />
                    <TextInput
                        id="blog_slug"
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
                        htmlFor="blog_body"
                        value="Body"
                    />
                    <TextAreaInput
                        id="blog_body"
                        name="body"
                        value={data.body}
                        onChange={(e) => setData('body', e.target.value)}
                    />
                    <InputError message={errors.body} />
                </Form.Group>
                <Form.Group className="d-flex mt-4 flex-row-reverse">
                    <input
                        type="submit"
                        className="btn btn-success ms-3"
                        value="Submit"
                    />
                    <Link
                        href={route('dashboard')}
                        className="btn btn-danger"
                    >
                        Cancel
                    </Link>
                </Form.Group>
            </Form>
        </Authenticated>
    );
};

export default Create;
