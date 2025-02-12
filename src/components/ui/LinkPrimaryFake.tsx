import React from 'react'

interface LinkPrimaryFakeProps {
    text: string;
    textColor?: string;
    bgColor?: string;
    hoverTextColor?: string;
    hoverBgColor?: string;
    lgWidth?: string;
}

export const LinkPrimaryFake: React.FC<LinkPrimaryFakeProps> = ({ text, textColor = 'white', bgColor = 'cc-first', hoverTextColor = 'black', hoverBgColor = 'white', lgWidth = '' }) => {
    return (
        <button className={`py-3 px-3 bg-${bgColor} rounded-xl text-${textColor} font-semibold  w-full ${lgWidth} text-lg transition-colors duration-300 ease-in-out hover:bg-${hoverBgColor} hover:text-${hoverTextColor}`}>
            {text}
        </button>
    )
}
