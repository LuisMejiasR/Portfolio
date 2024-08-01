import Link from 'next/link'
import { NavLink } from './NavLink'

const navLinks = [
    {
        href: '/about',
        title: 'About',
    },
    {
        href: '/projects',
        title: 'Projects',
    },
    {
        href: '/contact',
        title: 'Contact',
    },
]

export const Navbar = () => {
    return (
        <nav>
            <div className='flex flex-wrap items-center justify-between mx-auto py-8 px-12'>
                <Link href={''} className='text-2xl md:text-4xl text-white font-semibold'>
                    LOGO
                </Link>
                <div className='menu hidden md:block md:w-auto' id='navbar'>
                    <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8'>
                        {navLinks.map((link) => (
                            <li key={link.title}>
                                <NavLink href={link.href} title={link.title} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}
