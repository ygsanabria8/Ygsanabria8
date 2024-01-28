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
                <p className="mt-3 text-l col-12 lg:col-7">
                    Ingeniero en Sistemas y Computación con una trayectoria de más de 3 años especializado en el 
                    desarrollo FullStack y liderazgo técnico en proyectos de aplicaciones móviles y web. 
                    Mi experiencia se centra en el mantenimiento, la mejora continua y el desarrollo de nuevas 
                    funcionalidades en entornos ágiles, donde implemento soluciones a la medida con altos estándares 
                    de calidad y utilizando tecnologías de vanguardia.
                    <br/>
                    <br/>
                    Mi sólido conjunto de habilidades técnicas me ha permitido alcanzar con éxito los objetivos 
                    establecidos en los proyectos en los que he participado. He demostrado liderazgo, habilidades
                     de comunicación efectiva, capacidad para trabajar en equipo, así como una actitud proactiva 
                     y orientada a la resolución de problemas.
                    <br/>
                    <br/>
                    Estoy comprometido con la excelencia técnica y el aprendizaje continuo, siempre buscando innovar 
                    y encontrar soluciones eficientes que impulsen el éxito de los proyectos en los que participo.
                </p>
            </section>
        </article>
    )
}