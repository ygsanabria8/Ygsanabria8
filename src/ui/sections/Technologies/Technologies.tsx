import { faGear } from "@fortawesome/free-solid-svg-icons/faGear"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Card, CardPassThroughOptions } from "primereact/card";
import { Tooltip } from 'primereact/tooltip';
import { ITechnology, technologies } from "../../../data/technology";

export const Technologies = () => {

    const cardStyle: CardPassThroughOptions = { content: { style: { padding: 0 } } }

    return (
        <article id="technologies" className="mt-8">
            <section className="container">
                <div className="grid grid-nogutter gap-3 align-items-center">
                    <FontAwesomeIcon icon={faGear} size="xl" />
                    <p className="text-4xl weight-semi-bold">Tecnologias</p>
                </div>
                <div className="grid grid-nogutter gap-5 justify-content-center mt-5">
                    {
                        technologies.map((technology: ITechnology) => (
                            <div key={technology.id}>
                                <Tooltip target=".card" mouseTrack mouseTrackLeft={10}/>
                                <Card
                                    className="grid grid-nogutter justify-content-center shadow-2 card"
                                    data-pr-tooltip={technology.name}
                                    pt={cardStyle}
                                >
                                    <img src={technology.image} alt={technology.name} width="100" height="auto"/>
                                </Card>
                            </div>
                        ))
                    }
                </div>
            </section>
        </article>
    )
}
