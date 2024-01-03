import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Image } from 'primereact/image';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';
import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone';

import './Hero.css';

export const Hero = () => {
    return (
        <section className='mt-5'>
            <div
                className="grid container"
            >
                <Image
                    src='assets/images/hero.jpg'
                    className='col-12 lg:col-6'
                    imageClassName='flex mx-auto shadow-8 circular'
                />
                <div
                    className='grid flex-column col-12 lg:col-6 justify-content-center mt-3 md:align-items-center lg:align-items-start lg:mt-0'
                >
                    <p
                        className='weight-bold text-5xl text-center md:text-7xl lg:text-left'
                    >
                        Hola 👋, soy Yesid Sanabria
                    </p>
                    <p
                        className='weight-medium mt-2 text-3xl text-center lg:text-left'
                    >
                        Desarrollador fullstack
                    </p>
                    <div className='contact grid grid-nogutter gap-3 mt-2 justify-content-center lg:justify-content-start'>
                        <a href="https://github.com/Ygsanabria8" target='_blank'>
                            <FontAwesomeIcon
                                icon={faGithub}
                                size='xl'
                                className='cursor-pointer'
                            />
                        </a>
                        <a href="https://www.linkedin.com/in/yesid-sanabria" target='_blank'>
                            <FontAwesomeIcon
                                icon={faLinkedin}
                                size='xl'
                                className='cursor-pointer'
                            />
                        </a>
                        <a href="mailto:yesid2571@hotmail.com">
                            <FontAwesomeIcon
                                icon={faEnvelope}
                                size='xl'
                                className='cursor-pointer'
                            />
                        </a>
                        <a href="tel:+573144651658">
                            <FontAwesomeIcon
                                icon={faPhone}
                                size='xl'
                                className='cursor-pointer'
                            />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
