import { useEffect, useState } from "react";

import { Card } from "primereact/card";
import { Timeline, TimelinePassThroughOptions, TimelineProps } from "primereact/timeline";
import { useResizeListener } from 'primereact/hooks';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBriefcase } from "@fortawesome/free-solid-svg-icons/faBriefcase"

import { experience, IExperience } from '../../../data/experience';

type TimeLineStyle = {
    display: string;
} & Pick<TimelineProps, "align">

export const Experience = () => {
    const [styleData, setStyleData] = useState({ align: 'alternate', display: 'block' } as TimeLineStyle);

    const [bindWindowResizeListener, unbindWindowResizeListener] = useResizeListener({
        listener: (event) => {
            event.currentTarget?.innerWidth < 800
                ? setStyleData({align: 'left', display: 'none'})
                : setStyleData({align: 'alternate', display: 'block'})
        }
    });

    useEffect(() => {
        bindWindowResizeListener();

        return () => {
            unbindWindowResizeListener();
        };
    }, [bindWindowResizeListener, unbindWindowResizeListener]);

    const timeLineStyle: TimelinePassThroughOptions = {
        content: {
            style: {
                margin: '.5rem 0'
            }
        },
        opposite: {
            style: {
               display: styleData.display
            }
        }
    }

    const titleLayout = (item: IExperience) => {
        return (
            <p>
                <strong>{item.position}</strong>{` | ${item.company}`}
            </p>
        )
    }

    const customizedContent = (item: IExperience, index: number) => {
        return (
            <Card title={() => titleLayout(item)} subTitle={item.date}>
                <ul className={index % 2 === 0 ? '' : 'text-left'}>
                    {
                        item.resume.map((skill: string, index: number) => (
                            <li key={index}>
                                {skill}
                            </li>
                        ))
                    }
                </ul>
            </Card>
        );
    };

    return (
        <article className="mt-8">
            <section className="container">
                <div className="grid grid-nogutter gap-3 align-items-center">
                    <FontAwesomeIcon icon={faBriefcase} size="xl" />
                    <p className="text-4xl weight-semi-bold">Experiencia</p>
                </div>
                <Timeline
                    align={styleData.align}
                    value={experience}
                    content={customizedContent}
                    pt={timeLineStyle}
                />
            </section>
        </article>
    )
}

