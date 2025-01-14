import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import { PropsWithChildren } from 'react';
import { Container } from 'react-bootstrap';

export default function Guest({ children }: PropsWithChildren) {
    return (
        <Container className=" d-flex p-0 justify-content-center align-items-center" style={{ height: '100vh' }}>
            <div className="shadow m-0 p-5 w-full" style={{ maxWidth: 500 }}>
                {children}
            </div>
        </Container>
    );
}
