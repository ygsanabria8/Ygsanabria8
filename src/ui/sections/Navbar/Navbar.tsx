
import { faBriefcase } from "@fortawesome/free-solid-svg-icons/faBriefcase";
import { faGear } from "@fortawesome/free-solid-svg-icons/faGear";
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Menubar } from "primereact/menubar"
import { MenuItem } from "primereact/menuitem";

import './Navbar.css';

export const Navbar = () => {

    const items: MenuItem[] = [
        {
            label: 'Sobre mí',
            icon: <FontAwesomeIcon icon={faUser} className="mr-2"/>,
            url: '#about'
        },
        {
            label: 'Tecnologias',
            icon: <FontAwesomeIcon icon={faGear} className="mr-2"/>,
            url: '#technologies'
        },
        {
            label: 'Experiencia',
            icon: <FontAwesomeIcon icon={faBriefcase} className="mr-2"/>,
            url: '#experience'
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
