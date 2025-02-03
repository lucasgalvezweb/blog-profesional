import Link from 'next/link'
import React from 'react'

interface LinkPrimaryProps {
    text: string;
    redirectTo: string;
}

export const LinkPrimary: React.FC<LinkPrimaryProps> = ({ text, redirectTo }) => {
    return (
        <Link href={redirectTo} className='py-3 px-3 flex place-content-center bg-cc-first rounded-xl text-white font-semibold  w-full text-lg transition-colors duration-300 ease-in-out hover:bg-white hover:text-black'>
            {text}
        </Link>
    )
}
