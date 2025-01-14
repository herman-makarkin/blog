import ApplicationLogo from '@/Components/ApplicationLogo';
import NavLink from '@/Components/NavLink';
import { useTheme } from '@/Hooks/theme';
import { Link, usePage } from '@inertiajs/react';
import { PropsWithChildren, ReactNode, useReducer } from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
export default function Authenticated({
    header,
    padding = true,
    children,
}: PropsWithChildren<{ header?: ReactNode; padding?: boolean }>) {
    const user = usePage().props.auth.user;
    const containerStyle = 'mt-3  shadow ' + (padding ? 'p-3 pt-4' : 'p-0');
    const theme = useTheme();

    return (
        <>
            <Navbar
                className="position-fixed z-3 w-100 bg-body border-bottom pe-3 ps-3"
                expand="md"
            >
                <Container>
                    <Navbar.Brand>
                        <Link href="/">
                            <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800 dark:text-gray-200" />
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle
                        aria-controls="basic-navbar-nav"
                        className="border-none"
                    />
                    <Navbar.Collapse
                        id="basic-navbar-nav"
                        className="border-none pb-2"
                    >
                        <Nav className="me-auto">
                            <NavLink
                                href={route('dashboard')}
                                active={route().current('dashboard')}
                            >
                                Dashboard
                            </NavLink>
                            <NavLink
                                href={route('post.index')}
                                active={route().current('post.index')}
                            >
                                Blogs
                            </NavLink>
                            <NavLink
                                href={route('post.myblogs')}
                                active={route().current('post.myblogs')}
                            >
                                my blogs
                            </NavLink>
                            {/* <NavLink */}
                            {/*     href={route('user.index')} */}
                            {/*     active={route().current('user.index')} */}
                            {/* > */}
                            {/*     Users */}
                            {/* </NavLink> */}
                            {/* <NavLink */}
                            {/*     href={route('task.myTasks')} */}
                            {/*     active={route().current('task.myTasks')} */}
                            {/* > */}
                            {/*     My Tasks */}
                            {/* </NavLink> */}
                        </Nav>

                        <NavDropdown
                            title={user.name}
                            id="basic-nav-dropdown"
                            role="button"
                            className="mt-md-0 mt-2"
                        >
                            <NavDropdown.Item href={route('profile.edit')}>
                                Profile
                            </NavDropdown.Item>
                            <NavDropdown.Item as='button'>
                                <Button onClick={theme.toggle}>Toggle theme</Button>
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as="button">
                                <NavLink
                                    href={route('logout')}
                                    active={route().current('/')}
                                    method="post"
                                >
                                    Log Out
                                </NavLink>
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {header && (
                <header className=" mb-4 pt-5 shadow">
                    <div className="d-flex justify-between d-flex container">
                        <div className="mt-5 pb-4 text-primary">{header}</div>
                        <div className="mt-5">
                            <Link href={route('post.create')} className='btn btn-success'>new blog</Link>
                        </div>
                    </div>
                </header>
            )}

            <Container className={containerStyle}>{children}</Container>
        </>
    );
}
