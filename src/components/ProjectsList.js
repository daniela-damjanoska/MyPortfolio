import React from 'react';
import ProjectCard from './ProjectCard';
import sites from '../data';
import { useNavigate } from 'react-router-dom';

export default function ProjectsList() {
    const navigate = useNavigate();

    return (
        <div className="ProjectList">
            <button onClick={() => navigate('/')}>
                <b>Back</b>
            </button>
            <h1>PROJECTS</h1>
            <div className="ProjectList-wrapper">
                {sites.map(({ id, title, url }) => (
                    <ProjectCard key={id} id={id} title={title} url={url} />
                ))}
            </div>
        </div>
    );
}
