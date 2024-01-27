import { faUser } from "@fortawesome/free-solid-svg-icons/faUser"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const About = () => {
    return (
        <article className="mt-8">
            <section className="container">
                <div className="grid grid-nogutter gap-3 align-items-center">
                    <FontAwesomeIcon icon={faUser} size="xl" />
                    <p className="text-4xl weight-semi-bold">Sobre mí</p>
                </div>
                <p className="mt-3 text-xl col-12 lg:col-6">
                    Apasionado por el desarrollo y diseño de software. 
                    He trabajado en proyectos de desarrollo ágil implementando soluciones a 
                    la medida con altos estándares de calidad y tecnologías a la vanguardia.
                    <br/>
                    <br/>
                    Estoy en constante aprendizaje para poder llevar al máximo mis habilidades 
                    al desarrollo e implementación de nuevas tecnologías. 
                    Cuento con habilidades como lo son pensamiento crítico, 
                    comunicación asertiva, autogestión y liderazgo.
                </p>
            </section>
        </article>
    )
}
