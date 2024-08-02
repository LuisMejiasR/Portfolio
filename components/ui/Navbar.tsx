'use client'

import { useState } from 'react'
import Link from 'next/link'
import { NavLink } from './NavLink'
import { MenuOverlay } from './MenuOverlay'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const navLinks = [
    {
        href: '/about',
        title: 'Sobre mi',
    },
    {
        href: '/projects',
        title: 'Proyectos',
    },
    {
        href: '/contact',
        title: 'Contacto',
    },
]

export const Navbar = () => {
    const [navBarOpen, setNavBarOpen] = useState(false)
    return (
        <nav className='fixed top-0 right-0 left-0 z-10 bg-[#121212] bg-opacity-80'>
            <div className='flex flex-wrap items-center justify-between mx-auto px-12 sm:px-24 py-2'>
                <Link href={''} className='text-2xl md:text-4xl text-white font-semibold'>
                    LM
                </Link>
                <div className='mobile-menu block md:hidden'>
                    {
                        !navBarOpen ? (
                            <button className='flex items-center px-3 border py-2 rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'>
                                <Bars3Icon className='h-5 w-5' onClick={() => setNavBarOpen(!navBarOpen)} />
                            </button>
                        ) : (
                            <button className='flex items-center px-3 border py-2 rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'>
                                <XMarkIcon className='h-5 w-5' onClick={() => setNavBarOpen(!navBarOpen)} />
                            </button>
                        )
                    }
                </div>
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
            {
                navBarOpen && (
                    <MenuOverlay links={navLinks} />
                )
            }
        </nav>
    )
}
