
import { faBriefcase } from "@fortawesome/free-solid-svg-icons/faBriefcase";
import { faGear } from "@fortawesome/free-solid-svg-icons/faGear";
import { faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons/faScrewdriverWrench";
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Menubar } from "primereact/menubar"
import { MenuItem } from "primereact/menuitem";

export const Navbar = () => {

    const items: MenuItem[] = [
        {
            label: 'Sobre mí',
            icon: <FontAwesomeIcon icon={faUser} className="mr-2"/>
        },
        {
            label: 'Tecnologias',
            icon: <FontAwesomeIcon icon={faGear} className="mr-2"/>
        },
        {
            label: 'Experiencia',
            icon: <FontAwesomeIcon icon={faBriefcase} className="mr-2"/>,

        },
        {
            label: 'Proyectos',
            icon: <FontAwesomeIcon icon={faScrewdriverWrench} className="mr-2"/>
        }
    ];

    const logo = <p className="m-2 text-4xl font-bold">{"<YS/>"}</p>

    return (
        <nav style={{ background: '#f9fafb' }}>
            <div
                className="container"
            >
                <Menubar
                    start={logo}
                    model={items}
                    className="justify-content-between border-none"
                />
            </div>
        </nav>
    )
}
