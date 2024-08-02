import { NavLink } from "./NavLink"

interface IMenuOverlay {
    links: {
        href: string;
        title: string;
    }[];
}

export const MenuOverlay = ({ links }: IMenuOverlay) => {
    return (
        <div>
            <ul className='flex z-50 flex-col py-4 items-center'>
                {links.map((link) => (
                    <li key={link.title}>
                        <NavLink href={link.href} title={link.title} />
                    </li>
                ))}
            </ul>
        </div>
    )
}
