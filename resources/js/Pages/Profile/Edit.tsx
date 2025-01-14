import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { PageProps } from '@/types';
import { Head, useForm, usePage } from '@inertiajs/react';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';
import Avatar from '@/Components/Avatar';
import InputLabel from '@/Components/InputLabel';
import { Button } from 'react-bootstrap';
import { FormEventHandler } from 'react';
import AvatarComponent from '@/Components/AvatarComponent';

export default function Edit({
    mustVerifyEmail,
    status,
}: PageProps<{ mustVerifyEmail: boolean; status?: string }>) {
    const user = usePage().props.auth.user;
    const { data, setData, post, errors, processing, recentlySuccessful } =
        useForm({
            name: user.name,
            email: user.email,
        });

    const onSubmit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('profile.updateAvatar'));
    };

    return (
        <AuthenticatedLayout
            padding={false}
            header={<h2 className="fs-3">Profile</h2>}
        >
            <Head title="Profile" />

            <div className="py-12">
                <div className="d-flex justify-center">
                    <div className="col-12 col-md-8 mt-4 p-4 shadow">
                        <div className="max-w-xl">
                            <div className="d-flex justify-start">
                                {user.image ? <img className='rounded-circle' src={user.image} style={{ maxWidth: "50px", maxHeight: "50px" }} alt="" />
                                    : <Avatar style={{ width: 100, height: 100 }} />}
                                <div className="ms-3">
                                    <h3>{user.name}</h3>
                                    <p className="description">{user.description}</p>
                                </div>
                            </div>
                            <div className="">
                                <input type="file" className="mb-3 mt-3 form-control mt-1 block w-full" id="avatar"
                                    onChange={(e) => {
                                        if (e.target.files)
                                            return setData('image', e.target.files[0]);
                                    }}
                                />
                                <Button variant='primary' onClick={onSubmit}>Upload</Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-flex flex-column align-items-center">
                    <div className="col-12 col-md-8 mt-4 p-4 shadow">
                        <UpdateProfileInformationForm
                            mustVerifyEmail={mustVerifyEmail}
                            status={status}
                            className="max-w-xl"
                        />
                    </div>

                    <div className="col-12 col-md-8 mt-4 p-4 shadow">
                        <UpdatePasswordForm className="max-w-xl" />
                    </div>

                    <div className="col-12 col-md-8 mt-4 p-4 shadow">
                        <DeleteUserForm className="max-w-xl" />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
