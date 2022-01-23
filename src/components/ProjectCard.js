import React from 'react';

export default function ProjectCard({ id, url, title }) {
    return (
        <a className="ProjectCard" href={url} target="_blank">
            <div className="ProjectCard-inner">
                <img src={`/sites-img/site-${id}.png`} />
                <p className="hoverDesign">
                    <b>{title}</b>
                </p>
            </div>
        </a>
    );
}
