import Link from 'next/link'

interface INavLink {
    href: string;
    title: string;
}

export const NavLink = ({ href, title }: INavLink) => {
    return (
        <Link href={{ href }} className='block py-2 pl-3 pr-4 text-light-2 sm:text-xl rounded md:p-0 hover:text-white'>
            {title}
        </Link>
    )
}
