import { faGear } from "@fortawesome/free-solid-svg-icons/faGear"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Card, CardPassThroughOptions } from "primereact/card";
import { Tooltip } from 'primereact/tooltip';

interface Technology {
    name: string;
    image: string;
}

export const Technologies = () => {

    const cardStyle: CardPassThroughOptions = { content: { style: { padding: 0 } } }
    const data: Technology[] = [
        { name: 'Angular', image: 'assets/images/angular.webp' },
        { name: 'React', image: 'assets/images/react.webp' },
        { name: 'Bootstrap', image: 'assets/images/bootstrap.webp' },
        { name: 'PrimeReact', image: 'assets/images/primereact.webp' },
        { name: 'Golang', image: 'assets/images/golang.webp' },
        { name: '.Net', image: 'assets/images/net.webp' },
        { name: 'TypeScript', image: 'assets/images/typescript.webp' },
        { name: 'Docker', image: 'assets/images/docker.webp' },
        { name: 'Mongo', image: 'assets/images/mongo.webp' },
        { name: 'SQL Server', image: 'assets/images/sqlserver.webp' },
        { name: 'My SQL', image: 'assets/images/mysql.webp' },
    ];

    return (
        <article className="mt-8">
            <section className="container">
                <div className="grid grid-nogutter gap-3 align-items-center">
                    <FontAwesomeIcon icon={faGear} size="xl" />
                    <p className="text-4xl weight-semi-bold">Tecnologias</p>
                </div>
                <div className="grid grid-nogutter gap-5 justify-content-center mt-5">
                    {
                        data.map(technology => (
                            <>
                                <Tooltip target=".card" mouseTrack mouseTrackLeft={10} />
                                <Card
                                    className="grid grid-nogutter justify-content-center shadow-2 card"
                                    data-pr-tooltip={technology.name}
                                    pt={cardStyle}
                                >
                                    <img src={technology.image} alt={technology.name} width="100" height="auto" />
                                </Card>
                            </>
                        ))
                    }
                </div>
            </section>
        </article>
    )
}
