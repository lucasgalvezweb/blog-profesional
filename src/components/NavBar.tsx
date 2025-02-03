import React, { useState } from 'react'
import Link from 'next/link'
import { listMenuItem } from '@/data/navbar.data'

interface NavBarProps {
    listMenu: listMenuItem[];
}

export const NavBar:React.FC<NavBarProps> = ({listMenu}) => {

    const [mobile, setMobile] = useState(false)

    const handleScroll = (elementId: string) => {
        console.log(elementId)
        if (typeof window !== "undefined" && elementId) {
            const section = document.getElementById(elementId);
            console.log(section)
            if (section) {
                const sectionPosition = section.offsetTop;
                console.log(sectionPosition)
                window.scrollTo({
                    top: sectionPosition,
                    behavior: 'smooth'
                }); 
            }            
        }
    }

    return (
        <header className='h-15 bg-cc-first text-white lg:px-28 py-3 w-full fixed z-50'>
            <nav className='container px-4 md:px-0 mx-auto flex'>
                <div className='flex-auto self-center'>
                    <Link href="/">
                        <img loading='lazy' src='/assets/icons/logo/200px/logo-lucasgalvezconsulting-white.png' width="150" height="auto" alt="Logo principal" />
                    </Link>
                </div>

                <div className='flex-auto hidden lg:block place-self-center'>
                    <ul className='flex gap-2 justify-end'>
                        {
                            listMenu.map(({scrollTo, route, name, isShown}, index: number) => (
                                isShown && (<Link 
                                    onClick={(e) => { if (scrollTo) {
                                        e.preventDefault();
                                        handleScroll(scrollTo);
                                    }}}
                                    key={index} 
                                    href={route} 
                                    className="hover:bg-white hover:text-black rounded-md px-4 py-2 transition duration-300 ease-in-out font-semibold"
                                >{name}</Link>)
                            ))
                        }
                    </ul>
                </div>

                <div className='lg:hidden place-self-center'>
                    <button onClick={() => { setMobile(!mobile) }}>
                        <img loading='lazy' className='mb-[-10px]' width="25px" height="25px" src={mobile ? '/assets/icons/cerrar.png' : '/assets/icons/menu-icon.png'} alt="Icono de menú" />
                    </button>
                </div>
            </nav>

            <div className={`${mobile ? 'block' : 'hidden'} px-4 mt-7 lg:hidden`}>
                <ul className='nav-mobile animate-fade-down animate-duration-700'>
                    {
                        listMenu.map(listItem => (
                            <Link className="mt-4 flex hover:bg-white hover:text-black rounded-md px-4 py-2 mb-4 font-semibold" onClick={() => handleScroll(listItem.scrollTo)} key={listItem.name} href={listItem.route}>{listItem.name}</Link>
                        ))
                        /* TODO: Hide menu when clic outsite the menu */
                    }
                </ul>
            </div>
        </header>
    )
}
