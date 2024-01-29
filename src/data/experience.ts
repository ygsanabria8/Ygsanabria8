export interface IExperience {
    position: string;
    company: string;
    date: string;
    resume: string[];
}

export const experience: IExperience[] = [
    {
        position: 'Fullstack semi senior',
        company: "Siigo",
        date: 'Septiembre 2022 - Actualidad',
        resume: [
            "Definición y diseño de arquitectura bajo Domain Driven Design, CQRS y Event Sourcing con Kafka",
            "Desarrollo web con tecnologías Angular 11+ y React 18",
            "Desarrollo backend bajo tecnología Golang y .Net 5+",
            "Mantenimiento, mejora continua y desarrollo de nuevas funcionalidades."
        ]
    },
    {
        position: 'Dev Lead',
        company: "Double V Partners",
        date: 'Enero 2022 - Septiembre 2022',
        resume: [
            "Definición y diseño de arquitectura bajo Domain Driven Design y CQRS",
            "Desarrollo web con tecnologías Angular 9+ y Flutter",
            "Desarrollo backend bajo tecnología Golang y .Net 3+",
            "Liderazgo técnico y manejo de equipo de desarrollo para el cumplimiento de objetivos.",
            "Supervisión del mantenimiento, mejora continua y desarrollo de nuevas funcionalidades."
        ]
    },
    {
        position: 'Fullstack semi senior',
        company: "Double V Partners",
        date: 'Octubre 2021 - Enero 2022',
        resume: [
            "Desarrollo web con tecnologías Angular 9+ y Flutter",
            "Desarrollo backend bajo tecnología Golang y .Net 3+",
            "Mantenimiento, mejora continua y desarrollo de nuevas funcionalidades."
        ]
    },
    {
        position: 'Fullstack junior',
        company: "Double V Partners",
        date: 'Enero 2021 - Septiembre 2021',
        resume: [
            "Desarrollo web con tecnologías Angular 9+ y Flutter",
            "Mantenimiento y mejora continua de funcionalidades."
        ]
    }
];