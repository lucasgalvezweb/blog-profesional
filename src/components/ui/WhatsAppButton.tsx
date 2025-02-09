import React from 'react'
import { global } from '../../helpers/globalText'
import Link from 'next/link'

interface WhatsAppButtonProps {
    wpIcon: string;
    wpNumber: string;
    wpIconWidth?: string;
    wpIconHeight?: string;
    wpText?: string;
}

export const WhatsAppButton:React.FC<WhatsAppButtonProps> = ({ wpIcon, wpNumber = global.phone, wpIconWidth = "45", wpIconHeight="45", wpText = global.wpMessage}) => {
    return (
        <div>
            <Link href={`https://wa.me/${wpNumber}/?text=${wpText}`} target="_blank">
                <img className='hover:scale-150 transition' width={wpIconWidth} height={wpIconHeight} src={wpIcon} alt="WhastApp button" />
            </Link>
        </div>
    )
}
