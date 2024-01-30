import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';
import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const Footer = () => {
    return (
        <article className="mt-5">
            <section className="container">
                <div className='contact grid grid-nogutter gap-3 mt-2 justify-content-center'>
                    <a href="https://github.com/Ygsanabria8" target='_blank'>
                        <FontAwesomeIcon
                            icon={faGithub}
                            size='lg'
                            className='cursor-pointer'
                            color="var(--text-color)"
                        />
                    </a>
                    <a href="https://www.linkedin.com/in/yesid-sanabria" target='_blank'>
                        <FontAwesomeIcon
                            icon={faLinkedin}
                            size='lg'
                            className='cursor-pointer'
                            color="var(--text-color)"
                        />
                    </a>
                    <a href="mailto:yesid2571@hotmail.com">
                        <FontAwesomeIcon
                            icon={faEnvelope}
                            size='lg'
                            className='cursor-pointer'
                            color="var(--text-color)"
                        />
                    </a>
                    <a href="tel:+573144651658">
                        <FontAwesomeIcon
                            icon={faPhone}
                            size='lg'
                            className='cursor-pointer'
                            color="var(--text-color)"
                        />
                    </a>
                </div>
                <p className="text-sm col-12 text-center">
                    Copyright © | Coded by Yesid Sanabria
                </p>
            </section>
        </article>
    )
}
