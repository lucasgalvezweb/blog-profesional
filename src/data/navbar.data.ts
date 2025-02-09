export interface listMenuItem {
    name: string;
    route: string;
    scrollTo: string;
    isShown: boolean;
}

export const listMenu:listMenuItem[] = [
    {
        name: 'Inicio',
        route: '',
        scrollTo: "hero",
        isShown: true
    },
    {
        name: 'Blog',
        route: '/blog',
        scrollTo: '',
        isShown: false
    },
    {
        name: 'Porqué trabajar conmigo',
        route: '',
        scrollTo: "whyworkwithme",
        isShown: true
    },
    {
        name: 'Cómo trabajo',
        route: '',
        scrollTo: 'method',
        isShown: true
    },
    {
        name: 'Planes',
        route: '',
        scrollTo: 'plans',
        isShown: true
    },
    {
        name: 'Servicios',
        route: '',
        scrollTo: 'services',
        isShown: true
    },
    {
        name: '+ Sobre mí',
        route: '',
        scrollTo: 'aboutme',
        isShown: true
    },
    {
        name: 'Mini Apps',
        route: '/miniapps',
        scrollTo: '',
        isShown: false
    }

]