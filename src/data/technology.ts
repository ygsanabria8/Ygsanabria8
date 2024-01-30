export  interface ITechnology {
    id: number;
    name: string;
    image: string;
}

export const technologies: ITechnology[] = [
    { id: 1, name: 'Angular', image: 'assets/images/angular.webp' },
    { id: 2, name: 'React', image: 'assets/images/react.webp' },
    { id: 3, name: 'Bootstrap', image: 'assets/images/bootstrap.webp' },
    { id: 4, name: 'PrimeReact', image: 'assets/images/primereact.webp' },
    { id: 5, name: 'Golang', image: 'assets/images/golang.webp' },
    { id: 6, name: '.Net', image: 'assets/images/net.webp' },
    { id: 7, name: 'TypeScript', image: 'assets/images/typescript.webp' },
    { id: 8, name: 'Docker', image: 'assets/images/docker.webp' },
    { id: 9, name: 'Mongo', image: 'assets/images/mongo.webp' },
    { id: 10, name: 'SQL Server', image: 'assets/images/sqlserver.webp' },
    { id: 11, name: 'My SQL', image: 'assets/images/mysql.webp' },
];