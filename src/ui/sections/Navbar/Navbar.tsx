
import { faBriefcase } from "@fortawesome/free-solid-svg-icons/faBriefcase";
import { faGear } from "@fortawesome/free-solid-svg-icons/faGear";
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Menubar } from "primereact/menubar"
import { MenuItem } from "primereact/menuitem";

export const Navbar = () => {

    const items: MenuItem[] = [
        {
            label: 'Sobre mí',
            icon: <FontAwesomeIcon icon={faUser} color="var(--text-color)" className="mr-2" />,
            url: '#about'
        },
        {
            label: 'Tecnologías',
            icon: <FontAwesomeIcon icon={faGear} color="var(--text-color)" className="mr-2" />,
            url: '#technologies'
        },
        {
            label: 'Experiencia',
            icon: <FontAwesomeIcon icon={faBriefcase} color="var(--text-color)" className="mr-2" />,
            url: '#experience',
        }
    ];

    const logo =
        (
            <a 
                className="text-4xl font-bold cursor-pointer no-underline logo"
                href="#"
            >
                {"<YS/>"}
            </a>
        )

    return (
        <nav className="shadow-3">
            <div
                className="container"
            >
                <Menubar
                    start={logo}
                    model={items}
                    className="m-2 justify-content-between border-none"
                />
            </div>
        </nav>
    )
}
