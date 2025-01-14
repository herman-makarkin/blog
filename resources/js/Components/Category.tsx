import { Link } from '@inertiajs/react'

const Category = ({ text_color, title, bg_color, user, slug = '' }: {
    title: string,
    text_color: string,
    bg_color: string,
    slug: string,
    user: boolean
}) => {
    return (
        <>
            {slug !== '' ? (
                <Link href={route(user ? 'post.myblogs' : 'post.index', { category: slug })}
                    style={{ color: text_color, backgroundColor: bg_color }} className='me-3 rounded-3 mb-2 pb-1 pt-1 ps-2 pe-2'
                >{title}</Link>
            ) : (
                <button style={{ color: text_color, backgroundColor: bg_color }} className='me-3 rounded-3 mb-2 pb-1 pt-1 ps-2 pe-2'>{title}</button>

            )}

        </>

    );

}
export default Category
