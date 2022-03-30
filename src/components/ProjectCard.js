import React from 'react';

export default function ProjectCard({ id, url, title, desc, tech }) {
    return (
        <figure className="ProjectCard">
            <figcaption>
                <h2>{title}</h2>
                <small>{desc}</small>
                <small>
                    <u>Technologies:</u> {tech}
                </small>
            </figcaption>
            <a href={url} target="_blank"></a>
            <img src={`/sites-img/site-${id}.png`} alt="" />
        </figure>
    );
}
